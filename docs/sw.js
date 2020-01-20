importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f7e51a729ef3990b28c.js",
    "revision": "c9800e4a8fd2491a5213f8f88185bfc0"
  },
  {
    "url": "/_nuxt/2edf9a722ae66a12ebfb.js",
    "revision": "7c093273a1a761e57106732a90a913dd"
  },
  {
    "url": "/_nuxt/5a5840769783d080c509.js",
    "revision": "c778a8ad5b5349c59280cdef0a5d5c8b"
  },
  {
    "url": "/_nuxt/7fa6d8a256ba857ad61a.js",
    "revision": "3f74b2f4fccb711a714ccb575467dbc7"
  },
  {
    "url": "/_nuxt/7ffce609e38612dda713.js",
    "revision": "7cee0df120dd07b5a6134d6b60a7ebc5"
  },
  {
    "url": "/_nuxt/b483c598e4b9326b8435.js",
    "revision": "ef3671330d631853e1061913a783298e"
  },
  {
    "url": "/_nuxt/bbb368025071b21e5bb2.js",
    "revision": "cdb18705b875856ddfd295c28ae25934"
  },
  {
    "url": "/_nuxt/c357a5cb95dffe9d0208.js",
    "revision": "cd1a3f32ae9d96fa4cf25a7e23c08c5e"
  },
  {
    "url": "/_nuxt/de39d9438580214350fe.js",
    "revision": "7d8a47e457fe3a8bc1e3aa02f2d1fe5b"
  }
], {
  "cacheId": "project-a",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
