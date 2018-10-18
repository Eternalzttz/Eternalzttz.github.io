/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","f9b0cae052449f4125fb60ff19fa47a1"],["/404/index.html","e66a4d410fe9f01443c03f4e294496a1"],["/BUAAclass.html","44cba2397d8e1f15292a09a9d8167224"],["/BUAAtest.html","68842084e01392f61916dd0f7b2f4070"],["/Dijkstra.html","7fc932e7289aee79175d386eb3521744"],["/DijkstraPath.html","9edb42461eece136a9f2448633d2c4de"],["/Dijkstraheap.html","ec62b998028067d39b758d35efbf9c0a"],["/Floydpath.html","3818976b42d3cd9bceb685f147a0a99c"],["/Hanoi.html","eefa811f08fb827793a38bcfeefcd23f"],["/Linux-rm-rf.html","09d8318fbf4d46219e5e8667159f2f16"],["/MyFirstblog.html","e5b184991753e8664ff34028d05b1517"],["/SPFA.html","224df42d292ecaf5b6b60911215c7ea5"],["/SPFAforpath.html","cac3bb13e22c7526d5e8f6d0a1657a23"],["/about/index.html","f193845067c45e95d78de9b19d781324"],["/archives/2018/04/index.html","cb1986abd375c3e991dc1bf90d1744d9"],["/archives/2018/05/index.html","a6e4b6cae4c3cd3e50aa5fedd1a2057c"],["/archives/2018/09/index.html","cc2b72a9cea866cb750d42476a2e91a7"],["/archives/2018/09/page/2/index.html","a64007532cad5cd991470f17ad312f4c"],["/archives/2018/10/index.html","64cc2168f463ec37290c75f5e3999c80"],["/archives/2018/10/page/2/index.html","8628594d9f9cd35face8ee569c4ecc30"],["/archives/2018/index.html","2a96a02d6eed1480457af417f303e013"],["/archives/2018/page/2/index.html","f0eb72a596f2c2bb59dd94d8c3c82aa0"],["/archives/2018/page/3/index.html","2853b9a5cc76a7aed99bb72ae6c2d5fe"],["/archives/index.html","a5ef279ec373d3710575532ac006776a"],["/archives/page/2/index.html","558182287ab095f467ccdb6733e6f1b3"],["/archives/page/3/index.html","d80565d5c33ad6e8d60268dcd3492de6"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","08db111dc50fc8ae5c9de1d074955168"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","7b9606b60f4776bae80afc8a6f0f3a0c"],["/categories/hexo/index.html","6c871282548ff5d44b181431ed620a86"],["/categories/index.html","bcc3096a502afbd39dcd025e88766be5"],["/categories/心灵驿站/index.html","8311bab122652159ac2e1e7dab6121f0"],["/categories/心灵驿站/影片/index.html","d9d41267d561a0f231dc99c8311927da"],["/categories/心灵驿站/影片感想/index.html","c3049eb536f01883df5ce1d212b1d4a0"],["/categories/洛谷日刷/index.html","79fd7f63ed39767b92af7646a781a30e"],["/categories/算法/Hanoi/index.html","6124a4878911a110012af70c084dce55"],["/categories/算法/index.html","bfd42197ad27a40374fa524e0e1610b8"],["/categories/算法/page/2/index.html","957d06bbebe4907d956b7837822594f9"],["/categories/算法/图算法/index.html","ae28e20478e9a3ec88efaff309c9e56d"],["/categories/算法/排序算法/index.html","cd4ec38e007498fce2fad7b6cc1fd600"],["/categories/算法/最短路/index.html","49db3afb20dba07be6b256aabc4f3561"],["/categories/算法上机/index.html","1c4de764a6b8e68d6cdd7d761d206312"],["/css/main.css","77d2e119562d0a7c2cdc889955b3d42b"],["/floyd.html","5779655865d7ed7119a98e24fae600cb"],["/heapsort.html","62a7944699ce34af4f17e481c5019eea"],["/heartache.html","2791363e8e31210684a9b59babd690b0"],["/hexo-next.html","a812af909e8e40ec3b89b2a5f4ee3ec1"],["/hexoMV.html","c71aab20a1ed7c387b7bfc7629e1877c"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","4eba764949e1a3dc6cea3cb569295c63"],["/insertsort.html","5a1b31a71c3788e358283c4702277c3e"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","dc99ba349e62f650aaaa4d65ec65833c"],["/lib/album/README.html","04d051cc265fd71d08d1265f274d02b1"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","4b3bb1ac0546719e5b36c60defea13b5"],["/luogu22.html","c89e8f9a1a2d8e6d03d74fc5f82d4d06"],["/luogu3.html","e7649cd0fa0916975a0f9b0c7044d895"],["/luogu4.html","b395e9016dc77af6322565d7c7dc89d7"],["/luogu5.html","f9efaf164b3a78262e7c13dad82018da"],["/mergesort.html","1541688b105ed50b4ace148f844a6181"],["/movie1.html","8e1de6af5ee276378ba67c944ecc2b85"],["/page/2/index.html","b8593a88fcee7cb2b088ce4ce4b4c645"],["/page/3/index.html","267b4be37faa9f311992ef3286e90597"],["/photos/index.html","2add7703ee6749bdc30a71bea36bddcd"],["/prim.html","f585d2d7039fefe8221b93f741dcd3d9"],["/pupplesort.html","7bc9c0b1df179fdc74056a2d998cb7ef"],["/quicksort.html","50eefec5d00130208c088150b549fe2b"],["/selectsort.html","f3d438369e005dc1a611fc2d3ee3796f"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","36fbcdd4b22be0fe7a27ba4c945b0b2f"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","a68a0b33482ee443ca03f79f98f6139c"],["/tags/Hanoi/index.html","15088ee6a9264e5b9a737d649d413fc9"],["/tags/KMP算法/index.html","4d10598c4a4903e9fa0bbbbc903898dd"],["/tags/Kruscal/index.html","889ee2384bcc8cb8cc06d942af014704"],["/tags/Linux/index.html","e8d36bdce0b5aaaf5cec1b4a38b8f2e4"],["/tags/hexo/index.html","84b607ce323a9bbc0b259847d3e4cff4"],["/tags/hexo折腾记/index.html","1769d1a8a6610ab1239a8edd3984fe67"],["/tags/index.html","d77d5b5f535dbd1bcde1fdaed6de8ca2"],["/tags/prim/index.html","3538f0af269741eec4c6132986c30209"],["/tags/北航/index.html","4730f396b1c4aec0cb8eb3f095664448"],["/tags/北航OJ/index.html","eeb3caceefbbf2a0e002ba36ff695d8c"],["/tags/台词/index.html","7a35bc366157d07037c2a3166b0fa465"],["/tags/命令行/index.html","b393486ef517c447c55dc985f362fa98"],["/tags/图算法/index.html","1675ccd8c58604bde40bcc4aa242e8fb"],["/tags/感想/index.html","17825bcd4e79e7fc57a5cdf7fd9190cf"],["/tags/排序/index.html","f30ccca3986acc212cd0773c1c71a835"],["/tags/排序算法/index.html","3d401b2c3c53e82abba2c547511e0f11"],["/tags/最小生成树/index.html","36fbe8a9c4a81d01fdf20daafba79392"],["/tags/最短路/index.html","b8891c2ebd51d4e5e281d6199d6426e3"],["/tags/模板/index.html","fa5f85206e0bef90d5ada2539fbbed41"],["/tags/模板/page/2/index.html","bf8fff2d17f7857199947175cbd88336"],["/tags/洛谷日刷/index.html","33ee0cd7a6c28d2820c091cb3e55c952"],["/tags/算法/index.html","9a1e0ad70226aa9a705ef5c6071d9341"],["/tags/算法上机/index.html","d6263fdf58fa4330318965920ec5017a"],["/tags/算法学习日历/index.html","1e7dabecc413eb8a3ba7412b5623131f"],["/tags/递归/index.html","f076e946986d4fff9087fcf8f8080590"],["/tags/部署/index.html","7d8a28a9edc087dba977165c2ef1b921"]];
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
