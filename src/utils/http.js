import {BASIC_CONFIG} from '@/config/index'
import fetch from '@/utils/request'
import {getToken} from "./utils"
let QS = require('qs')

let http = {}

http['get'] = (_url, _params) => {
  params.orgCode = BASIC_CONFIG.orgCode;
  params.token = getToken();

  let _dataStr = ''
  if(JSON.stringify(_params) != '{}'){
    _dataStr = '?' + QS.stringify(_params)
  }

  return fetch({
    url: _url + _dataStr,
    method: 'get',
    params: _params
  })
}

http['post'] = (_url, _params) => {
  params.orgCode = BASIC_CONFIG.orgCode;
  params.token = getToken();

  return fetch({
    url: _url,
    method: 'post',
    data:QS.stringify(_params)
  })
}


export {
  http
}
