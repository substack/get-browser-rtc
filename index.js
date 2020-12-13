// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  let GLOBAL;
  if (typeof globalThis !== 'undefined') GLOBAL = globalThis
  else if (typeof window !== 'undefined') GLOBAL = window
  else if (typeof global !== 'undefined') GLOBAL = global
  else return null;
  var wrtc = {
    RTCPeerConnection: GLOBAL.RTCPeerConnection || GLOBAL.mozRTCPeerConnection || GLOBAL.webkitRTCPeerConnection,
    RTCSessionDescription: GLOBAL.RTCSessionDescription || GLOBAL.mozRTCSessionDescription || GLOBAL.webkitRTCSessionDescription,
    RTCIceCandidate: GLOBAL.RTCIceCandidate || GLOBAL.mozRTCIceCandidate || GLOBAL.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}
