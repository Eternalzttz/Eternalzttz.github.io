/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","bab85e34f1323ea4a73c780708f17969"],["/404/index.html","31c0f3eab634592e44ff7844f3b474ea"],["/BUAAclass.html","46a517226e4be1e1baae3a9d22bb399e"],["/BUAAclass3-1.html","2e6ecab1e4f1bf0df92e5d9b7c08b2b6"],["/BUAAtest.html","793f03d01b2ad0a9e5f2c3f3419ff7ef"],["/BUAAtest2.html","9a70d482d9e3f23449435a8d7186a918"],["/Dijkstra.html","1b8ef552a82bc17d2e893ba17b3b671b"],["/DijkstraPath.html","f3fd84ed318d85bdea3c6d64ebb1960f"],["/Dijkstraheap.html","597e884c358f005397f359ab05bc4b64"],["/Floydpath.html","a051494e275a51ebad6597994677d1ce"],["/Hanoi.html","1efe8f0f28762172f0ee11528163e81c"],["/Inception.html","dc7d51a48d4a4059b26acdba2bda9e0f"],["/Linux-rm-rf.html","cc67003cbbd19de0fc1e42db4e26a4c1"],["/MyFirstblog.html","833afdfc3a9c74eb8c829a23b726dd2f"],["/SPFA.html","275344ce068948dd9ed0e6d16af9c635"],["/SPFAforpath.html","11555f297d9285d7cb36c4f1224de066"],["/STLqueue1.html","656fa93c3f65b5c22fa1f6e49d3538ba"],["/STLqueue2.html","7a5b06b19040fd070b2f65550074c2ec"],["/about/index.html","9b9ac9d64e0f413d537a125625219d9f"],["/archives/2018/04/index.html","b6cbbb878dca830e1735e7b7fdc98feb"],["/archives/2018/05/index.html","2df4f8e75247a62a3e104348e072f393"],["/archives/2018/09/index.html","6869ca0ef009d9fc0128fc631b7182c5"],["/archives/2018/09/page/2/index.html","e0f44172595ced664e2e400e1240b027"],["/archives/2018/10/index.html","2a3cad9189d3095473f82c6516acd4c2"],["/archives/2018/10/page/2/index.html","adee683cdc043e56c18d11c27245bed1"],["/archives/2018/11/index.html","2143275f45ac7604ac99c0f17bdbd306"],["/archives/2018/index.html","ac7a5907fb21d09ad715a98fcc4f43a2"],["/archives/2018/page/2/index.html","9e936b9471011371446522f20d356683"],["/archives/2018/page/3/index.html","93bf64cfe2de072378a1b71fb0dd6169"],["/archives/2018/page/4/index.html","1d66726a18b9e490cc2a65b69dc2957b"],["/archives/index.html","24b7e441569922123c69c3096b7ac392"],["/archives/page/2/index.html","d686a8316b41f5c6b027456140becb62"],["/archives/page/3/index.html","fd4324f8799f3f846174f98cd9980e55"],["/archives/page/4/index.html","9fd1f0508a6d0f045e2727df061438d8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","633fa447671dcdffb3a084b756e13bd3"],["/categories/STL/index.html","bf56301e6e42c74175349fa34977a7cf"],["/categories/STL/queue/index.html","1ff911b62379aec05d2914e28d1a15ec"],["/categories/hexo/index.html","3c8350555c86dd7ece92df1eb7da3b59"],["/categories/index.html","e1af0d938e87ccc712862748173bcc26"],["/categories/心灵驿站/index.html","0f8ac87bcc114bc22ca20558c557db47"],["/categories/心灵驿站/影片/index.html","bd4d5a62df373cd3fa2fd61af3d4d905"],["/categories/心灵驿站/影片感想/index.html","db1e7fd63ad302b06127adbad6352ece"],["/categories/洛谷日刷/index.html","5f75de063bc39d2a784a02367dee5d7c"],["/categories/算法/Hanoi/index.html","025c4425a09c22a2ef407734e43054bb"],["/categories/算法/index.html","82b81c0e39e01fdf3fa8bb1349de8771"],["/categories/算法/page/2/index.html","f38f4a027c323b09f19df851bd10be8f"],["/categories/算法/图算法/index.html","acbfaa3f388ef662c4fe629131acd184"],["/categories/算法/排序算法/index.html","77054166f945f89afa04c214eee96462"],["/categories/算法/最短路/index.html","932986c88384be9a8ca5b5760aa983de"],["/categories/算法上机/index.html","7bc3f123f511570a234ae604c05e8a2c"],["/css/main.css","c4eb332e43356c82a9939e8190426b57"],["/floyd.html","c9490fb115c3e7033e96c4f2100f875d"],["/heapsort.html","bd4dfdf37d4919a80dca3604d6e7e946"],["/heartache.html","a992829fb9f6b3b87e891376d250e826"],["/hexo-next.html","1f8305b3ec1b8266dfe27334add9442a"],["/hexoMV.html","5f8f43c14dc59768c3e0fa2246f0a07d"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","17818e9b91b785ac116e0148ad64b250"],["/insertsort.html","cf453a10a0838b2cea1b7213d7ac0c5e"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","b63669d86bb2ce1a2d7503a571f53319"],["/lib/album/README.html","cff403e525ef16da89038c7bbcd523a5"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","5fb45eb13c3f88ff15479104f4982377"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","c4b902f7011d26fd6c3259b75f8f49ec"],["/luogu22.html","80274e023f5150e437fe2be0f9972716"],["/luogu3.html","d8ecce126699a35101313b3bc26a9cc6"],["/luogu4.html","9f669cf6e083964a0633e4d45dbe0f8f"],["/luogu5.html","646de5dd280ea1dc9b45d494b9bdf9ca"],["/mergesort.html","e6d2ac7aecd39899143bf5eeef1042f4"],["/movie1.html","d0b3949eb4eff2532ddaa614ae6da7b4"],["/page/2/index.html","dc2c471a57ac82e53d9625af49e0eff7"],["/page/3/index.html","2224f03f20ddb0cb5bba83740e02fc6d"],["/page/4/index.html","8dc3bf95e195071ed34366b7ba495cd4"],["/photos/index.html","f1a4d48f6836e0d6148cf1388e02577e"],["/prim.html","162dc1ba893f8d8d42ec990683667ba1"],["/pupplesort.html","a14a2c657504f36c495695e7c0129f35"],["/quicksort.html","50bc78913ec784e1e859264422463a19"],["/selectsort.html","a78c862dd26eba265c9f3d48a985bcf1"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","909b414affc1ad9eb7eec848b056b957"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","d153721fbca50b82c1eeec2d8f909733"],["/tags/Hanoi/index.html","e97bc7299095533bc2698a2cccc314ed"],["/tags/KMP算法/index.html","0cd21bd99f16d98250ccba20d3f2c3c6"],["/tags/Kruscal/index.html","fb892d484ad0e57865440295642a6149"],["/tags/Linux/index.html","8afcb175cf565518ff9fd4ea3bac979d"],["/tags/hexo/index.html","71a02d6b850e080a6fd785d755dd6f7c"],["/tags/hexo折腾记/index.html","bce488e41ce881a8ba6d0d69e2e36f79"],["/tags/index.html","e30355a03a36c91a189c73308f0941eb"],["/tags/prim/index.html","0e971073a2d06ab0c796b3f1452b4278"],["/tags/queue/index.html","dd0a684693849a25f7c105498968ade9"],["/tags/优先队列/index.html","1464c6d9281520ad59c68880a23f929b"],["/tags/北航/index.html","d35d88d955be4ff60ff6d8b2f5574cce"],["/tags/北航OJ/index.html","4a63fb63dea6e0dc1a96a6c603800db1"],["/tags/台词/index.html","719297d91db3e2154b7d869164a8e18d"],["/tags/命令行/index.html","d35ad95c5b1d905d201e9e34c8ed2ac9"],["/tags/图算法/index.html","e9a4696b61a663783945ffe84a47a2fb"],["/tags/感想/index.html","e9f14a91b168647e9d230f6e8fc046f3"],["/tags/排序/index.html","ad6495cec3e563586d56ea5b2963f938"],["/tags/最小生成树/index.html","43bd206dcf08ee5fc8f5b4be31d2959a"],["/tags/最短路/index.html","1b7114f7ea142fe2366e2fa4f7e86ab1"],["/tags/模板/index.html","c57e7b8f88ec77e8264662e4f6a57541"],["/tags/模板/page/2/index.html","cad862978cf3cde12e74b07335afaeb0"],["/tags/洛谷日刷/index.html","a67abb482280a9bc554374ae10adfd7a"],["/tags/算法/index.html","7ddc04409edc42d096f0b49d0c7e618c"],["/tags/算法上机/index.html","4792a71f98dff58b748bb9771d8aeeae"],["/tags/算法学习日历/index.html","c7c87e9a0d84e43c2b2cacf6dff5b463"],["/tags/递归/index.html","e5b38e93583a166f478963279cee25c1"],["/tags/部署/index.html","c6adfdf5517933b27f1fa6feba9c1cfd"]];
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
