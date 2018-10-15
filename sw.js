/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","5b481d9e304dea3f7eb2d7b609444976"],["/404/index.html","f8caf37f9da73a3ed1a0fbc431b18683"],["/C语言冒泡排序.html","c11a4309bb81b1a67d6cabc9f1684023"],["/C语言堆排序.html","f3992d3a7de78fe37c04cfab2ed05c65"],["/C语言归并排序.html","37e2bfa764768317daa32c35f4ae7ebf"],["/C语言快速排序.html","5f7ed3ced64c96d682766d3d6f941597"],["/C语言插入排序.html","2b7ba17360fb5b749a322217408169d1"],["/C语言选择排序.html","e613151ffa03719d1bf60b221b1b20bd"],["/Dijkstra算法堆优化.html","80a7ef8d203618df9755280a027b2a2b"],["/Dijkstra算法求解最短路问题.html","8bd3aaa321eb6b8bb6b43eb3d66e2208"],["/Dijkstra算法记录最短路径.html","d531b8c8774fc34d181f995c4cfdc659"],["/Floyd算法记录路径.html","3e229028bf68fc2abfc0699aa18971b3"],["/Hanoi-问题.html","05e31d246ceffcd1cacb7f9b4bb4a7cb"],["/SPFA算法求解最短路问题.html","7cd390c5d911a1fa4a0a2e36a0aa2e62"],["/SPFA算法记录最短路径.html","ec5336fcb53ddd83e6d28fd61d05b042"],["/about/index.html","c9aae73b94f92e52238721e592069ba6"],["/archives/2018/04/index.html","f61b880d68d8fa15f4dce906c3661730"],["/archives/2018/05/index.html","7b5f83acedd384847e006844670a5a87"],["/archives/2018/09/index.html","d074b9bd49fd52586c46067d76f5223d"],["/archives/2018/09/page/2/index.html","896003fdee56a97bf01246fd0f55b169"],["/archives/2018/10/index.html","38e829dc92cc7bb2beef79cf343c76ed"],["/archives/2018/index.html","d55fb2dc02d1a21a8aafe6f617e8701c"],["/archives/2018/page/2/index.html","2cfb7d0e21eb17b1e635e02d2943c2ff"],["/archives/2018/page/3/index.html","d04e117c7c356c24e57c61b995f35243"],["/archives/index.html","aec5cb114966d98f45f931be12e6cea3"],["/archives/page/2/index.html","a4d8d3223e873d334868521c775e57ac"],["/archives/page/3/index.html","4bbc5660039a688dd61dd842803a3394"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","c8faa69e38fe4abfeb499dba6be92511"],["/categories/hexo/index.html","9ede78160f26b906316580860f9eb6b0"],["/categories/index.html","03a068edc80d02f53cb8ab03703d5b86"],["/categories/心灵驿站/index.html","957763ea8c3b740892795fe80356b5ca"],["/categories/心灵驿站/影片感想/index.html","dd38eb6bee311eee516d85177116c5fd"],["/categories/洛谷日刷/index.html","f4d47974556ef8709c238a22d87f8d50"],["/categories/算法/Hanoi/index.html","4f3fbf71bd6a75b1d93fac7728e330ab"],["/categories/算法/index.html","b82107cf299df56d96c8dc48b273dccb"],["/categories/算法/page/2/index.html","31a8dfdf52d390626d07956039d1fc8a"],["/categories/算法/图算法/index.html","4c4c2c084768ded1360fba3296a11aa9"],["/categories/算法/排序算法/index.html","8609236d4a53a22f74d0135a4acc18bc"],["/categories/算法/最短路/index.html","f2deb8a38742afd3b67fed0f9ad9c3d3"],["/categories/算法上机/index.html","4e89d015043c44077bfca7e89a15679a"],["/css/main.css","554358d2a62f7dc04872b35d05b2ce36"],["/floyd最短路算法.html","7cbbe569e6e926286ae93439540ce1c6"],["/hexo-next-主题优化.html","1f157a9f5ebc44f17bb308c80ad16947"],["/hexo-插入音乐与视频.html","4d680230f517ee4e54d27a96cb0d9923"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","702fad32c6fcf50798585d1f02d7a4b8"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d9a8220f54c55499420315e8c4951a1c"],["/page/3/index.html","42dc165782b9bca2b806c715ddb6d4e1"],["/photos/index.html","619352a5269912535563d51804c4ad6b"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","ffe112555b9a2ecfa0d5e111ed94f8ae"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","fade725ab5b063558945676fba295be1"],["/tags/Hanoi/index.html","fedd625f68d9792d6640711522516be7"],["/tags/KMP算法/index.html","d4372ff07287781ea66da2c8ab21b04b"],["/tags/Kruscal/index.html","e051aa09c6f4aa6daf083e7b8f9cadd7"],["/tags/Linux/index.html","04607c4e2f2bbac31698c1077bfd32b2"],["/tags/hexo/index.html","dd82960c16bafe17b1eb65d1131e9f43"],["/tags/hexo折腾记/index.html","4d32032433bb64f7974a2bd2ba0afa52"],["/tags/index.html","2be497d7d27a165791b7372e9d7f87be"],["/tags/prim/index.html","7b082f486df8c513acec0a5c239157d3"],["/tags/北航/index.html","7ee54d38833da1e969f825321d1401b7"],["/tags/北航OJ/index.html","b82ba97df8b1e585443e430144bc178e"],["/tags/台词/index.html","a205d3facbe11601dafc0680b0210c24"],["/tags/命令行/index.html","f5488e7b8f833356163fe0b6eac6a08d"],["/tags/图算法/index.html","acb1463be6906fa57526c62a7bf5df65"],["/tags/感想/index.html","5a66cfba0c793adc8aae3237b13ef0d4"],["/tags/排序/index.html","032c8d7a8765772cea1636ec1942d08d"],["/tags/排序算法/index.html","c7c0f9acbbbea8a1836b1fece288f711"],["/tags/最小生成树/index.html","74152fd3e0171ec0b1d453e66bfb4aba"],["/tags/最短路/index.html","beaf4adab3211bd3e7f4f9728218a6e1"],["/tags/模板/index.html","8ffcbda55de8412c09cfff15a86dd5c6"],["/tags/模板/page/2/index.html","f63389e4948ebb0de10b7db5f9059419"],["/tags/洛谷日刷/index.html","86eff8e14745ce53f63bb229788b1e5a"],["/tags/算法/index.html","eb9bd6b3bfb937122fc981821e2abe97"],["/tags/算法上机/index.html","7d5917a650ef26857776385ec42f5930"],["/tags/算法学习日历/index.html","32d98273e453e355afa0bfedf9dc7cc7"],["/tags/递归/index.html","313798031662d5f5c1d351138f24870a"],["/tags/部署/index.html","226b904bbb0acb2f7d8e1d3ee03b5c3d"],["/北航算法第一次上机题解.html","7033629c34c49dbc4e9d57e8a68706fa"],["/我的第一篇博客.html","a9c5c0acd2d7b8f44aecd63e45d2594b"],["/最小生成树Kruscal算法.html","03a72d8da3ad4add40a77d43c3985232"],["/最小生成树prim算法.html","b38adc1d343295183b374c5ecb2baca3"],["/洛谷日刷-KMP算法.html","1deddf35587f2afe74697ff11a7b4236"],["/洛谷日刷.html","4ca226bf010ec165cfb2bc412dd2b115"],["/洛谷日刷2.html","51593e235913ab87b45fa984528a46bd"],["/洛谷日刷p1144.html","f887de789b7cc962dbbd82f4af435d57"],["/肖申克的救赎.html","882e9ba2a798430ce1c037746d5a1c8a"],["/记一次Linux-rm-rf-命令.html","bbafa381909741fd4a52378502992120"]];
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
