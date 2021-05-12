// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  const g = typeof globalThis === 'undefined' ? window : globalThis;
  var wrtc = {
    RTCPeerConnection: g.RTCPeerConnection || g.mozRTCPeerConnection || g.webkitRTCPeerConnection,
    RTCSessionDescription: g.RTCSessionDescription || g.mozRTCSessionDescription || g.webkitRTCSessionDescription,
    RTCIceCandidate: g.RTCIceCandidate || g.mozRTCIceCandidate || g.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}
