import {
  ENV
} from './index'


const QQ_CONF = {
  ACCESS_TOKEN_API :`https://api.q.qq.com/api/getToken?grant_type=client_credential&`,
  END_SUBSCRIBEMSG_API : `https://api.q.qq.com/api/json/subscribe/SendSubscriptionMessage?`
}


const WX_CONF = {
  ACCESS_TOKEN_API : `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&`,
  SEND_SUBSCRIBEMSG_API : `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?`

}




export default ENV === 'WX' ? WX_CONF : QQ_CONF;