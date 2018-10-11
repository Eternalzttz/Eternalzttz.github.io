/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","eb754034619b4b3d806c5907ee601e70"],["/404/index.html","b07076b238cfd069a02e87a31a636fd5"],["/C语言冒泡排序.html","42824b740d79020d8b2a9ccfaaca072c"],["/C语言堆排序.html","40ee79a0ace2958aea74f13afcfabbe2"],["/C语言归并排序.html","45c2cccabfadd7ba1375b61fc36f2a98"],["/C语言快速排序.html","b79b9e2b8915e0d70de5cd9264f87fae"],["/C语言插入排序.html","4b5dc761c608d55c7ddf9c60a086e360"],["/C语言选择排序.html","01ac05beabd4acec72e48aeb8ae23131"],["/Dijkstra算法堆优化.html","43d95554a7134f4342443986c433a9cd"],["/Dijkstra算法求解最短路问题.html","d08c0ddaaeb49502b253b92acf54fe49"],["/Dijkstra算法记录最短路径.html","cd638e47db49fcdbe848e7a1954b7324"],["/Floyd算法记录路径.html","85322c41ee99bd25dad26189562b10ac"],["/Hanoi-问题.html","37a0840eb8ca8203ef5a8da1e9e61702"],["/SPFA算法求解最短路问题.html","43db6864e8cc1fe031c3e542fa957cc2"],["/SPFA算法记录最短路径.html","68b88caf44f810c0276428740c6e1eb5"],["/about/index.html","3739f550a61d0180943affe3e717a022"],["/archives/2018/04/index.html","04a5d889565684e3c871ca040b1da5b2"],["/archives/2018/05/index.html","eceb3539e8fbbe510bb3e8392087f6e3"],["/archives/2018/09/index.html","0431b0ff177e80822dc41e9fc4b56d90"],["/archives/2018/09/page/2/index.html","fc8f183b4a9d48d4b3aadf8645971743"],["/archives/2018/10/index.html","5dcfd7d0173b43f3c1c3959820f50459"],["/archives/2018/index.html","9fce3fcf047accf762b41f06cfcf8ef1"],["/archives/2018/page/2/index.html","67020533713730893d04814b3bfa1e86"],["/archives/2018/page/3/index.html","0265241ca350373318d755407f8cbfb8"],["/archives/index.html","e5951ef8745ff78aa77c3acd584bd8ed"],["/archives/page/2/index.html","946c242c3a9ed157ce7dc3c8706b13e4"],["/archives/page/3/index.html","dbd39f51cc26b52377d94a0eb1b7e115"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","ed18c5d7eca8261473447feddf278191"],["/categories/hexo/index.html","2c4ee6d921773729b0e3f1409fe37d34"],["/categories/index.html","10bf71f3f6187ce1f928f63fa8062ecb"],["/categories/心灵驿站/index.html","c81a12a2ac80d5c94afc1f69fbdcb420"],["/categories/心灵驿站/影片感想/index.html","a4900e384107b0141129973ac2a9a789"],["/categories/洛谷日刷/index.html","04ff33686616c3073c1b9f4cfccb3b17"],["/categories/算法/Hanoi/index.html","75c3ba48c0cee957a6cbaa46df0d3870"],["/categories/算法/index.html","9f5c6479f369dfcfd772672437b019ba"],["/categories/算法/page/2/index.html","dd64b8849a8139bd5a2e586a255e676b"],["/categories/算法/排序算法/index.html","34f754cb56070badca76175c4f6cda0e"],["/categories/算法/最短路/index.html","bfaf7a0e2784085a7505739d88276b72"],["/categories/算法上机/index.html","f5c840fbcfdcc9ce445d659555951bcf"],["/css/main.css","2454ffbc26c41fb2f2e641b39bc45499"],["/floyd最短路算法.html","891428524c522b96f8d8ef95a07eba2d"],["/hexo-next-主题优化.html","60be22f19fb47f025daf13028f21b333"],["/hexo-插入音乐与视频.html","7811b1df544ca2c852727cb53b51cac3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","276fdb59423a9d09bd53d4dcb205d38d"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d61bcf5b3fbdb26257ddd3baa8b25748"],["/page/3/index.html","a40b015b0c676dc2cfcd38552102b02e"],["/photos/index.html","e38445df94cb0a879ba44b9dd0584763"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","922d9d7edef4d2a546f20577b0ad8319"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","ce70502b8362a0d1bbbb0a38afaef1f0"],["/tags/Hanoi/index.html","5fd233b94a43be08825211027ac3eb36"],["/tags/Linux/index.html","79ea465119c9bf1af816d1d89493c780"],["/tags/hexo/index.html","83716aee4b378f25659f8b3c5b9fcb95"],["/tags/hexo折腾记/index.html","78b0debb734e8ee4099e1f97063b85e8"],["/tags/index.html","d96fd4682fd8484c3a4ea65862185598"],["/tags/北航/index.html","1b25d224ca0b3921637a6325b1e45359"],["/tags/北航OJ/index.html","53ff9c35c819c2822e7a6f0601f5f744"],["/tags/台词/index.html","44c0f4d8a469e8f410afa87c54068993"],["/tags/命令行/index.html","e72887826cac5a43776682c958b3449c"],["/tags/感想/index.html","6e155d4a6db042a0dbc87b703492c5d1"],["/tags/排序/index.html","39c37393c4f93c25f33eb0ea62fee8d7"],["/tags/排序算法/index.html","b5f50f24b99c62fc2246cebe071f35bc"],["/tags/最短路/index.html","058803621d61ab2032ea97e67f716646"],["/tags/模板/index.html","d8c293a9f392382a9827b23e77b503e9"],["/tags/模板/page/2/index.html","1eb82614d74370b3486fd513a6b10163"],["/tags/洛谷日刷/index.html","1dc69556e090b82949b222f0b3f704af"],["/tags/算法/index.html","88b2b8e0005dffc27e76f14ce26f1083"],["/tags/算法上机/index.html","c929011d86446ccfb05632ab8428c008"],["/tags/算法学习日历/index.html","9e16963d740418dcdfcfb78f94c6d944"],["/tags/递归/index.html","4143ce47f63ae48682af8020616912a4"],["/tags/部署/index.html","5725f84ccc668caf3881107951560116"],["/北航算法第一次上机题解.html","52fbd89dda283c9182520511e6457c25"],["/我的第一篇博客.html","86d745dac1acf09a2f611c40a0094314"],["/洛谷日刷.html","28ee87e44c82c53a1ef939b58bf45988"],["/肖申克的救赎.html","b135ce025c3fb33040f55ea9bbcfc159"],["/记一次Linux-rm-rf-命令.html","89a1af9ba5477119a75702526aa2eeb7"]];
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
