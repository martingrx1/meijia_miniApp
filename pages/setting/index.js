// miniprogram/pages/setting/index.js
import {
  whereQuery,
  addData,
  upDateData
} from '../../utils/dbAction'
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempImages: [],
    introText: '',
    order:0,
  },

  introInput({
    detail
  }) {
    this.setData({
      introText: detail.value
    })
  },

  introInput({
    detail
  }) {
    this.setData({
      order: detail.value
    })
  },

  chooseImage() {
    wx.chooseImage({
      count: 4,
      success: (result) => {
        this.setData({
          tempImages: this.data.tempImages.concat(result.tempFilePaths)
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  resetChoose() {
    this.setData({
      tempImages: []
    })
  },
  uploadProduct() {
    let tempImages = this.data.tempImages;
    wx.showModal({
      content: '确定上传了嘛~',
      title: '提醒',
      success: (result) => {
        if (result.confirm) {
          wx.cloud.uploadFile({
            cloudPath: './products/' + new Date().getTime() + '.jpg',
            filePath: tempImages[tempImages.length - 1],
            success: res => {
              const _ = db.command;
              upDateData('products', 'first', {
                products: _.push({
                    introText: this.data.introText,
                    imgUrl: res.fileID,
                    order:this.data.order
                  }
                )
              }).then((res) => {
                wx.showToast({
                  title: '上传成功',
                })
                this.resetChoose();
              }, err => {
                console.log(err)
              })
            }
          })
        }
      },
    })
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