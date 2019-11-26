const U = window.navigator.userAgent

// IphonX以上机型
function isIphonX () {
  let isIos = !!U.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  // iPhone X、iPhone XS
  var isIPhoneX = isIos && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812
  // iPhone XS Max
  var isIPhoneXSMax = isIos && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896
  // iPhone XR
  var isIPhoneXR = isIos && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896
  return isIPhoneX || isIPhoneXR || isIPhoneXSMax
}

// 移动操作系统
let isAndroid = U.indexOf('Android') > -1 || U.indexOf('Adr') > -1 // android终端
let isiOS = !!U.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

// 检测浏览器
let isWX = U.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
let isZFB = U.toLowerCase().match(/Alipay/i) == 'alipay'

// 是否PC端
function IsPC() {
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
     if (U.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
     }
  }
  return flag;
}

export default {
  isIphonX: isIphonX(),
  isPC: IsPC(),
  isAndroid,
  isiOS,
  isWX,
  isZFB,
}