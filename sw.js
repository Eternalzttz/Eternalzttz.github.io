/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","b71897786ec04e814c401c27a305f175"],["/404/index.html","1c5f67bf110adc46944b4da05b7a515b"],["/BUAAclass.html","718b648e29663f7eac6b5243e506fcce"],["/BUAAclass3-1.html","63393500b165a79c67d58da10df4eff0"],["/BUAAtest.html","7217de0d1396466d802485bf8029adce"],["/BUAAtest2.html","b7773e370f3269a9bbf3ff836c31e741"],["/Dijkstra.html","71d6af255559bce003a002f636bdd1f5"],["/DijkstraPath.html","489eaf5888c9a1e4e3e5ede252db44f2"],["/Dijkstraheap.html","e2e39c2cacc35d00d4019942c8fd362d"],["/Floydpath.html","77a40efa345da824a37939a339121b4c"],["/Hanoi.html","9f67b910966771f11f22f3a5093ebb07"],["/Inception.html","88b5a32c03890d3b1e030bb83e580e4d"],["/Linux-rm-rf.html","d6f17dafacd82f794601c08cdafd41d4"],["/MyFirstblog.html","b8f5334730267633631e88e35ae81d5a"],["/SPFA.html","ce78a6e6efbdd9a6c681f850083fdac3"],["/SPFAforpath.html","1925213bc42844101af45666a516e97f"],["/STLqueue1.html","d8b0d19079a1410c958485ee1c50fafa"],["/STLqueue2.html","f8b5c35e82c562f04aeca19f3e9747cb"],["/about/index.html","e4fbc7477a95ce14da4b23a734cabfba"],["/archives/2018/04/index.html","af5eca828a2c3521278309f78518f62d"],["/archives/2018/05/index.html","369e1ab2babcea40154ebd45edaf5c3f"],["/archives/2018/09/index.html","bd3fcb7b40df7d180ded7db6f50fea0f"],["/archives/2018/09/page/2/index.html","fcce33a25e60db1da6040f218de97887"],["/archives/2018/10/index.html","ee5cf5dce66809c376e43fba61d95267"],["/archives/2018/10/page/2/index.html","5a933c63433d60bb61faa2155faf340e"],["/archives/2018/11/index.html","20dbb76475fa9d483a30989da50d2d34"],["/archives/2018/index.html","c958cbca1becad181325467a18286c8b"],["/archives/2018/page/2/index.html","18576fa9b0cbf8d48f8fa36d1bbefa1c"],["/archives/2018/page/3/index.html","3ad4a8b98eb9f7c47de067d7a214f946"],["/archives/2018/page/4/index.html","8d9b12f18eb4da591bd3d74ef02ca3df"],["/archives/index.html","019226d11befed11b989fdaadcedfd47"],["/archives/page/2/index.html","f654e6a7c277be34405f1d22adc9c65a"],["/archives/page/3/index.html","7493103b1be5bba4ae6d1c2dfbd82fd2"],["/archives/page/4/index.html","69850de5b0c7bc730ad60ed9e5c3c4d3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","6f9d2624b96ba650aaeb838e2137a7cc"],["/categories/STL/index.html","5df3b738e24b4c3cd2557538b2dc8b4e"],["/categories/STL/queue/index.html","119d5e518f1e665b3bbdabd7d88de647"],["/categories/hexo/index.html","65113f94adccddf9c4405588cfb9cbe5"],["/categories/index.html","a6842be5791969cbd36bfe74634becf1"],["/categories/心灵驿站/index.html","6a432e9c56509677829554beea122333"],["/categories/心灵驿站/影片/index.html","2f90da087bbde97d9158369f9e9a5768"],["/categories/心灵驿站/影片感想/index.html","da20d53e14b9c2c668960d51094665c2"],["/categories/洛谷日刷/index.html","152679896cab69c05d3919b3a0071e39"],["/categories/算法/Hanoi/index.html","3c8c370b902bdfb3479cb5a7b96d0033"],["/categories/算法/index.html","5187fe4498caeb3e5b6e65e8bbd90e9a"],["/categories/算法/page/2/index.html","9856d1c76f5c882da5a7063eefa4e56c"],["/categories/算法/图算法/index.html","fa54ce426227b2d6436df39c67d5d07e"],["/categories/算法/排序算法/index.html","a220aab012a1c4e263eb9eb029ea0855"],["/categories/算法/最短路/index.html","1c8d0283a82e8d547b9fa58ff75864b4"],["/categories/算法上机/index.html","98dbbf0d6df0510cd8be546589afe139"],["/css/main.css","374118792a562cb4627c84544cfb8503"],["/floyd.html","c6679d27bbb16edcdf5e28779949ca8a"],["/heapsort.html","a4b24f5ec7370aa4175a4c235be68db2"],["/heartache.html","892c4fa807c72a8060476d4e80ea1e6b"],["/hexo-next.html","2902ce1b0bda1470d06bf12ab0abdbaf"],["/hexoMV.html","26179df1290107b42549104fcae4fdca"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/header.jpg","9029902442b14efe9ef5b087f8d27ddc"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","41d9c43f54dfd9d84172c8c39530d8da"],["/index.html","314e92b0ebfb1f97c9bc34741c122e54"],["/insertsort.html","a59f90ec7197532ee1ce31818ec4ef8c"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","84025936764b95c266b912687c3d83f7"],["/lib/album/README.html","91ac87897d78a37fc191529b42334c62"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","91d8732ed523392e7fd4ec03c7f55b72"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","c16374dc37e8c76d07ec8fd04b195bfd"],["/luogu22.html","6685711309da8a2814f333188aaf8f53"],["/luogu3.html","2baccd6d453e1f8ef7a5d274dae290ca"],["/luogu4.html","23e0f8f764260f9e7e8d94823779a489"],["/luogu5.html","cc0623f5ce71eddac0231eca74be4de0"],["/mergesort.html","60adb2a4c8119c5be4101f6cc902516e"],["/movie1.html","486a26eec0915912ef84642f7b8d91e1"],["/page/2/index.html","5dc2712c260ec60c4a2ea860c215becd"],["/page/3/index.html","6606552a33f51a4540128a8fb0fc62a8"],["/page/4/index.html","e67c1af6fc9dda7fc18bc613a1f82b30"],["/photos/index.html","c75be80d4c83ec0dfc74b34e43c38e7b"],["/prim.html","ca473ed904c171f50aad19c576cd2418"],["/pupplesort.html","0da7ceb0db2ed4ffe9279729d81655ca"],["/quicksort.html","d0fd578234c878e210da6d5e569b8325"],["/selectsort.html","54eff292d31e09ffbe4649ae86753a19"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","97f79f9c1da8ed0c16c21b29e73144a8"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","4ba7e8e65f5fc257b2ca0acf7c7ef815"],["/tags/Hanoi/index.html","34b0be152977d3f27b466caa6464045a"],["/tags/KMP算法/index.html","f0dd2ceb091a4a5000981fa4790c00a4"],["/tags/Kruscal/index.html","ffc656f8e4bf0a3e8b3c313104a6bd71"],["/tags/Linux/index.html","d1518e90156905f1c8db7cc881d65917"],["/tags/hexo/index.html","9e849a5dced81ef142d19e86da89fd5d"],["/tags/hexo折腾记/index.html","19c8797073bdaf53920b23811ebb97be"],["/tags/index.html","a5e0cfdd13e4bf9970c307b345200388"],["/tags/prim/index.html","9362d6ee1a39de8844406a1fb7fa46c7"],["/tags/queue/index.html","b7c0b39abddc2c2e3fac880c2a289d09"],["/tags/优先队列/index.html","238f378a0bd7df3d0d4769d90ff7a8ab"],["/tags/北航/index.html","6a0e2b390ad42ce8a1ed80016bf8d165"],["/tags/北航OJ/index.html","de8385adb0ded5a4af8a41867c577843"],["/tags/台词/index.html","96fc0c78b57dfd634d90683a97a81a59"],["/tags/命令行/index.html","a5d2969fc2d3b2f881496887c57bbd50"],["/tags/图算法/index.html","f327617b29e2b8d584eba23ab5fdb890"],["/tags/感想/index.html","1e61095d708eb57ab3b874c9d4c64b41"],["/tags/排序/index.html","cced2dd82fc35be08d6bf3b30368e189"],["/tags/最小生成树/index.html","0b8081e66d48b31e050fc613e44a331c"],["/tags/最短路/index.html","a5fdf697e3bd3e5535283c11b7ecbe60"],["/tags/模板/index.html","946687c8b9b0e9591481fcf718671792"],["/tags/模板/page/2/index.html","d7791f80249c427312c7bca3ad70f53e"],["/tags/洛谷日刷/index.html","3d4070ffc67b0614f561e43c98ac9d45"],["/tags/算法/index.html","255855f68486d83f0b80346826b37b81"],["/tags/算法上机/index.html","970dc4070d72eb3e9cb56c928b3ae934"],["/tags/算法学习日历/index.html","38d58c1a1bf1074f047a0ae41c67857b"],["/tags/递归/index.html","1145d509b8830edb64ad81b9b08bb831"],["/tags/部署/index.html","0f1b7feb02c7560c102be6f8021eda2b"]];
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
