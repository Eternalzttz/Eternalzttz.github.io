/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018c.html","d2ef0f1de7ab74209dcc0a9b22076f69"],["/404/index.html","1c6381c837f9f19878ad2ec9beaeda8e"],["/BUAAclass.html","018cacc0b8921515a96a1b12deb51b14"],["/BUAAtest.html","41daee26ea4efc0f1af5ce765d3763d7"],["/BUAAtest2.html","2df942f88d48b60a97ad825422bcd4c6"],["/Dijkstra.html","33f50bcec186f0dffae3b1df0e95a668"],["/DijkstraPath.html","7350e1c74cf4e8872f5398ec7444d0fd"],["/Dijkstraheap.html","32600ee6ab61968a56c0f327a3c1f99a"],["/Floydpath.html","c95799c316b1c3ed4c9faac988e7dfec"],["/Hanoi.html","805aff96250c3feb804766b2ba7d2ba8"],["/Linux-rm-rf.html","1856147cd9d267cfaceb09b7d29d1738"],["/MyFirstblog.html","3178995b1498f986fbc535e131b79c55"],["/SPFA.html","06ed45e483811bd3f45246be13454162"],["/SPFAforpath.html","725328e6b6b9ecfe138e669ffb64b7b7"],["/STLqueue1.html","ca2b7d36ee54e66786a4ba44fc1cf26a"],["/STLqueue2.html","10a39d97e68b1577172a9883a8a75332"],["/about/index.html","882723e78ceed326f70bb49311821f31"],["/archives/2018/04/index.html","281fdf81213f7c617292a83bcddbe9b9"],["/archives/2018/05/index.html","a046424b6d61d61863b9565a80975d61"],["/archives/2018/09/index.html","18dca27b83b93b6e7ab9984c3a7bfa7a"],["/archives/2018/09/page/2/index.html","f7bec3034632a03d233e5f9946247228"],["/archives/2018/10/index.html","ef573f55f0d1d123abf9cfedd17212bf"],["/archives/2018/10/page/2/index.html","167e012df8f986507a56075ed3c30f23"],["/archives/2018/index.html","93c8b700e488b1a34c5f541488a6a7c7"],["/archives/2018/page/2/index.html","ac1eec6e0d3a4d41f06115d8d64d0f99"],["/archives/2018/page/3/index.html","857547f0995d55b1fee35728f96d2730"],["/archives/2018/page/4/index.html","10015cb7ca2b7082bd42d77bcfbd416e"],["/archives/index.html","e562ba430cc059a5bea73d3ec7fd9803"],["/archives/page/2/index.html","ad6a207cf188724e1ad1de4eb4248073"],["/archives/page/3/index.html","8f5926a9172520b5b9e80b3153a6fd81"],["/archives/page/4/index.html","0ea71bc297a39f192f9413f1e73cca8d"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","1de237b88a2f4e02c650ab908d601770"],["/categories/STL/index.html","199fba40b45591c23fd7cba0c08a4f0d"],["/categories/STL/queue/index.html","97fd608f7c75f5b042f5a5fa4a72b1da"],["/categories/hexo/index.html","f252dc9f88fe64f1a42cca818ba87e2a"],["/categories/index.html","aebee3e283073ec938267f36deb3a44e"],["/categories/心灵驿站/index.html","92462ec51bb1ed0387c29a80d57be1fb"],["/categories/心灵驿站/影片/index.html","cef7eb63e2d07b06c0d89650a1d47868"],["/categories/心灵驿站/影片感想/index.html","da20d53e14b9c2c668960d51094665c2"],["/categories/洛谷日刷/index.html","986afe9efdd9aaef770104de84517e5f"],["/categories/算法/Hanoi/index.html","5d66d57cc3ad03faa70a834aa947580c"],["/categories/算法/index.html","6a616379c6b81984125a9869fd8f4cd1"],["/categories/算法/page/2/index.html","27dbe599e1a18e61ba956bc643401126"],["/categories/算法/图算法/index.html","463fdac10dde1dac5e24e1f4d8e6efdc"],["/categories/算法/排序算法/index.html","f00384823045b3cfd57239c82ee01685"],["/categories/算法/最短路/index.html","59042eafd816e23ef46ece86e20c1361"],["/categories/算法上机/index.html","2d7ee48b19e483b74f0df83926175092"],["/css/main.css","c392657569135bbea743e16f3d6d4896"],["/floyd.html","4d703dfbdbc2fcb712b6ae8d64bda590"],["/heapsort.html","c30b79f4dd2aaf0eb538c7915c332398"],["/heartache.html","ba2fe79ea88a1d2be19e30b1eb6e5572"],["/hexo-next.html","2bef399cdb6902e5a7cd382c5d37ddb2"],["/hexoMV.html","de428ba49cd327a22f355c4bb3410b30"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","9e2885ca31039c6789a153fdf9532637"],["/insertsort.html","2d0368de3611e1dc33674d84a7486b55"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/kruscal.html","65e6af83b43a0034f392d0ee8c5ed911"],["/lib/album/README.html","04d051cc265fd71d08d1265f274d02b1"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/luogu.html","7f08620a7d4634be91e368a36adf193e"],["/luogu22.html","068bfad744a3d78067eab3352f0dfd2c"],["/luogu3.html","414219ae97123f19805b2093611a1a4b"],["/luogu4.html","24709b9a714dfee44a65931f2c822cd1"],["/luogu5.html","3bd8f14f7257a792283d40ca6565b275"],["/mergesort.html","bf05162d116fa360aed309b558ef2580"],["/movie1.html","451ec6c39bc25acc90f599987c714efe"],["/page/2/index.html","cb27f77eb9380a585194f60d60e04a3d"],["/page/3/index.html","86ec6439143c71682e82c74dda02cd08"],["/page/4/index.html","9c6a497ef6bc870e48a7e3ce9ab63894"],["/photos/index.html","df68197f36745ab8677393a9fa99ebd0"],["/prim.html","841b96ec069f28081ee1c51f249f6117"],["/pupplesort.html","7e87915e6d329c8ade3ffffd23cd28f5"],["/quicksort.html","14cb268bb63cf09141ebf32a22024e4b"],["/selectsort.html","a95060da447188d7f4075d762736e9ff"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","1fddbab0386c4b8d38e67c2f836c1d35"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","5c69cf0f362c1ca971ad0acd04ee5b94"],["/tags/Hanoi/index.html","4bc36563ce8734cd9c1ed17830fe2dc0"],["/tags/KMP算法/index.html","cdba0a286cbc5224adebf61a7b8dc8d7"],["/tags/Kruscal/index.html","914a9527d718884f5511224d77c91c66"],["/tags/Linux/index.html","2816b4a41552095c7ba85712759e49e0"],["/tags/hexo/index.html","9a6612b133ac820c861b4c929d1e0b31"],["/tags/hexo折腾记/index.html","5b5529ead916e31de7920e73b0bc259a"],["/tags/index.html","d554bac1155d9782f7cdcd10d488d1b5"],["/tags/prim/index.html","29251a127a1dbca6c4f2785696e7e493"],["/tags/queue/index.html","345d6714a3d4bb8b0cbbeffd3fc4ae77"],["/tags/优先队列/index.html","b9c642366f2ea1c972c6eb6c408f376f"],["/tags/北航/index.html","e4e9293007ab26bd6d0b55b6f1755a79"],["/tags/北航OJ/index.html","1681f688188d926f2dc8101326c67a38"],["/tags/台词/index.html","7725f74efd754f2dd03686915a24fd8f"],["/tags/命令行/index.html","36b03eebf7f0912175fe952b911d9173"],["/tags/图算法/index.html","3cfc7ea01498dffc1688b1861fdc4cf0"],["/tags/感想/index.html","8778d8932727fd29430197da6be28e59"],["/tags/排序/index.html","7912f3637c718f29eb49579e94cf06b3"],["/tags/最小生成树/index.html","bd26713fbaf1019dc58023d57d0ddfa9"],["/tags/最短路/index.html","410b3a1d30a32fa87b3aaf7b4875077a"],["/tags/模板/index.html","4b665616447cdac97453d231ccd0f2fa"],["/tags/模板/page/2/index.html","b009d70cd8c0af5371613acb7f3fdea9"],["/tags/洛谷日刷/index.html","407f8b4882dc9bea97f446501ecb0fc9"],["/tags/算法/index.html","b68f24a592a94a6f8360c77c4e19b70f"],["/tags/算法上机/index.html","6ab7424f41b0fc3c741d33c277bc9f86"],["/tags/算法学习日历/index.html","f43c4eeb96eee4d82973294169b93bc6"],["/tags/递归/index.html","100ac8e4c7e36ddee648aba994819a00"],["/tags/部署/index.html","8f0bbdcb2eedb7d7d4a41c0df3e4befe"]];
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
