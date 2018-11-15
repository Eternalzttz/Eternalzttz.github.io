/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","8f0d8a7b3c92112972cb3fb0235a4346"],["/404/index.html","f86bc72edfdd699b7576b439dcc90f27"],["/BUAAclass.html","449fcc89b5b1cf688bd5f4fc33bde5dc"],["/BUAAclass3-1.html","c40482b8fef24689b4bfaea5c1ad48a4"],["/BUAAclass3-2.html","e348d00be836111b076a9e0d405faa92"],["/BUAAclass3-3.html","5e4812e819c09257b03f50abf03745f2"],["/BUAAclass3-4.html","5eac13224eb7bb2f250b01542dde5665"],["/BUAAclass3-5.html","23c47ccc24c1e5425bc0d2dea9c5b720"],["/BUAAclass3-6.html","9ed606d0a53b4790e1654416669a4a7b"],["/BUAAtest.html","54d1339d0cbe4a5ec930b5f42c818eea"],["/BUAAtest2.html","0082af3c90190ac307040357692154c9"],["/Dijkstra.html","84976ce2fdcf20f3a9de6b8d068e6bf6"],["/DijkstraPath.html","a06d86a756d7d99b6cafacdf09673a8a"],["/Dijkstraheap.html","b025f643b558f8cff021075e4cea536f"],["/Floydpath.html","4d0b204175e7a5078af26cb9105b6f7b"],["/Hanoi.html","ef62faa5ffc8cff966600ab2e4f761c9"],["/Inception.html","68f828c16f7fa1335421c2f7a3b5eaa2"],["/Linux-rm-rf.html","7644c551528b15a6d11298c5a6d1af3e"],["/MyFirstblog.html","91a9eeb407d538a3b40216a48b5eee3b"],["/SPFA.html","2d6366fc91c7587223dc37b6beec794a"],["/SPFAforpath.html","9baad628dbe82c22ead4493525f0e9b2"],["/STLqueue1.html","ff8d3f562d579601b2502b5e868b9117"],["/STLqueue2.html","9725746ae1c6ed528982f78a9235ec55"],["/about/index.html","22cd76ec1844ab28e137f709acb975a6"],["/archives/2018/04/index.html","e7a081d7b8d47b0d600974c3d2fcad42"],["/archives/2018/05/index.html","d0d43336646d9cb66b7c9008105bb476"],["/archives/2018/09/index.html","de97c96e0558f20691d6811bff66c62c"],["/archives/2018/09/page/2/index.html","9006590c18aac20d8c49494812762280"],["/archives/2018/10/index.html","2ba16916ecd7dbee8f6af24475c87f19"],["/archives/2018/10/page/2/index.html","cc046eaef30cee7ce8987cc9604cd11f"],["/archives/2018/11/index.html","becebc620942ef0b02f26936a1ec1f1a"],["/archives/2018/index.html","36130dbcaec9af10666c98f5db32c393"],["/archives/2018/page/2/index.html","7205517ca6b33bfd6f7b28c0efde1b14"],["/archives/2018/page/3/index.html","74c3ff860eacf7b9ed25dc0070008db9"],["/archives/2018/page/4/index.html","9bb98e4487d0d4e2e7eeaa464ffa8ce3"],["/archives/2018/page/5/index.html","a2d7f76105a01e26ec8ea44fa68c19f8"],["/archives/index.html","d941c27823ff34e9c365a7e7a45f4f4d"],["/archives/page/2/index.html","1fde0a46cf196ccfb360f304ce5187b2"],["/archives/page/3/index.html","c693973855af5e4b0fe6008d6278af8b"],["/archives/page/4/index.html","71ac82d929050e0fa8584e7b0e3ca077"],["/archives/page/5/index.html","2841155843718ebbd172a0e3d10fbc03"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bsearch.html","8339eb67bc718caf422e73fcfa45dbcf"],["/categories/Linux/index.html","9074fd8389e2b679587ad24602a9083c"],["/categories/STL/index.html","ad08ab41ca64f80bd431751084eb5bd2"],["/categories/STL/queue/index.html","8d7218f9f095e4e3e934d89192cd848e"],["/categories/hexo/index.html","ceba265ac00f0971d29401fe92bcd8e6"],["/categories/index.html","ed6f78ac84fcfd759d33664ca0481a86"],["/categories/心灵驿站/index.html","4c340cf35f719505d54fa9f2e1bb00ab"],["/categories/心灵驿站/影片/index.html","021782cf1be1e435ac86b5257b4632ac"],["/categories/心灵驿站/影片感想/index.html","f4303ba7d6f7b305cf101bbc32e2bcf7"],["/categories/洛谷日刷/index.html","cab2849e45351021a95c88422a627543"],["/categories/算法/Hanoi/index.html","6b037c11b0a4cae1ef4e51cf1aa088b1"],["/categories/算法/index.html","84ec103be9954b393783a71bd551ddbb"],["/categories/算法/page/2/index.html","a0bdc208a29ee244730a56e6ee79932e"],["/categories/算法/page/3/index.html","d731461730026bed8947c1a1286b18ba"],["/categories/算法/图算法/index.html","cdeefb174d262370723fb9d8830227e3"],["/categories/算法/排序算法/index.html","281bccf73efba71e15de570def835076"],["/categories/算法/最短路/index.html","3dfbf25f9cc47e691767e8648ec2333b"],["/categories/算法上机/index.html","472e7e0e6d989f66b54e982806ae563d"],["/css/main.css","ae3a469493d171958d9ace0f7c04eb5e"],["/floyd.html","5b507026ce78fb652a1dc82ddbbbcaf7"],["/heapsort.html","5699080806c3a8b8ff0dbb9a8f962699"],["/heartache.html","304cd3976cdd46ade02b9da5dd07f85a"],["/hexo-next.html","4773e8369905102b65bc75636b3b17d9"],["/hexoMV.html","447942c74627ba8a30fcd3ad8d3cecc9"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","8ec23f42ae7487677beee29b9e9c1242"],["/insertsort.html","024affdd7f2c0661398d7e16f0ae5f44"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","fa987113c0d0bbb154cdd87c9ce4c8ef"],["/lib/album/README.html","6a21158bef1f7f9b12305102dd7850a2"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","3de91c0fd1b97871c34cfeabde992a9b"],["/luogu22.html","c0508c07ab60337079beb7f9843595a3"],["/luogu3.html","2d7b5097c56ca53a34653d1974f9f034"],["/luogu4.html","13b603f58ebe6591ed705ae7d63504c5"],["/luogu5.html","2dbca188f6301073eb045dff9c617390"],["/mergesort.html","db60f630c80a7c33021351cbc5efd7b6"],["/movie1.html","be9147486c99c1d225078a94b42a1104"],["/page/2/index.html","7611147f96d6d098fbbdcba8877ccb56"],["/page/3/index.html","1ed93bd4f2187be1b74437bf0c7a808d"],["/page/4/index.html","bb5b961d15a702ea4a0c5aebed05f31a"],["/page/5/index.html","d4f3cae2d1fa8d1601a1eb4469140379"],["/photos/index.html","315a90ce274d31c4f845f267c8e0bd29"],["/prim.html","ce8f2288987ec366445184544da82758"],["/pupplesort.html","860ec63db0e128a2d0dc4f2340c93016"],["/quicksort.html","530b2d4548b6fc983d3b4f6cfff5ce38"],["/selectsort.html","7c0c12df9214cfcab7a6e5720c664077"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","c69d5cdeca7b2dba7ec0575087f42158"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","3fb5a23325b3cc17814ce702ecb41769"],["/tags/Hanoi/index.html","37c3a156d6ae4a974a661b2cf6c22f00"],["/tags/KMP算法/index.html","e509d42799cb29f807b09e46615d332c"],["/tags/Kruscal/index.html","ac2aaf67d8bf1b0531ed50c1a4f27a4d"],["/tags/Linux/index.html","cded5c7788815624c497d7a81ce55954"],["/tags/hexo/index.html","3ababedbfa7d68dde9159e349a623075"],["/tags/hexo折腾记/index.html","716afe8e33c29599bffd45375ebb8703"],["/tags/index.html","b029a2a9e06622ee1d1235def948cca4"],["/tags/prim/index.html","5539507218333d00a6c9e1deb8bb5a44"],["/tags/queue/index.html","6559a4efee320ae47d8c4dfbc96d6423"],["/tags/二分/index.html","7f1e90f6f832771850cccc7b3b56ac4c"],["/tags/优先队列/index.html","51d3c49515eb0aecb191273e2f076c6a"],["/tags/动态规划/index.html","c581c4f440996e1236877dc8963685de"],["/tags/北航/index.html","0c0132fd3473ff537e5a4f853589d917"],["/tags/北航OJ/index.html","35f9c1f7b3ea19fc38aa0863990bca35"],["/tags/台词/index.html","0d11078e2d0c4bcb40b1519f15ad81cf"],["/tags/命令行/index.html","ee2cb4f528b5453cb6035c7e485d5a2d"],["/tags/图算法/index.html","cdefeb7b95134215b8325eda81d4fabd"],["/tags/感想/index.html","fd6aad8221c64b0b82120dcc9072a495"],["/tags/排序/index.html","ce74c1319d1dea3847541c3b4ed84a53"],["/tags/最小生成树/index.html","9a231ac6ef49e2cf997ce0eae29b0fac"],["/tags/最短路/index.html","4a51a7accee4c4731623a09d1db3b522"],["/tags/模板/index.html","288a22689ef329ecdfa36b8432fa9a06"],["/tags/模板/page/2/index.html","c42a0eee15f58ad79593c5a731b50c79"],["/tags/洛谷日刷/index.html","34d747ec537d20479311b2d50d3ce9de"],["/tags/算法/index.html","f5e30ba0dc4b237a1bec776c4b1ef747"],["/tags/算法上机/index.html","d2c5c042b3c7dbcaa60955eb7f1cf904"],["/tags/算法学习日历/index.html","1ca1f1521a9a6295dbe7c4a576f91c32"],["/tags/算法练习赛/index.html","a2698b8bdfb0ff7a7e3b7b970d089a5e"],["/tags/递归/index.html","1e74bcacd33b7a4c2272cf906189c0f3"],["/tags/部署/index.html","55be2092743e1aa43521163042717ce5"]];
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
