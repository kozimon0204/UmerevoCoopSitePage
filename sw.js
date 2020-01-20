importScripts('/UmerevoCoopSitePage/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/UmerevoCoopSitePage/_nuxt/1f7e51a729ef3990b28c.js",
    "revision": "c9800e4a8fd2491a5213f8f88185bfc0"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/2edf9a722ae66a12ebfb.js",
    "revision": "7c093273a1a761e57106732a90a913dd"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/30313911da0ac496b1a3.js",
    "revision": "856e44718ef1bc922c5c1c5574c59697"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/4d79f8180063fa898f2d.js",
    "revision": "a562ef8a8cdf1d49c0d6ca9013539e7d"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/7fa6d8a256ba857ad61a.js",
    "revision": "3f74b2f4fccb711a714ccb575467dbc7"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/b483c598e4b9326b8435.js",
    "revision": "ef3671330d631853e1061913a783298e"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/bbb368025071b21e5bb2.js",
    "revision": "cdb18705b875856ddfd295c28ae25934"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/c357a5cb95dffe9d0208.js",
    "revision": "cd1a3f32ae9d96fa4cf25a7e23c08c5e"
  },
  {
    "url": "/UmerevoCoopSitePage/_nuxt/de39d9438580214350fe.js",
    "revision": "7d8a47e457fe3a8bc1e3aa02f2d1fe5b"
  }
], {
  "cacheId": "project-a",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/UmerevoCoopSitePage/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/UmerevoCoopSitePage/.*'), workbox.strategies.networkFirst({}), 'GET')
