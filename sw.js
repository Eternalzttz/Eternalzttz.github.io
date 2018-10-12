/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","56fdb363dcd1921f4573e54fd49336b7"],["/404/index.html","24503b49e8c9d3f3d1ec47ce06759345"],["/C语言冒泡排序.html","e62f942ca3bd6486767fbebb2b22ef3e"],["/C语言堆排序.html","949438bf2e6ba35873fdece212606ebe"],["/C语言归并排序.html","e9cc9258e7d762811c8b69fde292778c"],["/C语言快速排序.html","00f58ebb33ec66670125aaa8a348b957"],["/C语言插入排序.html","7869b4232b3267a0c8fd9fe947e46843"],["/C语言选择排序.html","a3b5a263684f069946f1111cc77d350d"],["/Dijkstra算法堆优化.html","ff04a748c86b6f2848626c1797d1eecc"],["/Dijkstra算法求解最短路问题.html","523549815559697ca6837e0d7d70330d"],["/Dijkstra算法记录最短路径.html","cbebe43853a624ba7bcf98460c092b10"],["/Floyd算法记录路径.html","cefc30d59349a2403ab4758b367abda4"],["/Hanoi-问题.html","0cd481bcf7b06d611e694ad905f1e6a7"],["/SPFA算法求解最短路问题.html","8c2115834f379dfca2eea8cd962efefe"],["/SPFA算法记录最短路径.html","2de8014e70ca0b99a4d0f64e09027d75"],["/about/index.html","05060054daddb8e2ec14ee81e035db08"],["/archives/2018/04/index.html","cf1e3bfaba431ad6eadce97413bf8340"],["/archives/2018/05/index.html","7466214494bb7c6d9779d5510e69b784"],["/archives/2018/09/index.html","29f7b4359f33dd501940b562abd4d085"],["/archives/2018/09/page/2/index.html","4629bbca7d4225997f6165cd49e1706e"],["/archives/2018/10/index.html","faacaff3e1a53ff08bfb17162dc15049"],["/archives/2018/index.html","bb7f3152fe0a217b2cd5632e75cfbfd0"],["/archives/2018/page/2/index.html","ebbb99ad9e0e81c00643525dab668f17"],["/archives/2018/page/3/index.html","7fc095a1ec699e2725df363b306e3c5f"],["/archives/index.html","608caabacbb08899b0d1cd45f3dc094b"],["/archives/page/2/index.html","e9f079dfde0e98191493473c052c1a9c"],["/archives/page/3/index.html","2e2e406eb879ea958884ffd0f65cba4f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","6b627e91f5e378b0317170c47b822b0e"],["/categories/hexo/index.html","64ad579fa3642c5063e1fd5556d60e1e"],["/categories/index.html","5cbd3937a4ab981421a1c66c18bd4d92"],["/categories/心灵驿站/index.html","78eb83d54bdd86a48c3c882f6d9f7925"],["/categories/心灵驿站/影片感想/index.html","aaa861228c4f3860c4ced6aa2d634b6c"],["/categories/洛谷日刷/index.html","bb2d464bca9115b7290ee6e79191040e"],["/categories/算法/Hanoi/index.html","dd1cc21fd4c9e564d5552769b6a70243"],["/categories/算法/index.html","30c90ad8d837aaaf58bc4bb47da18b97"],["/categories/算法/page/2/index.html","4509f0f9f40d5ad4f42d53338cfad87e"],["/categories/算法/图算法/index.html","577cbb656b895544f6f64cb4f06519c3"],["/categories/算法/排序算法/index.html","50d461fc27d4695f7e2a1c6f92e53cf1"],["/categories/算法/最短路/index.html","655eb18f09565739e06b4071ed652141"],["/categories/算法上机/index.html","a533d8f8f9551aaa64f8fd3aeaca6295"],["/css/main.css","8b0edff9ca85f2ccb8a6ad66a2823c9a"],["/floyd最短路算法.html","06452ecfcb282787711bd80bc6460caa"],["/hexo-next-主题优化.html","265ba2c4d9fb319e75af538d6c2ec599"],["/hexo-插入音乐与视频.html","b995f232469606bb0fe9270a915eb8b7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","de2bc38e12dca3ee5371ff40eec9fbd7"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","05a32525b541ac4bdc5fdf0c20dc9c23"],["/page/3/index.html","7ea9ab8d746a88c93b6c7093c63d3141"],["/photos/index.html","a5567ea88d09af964e72448c47da4c16"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","39a238e4b62a65f46fc31db1284e0a12"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","bffdfc13b562d8c99f37468a6f9d29c0"],["/tags/Hanoi/index.html","62231bf59122196cebe88ac6c41f7b8f"],["/tags/KMP算法/index.html","bf658678be89dea74d2c88cb4cde2d51"],["/tags/Linux/index.html","5268c5965e671f87c6b76d58dfdd36ac"],["/tags/hexo/index.html","4924a4449730605d2775dac01b6722b2"],["/tags/hexo折腾记/index.html","cf79939306efa6d2dc7efe212715d362"],["/tags/index.html","c91e3b9012bb47f6da1d1b0d99c97eff"],["/tags/prim/index.html","3de2e69d630e6dfc2bf9d8ee3abdd31e"],["/tags/北航/index.html","11eec30ab778286b1c79efa732dd8276"],["/tags/北航OJ/index.html","c45e7f2207e38a4a7bf6dfef3c0c61c5"],["/tags/台词/index.html","3d589b84b610559e0b72b58a1ac1b557"],["/tags/命令行/index.html","c5c774e359674868129807a477262678"],["/tags/图算法/index.html","7ea94f3063ebf72932075d2b3e426934"],["/tags/感想/index.html","c90bec79f70eaea222a02419e8687f7e"],["/tags/排序/index.html","db94d7d7fb44e510085c60bce862cda8"],["/tags/排序算法/index.html","2e66c7c2f09598c9183a4cfe534b15f3"],["/tags/最小生成树/index.html","54ec69213398be8044021ed2b4ae0052"],["/tags/最短路/index.html","d6a1cc4fca68c7c401c3233b114252b2"],["/tags/模板/index.html","86d4eb8fc5e8aaf694fd33ca59f1d787"],["/tags/模板/page/2/index.html","75114b7175041e60b53b09fa2c9445be"],["/tags/洛谷日刷/index.html","8f4d5b307f7d6eae040ce490154fccb4"],["/tags/算法/index.html","5f1ba675ce59e3506ad56c4555c35803"],["/tags/算法上机/index.html","e4e058c500615e12f05a9fd10df66474"],["/tags/算法学习日历/index.html","65477305dfcf041ea5ed1a06e5098a7d"],["/tags/递归/index.html","697d03e0e5650278592727e87dd2eb3a"],["/tags/部署/index.html","35256f40d8c77da5f0b7f7aec8f5be8e"],["/北航算法第一次上机题解.html","81a31d51e6f5c548ccaf3a755029388a"],["/我的第一篇博客.html","d152f08b45c41ab283d7cc3c973b23e6"],["/最小生成树prim算法.html","716959b016ca2fc131bd5693b9ca1a0c"],["/洛谷日刷-KMP算法.html","1d61df46c2e15ed24f935112d9a943cf"],["/洛谷日刷.html","bcca39ad662eefeada8795de6a0214f1"],["/洛谷日刷2.html","ca6b61623677f11c67e990f727d9decf"],["/肖申克的救赎.html","10f5c3269e8cc662bbc0b3b7941696ea"],["/记一次Linux-rm-rf-命令.html","130432c9023e221a8636c032f35cc5fb"]];
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
