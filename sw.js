/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","3a7acf7e948df79d60c301a2c6247c3c"],["/404/index.html","41edbb43f67a38f6e33dcbca508896e5"],["/BUAAclass.html","13c4c9a26eaa8cdb6468407cb65800ed"],["/BUAAclass3-1.html","33bdb2db7847a931d10f3ab42daf6b00"],["/BUAAclass3-2.html","ba4f4adc1b0e8d5501d9d3892c96550a"],["/BUAAclass3-3.html","ef9c4d39bd44e52f2f51f2440eb9620f"],["/BUAAclass3-4.html","7b42a19c083f360b1258a41df1900234"],["/BUAAtest.html","f383cf4e414f3b3f4a7b12fd4eecd4df"],["/BUAAtest2.html","4588200a9281a17822f388d0b25e69be"],["/Dijkstra.html","6f05106a3f9f1690978a405c5f1f8188"],["/DijkstraPath.html","54d4b75a17dfa222198bcd8696668fd9"],["/Dijkstraheap.html","2cf63f851b511903520d469dfccb5e65"],["/Floydpath.html","7553b7410695abf2a18757bfa1b34fec"],["/Hanoi.html","030952383dc8b06c1f3b1cd6ef0f924b"],["/Inception.html","55b5895e5622be9fc85231899cf1a410"],["/Linux-rm-rf.html","f3eb00ae673fe7acb1905ddd52294545"],["/MyFirstblog.html","ea9afb1088293f70d373fe4ec8292318"],["/SPFA.html","fea3b3876a65da34cdeda01e968d55ac"],["/SPFAforpath.html","f38717fb906c663d20d62b862316ba76"],["/STLqueue1.html","45ed8b9e07d7d094bc19641538a22bff"],["/STLqueue2.html","9f974b585bf182349edfc703ab2c604d"],["/about/index.html","6cc6c2254c04ec0b58fb1202b25876d4"],["/archives/2018/04/index.html","71e1ae858300933be7cf14c8a0b50e50"],["/archives/2018/05/index.html","b93f5e3f1f15b883bbc7bcc4db1efd0d"],["/archives/2018/09/index.html","f4a7cc26771385fb5ee3bcce77aa9443"],["/archives/2018/09/page/2/index.html","a87f823b281c6b0195fa61df85efec36"],["/archives/2018/10/index.html","937060bc7af0f7a72c786ea27759ef72"],["/archives/2018/10/page/2/index.html","56778b7b44dc4dec3cf980732512cafd"],["/archives/2018/11/index.html","728d79e482adec8aa060af933eff107c"],["/archives/2018/index.html","2cb6ed30ac92f7f6ba3da22b95d4b301"],["/archives/2018/page/2/index.html","84c8a6d7b19d0c4815c1b81d7d939826"],["/archives/2018/page/3/index.html","7485eb9c3a7da35d0330b3f9515e3f11"],["/archives/2018/page/4/index.html","c47cd4cf3e54603fc84dfc55a5a204a8"],["/archives/index.html","9684d75f37b3b3829f5486283aa4425a"],["/archives/page/2/index.html","e0d780e416ba4ec8835b667ecddcb50d"],["/archives/page/3/index.html","a0850864a438a76bdbdf289e6ce8d643"],["/archives/page/4/index.html","60f27463e83b923c093b0d930ef03135"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","08db111dc50fc8ae5c9de1d074955168"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","9acaa6920d3bd5ee09707cdca8852a29"],["/categories/STL/index.html","61d9f84a5ca886d6d5aa6b3a1d84dda8"],["/categories/STL/queue/index.html","cef3fed09d31a661922373d5f752de30"],["/categories/hexo/index.html","4a89265edca6f39ea463cb946a9ea460"],["/categories/index.html","14125b10398207e28d92ee725c1c6036"],["/categories/心灵驿站/index.html","4734926f054921be4ad3eaa9615909bf"],["/categories/心灵驿站/影片/index.html","db6f4a324e0c7a21b3742a58966af2a3"],["/categories/心灵驿站/影片感想/index.html","8e0b47fc9cf41e494270dd1c2884c0a2"],["/categories/洛谷日刷/index.html","6995bf9b002492c219476a17470fb137"],["/categories/算法/Hanoi/index.html","f92e39578e66056fad33d3bfb327b9d4"],["/categories/算法/index.html","927e4c8ba1f47b70d94699394c146498"],["/categories/算法/page/2/index.html","1e886a9afd72553ff7d4f096e44122ad"],["/categories/算法/page/3/index.html","a8ea94945e9a6148eb6736e59ff4e449"],["/categories/算法/图算法/index.html","b0639ae4745f9a98e91e42d69708fad9"],["/categories/算法/排序算法/index.html","3604c6dfe78c95a45f3474484c63a519"],["/categories/算法/最短路/index.html","4591fe5a3c6d0200540f62a6bf781cda"],["/categories/算法上机/index.html","dc4ef8dd8711c97fd6cb3094b59e3374"],["/css/main.css","ae3a469493d171958d9ace0f7c04eb5e"],["/floyd.html","434f030a1acb586319b80499d03ee2a3"],["/heapsort.html","1b7fe8689067fbd5c863d0e89833935b"],["/heartache.html","c5499d71500f4c4b79d76c03e05a462c"],["/hexo-next.html","f90b9e4e6ef065fe919300eabb313b9c"],["/hexoMV.html","1dee5e7e980a1ec4a0dadccc67a5613f"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","8803e78c837b3b8cb897fdc1761e614a"],["/insertsort.html","6e1ea8f2bd1c53a2d45101bb9a12f0da"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","f76819b38fcff0e8b2407929c9777dc4"],["/lib/album/README.html","b36e0b61bc047a4095a1242598a75669"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","c1a787f662877886e341cd3c46876cab"],["/luogu22.html","0a2f3f223f024d23b1846c3cb450efea"],["/luogu3.html","51f5eccf1c30cf375506df4ab41c356e"],["/luogu4.html","51d5fe22c36b1ae2c081347dad1ebff1"],["/luogu5.html","a8ee8f4abe2d3895d98ea9625c955ed7"],["/mergesort.html","f4eadfb2f6d0b6cff160d6383fc5646f"],["/movie1.html","92d1f702def67658bbb7065d5cf3d823"],["/page/2/index.html","4653a3963b1379293c5a7476662fb040"],["/page/3/index.html","ff5ed96fe8043c765d18a2a12bb51052"],["/page/4/index.html","12c45f70ec3ec7b833c75a9aa548bf5a"],["/photos/index.html","3630fbc93e884c4a554a1fdf355fe0f0"],["/prim.html","01ac045a6fd17cccfbad7932b3e63321"],["/pupplesort.html","46bd06dcbe75740d2e5ab3731fdc2833"],["/quicksort.html","7356089510bc42d178af561dc40e4a22"],["/selectsort.html","a984a3af096e8b49dcd05a302706ef21"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","5a0d18a7d88eec42efbdf8123a02b35c"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","ef0a3e2998176ac7d3e852c0dc15ef09"],["/tags/Hanoi/index.html","ede91f9353ad72ec4259a75f3f6d73ad"],["/tags/KMP算法/index.html","f45eb6f5d4bceb681d02c725b24474f5"],["/tags/Kruscal/index.html","7ceb1fd4d122a6d0903e3eff0c868b99"],["/tags/Linux/index.html","879d520df645b373db3c074605b65ffd"],["/tags/hexo/index.html","a1d91a0318570d804ef2e64631c9cdaa"],["/tags/hexo折腾记/index.html","9d41441617e6ea9aecc978bb40f82acd"],["/tags/index.html","e1c66722f0e627ee08916605709ea564"],["/tags/prim/index.html","be6509bc710e1e6cc4a000cee71fc644"],["/tags/queue/index.html","0ee0622ad899d681b80eedccf5fae635"],["/tags/优先队列/index.html","4770958281ed4d99d5b1080a2cf4b6f8"],["/tags/北航/index.html","bc0accd5f5c65c9741a4c86f2f792c93"],["/tags/北航OJ/index.html","b8b0f2ccadf77b77e0e35e8da3da26ad"],["/tags/台词/index.html","4f9cfb816341f17ebf8a721f284c3715"],["/tags/命令行/index.html","5f0bf9b9dcd65a082563028eedc6f3f7"],["/tags/图算法/index.html","2062ddc6c1279149e1cf4b73509c9966"],["/tags/感想/index.html","33e43634a96d56667ff0b8e301351819"],["/tags/排序/index.html","e7d32d49103d442b19014357d45d19ba"],["/tags/最小生成树/index.html","c8a5fe158c451de13327d3332e925c9f"],["/tags/最短路/index.html","c453965dade21dfb2e3f8e9a1ada4e1c"],["/tags/模板/index.html","d9d4c243b331092b8735aa94e198e466"],["/tags/模板/page/2/index.html","5f00761e323494637d40caf83a7e6f6f"],["/tags/洛谷日刷/index.html","ef89fa230d1ccb16b8c9c5eff01f17f7"],["/tags/算法/index.html","8a792e7c06f41cdaa72d21da21556276"],["/tags/算法上机/index.html","9de7e9a3abaa60b2369ea90fe907f23e"],["/tags/算法学习日历/index.html","28bfe8d3c99fd714ce76151836163866"],["/tags/递归/index.html","432d746bc209001ba486e42af5fa8109"],["/tags/部署/index.html","90eec63d34095cac0cb34a5c35010389"]];
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
