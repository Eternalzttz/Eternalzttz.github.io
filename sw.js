/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","c15d16db80186cc7679c99bfa7168e90"],["/404/index.html","202a294aa986234eda09e38d98abea52"],["/BUAAclass.html","d19f0cc92150b0eef5ec3a29f169b107"],["/BUAAtest.html","e9787796dd388fb58f40bbd88a18ef18"],["/Dijkstra.html","66137812eb50dd453a847fa7531de0e0"],["/DijkstraPath.html","6778bae184587bf78f2e41c99797db8b"],["/Dijkstraheap.html","d6dae0c4fa9052d4fa0173a899d94732"],["/Floydpath.html","176c8c6ea3ecdcf911e1141967afc2d7"],["/Hanoi.html","f1725f2eb0e6364d58241413b9dd2b0e"],["/Linux-rm-rf.html","cd42376189df984ceb1da21144fe413c"],["/MyFirstblog.html","b7531ad1fc67812eaf0d6b845869ee58"],["/SPFA.html","f779f80b53e37cc68bfa98c08b5bed6b"],["/SPFAforpath.html","7c68443b7eceefcf46fc3d53d4ab9f44"],["/STLqueue1.html","717618f31d93518917d8448c10dfb20c"],["/STLqueue2.html","7c985d790a7ff6400fddbcd87d869bcf"],["/about/index.html","337f80e8d7b30f7e5488a354fff84568"],["/archives/2018/04/index.html","12807fb36e961200d45936a8543b9f3c"],["/archives/2018/05/index.html","becfdca5a7cf59b65dad02285beaae11"],["/archives/2018/09/index.html","4996a1a6244d6754af0f81de090781c4"],["/archives/2018/09/page/2/index.html","04aad61edfe2bcba52966d5a7cfddb9f"],["/archives/2018/10/index.html","92a7962b91f23bc1f56b48c4a429505f"],["/archives/2018/10/page/2/index.html","5b68d086dce67140065cb0e8c9a0525d"],["/archives/2018/index.html","d4c2498d80765ccf08de603fb5d11894"],["/archives/2018/page/2/index.html","257bdaee5e7f5df4b4af6e16168fef84"],["/archives/2018/page/3/index.html","bc04ea781245180685d2101c6098ebe4"],["/archives/2018/page/4/index.html","73fbe759475e4dd28e7742c027843b64"],["/archives/index.html","1f35fffd1d7d157c350f6b88e12dd746"],["/archives/page/2/index.html","cc21586b94d3221bb4aeec24612cac64"],["/archives/page/3/index.html","3785356d5daa5ccf887cf6bdd2950050"],["/archives/page/4/index.html","59cb7c9686754c28ff86106b3d9c9cd1"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","a3eab492de8fb3aa3a5d3882d234dc0e"],["/categories/STL/index.html","0abe253e17987ef7771b45b024d5d172"],["/categories/STL/queue/index.html","69902628b98869b50c8f9be452c26efa"],["/categories/hexo/index.html","e5c604cc6f9ec32d85da1513a9bc4409"],["/categories/index.html","e4775086d88ee5aa7897587419f34e9c"],["/categories/心灵驿站/index.html","fa5a723fe03f1fa578966d9c99dc143f"],["/categories/心灵驿站/影片/index.html","824819feee3d5bc8eeb24ec4e01a38f9"],["/categories/心灵驿站/影片感想/index.html","6a2ecfcaff95189e5c347851409f39e7"],["/categories/洛谷日刷/index.html","515ebbf8bf37c5a42f5e5c4dcf74f30e"],["/categories/算法/Hanoi/index.html","441f0386d4b51a43001e96f852aac13f"],["/categories/算法/index.html","e538e3fd0d57359f746e4e666b39cd1e"],["/categories/算法/page/2/index.html","ee4c9e2d49a479f7d41c4d85a6147af0"],["/categories/算法/图算法/index.html","9e454b893b6e0e24546fd61c1b336841"],["/categories/算法/排序算法/index.html","17afbe83326d034f7c9b1d7231e4d15d"],["/categories/算法/最短路/index.html","946e41b70d07f2dfc8d05861379a60a6"],["/categories/算法上机/index.html","0e7c04afbd54f4b8d7b115db9ed5e18e"],["/css/main.css","bba74e43d3dc5c6c110767704d5eef2c"],["/floyd.html","474e8d1ba6336424f3cbfe1e30dba0c5"],["/heapsort.html","43577fdaa7fdf60fcce775ea5b5c8e52"],["/heartache.html","b6c1f0eff526f6e4e2fe262aa47904fb"],["/hexo-next.html","5933c95d51fb68ef2ca0a5cedbea03ba"],["/hexoMV.html","01a79d9b00b14eb5072b61238c2f783a"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","83074ef8a1551c7413fbb6458c1b52fb"],["/insertsort.html","86661a4ac3c709fd5d2f10523f54c0f7"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","429e4c587b9d6771411af604960f213d"],["/lib/album/README.html","a4168a883ae8d079c3e2399ee5e3932a"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","5fb45eb13c3f88ff15479104f4982377"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","e239707ade75d6d8070c15452f303f81"],["/luogu22.html","a703f9ecf23e0522ba43551d23854fab"],["/luogu3.html","11c5f2a3593921aa17cbf70eea470b56"],["/luogu4.html","acddd16324e65b95c3b85eb5795bec69"],["/luogu5.html","f2c88d9952f6f41cfb415eb260791f05"],["/mergesort.html","f04353d76b5849f3c74f7ad1d4dd31fe"],["/movie1.html","34547c2b4372dc65f1f428e23aafbb2d"],["/page/2/index.html","75c4cb02a20bac2872ceb0eba4ae0c44"],["/page/3/index.html","612452431399dd4190f4f51b6fbfe1a2"],["/page/4/index.html","0c979da09bd1ba4e9c3992b10fbd2459"],["/photos/index.html","266a925dd2fb763f043ed74dfe02919e"],["/prim.html","ce3845eb3aacf4961466700c4efa1187"],["/pupplesort.html","1a0aaf4eb7b6e8899ac10ada234ed02a"],["/quicksort.html","16889b73b2d28f87bd2c59b372ad9bc9"],["/selectsort.html","49acbd59f2cd5eece9dda31893b640c0"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","7299d766b81d2fbdf1c6e9f7be824012"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","dcce2d5932168acdb0fa47a7af90049e"],["/tags/Hanoi/index.html","35291cc5dee78e75e1da048d3c4961a7"],["/tags/KMP算法/index.html","6a47e472b08b1a0ea1c47d50994c5281"],["/tags/Kruscal/index.html","6fcd1e6b7f163ba70ebb6ada1deb9ce1"],["/tags/Linux/index.html","4b91b706da933006a0be2481000bdb77"],["/tags/hexo/index.html","0c20fc683b336a91f58e538017d61e9f"],["/tags/hexo折腾记/index.html","c9b96975d6730864c2118f2985fe6ed9"],["/tags/index.html","e4eeadf8dfb5fe510b8cb4969ea1ca78"],["/tags/prim/index.html","a9138b3f9989dad635fcaa5f43693f1d"],["/tags/queue/index.html","2826c352fd7efe24e5b02bf0c7f5289f"],["/tags/优先队列/index.html","7fe6a75dd82da40a3f585b7bda78c808"],["/tags/北航/index.html","2f2250226e4a15597dc01507e5226b84"],["/tags/北航OJ/index.html","85b0ba49588397e15d336064f4c64002"],["/tags/台词/index.html","bcad23ced3290fa4d915c5e1d1f2cb39"],["/tags/命令行/index.html","2f246e44885b13dcf30a2538d1bc9805"],["/tags/图算法/index.html","31b24035caea96f5ba0aaa0a10266954"],["/tags/感想/index.html","5153fa601bc9ad8789911b028ddced07"],["/tags/排序/index.html","5e31a04ecae13866952d992c93e9d05d"],["/tags/排序算法/index.html","9fa6239fc19e2da2526f01e329bcb813"],["/tags/最小生成树/index.html","5643915d875c5217362e243378f68edc"],["/tags/最短路/index.html","d220e38be344eb33ce4c9a47fa47cb96"],["/tags/模板/index.html","7352861cb7137c4fff4fb92c676209ee"],["/tags/模板/page/2/index.html","6005c1aca753b926fff9ecacacdd93e1"],["/tags/洛谷日刷/index.html","1eb472facc52ea74b9e450341d756d48"],["/tags/算法/index.html","facd8c1c062d8317d708c042e20ad0d7"],["/tags/算法上机/index.html","fa5c2baecaf00b2f02d722ff74862a72"],["/tags/算法学习日历/index.html","c258fb2fa8747eb8ec5b3be2a6c26d32"],["/tags/递归/index.html","037d163f11ae4deab5d354280d524874"],["/tags/部署/index.html","6178a4bf4b1b938f641dac13529c9df9"]];
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
