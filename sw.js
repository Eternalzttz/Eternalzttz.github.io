/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","8be3346546e97a5a836bc06509c2be09"],["/404/index.html","78c3a9e499d06ce84e7519017e8fea15"],["/C语言冒泡排序.html","cda32b46d4cad96cb79b1b84356e414f"],["/C语言堆排序.html","216a47b41646592f708a0f670524bd4a"],["/C语言归并排序.html","c8989002ae6ac664b9b1d42846d8f627"],["/C语言快速排序.html","04b2b774be7a0281060d262201fdddae"],["/C语言插入排序.html","47bc3f098a53d48872d29e540c3c85c2"],["/C语言选择排序.html","d04394b0079f93f905cdbd816a4f84bc"],["/Dijkstra算法堆优化.html","4fda697c3324622b4b66683315d7b053"],["/Dijkstra算法求解最短路问题.html","5c6ad982b97df64607c33b31f3dcccbf"],["/Dijkstra算法记录最短路径.html","f47c14727f19d2a5d66a415552a17e5c"],["/Floyd算法记录路径.html","b4b67dc0ebbbf50bb7cd2b9dd8a8b701"],["/Hanoi-问题.html","95331737f796d5a0638da8f15e8bcc4f"],["/SPFA算法求解最短路问题.html","793a30189e6162e36ba38e795ced1b71"],["/SPFA算法记录最短路径.html","06ca2c1d9d760321e9efbc3333d9d007"],["/about/index.html","0d5adf72b9f12a0339c8f7ca6154758f"],["/archives/2018/04/index.html","b514e7d97da2585b49619ab196448b9c"],["/archives/2018/05/index.html","77b54e007e0031daa2d41f807ccc4e86"],["/archives/2018/09/index.html","ad0e2a6d970115a899a45f7ba11d62cb"],["/archives/2018/09/page/2/index.html","f7d3cb45f98bd638b504cb36d9dae189"],["/archives/2018/10/index.html","eaf508e1bc05071aa9be578240750f00"],["/archives/2018/10/page/2/index.html","7c09b087e08cd4d8b9f94995446fa48d"],["/archives/2018/index.html","c3cd2fa23dc4ea406e37fd72f3624693"],["/archives/2018/page/2/index.html","5050f12ab121c63e4d7b18a19f6fc3aa"],["/archives/2018/page/3/index.html","7a24439317cdafd791ebf6ec85cadccf"],["/archives/index.html","bfa162624a73e2f9647a9fd5a5167b34"],["/archives/page/2/index.html","daf793ab580d3908c0a586dfd49443f5"],["/archives/page/3/index.html","5c9c9d0aef9a133dd910584d7518e3cf"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","08db111dc50fc8ae5c9de1d074955168"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","65289e7476ced71988a04ec83c563f9b"],["/categories/hexo/index.html","064908c7a4e61cbac2aeee476e9f639b"],["/categories/index.html","075d1fb3e317a41d16294742bc6823a4"],["/categories/心灵驿站/index.html","0398c42ea410dcac29440bd90f11d443"],["/categories/心灵驿站/影片/index.html","0f321dc85e6dd9b68957bb10107a219a"],["/categories/心灵驿站/影片感想/index.html","bb280375a9c338afc88dec0fe29000de"],["/categories/洛谷日刷/index.html","613757a3fbaa45330da2dcbb47b2e133"],["/categories/算法/Hanoi/index.html","fb49c9056b2e0c609ef1e98953f79f94"],["/categories/算法/index.html","0bd11d06e9a01a0c5850c4052ff7aa97"],["/categories/算法/page/2/index.html","8c8308a4f379c3211d86ab1fa50c464f"],["/categories/算法/图算法/index.html","4d21990c3ab955c140e36ecfc43c3cd1"],["/categories/算法/排序算法/index.html","2e8d58e4500d3de018ce4a4f29f96762"],["/categories/算法/最短路/index.html","cb1fc19637a77837b9bf6bb0fb5c5cd0"],["/categories/算法上机/index.html","20d4d25d51f8029b83ba241318d4dc23"],["/css/main.css","77d2e119562d0a7c2cdc889955b3d42b"],["/floyd最短路算法.html","7014ee278d20910a300e2563e942db26"],["/hexo-next-主题优化.html","9ac54e2fb09d0486e192280d3d2ddbd5"],["/hexo-插入音乐与视频.html","4f1a816388f599b9fa26f04fd8186b3d"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","82d419cb21bcf13b626410b1bbcc6a2d"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","349ec40c714cc242bfe6365873b8226c"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","08bb679b69e0688e4d9d88ba9386ba61"],["/page/3/index.html","1750423868af956a214b2412b43839b2"],["/photos/index.html","39f0d0276e75237f0b7f781b57708fcc"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","2b406bc8d25b9f03956e7372b0fef208"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","da96467d6452b2bee901e94664487863"],["/tags/Hanoi/index.html","91bb7fb34f796bdec379651af5afca43"],["/tags/KMP算法/index.html","ede15a629dc4c66e1a6572ff9c4a8b08"],["/tags/Kruscal/index.html","da9ad6349e4027e60c77ed6178a8bde7"],["/tags/Linux/index.html","fe38f3889bdca55092ec73be83877055"],["/tags/hexo/index.html","1ac17944f791c8034dc273fcad086bee"],["/tags/hexo折腾记/index.html","f910fc8b34d08702ac5043e7ca581c2a"],["/tags/index.html","3e2fbca66e70efbc88e91e56f7d6004b"],["/tags/prim/index.html","8e0585b75885eb10163e5cc4e6b41552"],["/tags/北航/index.html","7b8723403696960211e977d5f34f9b71"],["/tags/北航OJ/index.html","642012fe615f7641b34115fc127e46f4"],["/tags/台词/index.html","5d516f9399e7452242e41b5589b857aa"],["/tags/命令行/index.html","41c18022cfa9e7e4916771bc3b6ee878"],["/tags/图算法/index.html","dd3c5692b107c42ce17235979eaf5980"],["/tags/感想/index.html","e6c9b18f24631cc196d2aaf79c99b4a2"],["/tags/排序/index.html","4a9a2c5d5a45e520a25bfd148cd8ced1"],["/tags/排序算法/index.html","a91ba2d808958af8af2f05df53e2731a"],["/tags/最小生成树/index.html","61aaafab267b57f0e3e0a8d90df23de4"],["/tags/最短路/index.html","1ea737a670f4b97cf50c9c35b1d3d961"],["/tags/模板/index.html","e701de38ff8ae44bcad65e1cf393b816"],["/tags/模板/page/2/index.html","443b3245b11d84505a2894061f32c522"],["/tags/洛谷日刷/index.html","7a61d35fdea41a038e68c2df19e90045"],["/tags/算法/index.html","14c0fba656435a76c975328f8ad0a366"],["/tags/算法上机/index.html","293f5026ce64fdb9d9c6be9a5e4bc3f4"],["/tags/算法学习日历/index.html","bf365ff9db97b07199f700425587969e"],["/tags/递归/index.html","fa72bb595c8c713f88a247b9025b7577"],["/tags/部署/index.html","c520730cf59e10d9f7fe4df180030274"],["/北航算法第一次上机题解.html","f31ebc1137bc7e81bc3262836bc23130"],["/北航算法第二次练习赛.html","4419874cac0935a734f39da4de9e93f8"],["/怦然心动.html","3cfdb0c8f9ce21e87c5056c02408cc89"],["/我的第一篇博客.html","6979711c91ce831a4a78b1a29775025f"],["/最小生成树Kruscal算法.html","f55a00c60b4430f50cb265c450dba9da"],["/最小生成树prim算法.html","1d222b46649e9b17a5a64e3090f13492"],["/洛谷日刷-1.html","0ba6bc6c3bb9257160413502cf8174fd"],["/洛谷日刷-KMP算法.html","ffa8a5cc5d7dad3f146ef39c935e8655"],["/洛谷日刷.html","a94ec4f748c0dffe16e768059e5a7b83"],["/洛谷日刷2.html","b06a745bd5d39d8d4dffd64b434128ae"],["/洛谷日刷p1144.html","2be22dbfe54e3e953f5846ab3ef96924"],["/肖申克的救赎.html","31114002f58528d11bfe193bad9b997f"],["/记一次Linux-rm-rf-命令.html","9af2c1c7e55c9a86bc9e862d43598b9f"]];
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
