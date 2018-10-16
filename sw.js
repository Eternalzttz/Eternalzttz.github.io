/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018程序设计.html","07f43312a36e8e540f7c4d72a1aa6e7f"],["/404/index.html","85f9d262fb9b663a6c5c8a8aa3b8fa80"],["/C语言冒泡排序.html","181694bc83899fb314ab60090a58ee63"],["/C语言堆排序.html","420a05592670986de2c151424dbaffe7"],["/C语言归并排序.html","bd379bd36a28fe199999c3eca7e43af5"],["/C语言快速排序.html","876735420b084490dc7565882d25d616"],["/C语言插入排序.html","9fc43976da0d5d8d81b2f263b1837182"],["/C语言选择排序.html","f44b47639bc136c7193be81c6dd93c9e"],["/Dijkstra算法堆优化.html","3cabfe8d94b1c3cba4c6234b98a269d9"],["/Dijkstra算法求解最短路问题.html","ccd334c7a756d9b1fca3ab681d826fb0"],["/Dijkstra算法记录最短路径.html","de478fb8600969de1eb70f986d2f42ff"],["/Floyd算法记录路径.html","baa7fdb6716d96fa0be8cb44c26c948a"],["/Hanoi-问题.html","29435717e7df01ed7b949bf94826fa1c"],["/SPFA算法求解最短路问题.html","ebf3b8f60c52b7f3107eb2935349934a"],["/SPFA算法记录最短路径.html","c9acec861e3798a82ade0520fc03cbb2"],["/about/index.html","e8b87c6cf3b4b71134454f32987f02f2"],["/archives/2018/04/index.html","b6d47c10c8e75c785b4fbe2319454b72"],["/archives/2018/05/index.html","37506e0093f970c8ddf5893906d76abc"],["/archives/2018/09/index.html","4034d4b90a09bc541fd10a6258d9fdae"],["/archives/2018/09/page/2/index.html","5c1e574c33d6c81eede886ef72f7d44c"],["/archives/2018/10/index.html","80abf798389b48dace66d0ae7693b14a"],["/archives/2018/10/page/2/index.html","0957ae2767014c5c192fdf1f5c98c09e"],["/archives/2018/index.html","dd4a7a22bd2cc95d1f945ff92aa02e84"],["/archives/2018/page/2/index.html","87d15cd81d29816a3007aedfac25cc71"],["/archives/2018/page/3/index.html","0771075507536ce6d9d6ec28e532a473"],["/archives/index.html","a83a90ebf353032b1947b8aa979802b4"],["/archives/page/2/index.html","5e0d8ba6a41fcb5ec37878e667967562"],["/archives/page/3/index.html","b3d096c570b2a56fc331f5a64d0bf6e6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","e3ac98b0d89dbd6444fe2b9416c93ddc"],["/categories/hexo/index.html","6374748489f4636cd6822b468f70bbb8"],["/categories/index.html","ef52a948c523516074e9a7f848aa137a"],["/categories/心灵驿站/index.html","e89b73586e630f27f8c54e08d533e46b"],["/categories/心灵驿站/影片/index.html","e3b12b801691038e42b9de5a54010d5f"],["/categories/心灵驿站/影片感想/index.html","81f40d6008763e2bdd49b6777dc4da1a"],["/categories/洛谷日刷/index.html","af289f7fbd2e4fbb94dfcc9a5faca6c9"],["/categories/算法/Hanoi/index.html","f211a80bdc2c7dba934fac5ca2f3cc66"],["/categories/算法/index.html","abb5ab2dcd8140ef284624a788ade8e8"],["/categories/算法/page/2/index.html","37cb743aafd1e1f43befc247592d1552"],["/categories/算法/图算法/index.html","e3d9c272712dc3b78bef65db35f0afb7"],["/categories/算法/排序算法/index.html","6c2148259ef2e8f20b6a35893cef1b20"],["/categories/算法/最短路/index.html","4b25ebc98a27f1ee552afd24420c53ce"],["/categories/算法上机/index.html","d0c17816af80f767fc854caad609157c"],["/css/main.css","55b97ce33339f1b2438b4ddb2a69eb8d"],["/floyd最短路算法.html","29b838452a87c069265f0b72c8db5b82"],["/hexo-next-主题优化.html","ee56bd24ea908a55657f0ae1141e9c9a"],["/hexo-插入音乐与视频.html","9b3b2eef3475cdaecabf1d199094f844"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","1c77eecdee8c63b5b5970bccd9edb6c0"],["/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/header.jpg","004d8c89ec914ccda5ccb6edfb091540"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.jpg","c4d463deb6fdc5914ad79a5cdd4ef77e"],["/index.html","3efe6f94fb583fda75e79f91bd93a39d"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/md5.min.js","f339599f07d8bf6c2405f6c24dc24b5b"],["/js/src/motion.js","cec00b93866e5b08e7fdb8f04520600e"],["/js/src/photoswipe-ui-default.min.js","4ed2419c514973cfdd50d6e74b9f8006"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","cd69f3df46f54d5151befd698738a9b7"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","5dc05874712f74bee8c9045f0350adf9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","cd3b30159dbdfaa51e4ffd6a4a74ef92"],["/lib/album/README.html","cff403e525ef16da89038c7bbcd523a5"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","5fa6552feae6708108f472615fa62319"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","167528a8fd31079810dd43633fc7d64c"],["/lib/album/ins.js","2d764ce92aadde0948d8c550c2426c14"],["/lib/album/photoswipe.css","5fb45eb13c3f88ff15479104f4982377"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c7b6c06f9d7074279bd2c9c2a22719ed"],["/page/3/index.html","2f084d6008f3214bccf6a14cb832bad4"],["/photos/index.html","8cad50e9e11c119b3afcc94e94ff214c"],["/src/affix.js","ad92260fbd144dff073927c71510c1ca"],["/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["/src/bootstrap.js","30297caa96a35997f3461792183bbab7"],["/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["/src/js.cookie.js","2c695c446cf690eb838d21b6b683c391"],["/src/love.js","71b0284b99692544d13afdf07b6194a2"],["/src/md5.min.js","6d51ff4b67c82d4f1b1dd43b8a2e4a28"],["/src/motion.js","f6a18fb056131d15026551e7a2743e93"],["/src/photoswipe-ui-default.min.js","93c019dac4c16db54efe697bcd793686"],["/src/photoswipe.min.js","fd0d331627c7bf34013f368ac9d9a1d3"],["/src/post-details.js","dcbb59ef5172f8cc9c21f673a8e4caf7"],["/src/schemes/pisces.js","377690b1b29d008272813c11973f3ce4"],["/src/scroll-cookie.js","e6ecc65f4acef0eb8983e02afb4f5925"],["/src/scrollspy.js","0468277237d9394327bf77c614a46070"],["/src/utils.js","ab41c51715d10be402cb044e1cbaac9c"],["/sw-register.js","39b329a0b29e2e14087ef5e493561ea5"],["/tagcanvas.js","ab8b52c9629cbd0f041eca3702314dd1"],["/tagcloud.js","4b81789358db6c27eb62cdf3acdb59a0"],["/tags/C/index.html","1452415dcbbf374742512216df4d1c42"],["/tags/Hanoi/index.html","dbcfe2ed4aa14f36f77462fd05a21914"],["/tags/KMP算法/index.html","602d677a1d85acbcf69b9473524b0682"],["/tags/Kruscal/index.html","140d5b05555ad5122b23fe16a73f4f62"],["/tags/Linux/index.html","91919d1e617c38f4f341dc3c22a05057"],["/tags/hexo/index.html","601a0ea88237923e45550e64531ab42b"],["/tags/hexo折腾记/index.html","9709d1df808986bcf8a79ed2bc1d2e9b"],["/tags/index.html","d713f146a1f4612775f06f10fdbd9fad"],["/tags/prim/index.html","7928201be3b1947aca70318b60f67529"],["/tags/北航/index.html","28525eac5b112a2483001ec15b957fb9"],["/tags/北航OJ/index.html","a59b6dd29b464cda70fd4633295cb2da"],["/tags/台词/index.html","cc557a9cdfaa8a7c6120978798614c6b"],["/tags/命令行/index.html","93687cb58136a3202d7ab403b1cf20a9"],["/tags/图算法/index.html","79ddb757679372d694355a48ae608f67"],["/tags/感想/index.html","b17bdd7032c9eb80d8c747c7585e56b4"],["/tags/排序/index.html","d3c48e9cd82cb7287ad72f0e73ddb241"],["/tags/排序算法/index.html","54b36adcbe49040bf47276d5d7515240"],["/tags/最小生成树/index.html","402aeceb2958af03916eeea0e20d2a3b"],["/tags/最短路/index.html","54db20e04ef0e9aba5194822ecb7a33b"],["/tags/模板/index.html","b69f4213b924494bd5e301b96cfa9ce0"],["/tags/模板/page/2/index.html","3e03eb87275287165fd52abbe0484135"],["/tags/洛谷日刷/index.html","86eca6c3aceca51f433af62280172640"],["/tags/算法/index.html","2ca6b7bd2362a848de0a38bb771c16a2"],["/tags/算法上机/index.html","a0f14c80c39dc21a39b36c87b47a25bd"],["/tags/算法学习日历/index.html","9ea4384fe8634219d6cef0902522da85"],["/tags/递归/index.html","295716fa85fcd790daf16bbf14b06147"],["/tags/部署/index.html","f7d189ed2a0c68995c8275b079052ee5"],["/北航算法第一次上机题解.html","342cad6284bca5ded6dcc0775ebd1ef1"],["/北航算法第二次练习赛.html","018008559d4fdeaba91f1e81bf1f17e1"],["/我的第一篇博客.html","307e0365026bbaa53461a755cda95afa"],["/最小生成树Kruscal算法.html","52095dee151d8ca330cfcf24d5a219b5"],["/最小生成树prim算法.html","e983ed9217c32769e938c81086b3cfa8"],["/洛谷日刷-1.html","472a703a0bb5eaa607e1bd1a910a9db6"],["/洛谷日刷-KMP算法.html","540cd36c52e07d2ead72747f83803979"],["/洛谷日刷.html","e9cd26b8df6efd21823fbb11044a2995"],["/洛谷日刷2.html","ffe19c46a1d103c74bc03e4bbd2b6960"],["/洛谷日刷p1144.html","275aa78e286b056c6bf3ae74ba90a7f5"],["/肖申克的救赎.html","bc711a2373a8937216cd094d8f9e0dce"],["/记一次Linux-rm-rf-命令.html","6f8264a24d8c065e92ccb1c8bad718e5"]];
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
