/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","6d62bf1005224e8587f0c63b65dd4f4c"],["/404/index.html","52d9886a4295759e987fdda1c01d3b73"],["/BUAAclass.html","ea0bef83ae3439721d2c4158429ed78e"],["/BUAAtest.html","83a50a40090d0bd61c84e49e25d32ec6"],["/BUAAtest2.html","ea973870f7432671d0f7cd253e473703"],["/Dijkstra.html","a22742cadcbb51816f6fbd79d97a1c22"],["/DijkstraPath.html","f8974e414ff41ef8edf42ae5bff68eda"],["/Dijkstraheap.html","3c98d4e8dada3d63c576247ce69e30c3"],["/Floydpath.html","7aa6609d96a02a40fa7b27ce6c89d519"],["/Hanoi.html","fb0081a0e35a551d96cd47a0321be0fd"],["/Linux-rm-rf.html","11f25ee70d22540e0fca4a2102ace17b"],["/MyFirstblog.html","5702061ec8f94cc77c88c7c980bd630b"],["/SPFA.html","1798927fc56735b3fff7cb6d810046e4"],["/SPFAforpath.html","f4353e7bc7f61d98861feddf52a1314a"],["/STLqueue1.html","69760b87564ef11e8355ab083995bd2a"],["/STLqueue2.html","e2c870278776ed950b7155ea3f1f51c5"],["/about/index.html","c2220ab30e4872f5041e7a6d95296f7c"],["/archives/2018/04/index.html","28153ed620705df753f9c74f132955dc"],["/archives/2018/05/index.html","3c27da677c089e76ceea9c267ca3d101"],["/archives/2018/09/index.html","896d4397dcb91767c6e9bc75d7729ea8"],["/archives/2018/09/page/2/index.html","c5f6955c5ae4319d1899add1fe7b5083"],["/archives/2018/10/index.html","3462d5e0fd2f7cf70979eecb0232aaeb"],["/archives/2018/10/page/2/index.html","4f7594209a4316fd731d2451e1c6dfde"],["/archives/2018/index.html","fe332cf0fca071d2eaa4ff10c5cece9f"],["/archives/2018/page/2/index.html","984dd776ae5a14c8596c7f522a9f2087"],["/archives/2018/page/3/index.html","2df7a0fd66d7c220e512559eb2e706b1"],["/archives/2018/page/4/index.html","e1625200376715820caf07c95476cd15"],["/archives/index.html","00f6de535937dc34a33b6a1b70d54fb4"],["/archives/page/2/index.html","0386e03faa541270bdd7af17e57f85ea"],["/archives/page/3/index.html","07a8cc2e7fadc7b72e4829554f87206b"],["/archives/page/4/index.html","cd93994a9186c8210fb0ac06cacae602"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","5e6df6ca0e5ebbc9cae59d521d573053"],["/categories/STL/index.html","1f304d2d110b89d2bccbad5aca4adccf"],["/categories/STL/queue/index.html","1ac32aac599d30d7b6276c03a966cb3d"],["/categories/hexo/index.html","d893a17067f9d07b77e4d83a68a0d623"],["/categories/index.html","98ff1ae4401c8d75b3d40c2c125b9e67"],["/categories/心灵驿站/index.html","7be7388648b6790b13adb6daf876804d"],["/categories/心灵驿站/影片/index.html","f11eda48d1707e09b15fdcdd6e6721a8"],["/categories/心灵驿站/影片感想/index.html","530540669a6d823162e7876d8f5346af"],["/categories/洛谷日刷/index.html","44d1f7dfe11c0f17ca9e137667269b2e"],["/categories/算法/Hanoi/index.html","9f5df9f6db05d3769fed551640a1c779"],["/categories/算法/index.html","e416b3bdb18b99c59c313e465c487c03"],["/categories/算法/page/2/index.html","f9e50ad0b95f193c7fab72a00637bcec"],["/categories/算法/图算法/index.html","76a142aeb39e2e5c095854e8ba802411"],["/categories/算法/排序算法/index.html","de7f26de1435199709b26faf52fb2ad1"],["/categories/算法/最短路/index.html","23f19d9320a69c01f04ea19e68786354"],["/categories/算法上机/index.html","ad733fa24615204fee547246a4d56f39"],["/css/main.css","c392657569135bbea743e16f3d6d4896"],["/floyd.html","1cc57ac9142034c1377b26dfdc8030eb"],["/heapsort.html","58f93b51d052e33d1106cddb890f1d5e"],["/heartache.html","b4a766d301b4ab6e0e58c45fb540d516"],["/hexo-next.html","8262dff34c6b388d815538398a9b66b0"],["/hexoMV.html","c2ac24f25986686640d37a3b0a5e69e8"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","8da030f9c23bfb3f7ee67561553cf3b1"],["/insertsort.html","dd66b8cdc610fae72de16d0dac22b938"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","490a3b9ec17f920e7b802cc7d825293a"],["/lib/album/README.html","349ec40c714cc242bfe6365873b8226c"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","a9b3be21577f5d50294795510e4c896e"],["/luogu22.html","f9fff56887444f136e28223466e4eae5"],["/luogu3.html","0ea4c05b98c0295ff927d766355ec844"],["/luogu4.html","481f759c6898baa329b3084add6c6622"],["/luogu5.html","4566706e4eb44d603431ef7df8280e6a"],["/mergesort.html","76ff3946b326e084a7c29c9c4624ff87"],["/movie1.html","c744214f444bd76cc36e81e00a71123e"],["/page/2/index.html","6600e738005e9b3f23115248afbd3f8a"],["/page/3/index.html","20a6c6ce0392fd565c621c4dd54a5d1e"],["/page/4/index.html","5cb59390208cc45a57d3f3cef780c4b1"],["/photos/index.html","91439ae7608b9283fe38374340b29621"],["/prim.html","d286becba744d014b829222efcd3ca4f"],["/pupplesort.html","67cc06123d924f7dded8a8e29e39267f"],["/quicksort.html","582b8765726a62a531ab1f0960802dfc"],["/selectsort.html","bdb208505d2b192422a7278a69967f24"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","3ed474989eb14a601dd0ab16fb52268b"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","ac895d27f607d741db291e6485f87653"],["/tags/Hanoi/index.html","eeb9eb890887409eebe41953d1f894d4"],["/tags/KMP算法/index.html","7dd6cea8605c3212ed3a0bb44b0f2500"],["/tags/Kruscal/index.html","8a42712db4443dc3b90cb6fee1dce074"],["/tags/Linux/index.html","c0badc20802c6e5a70fa43db067de4be"],["/tags/hexo/index.html","ce51fd72c2df8ad6b203f2d7409bf9e7"],["/tags/hexo折腾记/index.html","7de686b0d70ff39ba9ceedf31a4e1733"],["/tags/index.html","cd1feaaa168b1b28ef01f1a089d8be50"],["/tags/prim/index.html","60e6de167cb4d4b8669cb8007603757d"],["/tags/queue/index.html","577bf3de34ae3a9f09ff980dcb6d8ad8"],["/tags/优先队列/index.html","e4476b7249587a92601150d4139a894b"],["/tags/北航/index.html","147fb2750f4e7e1ef9ce6f9d250e568c"],["/tags/北航OJ/index.html","12cbb2c437442a1202bee5843eeb811a"],["/tags/台词/index.html","5fbada2ac93e1e41e4760f335901dd93"],["/tags/命令行/index.html","be918fdacefc1ed8280a4c59b9857484"],["/tags/图算法/index.html","90b893e05693d1fa35ad1d2ba362be99"],["/tags/感想/index.html","d1542b3c4f05815feb90b88f3727ef59"],["/tags/排序/index.html","cf94626c78592160354eb6d5c4354268"],["/tags/排序算法/index.html","8d98f9767be8d32f8dc7ff869ab12bb6"],["/tags/最小生成树/index.html","3221136b9c8a5d94759a6e7f0e4c22f9"],["/tags/最短路/index.html","00deba88fc7580423a826109c5e90f83"],["/tags/模板/index.html","980a61b8a2194317aacf890ee8daf570"],["/tags/模板/page/2/index.html","b34fbfac5ff38adc0da5887994514a09"],["/tags/洛谷日刷/index.html","d7833cbd5efc0e6f1fbebfab021f5155"],["/tags/算法/index.html","2166db08749debcd71ac1ee885cdaa62"],["/tags/算法上机/index.html","79fa00eda8e4883a888ffb324a328d85"],["/tags/算法学习日历/index.html","b4e601a72e54bc5d78a7247cccbb4b6e"],["/tags/递归/index.html","01bd890d6dc4c56323c4c6839a85d707"],["/tags/部署/index.html","10de5afb190df408f24ec96d06ffecc0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
