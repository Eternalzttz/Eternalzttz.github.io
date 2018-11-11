/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","4656116c7ee6e7fe0d622f268b4b3f89"],["/404/index.html","5784e28483c25bbeb52158e08da0dd63"],["/BUAAclass.html","6f6d0d57d1e01e843615d146f33f8692"],["/BUAAclass3-1.html","c0bdbda76f968199eb16174b6373dc85"],["/BUAAclass3-2.html","3456a9d8e798c8f05026654af1fe1e4d"],["/BUAAclass3-3.html","925545273816925be7731b3bb040cece"],["/BUAAtest.html","cdbd3d293e009a98a03de0b0189ee138"],["/BUAAtest2.html","d92a8a646c859a444f01305fc311f226"],["/Dijkstra.html","3b43e3780d175d777b3a126639e5ae43"],["/DijkstraPath.html","917b72e5ef3d80df9fada46b441d0af9"],["/Dijkstraheap.html","8cbec851c42b34bb8d9a25dd699017d7"],["/Floydpath.html","0075734952757252486e462d3950b630"],["/Hanoi.html","5b9adf014abadeb811a1d1e269b67e2a"],["/Inception.html","d66b2fc61baeed0047c1f678d5f5a90d"],["/Linux-rm-rf.html","e0eb3960f18987660b3bea55076d293d"],["/MyFirstblog.html","c45d0ba6a849afaaa3724e05ea23fdec"],["/SPFA.html","1b57d3ca835cc95ac1dde8b28be5b634"],["/SPFAforpath.html","5b25db42560146c4c0f8d74f25c25763"],["/STLqueue1.html","82e7d129d165b0744c79b59ced19dd6f"],["/STLqueue2.html","59a5437d83defe2ef5de5a2babd9fe11"],["/about/index.html","54d096ef81de5aa5b4e06e7152e8e314"],["/archives/2018/04/index.html","6c7e5c3c6a61838938d8ba1e61ce01bb"],["/archives/2018/05/index.html","2a7c94bee4ef5396cc314b0e4474502a"],["/archives/2018/09/index.html","d3573bc6954ba26da5d72a5dede2e926"],["/archives/2018/09/page/2/index.html","6cfeff5bb485da885e2864624ca34dcf"],["/archives/2018/10/index.html","b62f3c1cdf913be10db1861f81f5ef6c"],["/archives/2018/10/page/2/index.html","03e64cf9ebc3e9a92ec37148544da55c"],["/archives/2018/11/index.html","04224e03a17600e5c4a4549a2e3c6a81"],["/archives/2018/index.html","7d1cb3be040343d76d72c96ddea51c76"],["/archives/2018/page/2/index.html","15a2304836faa7614fb0afa17d0021e5"],["/archives/2018/page/3/index.html","e7be352e95663fff0fade1e0521aa78d"],["/archives/2018/page/4/index.html","c07a42538677a2ff536e1ffa37daabb6"],["/archives/index.html","d506cb44e5be6a7824088b21c53142bf"],["/archives/page/2/index.html","2525fec56129b81cb8cfdad07c8d7409"],["/archives/page/3/index.html","bbc37e3dee0a3c40b5929567147cd341"],["/archives/page/4/index.html","8908121651f34db6346e8ec2ad624a41"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","ed08d296bd71d845ce9181ed7d79e8a4"],["/categories/STL/index.html","3b2a6b3abe5caf6da2dea612eaae1fab"],["/categories/STL/queue/index.html","f0b76fc172a2e253bf4e267cec729d9d"],["/categories/hexo/index.html","d61a7429eb9ee41c9eb1ae5ee444f78e"],["/categories/index.html","16d403a305faac1d03ae9ac603dbe6d2"],["/categories/心灵驿站/index.html","937253b8435d4832b780ea7289fbcc63"],["/categories/心灵驿站/影片/index.html","b3b391edd861c5e87fd7d63e50f63a98"],["/categories/心灵驿站/影片感想/index.html","daee62a03a4789501773e071a587e481"],["/categories/洛谷日刷/index.html","53c1c31ea5e26cbfaf559a97b8e133e6"],["/categories/算法/Hanoi/index.html","5c9525da04266189d1993c83e8814302"],["/categories/算法/index.html","123f95ae3f2c8e677d5863ffaf6d706a"],["/categories/算法/page/2/index.html","2961e7cd6e0521ced96e5a1097b900d4"],["/categories/算法/图算法/index.html","897d340c0b58ee38995a2688afd7ed1c"],["/categories/算法/排序算法/index.html","0b73c48f565a34b6c91a437c21c18dcb"],["/categories/算法/最短路/index.html","d37d443f50ec51d0d6d5099c4f3c1ef7"],["/categories/算法上机/index.html","bda16920ffe56882ada8248864688d9e"],["/css/main.css","ae3a469493d171958d9ace0f7c04eb5e"],["/floyd.html","81d94cca7a827dda5d2b67537f0cc8d9"],["/heapsort.html","ece6a77cd9b124172704cafd37b93526"],["/heartache.html","b5be5cf424bba1ccaadeaa685d6ea468"],["/hexo-next.html","3fe666a676f8d4ef56befe9d8063c124"],["/hexoMV.html","02ecdcd3e0da383900757e2e1053176a"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","960c7edf7e663bcc506aed6b2718848e"],["/insertsort.html","52bc88fcc4a6ddb5c46002251c9f9c2e"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","8052b7ea7d4baa7a4caa8ab0e20e03e9"],["/lib/album/README.html","bf1bdca493fbaae64febf34b5309840f"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","577e17a13740824f2d0677272d35e48c"],["/luogu22.html","9441c720b88d73e7db39db15d2d5e693"],["/luogu3.html","7cf268bce9b04517becffd043a324ebc"],["/luogu4.html","8dde487174c56777e0e57bca6ffd3fbc"],["/luogu5.html","0195aa074357577428917e8e54290e2c"],["/mergesort.html","69f2020bb3252653c4e0c7910e830458"],["/movie1.html","a436e02cc485aab3afacbc3939098d35"],["/page/2/index.html","57c4e265c6cd340512b63be29726a922"],["/page/3/index.html","6b0f739b24c79b9b927237ec619380b9"],["/page/4/index.html","bd059d8ba31287b9244d1752227a7433"],["/photos/index.html","b550d1bf46bf2f8e9eb69c6527560e20"],["/prim.html","86a7ad3c694b7a7bd95c99c32ad30c28"],["/pupplesort.html","a144c620807555944e62cde39b993baf"],["/quicksort.html","de9f935af177f5ba0e37d678ac7e4e60"],["/selectsort.html","b01b398fcb33ca31cfa3278b944a3092"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","031761b0c1ee6dbb7d4901b1b0e29b12"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","749d41b89dbb786d90398c2255898f8a"],["/tags/Hanoi/index.html","ed9a31f38d1c2bb7931b074ca3b839fd"],["/tags/KMP算法/index.html","fd5c39f52ebe0e528d4cc1965826a087"],["/tags/Kruscal/index.html","2418f1ed626104ee8e624e5d6c6e471b"],["/tags/Linux/index.html","88188cdd1cf8fd5ae221e43ca1a1dfa9"],["/tags/hexo/index.html","d0daabcae87db4cc9f2b436f9d449d25"],["/tags/hexo折腾记/index.html","0bc06b8b14bd06b2123d1d0bc26dbe7a"],["/tags/index.html","7d96e95e815e16f7cfcbd9e5d410ee20"],["/tags/prim/index.html","b166e0f9b87deda96200455f2c62e71f"],["/tags/queue/index.html","52fe2619e61d76d27e0867fd5e20c33d"],["/tags/优先队列/index.html","a0bc5c36f29bde81df54f68a5a2518a1"],["/tags/北航/index.html","304c41a516d936d91472b4244626932f"],["/tags/北航OJ/index.html","fdb83d4023d2a510447074de9850a198"],["/tags/台词/index.html","f28f1c46d08572b7584f5cad36b38664"],["/tags/命令行/index.html","629e58e7f9f535fb496251c5f87024ab"],["/tags/图算法/index.html","05deb9fc06b9258e6c6648ad99bafdb4"],["/tags/感想/index.html","583269839360b86fa4defc03c3a51623"],["/tags/排序/index.html","34d3ac5655f15518c729360d6fca73da"],["/tags/最小生成树/index.html","b6b6aeaa372a5baf84ede6790d8ea813"],["/tags/最短路/index.html","5a1ec2ba180d0eddf591cdaa3af9155d"],["/tags/模板/index.html","ae6c45f3eaa3b54325f95c86b22b640a"],["/tags/模板/page/2/index.html","ed76781afb3d926d84eb65d19cdf84c5"],["/tags/洛谷日刷/index.html","7b4a7e849cf80648b8b905b3c1e6e599"],["/tags/算法/index.html","a77ca273ca54246a20d6a7426f524821"],["/tags/算法上机/index.html","ea2ea378231ed1953270595bd1afe5a1"],["/tags/算法学习日历/index.html","61f2ba7216c9e8a984b223f72a83f98f"],["/tags/递归/index.html","81a6ee7cb7edf2ecd48f67c68db1442b"],["/tags/部署/index.html","490083781c32872761657a07c5a956b9"]];
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
