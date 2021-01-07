// miniprogram/pages/home/index.js
import {
  whereQuery,
  addData,
  upDateData
} from '../../utils/dbAction'

import {findNearMonday} from '../../utils/date'
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    t: [],
    lastCurrent: 0,
  },

  defaultPageData() {
    return{
      subDay: {}, //选中的预约日信息
      userInfo: {}, //当前用户信息
      subInfo: {
        date: null,
        clock: null,
        style: null,
      },
      dayIndex: -1, //选中的一周的哪一天
      goSettingNavPage: 1,
      selectTimeIndex: -1, //预约入时间段状态
      weekSubLimited: 1 //每周每人可预约上限
    }
  },
  initPageData(){
    this.setData(this.defaultPageData())
  },


  subDay(e) { //选择星期几
    this.setData({
      subDay: this.data.timeQuantum[e.currentTarget.dataset.index],
      dayIndex: e.currentTarget.dataset.index
    })
  },
  checkUserLogin(e) { //点击预约前需要保证是在登录状态
    // console.log(e)
    let msg = e.detail.errMsg.split('getUserInfo:')[1];
    if (msg !== 'ok') {

    } else if (this.data.selectTimeIndex === -1) { //用户信息存在,但未选择时间段
      wx.showToast({
        title: '请选择预约时间段',
        icon: 'none'
      })
    } else { //用户信息存在,刷新用户信息
      this.refreshUserInfo(e.detail.userInfo)
    }
  },
  refreshUserInfo(userInfo) {
    whereQuery('user', {
      _openid: app.globalData._openid
    }).then(r => {
      //  console.log(r)
      this.data.userInfo = userInfo;
      if (r.length) { //当已存在该用户信息,更新
        return upDateData('user', r[0]._id, {
          userInfo: userInfo
        })
      } else { //未存在则新增该用户信息
        return addData('user', {
          userInfo: userInfo
        })
      }
    }).then((r) => {
      this.confirmSub()
    })
  },
  confirmSub() { //确认预约
    this.data.subDay.capacity--; // 预约日数量减少
    let subInfo = {
      date: this.data.subDay.date,
      clock: this.data.subDay.dayPlan[this.data.selectTimeIndex].time,
    }
    this.data.subDay.customers.push({ //预约者信息
      ...this.data.userInfo,
      subInfo,
      _openid: this.data._openid, //预约用户id
      subDayTimeIndex: this.data.selectTimeIndex, //预约时间段
      subDayIndex: this.data.dayIndex, //预约日
      order: this.data.subDay.customers.length //预约者顺序 便于后续删除
    })
    this.data.subDay.dayPlan[this.data.selectTimeIndex].capacity--; //预约时间段数量减少
    this.data.timeQuantum[this.data.dayIndex] = this.data.subDay; //预约成功后刷新信息
    this.setData({
      timeQuantum: this.data.timeQuantum
    })
    upDateData('subscribe', this.data._id, {
      timeQuantum: this.data.timeQuantum
    })
    this.filter()
  },

  selectTime(e) { //选择当天准确日期
    this.setData({
      selectTimeIndex: e.currentTarget.dataset.index,
    })
  },

  async init() {
    this.initPageData() //页面数据初始化
    await this.queryData()
    this.getOpenid().then((r) => {
      wx.hideLoading()
      this.setData({
        _openid: r,
        todayTimestamp: new Date().getTime()
      })
      this.filter()
    })
  },

  queryData() {
    return new Promise((reslove, reject) => {
      const _ = db.command;
      const {previousTimestamp,previousDate} = findNearMonday(new Date().getTime())

    console.log(previousTimestamp,previousDate)
      db.collection('subscribe').where({
        startTimestamp: _.gte(previousTimestamp)
      }).limit(3).get({
        success: res => {
          res.data = res.data.map(t => {
            return {
              ...t,
              ...this.defaultPageData()
            }
          })
          let index = this.data.lastCurrent; //修复因切换导致默认加载第一项预约日期导致的bug
          this.setData({
            t: res.data,
            timeQuantum: res.data[index].timeQuantum,
            _id: res.data[index]._id,
            startTime: res.data[index].startTime,
            endTime: res.data[index].endTime,
          })
          reslove()
        }
      })
    })
  },

  getOpenid() { //获取openid
    return new Promise((reslove, reject) => {
      function step() {
        setTimeout(() => {
          if (app.globalData._openid) {
            reslove(app.globalData._openid)
          } else {
            step()
          }
        }, 10);
      }
      step()
    })
  },

  filter() { //筛选,判断是否已达到本周预约上限
    this.data.weekSubLimited = 1;
    this.data.timeQuantum.forEach((day) => {
      day.customers.forEach((v) => {
        console.log(this.data._openid, 'openid')
        if (v._openid === this.data._openid) {
          this.data.subUserInfo = v;
          this.data.weekSubLimited--;
        }
      })
    })
    this.setData({
      subUserInfo: this.data.subUserInfo,
      timeQuantum: this.data.timeQuantum,
      weekSubLimited: this.data.weekSubLimited
    })
  },

  showCancelModal() {
    wx.showModal({
      title: '提示',
      content: '是否取消预约',
      cancelColor: 'grey',
      success: res => {
        if (res.confirm) {
          this.cancelSub()
        } else {

        }
      }
    })
  },
  cancelSub() { //取消预约
    let sUI = this.data.subUserInfo;
    let tQ = this.data.timeQuantum;
    tQ[sUI.subDayIndex].capacity++; //预约日余量
    tQ[sUI.subDayIndex].customers.splice(sUI.order, 1); //删除预约者
    tQ[sUI.subDayIndex].dayPlan[sUI.subDayTimeIndex].capacity++; //预约时间段余量

    upDateData('subscribe', this.data._id, {
      timeQuantum: tQ
    })
    this.setData({
      timeQuantum: tQ
    })
    this.filter()
  },

  gotoSettingNavPage() {
    if (this.data.goSettingNavPage) {
      this.data.goSettingNavPage--
    } else {
      wx.navigateTo({
        url: '/pages/navigation/index',
      })
    }
  },

  swiperChange({
    detail
  }) {

    for (const key in this.data) { //保存页面属性
      if (/^(t|__webviewId__|_openid|lastCurrent)$/.test(key)) continue;
      this.data.t[this.data.lastCurrent][key] = this.data[key]
      // console.log(key, this.data[key])
    }
    this.data.lastCurrent = detail.current;

    // this.initPageData()

    for (const key in this.data) { //更新页面信息为下一页
      if (/^(t|__webviewId__|_openid|lastCurrent)$/.test(key)) continue;
      this.data[key] = this.data.t[detail.current][key]
    }
    this.setData(this.data)
    this.filter()
  },
  switchWeek() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载数据中',
    })
    this.init()

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})