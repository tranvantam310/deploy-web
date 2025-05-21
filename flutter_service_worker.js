'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "35c9d6397ff6cba4a41e8e83dcc007c1",
"version.json": "558eea4b8b4875121c8eb69290c19687",
"index.html": "c0530d8f6c5e880b497ba53ea6821083",
"/": "c0530d8f6c5e880b497ba53ea6821083",
"main.dart.js": "6e54c1bc59d4275661084b4cec7b16fc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "965699335f2b4035e5b9bc94995d471f",
"icons/Icon-192.png": "89c79d6fafd2b761bccb11f25766ddfb",
"icons/Icon-maskable-192.png": "82cb453833f3c44d044682f129aceb54",
"icons/Icon-maskable-512.png": "bc7e6cde940b7df780c7343c89fc5265",
"icons/Icon-512.png": "d263e76f72dc0c6fc02392710194a575",
"manifest.json": "1704b3c7ce80c06b448492051af13b74",
"assets/AssetManifest.json": "a84f099c7344a7b6671515662f437c18",
"assets/NOTICES": "41db3e4218dc82d8a543d066985d8f29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "19f71dd93fd44cc662215317fc812707",
"assets/packages/common_features/assets/icons/toan_icon_png.png": "24d563e9b2064d0f5c5afa60a981857e",
"assets/packages/common_features/assets/icons/ic_toan.svg": "4019e24a870b72a281e0a68a4df82ffd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b52b4a7b9b443a0c0dfa52e8be31bd66",
"assets/fonts/MaterialIcons-Regular.otf": "130014966b281e58660894442ac8a606",
"assets/assets/icons/ic_video.svg": "3880766648fac51a3d3a202ceef05a51",
"assets/assets/icons/ngu_van.png": "abc883560379ee307532a6ab7dd84b73",
"assets/assets/icons/sinh_hoc.png": "1587f79e65ce61b588156848f58b5844",
"assets/assets/icons/tieng_anh.png": "0ae54660b95787a44ac7c884fe36ef4f",
"assets/assets/icons/count_down_image.png": "fc079a6e36f972157d419e31cd90896f",
"assets/assets/icons/ic_file.svg": "7f6bfc15751acc51864de470eafa626b",
"assets/assets/icons/dia_ly.png": "4e26ed657bfa0beda6ec566d91a2d108",
"assets/assets/icons/toan_hoc.png": "9fce75d00ce3833ee6ef94eaf2b3e3f9",
"assets/assets/icons/vat_ly.png": "66522b501dba02abe5a18e13ef8bcedc",
"assets/assets/icons/hoc_tot_image.png": "965699335f2b4035e5b9bc94995d471f",
"assets/assets/icons/gdcd.png": "889abda0eece269956eff73137c85081",
"assets/assets/icons/quote.png": "33e1865cfb8ac51dc093c2b7334e9173",
"assets/assets/icons/setting_icon.svg": "bf5e3c669b53daa2ff3524dd33c66fed",
"assets/assets/icons/hoa_hoc.png": "b3cf0404544bfb01977a0ce2578b9538",
"assets/assets/icons/launcher_icon.png": "3577a85b3e63179c77774207f187f910",
"assets/assets/icons/tomato_image.png": "504f4e5817e8b6ea7d1e4517b6aa68a0",
"assets/assets/icons/ic_login.png": "34e696282a14a25d9dbe39b1e10f7684",
"assets/assets/icons/lich_su.png": "31159a177c650e2df1d9874a4bc47877",
"assets/assets/icons/dot_time.svg": "c28b7837f7d1b19f4e4f121d6dad95f3",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
