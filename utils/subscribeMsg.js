import APICONF from '../env/api'
import APPINFO from '../env/appInfo'


const subscribeMsgTypeMap = {
  'BRZ3zBklNX9_agABhLSYpCCO48JhaVqPCFQpb8WXzws': ['name7', 'date2', 'time23', 'thing3', 'thing11', 'thing4'],
  'NlKHLhDJnV5XHWFrxD-shCIeON0U30eEl7qlyey_cQE':['thing10','thing6','date2','thing4']

}

function subscribeAppMsg(tmplIds = []) {
  wx.requestSubscribeMessage({
    tmplIds: tmplIds,
    subscribe: true,
    success(res) {
      console.log("----subscribeAppMsg----success", res);
    },
    fail(res) {
      console.log("----subscribeAppMsg----fail", res);
    }
  });
}

function createSubscribeMsgContent(content,template_id) {
  let subscribeMsgKey = subscribeMsgTypeMap[template_id];
  return content.reduce((pre, cur, i) => {
    pre[subscribeMsgKey[i]] = {
      value: cur
    }
    return pre;
  }, {})
}

function getAccessToken() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: APICONF.ACCESS_TOKEN_API + `appid=${APPINFO.APPID}&secret=${APPINFO.SECRET}`,
      success: (r) => resolve(r.data.access_token),
      fail: reject
    })
  })
}

function sendSubscribeRequest(access_token,subscribeConf,touser){
  wx.request({
    method: 'POST',
    url: APICONF.SEND_SUBSCRIBEMSG_API + `access_token=${access_token}`,
    data: {
      page: subscribeConf.page || 'index',
      template_id: subscribeConf.template_id,
      touser: touser,
      data:createSubscribeMsgContent(subscribeConf.content,subscribeConf.template_id)  
    },
    success:console.log,
    fail: err => {
      throw new Error(err)
    }
  })
}


async function sendSubscribeMsg(subscribeConf) {
  try {
    let access_token = await getAccessToken();
    subscribeConf.tousers.map(user=>{
      sendSubscribeRequest(access_token,subscribeConf,user)
    })

  } catch (err) {
    console.log(err);
  }
}

export {
  sendSubscribeMsg, //向用户发送订阅消息
  subscribeAppMsg //询问用户订阅消息
}