/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","3c3a9b8b9167f3f4dea602265f09f64a"],["/404/index.html","7493540c8ee422771e2d19c317dc86b2"],["/C语言冒泡排序.html","b30ac3f3097509e1c626f3127538f0ec"],["/C语言堆排序.html","3ba067bd79bff086b70176105111e0d9"],["/C语言归并排序.html","b3b39d1992b2263fbc8a1c8c53cfa089"],["/C语言快速排序.html","834f0ef712eac4bab7d66cb62a0bff91"],["/C语言插入排序.html","8285190fb226c05952f4652eda4420f8"],["/C语言选择排序.html","a18d6aabf8f1ea6b1aabb827f687dc39"],["/Dijkstra算法堆优化.html","ba4e1dfa3cf9d7893677e09575e2b0ed"],["/Dijkstra算法求解最短路问题.html","830d4ec843caefb17c3f68d6ebdd6fb8"],["/Dijkstra算法记录最短路径.html","bc4e3d24c03f95cdebb2617ed27c7ab1"],["/Floyd算法记录路径.html","8796a072b2aa0a64e955869f1f490759"],["/Hanoi-问题.html","cbf0ea037f4b6c45aa93904d4992da2f"],["/SPFA算法求解最短路问题.html","adcfcdc5f76a9f0e439a2c17cbb05059"],["/SPFA算法记录最短路径.html","20d055c600994db8fb939d07c55bde9f"],["/about/index.html","954909e33f3943b47f4d697a3cb430b0"],["/archives/2018/04/index.html","2f76ec72848f02bcc1268ac33b5bebf0"],["/archives/2018/05/index.html","bbcf02f3d53bc7df2f47d8b54cb230fc"],["/archives/2018/09/index.html","ec17d906d04b1c9145d2af0bcc0b382b"],["/archives/2018/09/page/2/index.html","406d151ba4389b9eaf8fc626aa5b5848"],["/archives/2018/10/index.html","03eb402964862f2ba6c7132e73e5d0dc"],["/archives/2018/10/page/2/index.html","0dd2b4340243c54cbbcb2c1264978b42"],["/archives/2018/index.html","1405ddca00d7803eeb3ba9811d006f5b"],["/archives/2018/page/2/index.html","29613c7514aa6026d743f627dacef523"],["/archives/2018/page/3/index.html","4bdb8a3741cdb728dff116837f7282bf"],["/archives/index.html","28461fbfa9a0e0af6c2948e3b25eebd9"],["/archives/page/2/index.html","3ffdc3a7fa54461362a70537bae5e038"],["/archives/page/3/index.html","e10e44a08f5e246cc9b5a986dc498502"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","4ce0a184f8771fabe7586d392242401a"],["/categories/hexo/index.html","cf8d9d29ac2d21b3a55acfab9c932da2"],["/categories/index.html","6a7d6a0f622728545dda20def58d07b7"],["/categories/心灵驿站/index.html","e5096a26471d4c42f087369c1f547bc1"],["/categories/心灵驿站/影片/index.html","92f3b84888d35b1f4b46aecc2c251555"],["/categories/心灵驿站/影片感想/index.html","dd38eb6bee311eee516d85177116c5fd"],["/categories/洛谷日刷/index.html","e7d25bff5b847cc4c6f3fa19d071440b"],["/categories/算法/Hanoi/index.html","82660e5e95bf6b2c4392433a4a442d53"],["/categories/算法/index.html","b5155413cce8f0e4d47eef721991cfea"],["/categories/算法/page/2/index.html","4d4d50ca148729e3c83bbd9e47d43548"],["/categories/算法/图算法/index.html","7b4459d927b7e4c45fe7f9fd8d361afd"],["/categories/算法/排序算法/index.html","051d2ab9218b137bc1d262af5bbd2ab5"],["/categories/算法/最短路/index.html","030fb8f9c3cf54eafcd076268e5d9880"],["/categories/算法上机/index.html","71178c590737e3a6b3eb80e83c89a570"],["/css/main.css","148fb9ceab8820a385d2797777a47e85"],["/floyd最短路算法.html","3e5a50451b27cb9e9dec247973b6c00b"],["/hexo-next-主题优化.html","7c60a2d3280d82068136a99823be5252"],["/hexo-插入音乐与视频.html","610cf107b8f9c64d156bfa53cea7aa54"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","d00bacd72145d0b07c980ac4367d5aa1"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ab81d4b35fba4820921548d78ef224f9"],["/page/3/index.html","89602152a80ccb9aec8dbe4291e1d3d9"],["/photos/index.html","cf919697313d98daf3b6fd2405fa2b13"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","71b0f786b2493a6fe5c0c79ffd0be5f7"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","027f980375d0a0c3b45dbc9ff7168138"],["/tags/Hanoi/index.html","abbf367920e994e0c22e637c5abbd12f"],["/tags/KMP算法/index.html","aa6f0b2d238321138baa9b9950700f95"],["/tags/Kruscal/index.html","cb2bb0957cd1c372219753047a3125fb"],["/tags/Linux/index.html","b786cfe1ce8c21e437aeff1016588363"],["/tags/hexo/index.html","892512c12499999cc2d20ce0e7c4c829"],["/tags/hexo折腾记/index.html","8045f07bd7c5cf4f8255188c9f2d655f"],["/tags/index.html","b7037a128d38eed5ff05567303214cab"],["/tags/prim/index.html","fd2662c1eec78dbc3fdcbe1920e23268"],["/tags/北航/index.html","477f11165533e6fa016e975a1d2c8f8b"],["/tags/北航OJ/index.html","e46a105fa70e7e85bb1a7fc7f9332c99"],["/tags/台词/index.html","f8e287c96d082379782473d78a0bb972"],["/tags/命令行/index.html","f8ce3db0adf7d6e64c9b1768073fd57e"],["/tags/图算法/index.html","8eb198d109c4ed3f5bd5e9d5c20424c2"],["/tags/感想/index.html","183b0e80fdb40a1866a45ab6bdef90d1"],["/tags/排序/index.html","c6cf10d4bf29703a716a4c19f775c12e"],["/tags/排序算法/index.html","44df331bb9273670ba26aacbbe86741a"],["/tags/最小生成树/index.html","e98af920bed8578d4cdb85c0706374c6"],["/tags/最短路/index.html","77243658614b1d5b60e5be521c117b6a"],["/tags/模板/index.html","361a91c0f1f2a9c84e2ba808b079bc08"],["/tags/模板/page/2/index.html","d245d1610919fc9f5d663e3ffe66a269"],["/tags/洛谷日刷/index.html","d794da6a173f7e67b029a80c48eab7d4"],["/tags/算法/index.html","c91d88c1eebd0a6185ccf927d27f5621"],["/tags/算法上机/index.html","8d5768bdd2e6e2b15fc5e45fcf649a95"],["/tags/算法学习日历/index.html","5ee73142eeed2481b4ec75d96024bd42"],["/tags/递归/index.html","48f44d327b85f0b33890b6d4381ee7aa"],["/tags/部署/index.html","500f6d10b72cea25b0cb1e190dc3197b"],["/北航算法第一次上机题解.html","34cefc9c691fa4dcee9d62171a72d9e7"],["/我的第一篇博客.html","9a24db5b8f55a309a138204426aa768d"],["/最小生成树Kruscal算法.html","610fbf6fe9b0c009f98eb208af6dd1d0"],["/最小生成树prim算法.html","48428b6e04ebafcead991bdd726af53d"],["/洛谷日刷-1.html","8f1eb1b098bf903be8130c6388053fab"],["/洛谷日刷-KMP算法.html","a153462579609c1efb57c81e67de57a1"],["/洛谷日刷.html","a76e30b20fa89e361aec2a37298f561c"],["/洛谷日刷2.html","dd6c361d325c04660eb63a1be6ea5708"],["/洛谷日刷p1144.html","5e7264aa95e05dadb629ae5399068315"],["/肖申克的救赎.html","3f3b712c9b77e89436bc2d2ff91090f5"],["/记一次Linux-rm-rf-命令.html","7b45b7cb30db97abbede57177ff1d2c0"]];
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
