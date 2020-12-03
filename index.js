// originally pulled out of simple-peer

function getGlobal() {
  return typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : undefined
}

function getBrowserRTC() {
  var GLOBAL = getGlobal()

  if (!GLOBAL) return null
  var wrtc = {
    RTCPeerConnection:
      GLOBAL.RTCPeerConnection ||
      GLOBAL.mozRTCPeerConnection ||
      GLOBAL.webkitRTCPeerConnection,
    RTCSessionDescription:
      GLOBAL.RTCSessionDescription ||
      GLOBAL.mozRTCSessionDescription ||
      GLOBAL.webkitRTCSessionDescription,
    RTCIceCandidate:
      GLOBAL.RTCIceCandidate ||
      GLOBAL.mozRTCIceCandidate ||
      GLOBAL.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}

module.exports = getBrowserRTC
