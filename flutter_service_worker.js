'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "689a88ec8c82b6c8903179b242ee3a36",
"version.json": "558eea4b8b4875121c8eb69290c19687",
"index.html": "6ca8596e69711058037f0ab9ecf91747",
"/": "6ca8596e69711058037f0ab9ecf91747",
"CNAME": "bdfe7d1867a752d85709a01ea6517577",
"main.dart.js": "066c40634fa06de618d89de211111c46",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "965699335f2b4035e5b9bc94995d471f",
"icons/Icon-192.png": "89c79d6fafd2b761bccb11f25766ddfb",
"icons/Icon-maskable-192.png": "82cb453833f3c44d044682f129aceb54",
"icons/Icon-maskable-512.png": "bc7e6cde940b7df780c7343c89fc5265",
"icons/Icon-512.png": "d263e76f72dc0c6fc02392710194a575",
"manifest.json": "1704b3c7ce80c06b448492051af13b74",
"sitemap.xml": "b7b6638bb08435063281855989950179",
"robots.txt": "58b554329e364909c22f7db9a123378c",
"assets/AssetManifest.json": "eaba78fbfc8a5d141b602998d498e96b",
"assets/NOTICES": "4ef1f580c360d50a49238dc40209aace",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/AssetManifest.bin.json": "7476d1681a6be6184a798e63e3562695",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/common_features/assets/icons/toan_icon_png.png": "24d563e9b2064d0f5c5afa60a981857e",
"assets/packages/common_features/assets/icons/hoc_tot_image.png": "965699335f2b4035e5b9bc94995d471f",
"assets/packages/common_features/assets/icons/ic_toan.svg": "4019e24a870b72a281e0a68a4df82ffd",
"assets/packages/common_features/assets/data/province.json": "1a378f51408901fcab052e31068474ae",
"assets/packages/common_features/assets/data/ward.json": "77678e7fa71b096112456af01db453a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/flutter_widget_from_html_core/test/images/44px.png": "513e965ee5ba1d89f4319d8be91290f1",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "a85ea45771b92aa2e15dd6e0d25302dc",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_widget_from_html/test/images/icon.svg": "a9bc66446cd28e1554a47022bcf50a22",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/omni_video_player/assets/webm_video_player.html": "daa36defcb7e729bbe66b189c85845ca",
"assets/packages/omni_video_player/assets/youtube_player.html": "3414e99ff1812c9cdf213e2c789818f2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7cb36744f5a57694f6ae4f95ac7c008f",
"assets/fonts/MaterialIcons-Regular.otf": "b73d106f3dc14ef78e6e6aff38253b8c",
"assets/assets/icons/ic_avatar_7.jpeg": "86bc559ec8998f5ec021682406ea872a",
"assets/assets/icons/ic_video.svg": "3880766648fac51a3d3a202ceef05a51",
"assets/assets/icons/ngu_van.png": "abc883560379ee307532a6ab7dd84b73",
"assets/assets/icons/ic_teacher_web.png": "b277c82150952433c0d027c871964318",
"assets/assets/icons/ic_avatar_6.jpeg": "75448398bbad72e6d6d740bac7f279a5",
"assets/assets/icons/sinh_hoc.png": "1587f79e65ce61b588156848f58b5844",
"assets/assets/icons/tieng_anh.png": "0ae54660b95787a44ac7c884fe36ef4f",
"assets/assets/icons/ic_apple_store.png": "77ca8b6daef7f3a2c81f8266a17cd96a",
"assets/assets/icons/count_down_image.png": "fc079a6e36f972157d419e31cd90896f",
"assets/assets/icons/ic_file.svg": "7f6bfc15751acc51864de470eafa626b",
"assets/assets/icons/dia_ly.png": "4e26ed657bfa0beda6ec566d91a2d108",
"assets/assets/icons/toan_hoc.png": "9fce75d00ce3833ee6ef94eaf2b3e3f9",
"assets/assets/icons/vat_ly.png": "66522b501dba02abe5a18e13ef8bcedc",
"assets/assets/icons/hoc_tot_image.png": "965699335f2b4035e5b9bc94995d471f",
"assets/assets/icons/gdcd.png": "889abda0eece269956eff73137c85081",
"assets/assets/icons/quote.png": "33e1865cfb8ac51dc093c2b7334e9173",
"assets/assets/icons/ic_avatar_3.jpeg": "386d4011811b738c01f1b0eb3e59c33e",
"assets/assets/icons/ic_avatar_2.jpeg": "368836850ddd99aba2d86ee6e26f6e81",
"assets/assets/icons/setting_icon.svg": "bf5e3c669b53daa2ff3524dd33c66fed",
"assets/assets/icons/ic_google_play.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/assets/icons/hoa_hoc.png": "b3cf0404544bfb01977a0ce2578b9538",
"assets/assets/icons/launcher_icon.png": "3577a85b3e63179c77774207f187f910",
"assets/assets/icons/ic_avatar_5.jpeg": "b03ca2dbe54be9dfaa369bfe8110e21b",
"assets/assets/icons/tomato_image.png": "504f4e5817e8b6ea7d1e4517b6aa68a0",
"assets/assets/icons/ic_avatar_1.jpg": "7ca6987466c9e3dcb58dc7fb0a708d9f",
"assets/assets/icons/ic_login.png": "34e696282a14a25d9dbe39b1e10f7684",
"assets/assets/icons/lich_su.png": "31159a177c650e2df1d9874a4bc47877",
"assets/assets/icons/dot_time.svg": "c28b7837f7d1b19f4e4f121d6dad95f3",
"assets/assets/icons/ic_avatar_4.jpeg": "0fa0f205f51cf1ff50129b9bd876853b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
