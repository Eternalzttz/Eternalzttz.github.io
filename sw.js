/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","6b674615638fa47a712744fb19ab26e4"],["/404/index.html","7399ab4685c3c6fa8a9c2ecc206b99d7"],["/BUAAclass.html","77ac2d7cf8a303dd1bba933681ba6b17"],["/BUAAtest.html","f6d41d139f66ec9b5aca5fc7bea88dc7"],["/Dijkstra.html","3cd912f949476658758c90561cd0c756"],["/DijkstraPath.html","0ab87c330f59189e773012ae78489ba3"],["/Dijkstraheap.html","670507e5b7a5a1537e554849feebe770"],["/Floydpath.html","b78364656c96ee3307cade76173a5973"],["/Hanoi.html","3a1753b3787d5d490a949401aae9070f"],["/Linux-rm-rf.html","dbe72b8165bd199ca7a637a28c73d7b4"],["/MyFirstblog.html","ebc4982e84cbc2c3d3d192ce6c9869c4"],["/SPFA.html","b41f8a695903f90889d38f3eb2140a9a"],["/SPFAforpath.html","b1884fa1185b615c8a8032fcdcd2fc9b"],["/STLqueue1.html","bcd2275ae2ec66d8f261dca4b4c6ea8b"],["/STLqueue2.html","e530f6796ac50b6e07298e1b5c07b8f7"],["/about/index.html","d98d2d00284468673090abf006c38481"],["/archives/2018/04/index.html","84d19747e67430e0abdce6dbd0b8713d"],["/archives/2018/05/index.html","80040f07bf946d37670bbb741201c927"],["/archives/2018/09/index.html","e610cc6a214aa252cc25f161a17e4307"],["/archives/2018/09/page/2/index.html","07c9a1167d48d25dfc0246c2e5ffd9fb"],["/archives/2018/10/index.html","bf7016113f8f223165a339027d3d80dd"],["/archives/2018/10/page/2/index.html","33d479b7eafae15d912c9ff929d72838"],["/archives/2018/index.html","a207ffb54fd48767b60c6f7291d4e884"],["/archives/2018/page/2/index.html","cc9a0c2c8e65113076b4d90069c64d9c"],["/archives/2018/page/3/index.html","22beb94bcf6d959afe63ae7040f5500f"],["/archives/2018/page/4/index.html","dc74a35fbb6f6cd6f5762a47c96a25eb"],["/archives/index.html","2721a2b0c9bc8e933a7f67f1cd33e03a"],["/archives/page/2/index.html","27640d1ae3124d24d5a551f71d3049ac"],["/archives/page/3/index.html","b645645a5df7067a961612ed665f0b1b"],["/archives/page/4/index.html","fc1985bb87249f615d2eeb007eb4ca66"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","08db111dc50fc8ae5c9de1d074955168"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","a016764211288e380267c5158cb353d7"],["/categories/STL/index.html","8f05eb33a446482b23ed3f2b9ae6c866"],["/categories/STL/queue/index.html","da7f62b722db0a04a49135aa78f30477"],["/categories/hexo/index.html","250be9580392d04be89971ae721e444e"],["/categories/index.html","02abbf7a8c852fe2f1acbc53f49e6dae"],["/categories/心灵驿站/index.html","008754f5e38214543fdd92bff013476a"],["/categories/心灵驿站/影片/index.html","119fc723022edb3758baaf6a3ef4ff85"],["/categories/心灵驿站/影片感想/index.html","d2357e9af8c5e6148a139b502c922077"],["/categories/洛谷日刷/index.html","a592e25b70cdb1119827042677b3c978"],["/categories/算法/Hanoi/index.html","08260c163edb3a503b6f02fe88403c25"],["/categories/算法/index.html","9211e57f8bb21c4cc4920e4aa45cf099"],["/categories/算法/page/2/index.html","f8e148dc78c0f3f29dee2c66557f0bdd"],["/categories/算法/图算法/index.html","910bec4096b503cc7bd8525ce306e52b"],["/categories/算法/排序算法/index.html","85fd3eae06354b626e7769bf648bc025"],["/categories/算法/最短路/index.html","3c1c240c9d9cae2d36d77206ca21e59b"],["/categories/算法上机/index.html","440f1a426d6aa2241e549f76aeeb7080"],["/css/main.css","c392657569135bbea743e16f3d6d4896"],["/floyd.html","64bfbe257acb759eb98a15cfa7757bc8"],["/heapsort.html","dc92df557aab2ae3669816d8f7542700"],["/heartache.html","5983660f2348a33e0ecf5f16e5af75e7"],["/hexo-next.html","8754ad4cbba0289a76bee01b9aab5ec0"],["/hexoMV.html","28612487b720a4172dff2cdd0b41f815"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","82025d7ac8795a54c3bae58e0906270b"],["/insertsort.html","8fae4d8b9fe1f622780f4e9412579277"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","8fe79f6d4168f6c21da9436de1a2c826"],["/lib/album/README.html","bf1bdca493fbaae64febf34b5309840f"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","bbabdb76fd20a789c77d472ba2e79178"],["/luogu22.html","bdd83026f089e2e59f6d188c33e8e79e"],["/luogu3.html","873f86d29bb808ce98709b40bb7021be"],["/luogu4.html","e976f50d5e20296a45b9fa5fbadbf58d"],["/luogu5.html","604877f1bfd45b2211467c457b33c089"],["/mergesort.html","9ee578a770c9b1e428f996bd34817519"],["/movie1.html","1d9f37e497641c859afbb9be77630016"],["/page/2/index.html","fc737071aa2d29c550ffdd151bf3599c"],["/page/3/index.html","879315aafbcf6d815a45c3570c401b38"],["/page/4/index.html","a85b23c2447e41056c7b511bab27122d"],["/photos/index.html","b317b9f86de09d21e70b66e79cf04ed4"],["/prim.html","c8436762129dc1c9ae493172f8273094"],["/pupplesort.html","52790d737bad22401c5c2881f7ad6ec2"],["/quicksort.html","4ed42469372eb0528ac22c0917ac25e1"],["/selectsort.html","0c5ba24c2ee39589c07deeb695b147c6"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","ee7576c8f7f243eade80ab573938f5f4"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","8d5ae530ce0b6092fcbb74887ef59d87"],["/tags/Hanoi/index.html","dfe5aa2638226ddc7e5ef143d842e01e"],["/tags/KMP算法/index.html","ded124d469d6a4f5faa02c3ee71cf7ac"],["/tags/Kruscal/index.html","55f1213cca0bd8c632b4bcf047787d74"],["/tags/Linux/index.html","07288166aa8403b59acf537ba9648b49"],["/tags/hexo/index.html","c8df3e724d52b00b8d527643a08be650"],["/tags/hexo折腾记/index.html","77edef9780663f4017f86ceba880104a"],["/tags/index.html","c8ebd0502b924ab14a59575cbb88eb8d"],["/tags/prim/index.html","efd7ee875fbd11db3a76a250c86ef8eb"],["/tags/queue/index.html","ec9b8a385a6d8b77af40a6d112929040"],["/tags/优先队列/index.html","e0399c737740ea6224832c6ee5cd77b4"],["/tags/北航/index.html","121266e3e574866ff58b7f686e94c13b"],["/tags/北航OJ/index.html","c831fe437a4be524e4c9589dc2a42909"],["/tags/台词/index.html","1ca891869bdc911acf678c51bb4f2bf8"],["/tags/命令行/index.html","6fb33460b3f5ac54c9a6cdc960cb6f21"],["/tags/图算法/index.html","eab388a99e1305b2b161c8eaf21430fb"],["/tags/感想/index.html","41b502351350fc2068a64832c5bf08c0"],["/tags/排序/index.html","1df14afc8356a21afbcab5984adf2795"],["/tags/排序算法/index.html","fdf7c6d9c072ab48a4253059c35af9df"],["/tags/最小生成树/index.html","6b723cadf2b5e8d2ed6073575c3cd4ed"],["/tags/最短路/index.html","dc0c866c369731d36b860e0c3852c81e"],["/tags/模板/index.html","ec9f5f15dc7c0187c6e64d36d33c23ab"],["/tags/模板/page/2/index.html","04a165d55f50091eea99e720affd3666"],["/tags/洛谷日刷/index.html","5405f59baf0a672ab79caa6f75acb3eb"],["/tags/算法/index.html","3c5d98bb045dbf6f6eac26ccb43aa071"],["/tags/算法上机/index.html","4e43253748f957cc610ec9b9a84677ba"],["/tags/算法学习日历/index.html","a1bcb09163dce5ffbf4ec5505d737562"],["/tags/递归/index.html","9c70da802fc32f6db8da414adb62993d"],["/tags/部署/index.html","04badcad6927a56ce0f005641b0e46d9"]];
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
