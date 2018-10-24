/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","e8eeac01dd39d8ca3b83f3f95b289cdd"],["/404/index.html","ebfb59238a10b354ca1a714d23e1d4c9"],["/BUAAclass.html","bd15f7dce3dfcc8b4870982387fe751d"],["/BUAAtest.html","28057a6e4ec857618e87a9864916b80e"],["/BUAAtest2.html","c115b3f83b264613470c65ed6dd46373"],["/Dijkstra.html","00e1191ed7701d4db5233ac7e6896cca"],["/DijkstraPath.html","b9364f936f449ffaf7fa45b95b23db01"],["/Dijkstraheap.html","8216bbd1861f9a08c266e70ffe91fd7b"],["/Floydpath.html","503d5dc0d433704573bc3a85090a60c7"],["/Hanoi.html","56de04b3e9cee14cd9862a044bd75435"],["/Linux-rm-rf.html","8a22bcab1a4c0cbfa44f70c3ce3918cd"],["/MyFirstblog.html","a9dfa441c2796df7234908dcf8f33886"],["/SPFA.html","62bed24505406b25a2b96df9000e38c5"],["/SPFAforpath.html","233fa6a93a33294b84e9d8de90d91f44"],["/STLqueue1.html","3088e7b8ff3c612486c5be50118df6c2"],["/STLqueue2.html","2b630f62d0bc126124d931429fb214f2"],["/about/index.html","8d4eb0c888c0491dfc81ece12601c4d9"],["/archives/2018/04/index.html","970f361649c5f4b350377e0069e4dac5"],["/archives/2018/05/index.html","a82a1b07febdd2e05e7881e8e4bb3a63"],["/archives/2018/09/index.html","757a364c5a58ef3a918e5afb82302452"],["/archives/2018/09/page/2/index.html","44765ee1d95d2c57b033d74f0ace9961"],["/archives/2018/10/index.html","7e5ce0336ef1159ddc541bb4c9563084"],["/archives/2018/10/page/2/index.html","4290d476b3ad4046561ea36bd39b8b29"],["/archives/2018/index.html","478c8d45966babc6e0f8fb322346c9a0"],["/archives/2018/page/2/index.html","2bb2cc69e1fed34bf5c8fb1d82824ec7"],["/archives/2018/page/3/index.html","c99a94c03171d59cda147a7236e7eb9c"],["/archives/2018/page/4/index.html","6943bc0a6e1b35a65a07d0481d1de952"],["/archives/index.html","0963426500637dc0d5c3a66013b94b04"],["/archives/page/2/index.html","2c63cea965a0a70a1476d2e5418f5d48"],["/archives/page/3/index.html","491a9bfbd3115386346d36ff1b1c488f"],["/archives/page/4/index.html","b9725bb75017203c0117ea3500ace615"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","48dd4dd302ece2aac9da03115a0289a1"],["/categories/STL/index.html","f73176cf80935391e1f855e49e758a0f"],["/categories/STL/queue/index.html","06793e427c2586a01d99a0899ad79ba1"],["/categories/hexo/index.html","9aa6cc24b209058ac01eded32d5eab01"],["/categories/index.html","f45d0fa4e41d61a6ab08e71c0610911b"],["/categories/心灵驿站/index.html","b3bc8010508f389b176d0378b9b33e19"],["/categories/心灵驿站/影片/index.html","27fbdda31a35eabeb90bac460a9810fb"],["/categories/心灵驿站/影片感想/index.html","07b0fae5214290e5e29e922eaadbe2ac"],["/categories/洛谷日刷/index.html","748a2c1910eb0bf271c6b4ed301b902e"],["/categories/算法/Hanoi/index.html","718b70453c44c74b2689eea4f52b8064"],["/categories/算法/index.html","cc8ee9135c296b4e1d38780651f3363e"],["/categories/算法/page/2/index.html","18eb26ae702d4bac7050c2f78e1a0249"],["/categories/算法/图算法/index.html","a463fd890d499f85479ef50be447cc24"],["/categories/算法/排序算法/index.html","9b4ae5a0204e6aebb53411a547b68611"],["/categories/算法/最短路/index.html","a6d9b9d50c859f78e62562e52ded7437"],["/categories/算法上机/index.html","2dcfa6b022ea0079274bbcb4c8d821bd"],["/css/main.css","c392657569135bbea743e16f3d6d4896"],["/floyd.html","c8bde7eb42ab73970dc6b332c49de2a7"],["/heapsort.html","e998f48921fd35ef8d661fc43149d211"],["/heartache.html","fa1034085f80910922b910d5ac09d544"],["/hexo-next.html","ef037eb9841e2736d900d466d9046135"],["/hexoMV.html","f31e51117ff7e0b468e03ae5cf44932e"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","b02da12de001a41b35fb6ee8d25945ff"],["/insertsort.html","4776df9da24313941be477b8d5f24d0d"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","a908ea821b117a6bfb634407e77cc8b3"],["/lib/album/README.html","bfdc057df5d20ca136cae854ab716326"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","a4302aa8b327b3b4c13ea62fd861b1dc"],["/luogu22.html","683d972f59dda6e5f40365b67a53447b"],["/luogu3.html","d6a26adc431c13a478ab6ed2f819386e"],["/luogu4.html","cb0b9233912f5afba58438dc91c65213"],["/luogu5.html","8483dff942c54eaa98d7304da4e8f64e"],["/mergesort.html","72a9ebb92d48cdabafaf8852477981a7"],["/movie1.html","2fd41d29de187dfdcdb987df48e60bef"],["/page/2/index.html","fecd93b21e6ba8f76b08ff044d20dbe9"],["/page/3/index.html","332d18df2300dc0c2bb083c0dcffc757"],["/page/4/index.html","e936dd523578d4184e9c50563303c89a"],["/photos/index.html","068c452ecd9f7b5c6d2c8c691dca743f"],["/prim.html","b1579eacb6c23d02789c7ce8fe811c48"],["/pupplesort.html","621f7999e2e1f4a9b4cef0ec8f5fc1e5"],["/quicksort.html","e0e7b2e2185c6588268ad371a5ff62bb"],["/selectsort.html","2842d64dd681195d884f49bebe6d36df"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","12675c8d312bdd37e5429dd3993870cf"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","3f20e1f0b8b8804f404feec0838666f5"],["/tags/Hanoi/index.html","368783eee2c126c56971f418210d1908"],["/tags/KMP算法/index.html","044913085a6c3cf97c14e3dd39c1012b"],["/tags/Kruscal/index.html","ac7fe8a0f2800ef0847d2dcd8b659a05"],["/tags/Linux/index.html","7d237ab119047e68bed58acc50b016d9"],["/tags/hexo/index.html","b70b830f08c20c753602966e14a44a7c"],["/tags/hexo折腾记/index.html","4cd01ef29cfae6bbdfbdb3ff6c94f33c"],["/tags/index.html","a1a801316025f2201f88ce64adb20d47"],["/tags/prim/index.html","f0f5f50724d5aaff5c967653db33e592"],["/tags/queue/index.html","d72479a3a7f91704ae44c4be2dd48dd5"],["/tags/优先队列/index.html","108746f68b48c77eac3df88873a64be4"],["/tags/北航/index.html","a77b1fd3c2838badf332cf9bf7620b05"],["/tags/北航OJ/index.html","22e08e665d09d5c02867fccd376d2847"],["/tags/台词/index.html","78393c2593c0a4b0eb23b0f340078865"],["/tags/命令行/index.html","6dad797071e5e6e6be4366be2ab6d274"],["/tags/图算法/index.html","5f77fa53ccc7d140401cdc1842351e0d"],["/tags/感想/index.html","66ee8ef34ba6080d602c36f07e9d5389"],["/tags/排序/index.html","226bb86a00435e01c86187f83d136111"],["/tags/排序算法/index.html","3ac1e58574398746eb8325e56959fef5"],["/tags/最小生成树/index.html","856be7f2aee2140dedbb5f11655f6dab"],["/tags/最短路/index.html","bd709ac58fba8ef3e32dff0eff2f67c6"],["/tags/模板/index.html","058aa8f6c6c53b9e232dcb420b99af18"],["/tags/模板/page/2/index.html","0cf0c3cb3003e6efc7331e05cefa4a7a"],["/tags/洛谷日刷/index.html","57762f37c37669afb7c667feb0bce029"],["/tags/算法/index.html","5a4336bf8a85152ef2d94a5cdc630cad"],["/tags/算法上机/index.html","f3cd55582320c6934556445380626402"],["/tags/算法学习日历/index.html","54ce0e51dd7df9fdf50a87626cd352d3"],["/tags/递归/index.html","f73565cf745a4397f55ab592fca8af5e"],["/tags/部署/index.html","3b4f140849a24324390e5806a361962e"]];
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
