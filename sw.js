/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","ba4c0b7cf61cf0ad23caecba08fbf304"],["/404/index.html","092ba4a497c528df76144b812bea6121"],["/C语言冒泡排序.html","dcc78e7c1eb565a1f615c3f1bc085cd8"],["/C语言堆排序.html","072497f2ec4588cdfdcb41a16bdf4604"],["/C语言归并排序.html","bea3c484c506a2f4c6160f262a0b2be8"],["/C语言快速排序.html","e4b492cca371bb3a795825a59b16a6a3"],["/C语言插入排序.html","c58d514c1ca7164c0316d428f5b58b3e"],["/C语言选择排序.html","c9df7c399ead560629a5d3917a2184c7"],["/Dijkstra算法堆优化.html","a11821a10baee86ce7449fe821864ad5"],["/Dijkstra算法求解最短路问题.html","f439a60020a8df94f58169f7fb169e7e"],["/Dijkstra算法记录最短路径.html","626df2cd9d99086ec8b18fb7442af884"],["/Floyd算法记录路径.html","1cea461b8d2e19239665eedc9a369975"],["/Hanoi-问题.html","554d00365f6e2eccf5a16d0f0a5b5c76"],["/SPFA算法求解最短路问题.html","f80fb17b79f1943bb11cd77043552ef2"],["/SPFA算法记录最短路径.html","202a1c09bc2f357144a06483cfafa7b8"],["/about/index.html","41dc3c36fbb774b438748c4ad527074a"],["/archives/2018/04/index.html","d8959e5667e6323652f1203493572b86"],["/archives/2018/05/index.html","a79408b49a251830e564377a75f08c2f"],["/archives/2018/09/index.html","6e9185f8df91445344dad27bddae9351"],["/archives/2018/09/page/2/index.html","e5b878c180f24e862876af870b7c5651"],["/archives/2018/10/index.html","a4790f0c5574af246fadec8e1a9826bc"],["/archives/2018/index.html","0afbb89222e92a911e07088b94db236f"],["/archives/2018/page/2/index.html","df6db704358239da7eb798598c279c57"],["/archives/2018/page/3/index.html","7ec2991658eeeb4648b0ff0de5d98352"],["/archives/index.html","c41e8cbb8761c7b28cc8b8f4ae80e55d"],["/archives/page/2/index.html","d41dcc75f46d8e5f5eb25754fe08d489"],["/archives/page/3/index.html","5af734a8d91f67c73b9f2cf21eab0c07"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","8dac7a069c82258931df1e393827a10f"],["/categories/hexo/index.html","a110e9d4a4e7e61957cbf363054f375a"],["/categories/index.html","8b97bd6187942f78d322a426a9e21633"],["/categories/心灵驿站/index.html","1d2be468f65830e11fe47644b7835228"],["/categories/心灵驿站/影片感想/index.html","d7d31615ae04e43f74c8e51f4e9fa6ff"],["/categories/洛谷日刷/index.html","89976c8b7f09b5d5926185d386854adc"],["/categories/算法/Hanoi/index.html","c04e00a9b6ae35a4ca675eda96f8565b"],["/categories/算法/index.html","487c00237e4ea0e747b25f27be387363"],["/categories/算法/page/2/index.html","04b74c4d15606bbfb6ebb2bf30feb272"],["/categories/算法/图算法/index.html","b056a73e61092afc81d6db768929d9c8"],["/categories/算法/排序算法/index.html","42749ec2fa51d1b512e8b188d32882f6"],["/categories/算法/最短路/index.html","52f13a4d74441754320b60ceb3ae4fcf"],["/categories/算法上机/index.html","4c6d7908afb215a14df4b7d30ebb54bb"],["/css/main.css","bd7b2f21ee762dc4f03ad83cb290e36c"],["/floyd最短路算法.html","f08fef8ff75201664a2b09d5772049b2"],["/hexo-next-主题优化.html","a40f10f3958a508fa5019a3eb1a02c54"],["/hexo-插入音乐与视频.html","783e07462800b5b920fbae48571cf229"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","228e0488312fad92dc37813bffa0b2f0"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9fc58b80118e0fe8697ac442065d3d90"],["/page/3/index.html","02e095acde2280c0d40b142cd0940afe"],["/photos/index.html","50be395e2231ca1bffb8bafecb84349a"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","9cc06675e7849075d33b52b07501eb12"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","45c1f1cae9852e6865d3d5bd470b15f6"],["/tags/Hanoi/index.html","6a9570699fa2eee605c42aecd5d2e191"],["/tags/KMP算法/index.html","b5dae51612008360fdaba0b68d5024fc"],["/tags/Kruscal/index.html","1b4b6a773439c9a38b8557deb7115454"],["/tags/Linux/index.html","59bd5dfaf88ec6f0cf05fd7e383c2e49"],["/tags/hexo/index.html","6063e8cbd566836a0b295adb71ba3b61"],["/tags/hexo折腾记/index.html","42c6bf4901cdfbbb5d9e6ba3febcaf2c"],["/tags/index.html","10eaa287a792037e2250d93e1b87ee9f"],["/tags/prim/index.html","95019bf7c2524999746bbe4044b09d64"],["/tags/北航/index.html","b3088964b95abdd30028bb6c79c160a3"],["/tags/北航OJ/index.html","3e00f1ae183f5f3f7dd8e610f01f69ab"],["/tags/台词/index.html","3d24be3f19fe1b659fe3c8b807f8e8a1"],["/tags/命令行/index.html","4c858c2f5f993db30dd8e38c8e6f7a6b"],["/tags/图算法/index.html","85648f2bfb6fb9da473ef2e60bd28efc"],["/tags/感想/index.html","943cd4040c707d23c0ecb066693f729a"],["/tags/排序/index.html","eeb65f13806402a3a23f70789eb2840f"],["/tags/排序算法/index.html","de9005c32178c0bdffcc28a772acce55"],["/tags/最小生成树/index.html","daee9d7efcc7d7f1b0e55556b658fb7e"],["/tags/最短路/index.html","d107cfe8e726e965ea2b5c2c5a8617db"],["/tags/模板/index.html","ab0207c679d4379ae17cb41eff2ec915"],["/tags/模板/page/2/index.html","471aaccabfcede8d2fe5b21cb7148f38"],["/tags/洛谷日刷/index.html","4a035d9f23f5110d6d14306bb58325be"],["/tags/算法/index.html","5337b080e74f2b2676a3d5a9d17c40d5"],["/tags/算法上机/index.html","6fcc68949ef069ce33b628dcc22160c7"],["/tags/算法学习日历/index.html","1ae9db6865f89c939a4cd8a3cf80478d"],["/tags/递归/index.html","e70c80d1c19400cef092fb265ef038b4"],["/tags/部署/index.html","157ac4277f1a3a368eaaa881a4ab522c"],["/北航算法第一次上机题解.html","f4db112dc9470146b2b5b9900851e457"],["/我的第一篇博客.html","7ff6ee495dd9dd1c6d8ddccfa8b8126f"],["/最小生成树Kruscal算法.html","e8c8f7fd79570cc22ca0c2f59ddad470"],["/最小生成树prim算法.html","f3c0772299fca943ad5d4dc3b355eed1"],["/洛谷日刷-KMP算法.html","7626b40d6b8707e13d08984d49c042d8"],["/洛谷日刷.html","3be431d5788d3d35718dd43f4815ec5e"],["/洛谷日刷2.html","20973609613e5dfbd92a560ebff6e90a"],["/肖申克的救赎.html","a8a17efa7d9a9ec591cf09166a1daf17"],["/记一次Linux-rm-rf-命令.html","0bf8fa42c3f80f206786255e67d760a9"]];
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
