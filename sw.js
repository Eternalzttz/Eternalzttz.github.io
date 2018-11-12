/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","68e8356d01264e9224df1521cb104d74"],["/404/index.html","5d38157e83f1836aeef796c2ba47dd1c"],["/BUAAclass.html","bacd957ec906948d203841bd0c6a5ae4"],["/BUAAclass3-1.html","d2ae8cdd1a7f27873ca6f2b330dad633"],["/BUAAclass3-2.html","fccfc241fdb4ad8840c599fadb470a2a"],["/BUAAclass3-3.html","fbc5b804a1f00b0f6947af8a511768ba"],["/BUAAclass3-4.html","2c383312f79a598af667ec74bfcb3ae9"],["/BUAAclass3-5.html","ae68819b94f4da07d6cc35447ad3bcc5"],["/BUAAtest.html","f7a2cd1f72f69acead76a529d62ba1e2"],["/BUAAtest2.html","90e8f57d9f33d207319b739e18f60cc4"],["/Dijkstra.html","7123b02dcd6929363d799b1b9652a253"],["/DijkstraPath.html","151a1cf0b6069895c7c0c17d87424c16"],["/Dijkstraheap.html","6eb0d94450d30f1c6ee843c7282e91b3"],["/Floydpath.html","cce9635215b26d09c3a059b40b357120"],["/Hanoi.html","5509b8b899f7e21e3bfe50d764b68917"],["/Inception.html","ae4e8cb5aea4b900dc5b3cb09ce0fafb"],["/Linux-rm-rf.html","da8caa4f2873ac178ef1393b9a1508b6"],["/MyFirstblog.html","0513f9118e25dc76c7951c5efbe59b02"],["/SPFA.html","c363bac11696dc7d7559c2395f924040"],["/SPFAforpath.html","01ba5c4a36cb18a5c35447a422c65504"],["/STLqueue1.html","fc83fae49a66be17826f4ac0e64da7c9"],["/STLqueue2.html","4f327a131e214ee34286700c0de20386"],["/about/index.html","8d7277c911bc1e93d0a8b5a91d4a9a20"],["/archives/2018/04/index.html","c6a5ecf1d907bc7321e25e82068295f3"],["/archives/2018/05/index.html","c00a3de3f820ce10528cd3a1c31c01ec"],["/archives/2018/09/index.html","c80ac4d7bd5f60c30ae84060bddc4bc2"],["/archives/2018/09/page/2/index.html","396200fc4c7de7685da937fb927ea09f"],["/archives/2018/10/index.html","b10d2bcddea3700da83aeb8994cb26d0"],["/archives/2018/10/page/2/index.html","ba664fac61cd1a24a9d8b27b1e9819e9"],["/archives/2018/11/index.html","9251120870b7d3b9761298829a78897d"],["/archives/2018/index.html","37b15dcb72ed8b7c89f5d0f5f1ed237d"],["/archives/2018/page/2/index.html","038b91f241333b19b9df9cae331fb3e4"],["/archives/2018/page/3/index.html","59316ac8bc98be8da513ae1acab5e9e9"],["/archives/2018/page/4/index.html","6b31745f0a314e2f9a0a40f8145925cb"],["/archives/index.html","2466a1ba5519fd9afedcbe2e0c599879"],["/archives/page/2/index.html","2c85a1b54160d62d10fd328e0a8721f8"],["/archives/page/3/index.html","153a23a04371f15864f5bef27e0a92a4"],["/archives/page/4/index.html","f8bf8e2fcf3f3705b722fa8a3de4b769"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bsearch.html","724aaefd9d5261cba2a04c9b8618096a"],["/categories/Linux/index.html","67f37a28653b849ac86cc9c0bbad4ff8"],["/categories/STL/index.html","29722f61c9a0e3f043911a64320e071d"],["/categories/STL/queue/index.html","f63f0185ef98227dd8b35e00475dec87"],["/categories/hexo/index.html","e6352dcdf0f3788bb84447a3187616e8"],["/categories/index.html","4547f06d0ad33223ce2f55eb376995dd"],["/categories/心灵驿站/index.html","ca48c83bea63ea15f75a0c24cbbda44c"],["/categories/心灵驿站/影片/index.html","486e3613ed4c4398b1cb012e82a8c8c7"],["/categories/心灵驿站/影片感想/index.html","5191b7c70308ef6eb2d28726ec6f8c35"],["/categories/洛谷日刷/index.html","475a28c3745be4de264103bbcfd4a0b9"],["/categories/算法/Hanoi/index.html","fad68a73915be46407dbbe0c8058be92"],["/categories/算法/index.html","68bf1a6ff4286a2d85e5997d2fad118b"],["/categories/算法/page/2/index.html","14bd12dde01cb800c182a14521faa738"],["/categories/算法/page/3/index.html","fbbe78c7286983f8af9895c0895a12e5"],["/categories/算法/图算法/index.html","283e964d7641c43e6f7b43cea1b03ede"],["/categories/算法/排序算法/index.html","0fce5a86f957d70ef41f8c0a51edefa3"],["/categories/算法/最短路/index.html","3a60c8cd822a7ebbc90de66b6b97543d"],["/categories/算法上机/index.html","be481cabd15b78ad40b6b7eb946f1bd9"],["/css/main.css","ae3a469493d171958d9ace0f7c04eb5e"],["/floyd.html","786ad9f55366260d4128b32b9fe37ca4"],["/heapsort.html","74832d0fa3be5e19bc2349511fa3abda"],["/heartache.html","76acd8b23d58850cab45a15b835b3f42"],["/hexo-next.html","7b815a949c7b7757de6ecaeabebd1c19"],["/hexoMV.html","7779984b0542277a9e26c19c916bb226"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","0913e1cf3d97601830207cc06f3dde9d"],["/insertsort.html","9e9d2b8d64d463ae3bc5ba19c8abca35"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","2078dd57650a7f762ee221a82fc30aa2"],["/lib/album/README.html","04d051cc265fd71d08d1265f274d02b1"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","0627f44e33fe29b07ff2ea1087d2ffc3"],["/luogu22.html","0139da1cf63b7015105903391f322029"],["/luogu3.html","2cdf797e4b0f461de7b68e39ffc863d8"],["/luogu4.html","b1e08810633633333a57452b3b4b0b3d"],["/luogu5.html","34b17f309dcab8ab96631ca9fc2f5242"],["/mergesort.html","55a2655785c6e21c55e3ced98b5ca973"],["/movie1.html","7d4a03903e78df94dd655926550c4ade"],["/page/2/index.html","a99604169aa2e7b95d394152aac41ab9"],["/page/3/index.html","461d095506ae70c66e1b1691eba05722"],["/page/4/index.html","e2b1388fb936cf88de704c407e79ea45"],["/photos/index.html","640dcf57c892af547ba94535f4e9d6f3"],["/prim.html","d99d2438f97851521edcdbe4f3357ff2"],["/pupplesort.html","35de84ae0cefe97feca047f9803a2d72"],["/quicksort.html","a72310558b7d554ff592de261edd8f1f"],["/selectsort.html","a24b5158b2308d7d94256ed98eb04178"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","c91c44b895432263292a40cb239b0e1d"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","98bff5c67ceaa611ffa284030ec714c3"],["/tags/Hanoi/index.html","ddd33220875913b9fd5debaacba27ca6"],["/tags/KMP算法/index.html","fcbffd2454075f1c1a04a8b8d5e463dd"],["/tags/Kruscal/index.html","bec1dd2f450debabbfedf8d1905779a3"],["/tags/Linux/index.html","7262be090ac12651d14ba6ac731f8d0f"],["/tags/hexo/index.html","963a058536797ad72c9c22f4bfd952fc"],["/tags/hexo折腾记/index.html","05cd1785c7099424ce5dc95d3813a3af"],["/tags/index.html","7845d305bb510a53c6c52d74bbf2e19f"],["/tags/prim/index.html","33730233b0ba8d2d69b50d95d0c96f40"],["/tags/queue/index.html","5f421b55c801f554c9eff0b5a60f941a"],["/tags/二分/index.html","0bdb2a94f881e1552d2ab3e14004ee04"],["/tags/优先队列/index.html","88ad1b0e04a4e28db06c5740b2721ea7"],["/tags/北航/index.html","8275367363f238c6fc1a4588af125df2"],["/tags/北航OJ/index.html","e99d273840e6a98ca0ab7234f2d29f78"],["/tags/台词/index.html","14c95d7a0cd4a44940a313321d12cf2a"],["/tags/命令行/index.html","6414c6a1ee922d9752dbf6c642586336"],["/tags/图算法/index.html","bb143362e83b7a0534120b292fb0570d"],["/tags/感想/index.html","724f372c0a9f98ee782eb748ae97a59c"],["/tags/排序/index.html","71484c9e4bec6b1b14f1d66a13285c79"],["/tags/最小生成树/index.html","2608c82c012f96f97b9dc7452d115e55"],["/tags/最短路/index.html","487d4f591e14029be11c97fef65cea79"],["/tags/模板/index.html","11110661e149e277ea4c376e1d4141d4"],["/tags/模板/page/2/index.html","dd7ec11bba4f638c73710e47cb183204"],["/tags/洛谷日刷/index.html","56ddfc15106a47a21316040964073794"],["/tags/算法/index.html","80d112c7d5fd3fa125a1dc7959d76328"],["/tags/算法上机/index.html","245831749f879aad26e9ca0b113509b3"],["/tags/算法学习日历/index.html","ea34dde4d10667c32c35b0fdb1b9f521"],["/tags/递归/index.html","d9e0ed58fbb016afc78b9833dc150648"],["/tags/部署/index.html","85a45ecde41251f6353df5e957885f80"]];
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
