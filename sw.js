/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","34f8391dbbcc12e2064d48b460d682b9"],["/404/index.html","0394dfdecba73877f1b6fb22c85d7c40"],["/C语言冒泡排序.html","15e9f229651efcdc406ec099c6507d3d"],["/C语言堆排序.html","00240057ec007caef192221c82d71634"],["/C语言归并排序.html","d37aafb672a17bf96c1d779bd731a94a"],["/C语言快速排序.html","330f1943999fe64eee3e86396ce227ad"],["/C语言插入排序.html","2ddda9ac23ae58eae3507f41edc99416"],["/C语言选择排序.html","4fd58d13e153d0f8b437780690861054"],["/Dijkstra算法堆优化.html","5abd2474f5f7f904134bc763be21753a"],["/Dijkstra算法求解最短路问题.html","58532a2db9b89de7062c2c9cd8b48c19"],["/Dijkstra算法记录最短路径.html","ba49277ef14f2a363ef8511695c5be90"],["/Floyd算法记录路径.html","e5b44ac1a2adcdde35f011cee40526fc"],["/Hanoi-问题.html","5992121c467b451a1342d2cf0d6049b4"],["/SPFA算法求解最短路问题.html","cf1c8cfb0353f52ee79b7737a6cf53c5"],["/SPFA算法记录最短路径.html","72bcc2d6c04b7c8e0f29a12bb33d043c"],["/about/index.html","021d081ab5311265897cddb3e06f90f6"],["/archives/2018/04/index.html","ff59f13008a207d02057d83cc3bb4489"],["/archives/2018/05/index.html","91ca6a4d67e28c1c0c810d2b591d0cfc"],["/archives/2018/09/index.html","d2c21b050c9c259234fde33041863ebb"],["/archives/2018/09/page/2/index.html","5fff792ac63b09bb56efebf7ff9581cc"],["/archives/2018/10/index.html","1304d485e6209d18998e6287ad7c7180"],["/archives/2018/10/page/2/index.html","1a9e60b8f431bf111b605991821913b0"],["/archives/2018/index.html","1f8748086ea60e05d2389d1832b7d025"],["/archives/2018/page/2/index.html","9bb417ac986c61d1fadd46e49169c322"],["/archives/2018/page/3/index.html","0a51b53719647a16c42212c718f11728"],["/archives/index.html","ea1cfe8a3cbc22507c8ea43fd5122ad4"],["/archives/page/2/index.html","29118408d572355777e22e6433d4fb1a"],["/archives/page/3/index.html","2cefaf7ff25cdf9fa0ec9e65e36e37e1"],["/assets/css/APlayer.min.css","975d05cf29068aa90b268be3cbd052e8"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","0e911a4127978b49d0ec7e1eebc5424b"],["/categories/hexo/index.html","2a0d2cfcc938a61916b7ee9adc3c67ba"],["/categories/index.html","091ad0f2f42e2dd247c996d388f7041b"],["/categories/心灵驿站/index.html","02cef816aa71b2140084a4c72caf0ef4"],["/categories/心灵驿站/影片/index.html","e075f0b0c3912d43f819df907ce8a901"],["/categories/心灵驿站/影片感想/index.html","e32c0eb6ab3c0aec0f4f526eec1d5a3e"],["/categories/洛谷日刷/index.html","1608771b4a646b6619c5d3b725171cb5"],["/categories/算法/Hanoi/index.html","200212cccfed0aef62a70c8bff0701d0"],["/categories/算法/index.html","3014d29db8a82e108695b13cbdf185fb"],["/categories/算法/page/2/index.html","64b6c649b91877ada65be3c10972c31a"],["/categories/算法/图算法/index.html","ba33efc52d27eef9f20ec845ed137109"],["/categories/算法/排序算法/index.html","eb3b85c519d81164416b698ba22d98e7"],["/categories/算法/最短路/index.html","6c261ad6379439fe1e3d983d721cba0d"],["/categories/算法上机/index.html","f33b611e4a9ee14670cc6cb499e8de8a"],["/css/main.css","77d2e119562d0a7c2cdc889955b3d42b"],["/floyd最短路算法.html","cbe1df5b40afdfcd980f84fcdef42252"],["/hexo-next-主题优化.html","9bf322281afa09c43727b44a5c727957"],["/hexo-插入音乐与视频.html","e57bb403b2acbc7a55b90271155e2b8b"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","25d510857c8846587d29f68bd937fb0d"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","962a9a779d2d4a124468558aefb5142f"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","8cfa7ffda53ecb265bf191a5e106666d"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b011b83cee0be09ad309ad7d632cb0ad"],["/page/3/index.html","2454085101cd1938ffd45ede7a8ed4cc"],["/photos/index.html","b651bf766c0ef9b7b0ab5da685141be4"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","c4142e81c57658b6e8b09c9d99b53eea"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","e931d327716ce373934f5b149fb2d1d4"],["/tags/Hanoi/index.html","2f9e2d36f894984e3fb49a7d371a9a01"],["/tags/KMP算法/index.html","8e0f6431e2173e52a91160dc499dfd9e"],["/tags/Kruscal/index.html","63f0dc5b79d8197beaf3a70ce3e19f99"],["/tags/Linux/index.html","0411e908389a55c62e4d88fd3e2aa2f2"],["/tags/hexo/index.html","655b1029c8b2d553acb6946bc875a50c"],["/tags/hexo折腾记/index.html","aadc28badb88b1d06dcfcd67b368dcf0"],["/tags/index.html","da98b8d93c89bdba85fd47798894cb4c"],["/tags/prim/index.html","7b781a31e29540de0163010d01c50cdd"],["/tags/北航/index.html","71af5b33488b4e47d718def5fa923c32"],["/tags/北航OJ/index.html","4975806a3a2701c6a4f827429f804919"],["/tags/台词/index.html","08b9beaeea37e91ed8a49004c1248b75"],["/tags/命令行/index.html","0e644fad176917d3de5440b4e1d18308"],["/tags/图算法/index.html","96e1c023f3e0800444ce2bd688cce234"],["/tags/感想/index.html","7482b71928de491eaa8e65dc0cf99b1d"],["/tags/排序/index.html","54da558acf54ddc0083028cf05810d0a"],["/tags/排序算法/index.html","569ccc243382f3c6323ad6336f1d5519"],["/tags/最小生成树/index.html","97137d7cc68eb1e37317ccd1794f66ee"],["/tags/最短路/index.html","2f7c5ad0b4cd16964bd4543a0b890834"],["/tags/模板/index.html","cc4a8da6ee0d24025a11f04171e4f275"],["/tags/模板/page/2/index.html","c520a97ebacb5e0d5721d3d7e8785fe8"],["/tags/洛谷日刷/index.html","a130ed0f70fd2558f95ac089d812dc45"],["/tags/算法/index.html","8e34aaa57171b80463d0f80e360fa2ac"],["/tags/算法上机/index.html","805966076dc2f236a3dc2b407cbd308a"],["/tags/算法学习日历/index.html","840f5251141c9e71c5169390adf7abf0"],["/tags/递归/index.html","f409e82c2728d4fd7a7fb07c2fb24aff"],["/tags/部署/index.html","512641b84aad38152202fd80e1d46279"],["/北航算法第一次上机题解.html","23e3575428ea0f76b360def52ed853b9"],["/北航算法第二次练习赛.html","be0a49ff188d8776335b9ddaa68004fc"],["/怦然心动.html","f93e2afda2a2bfb17b6bd914a7bee3eb"],["/我的第一篇博客.html","07cc57d7fdd5a6c72338d97759a55f41"],["/最小生成树Kruscal算法.html","d8c27e5790283ebca8f044eb25fbea38"],["/最小生成树prim算法.html","2b396526544bd04f795e1ca244b6f0cf"],["/洛谷日刷-1.html","94aeedc3d393a4d4c3fbbb4890cab951"],["/洛谷日刷-KMP算法.html","56864ef27d8690090f5cbf315c39e9fe"],["/洛谷日刷.html","f1f7d475d73811c05960f8e556cbb380"],["/洛谷日刷2.html","834d262a69802162d06d5ca2caafaed2"],["/洛谷日刷p1144.html","6d7699c2059c714901edbb65b18fd03e"],["/肖申克的救赎.html","18513965311a19c1acd60b6d86f855a5"],["/记一次Linux-rm-rf-命令.html","151d1c18f04b82f59afff9055f97d7e0"]];
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
