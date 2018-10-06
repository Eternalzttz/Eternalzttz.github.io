/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","3dd0ca0c285ce9bf1fdd7a922d75f7eb"],["/C语言冒泡排序.html","d8f68bdab3188881f8931b51fe18f760"],["/C语言堆排序.html","e56118ce40378deaf1d51add525c09ab"],["/C语言归并排序.html","d672acd58da05a4556a39232c76836d1"],["/C语言快速排序.html","5d63089a8bf03dadb03a21c9fc8362a6"],["/C语言插入排序.html","850cec415ad24909fac7639e7e4626cb"],["/C语言选择排序.html","32f3304e147dbe63e9301d812ee64b93"],["/Dijkstra算法堆优化.html","67494416d1059652ecbb0fcafc6fbe55"],["/Dijkstra算法求解最短路问题.html","2f8ae005887051e56d5273c4bc5cf997"],["/Dijkstra算法记录最短路径.html","750774d500bc7253ecffaa125bc48c91"],["/Floyd算法记录路径.html","08e027dc20731b45e1046e03c6707fbc"],["/Hanoi-问题.html","39f763823a5a48712d5fcfe2fbcfa98e"],["/SPFA算法求解最短路问题.html","e43e3695cc3853e35d9784fc3c33c279"],["/SPFA算法记录最短路径.html","4683cc0b537aae5dfb438888d1165647"],["/about/index.html","fe1e4e976835a43a1f1e8cfdb0119079"],["/archives/2018/04/index.html","30193cb70f95f80a84752aefaddfe5a0"],["/archives/2018/05/index.html","2ffa9cc245a352f9ca89d9c0fb1985ce"],["/archives/2018/09/index.html","5df2622e6bbb5d56d2e5bff5d6e56d67"],["/archives/2018/09/page/2/index.html","fc21089aa1b491d53d0de681f45a70b7"],["/archives/2018/10/index.html","dbfb794fa800ed16e2da6d823f603b13"],["/archives/2018/index.html","8e4409c97525121156915d01fe799d2c"],["/archives/2018/page/2/index.html","ce15f8ee9247b2824cf27809b3a5c9ec"],["/archives/index.html","6ffb211a3c785fd901b15ae354e9eb88"],["/archives/page/2/index.html","f3f5779b486d0598b968d42b78ff3c0e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","cffc22715e89f1a211121ff9d2ff50f5"],["/categories/hexo/index.html","2958bdb439cabcb50fa1ac784835091d"],["/categories/index.html","930c1132dc8f2ac707a2394cffcf3637"],["/categories/算法/Hanoi/index.html","0270315a9ce96839f2922df2b8b2b434"],["/categories/算法/index.html","cfacdb1741ee0e25ea0d9ba3bd8a0063"],["/categories/算法/page/2/index.html","2753fddba4641492ad1864232a1e6e69"],["/categories/算法/排序算法/index.html","0712243d830b7f40878cde9a22f7225e"],["/categories/算法/最短路/index.html","ede8c9b1f2d3de8c445d17735dbd8a41"],["/categories/算法上机/index.html","6622b6e548271aa4669ceceb210b84f7"],["/css/main.css","124ad60cac121f7c92beb0304351afd8"],["/floyd最短路算法.html","1e48fc28c6249b70d09c4f18a04b44e2"],["/hexo-next-主题优化.html","7b2fa574f741664eabeb03dbb2d5b12e"],["/hexo-插入音乐与视频.html","24ddfbbf9b1224204122a35c6e9cfe7f"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","a8f3caa8793a49271ce024a7e06d8b52"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","bf1bdca493fbaae64febf34b5309840f"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0e4116804b40be2afef9ce49ec1f3bb9"],["/photos/index.html","7be7b2a25d0519a51d95bac2d5c03082"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","476913f8f22cf69048958ca0242ad9ac"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","f45d81ecc3e9008651907f91ad65169e"],["/tags/Hanoi/index.html","eb14173f1722573d062f8c8480015368"],["/tags/Linux/index.html","87af040c3b8ceef289419155fc2bd4a0"],["/tags/hexo/index.html","bf8e8d02ac676a13f9a9652c0fa14e8b"],["/tags/hexo折腾记/index.html","547947135bbd49611d2cc8513148f903"],["/tags/index.html","f93c2bec4e708df9dfa2d5329a41db24"],["/tags/北航/index.html","f76cfcc51bc02eecb994014ea016ab58"],["/tags/命令行/index.html","0dec569e6e0ebcc627c64a6483f8dc25"],["/tags/排序/index.html","28ce7b78ca6d4b0467f4889ba2d76f48"],["/tags/排序算法/index.html","9357498dce6e528a0e008dcc08859954"],["/tags/最短路/index.html","7407eb9ee344bffb5c23a8c4e24f4b39"],["/tags/模板/index.html","49e052dc6bc9bed6255b4b716bbbaccc"],["/tags/模板/page/2/index.html","ac2cc1e7c4b76740fe6fd861dd25311b"],["/tags/算法/index.html","2801a40a01e96d6db040ce73fb1a3df5"],["/tags/算法上机/index.html","53589afde45859deef615a66b7768891"],["/tags/算法学习日历/index.html","4565b4056624603dabb7f55a2ac81235"],["/tags/递归/index.html","60d5b00952b80c7f65fddbbae31bf5a1"],["/tags/部署/index.html","c026c2124f7bc3236f25564c9a103987"],["/北航算法第一次上机题解.html","c8b8142264611107540b0ba676efc6cc"],["/我的第一篇博客.html","69ebc4070ae6de95d9f8b9110c619fdf"],["/记一次Linux-rm-rf-命令.html","c763782ebc6c3519a4b287d793796fea"]];
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
