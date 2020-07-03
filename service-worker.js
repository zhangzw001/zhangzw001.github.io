/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","def11454cad215e2a922e26e0cf2bd13"],["2019/09/19/首次搭建hexo博客系统/index.html","fbf0896188b7ffb6ec894132b3b30cc4"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","0833622d6eade0be07274d624e630f88"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","5eb3f4092dc633e2b7b4fd0a90859568"],["2019/09/24/5-hexo添加看板娘/index.html","076cedb511c18f391f4781f21d60c1dd"],["2019/09/26/6-ceph安装部署/index.html","f72528a287afd961112bc468040ff896"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","e85e1b66cef462175e518f53dec33917"],["2019/09/26/8-mysql5-7二进制部署/index.html","899073018f91f52705f314a3dd96c086"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","af326c5e33c4e129af42e32ad549ab07"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","87f7c5fd904f547557511b8de0236f65"],["2019/10/10/11-mysql简单记录/index.html","81688b7282184bb8b8873e8f916aa9b1"],["2019/10/11/12-awk简单记录/index.html","caf7c4f4fba8eb95ab5cad942f7380ea"],["2019/10/12/13-云原生博客汇总/index.html","835cbd50fe941297260feab166346639"],["2019/10/15/14-mysql目录copy方式迁移/index.html","d777c2de8bd27fd005eb33915caf5d45"],["2019/10/16/15-docker简介和使用/index.html","d53c945ad0278ee10bd2663c95c8f673"],["2019/10/16/16-dockerfile介绍/index.html","6a9574b918040575b61cc186d568bcf4"],["2019/10/16/17-markdown一些写法记录/index.html","dbdb589cb3fe2f3f3f6540994054bba0"],["2019/10/17/18-收藏链接/index.html","6a506b41fbe34d082c0c4e288ad7138e"],["2019/10/17/19-shell中gt和>的区别/index.html","9cfc955ed5702222c42e7ed3233b4278"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","7bdf941aa7c547eb7b3d9523cb690c36"],["2019/10/28/21-流量复制工具gor/index.html","634e0da09c1f1fbc533552aac5088bb5"],["2019/10/28/22-es集群磁盘扩容/index.html","308d59e0caeea36d88924e47efc95a69"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","3a36093c299739c47d40e037b3b35c2d"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","6b67d25bb2331c8d97c9d972c2e66b3c"],["2019/11/01/25-linux一些脚本汇总/index.html","b905e028b059f6d3f2c6fc163f93898e"],["2019/11/08/26-logstash配置/index.html","fe18fb7cc436b4cec5f29321621d29f9"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","8635b585aa5f54ac74be550e0d449064"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","9862e3a7647a5319d70f8ec0063451f9"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","8243df62c77eea12e13889b5125c0302"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","5604c612409a788db31efe7386a7f351"],["2019/11/26/31-systemd一些命令/index.html","4488d39f75b016e8f09993ceab4807f2"],["2019/12/02/32-php错误502问题总结/index.html","b3284ea64f50ecd49814aa3ad164d5c9"],["2019/12/03/29-k3s安装配置/index.html","05fa39adf4fea8911c96c999d800b492"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","5891c3bdcfcabaf50d96189dab19342d"],["2019/12/05/34-k8s一些命令总结/index.html","4936368e5d269937dd4592ad748aed61"],["2020/02/27/35-raid1盘数据迁移/index.html","a5ed5237bd311cc09aedbbab1904fc66"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","b3b3e1bd05eaf17a7f6fdc89d98c29a9"],["2020/03/10/37-mac一些常用命令/index.html","8977809126bdda7efd1c6bfcfb2b81e7"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","16053445cd37c8c1bd593b8f023c7af7"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","e5005fc54df230a2946ec5ca5b23e845"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","c4df60bf4343543778a7fbeb5e48d3ad"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","5293583471491951c6766d2c0aded24d"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","c89987cd2dd03b5db84d47cae0fc01ef"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","5b6636052597bee5c49fd21117ce0f57"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","cf3baba61a08b338cc9f7f3d0cf6f16f"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","ca476a9f4ed76f741aa60f1c52c8a35f"],["2020/05/13/46-docker安装nginx第三方模块/index.html","cdd9f1b2f468e22dae86984dc09702cf"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","0349e194e9b8a5f82bf443eec2f7d9f3"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","ae884a6c76842a46e99e312603d3b637"],["2020/05/27/49-go简单记录/index.html","f9848a3854dfd91888a687de7937d6a4"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","269e72d757f3a39944301135fe55152e"],["archives/2019/09/index.html","fd0957092b99f4867d61c3693e3cb37a"],["archives/2019/10/index.html","719139527b040895033bfd0a6199ae82"],["archives/2019/11/index.html","7da33cf7e11009b7975b852c80e10583"],["archives/2019/12/index.html","01346e9b275301ead20a96f4e121911c"],["archives/2019/index.html","627f0f476ad61fc4629068760463be15"],["archives/2019/page/2/index.html","fd30891019fcf00a425cb02874670a83"],["archives/2020/02/index.html","40b8cf50ed4d90550d67328465fc78b8"],["archives/2020/03/index.html","96f27f0d459cd690a5b14258d2f49637"],["archives/2020/04/index.html","af401830586c3fb40d833611494194d3"],["archives/2020/05/index.html","216cda242755aa2c4e3491c5b51c1884"],["archives/2020/06/index.html","504326ebc38df7d03e176d5cec2ea6a8"],["archives/2020/index.html","bc054152e3362d023abffa4f8d51210e"],["archives/index.html","e04f25b18765c60c142052bb1487bfaa"],["archives/page/2/index.html","7b158415a008b9582149995f4d6dd162"],["archives/page/3/index.html","4951911aecd22c2db1924645babb868e"],["categories/docker/Dockerfile/index.html","b17c502fc1bef9ce3e1c505fe36ca4d3"],["categories/docker/index.html","481ddfe36af95afed7c20527b230c227"],["categories/elk/elasticsearch5/index.html","a107d45c5ad918b5faeb81c3939d9484"],["categories/elk/elasticsearch7/index.html","56291509e60912cf627b57ed593e00a7"],["categories/elk/index.html","77f17a86620b1a68af654b318dde0d84"],["categories/elk/logstash/index.html","f026243067a9030e4a099f0288320227"],["categories/elk7/filebeat7/index.html","82480b655f2cf9d49b9998c1518226e6"],["categories/elk7/index.html","5c0ebead9f67781dfa400832b99400d7"],["categories/fluentd/index.html","5f9ac6e116fbcbfff2d1ebe9254224be"],["categories/gitlab-ci/index.html","5a27d4ffed2f010f54e1b3118f696e49"],["categories/go/index.html","c91a485c25fb682f46874a0a5709c69a"],["categories/index.html","db7e951c8a26a864c57df616aba6d444"],["categories/item2/index.html","d7ac8aec63333563419b77ac3d305e5d"],["categories/k3s/index.html","9d471a4fbb912e4966b7b3b1e9859299"],["categories/k3s/lnmp/index.html","25e85e0800cf8e01fc852076e7e518f1"],["categories/k8s/elk5/index.html","48f73084f748858f8c1e47ef335adfc8"],["categories/k8s/elk7/index.html","9ec961f22bad4daf1d3a8b2f3f16bf68"],["categories/k8s/index.html","8379a3898596e8ad6709d14d6640e23a"],["categories/k8s/kubectl/index.html","9263256b81cd48a96a409e55d06ba3d0"],["categories/k8s/mysql/index.html","84813e260c53b29fb4a6779ad72ce181"],["categories/k8s/prometheus/index.html","65db77be91679ec875e5d08a556bfbef"],["categories/k8s/storageclass/index.html","40f25e8006da7590aaa53ed3d906f816"],["categories/k8s/问题总结/index.html","fddf456aa90503769010048e187babe7"],["categories/linux/awk/index.html","5b0c64d84af6763ba9969677eb519893"],["categories/linux/index.html","ed5c08a0b9340fd33d388d15aee3919a"],["categories/linux/shell/index.html","d6e463976b346bf7ee9aab57d9ca5308"],["categories/linux/systemd/index.html","1479a77c5ef2757edfca72e423c7b89d"],["categories/linux/问题总结/index.html","1aedbf5302a5ec4b3bf3e49684e9390a"],["categories/mac/index.html","41a65bf1d6fbd1fbcee1180b0064b541"],["categories/markdown/index.html","b5b493eaa49dd27fe5ea693a292f0669"],["categories/mysql/index.html","6d72ab14a6063af274ee7add9ed77d13"],["categories/mysql/主从/index.html","3f9b503284db5b45efbefe0a5dc154b2"],["categories/nfs/index.html","0bbc40361d3fb424bd7eef1eee2318fe"],["categories/nginx/index.html","225551e42bf3aae85be1bd5a087fc74a"],["categories/nginx/问题总结/index.html","122a8d362a63eb8bb1e0e368e65fecdf"],["categories/php/index.html","a7c068da8386a64c0d99dabcfa963941"],["categories/php/问题总结/index.html","64b82f120bc9ab06d4f6e85133b1279d"],["categories/raid/index.html","53b179b65695a0109d02a6ab26d4a8aa"],["categories/windows/index.html","5d5832c9dd1154c6187744fa5f0b8968"],["categories/博客/index.html","44486493703dc986d9a68dfd6708b8c3"],["categories/博客/美化/index.html","8f554afba7964739d055278d6d96c1d2"],["categories/存储/ceph/index.html","f2ba61b2b58226c799dc06ee84a3205a"],["categories/存储/index.html","91114fbfd413b374a474aee5a0f5aa61"],["categories/存储/nfs/index.html","209a92462870da691d52cfcfda0b9e96"],["categories/技术文档/index.html","ca90442c980d5cedaa929f198fe13229"],["categories/技术文档/page/2/index.html","a5f01f702a472f8dcb516f3d4665fa51"],["categories/有趣/index.html","3863292d4a7d63d02c10dfb7c357987a"],["categories/有趣/二次元/index.html","859d658096ed1754b5d4bd261e8a7fe5"],["categories/流量复制工具/gor/index.html","173047f461a6292146d16de825cf72d7"],["categories/流量复制工具/index.html","acdf21f4754014656fcf5ade472f6f35"],["categories/网卡/index.html","d9c99d68016647eb228e5d465ba06dc6"],["categories/网址/index.html","0087c8b1a7ecb048c7ee928edda4d0d1"],["categories/网址/大佬博客/index.html","6b41e0a39df1cce893b6bf4bec30a377"],["categories/网址/收藏/index.html","50736526db6bf2ccaa96c4f937bbfc4b"],["css/main.css","e5c4e4fd8368a24e62376434172508ee"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","6f6b3d00261fff03182513385c6ac231"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","5b6bd8cb665ee840f8d9e5556c7bb5bc"],["page/3/index.html","b93eb1f9664973d60ac3c157b7f584eb"],["page/4/index.html","b906c145dedaa126d636e4d272b0f174"],["page/5/index.html","8205b2ccf58013ed78f15267989958ae"],["page/6/index.html","4c6bc4385ee226901aefe149e5a45d03"],["tags/awk/index.html","438037c6d85bb6386dc8c8e7dbbc78d0"],["tags/ceph/index.html","c2f0aa376489b4198aa9f602ff24903a"],["tags/cephfs/index.html","da77abf9ee11f9d00af8776f1a7f5a12"],["tags/cloud-native/index.html","b1169182ea859c842d3e9882bfee3000"],["tags/docker/index.html","13a2182b78d5977cde0955a197fdbecf"],["tags/elasticsearch5/index.html","f0ab219eaaaa018c6cd2f5b3e0635f62"],["tags/elasticsearch7/index.html","f164424d46e2d7bca32ce28c03e6c6a9"],["tags/elk/index.html","b98fd614ba3a6b152bc8322f154eb7de"],["tags/elk5/index.html","ebb4a78a72a6e496b250271dff1fad7c"],["tags/elk7/index.html","385b42081b308048b83c4c9c2875364d"],["tags/filebeat7/index.html","86309dcc9f615992eb1f9bd11f53a6bb"],["tags/fluentd/index.html","4df8db98c4b3d341f471ac6d2c1e42a2"],["tags/gitlab-runner/index.html","7d7301612a2db972b8000982365b8974"],["tags/go/index.html","62bebe5605ab8714444371f21a80ded1"],["tags/gor/index.html","f537652219e66bc8c33ba7c026d60266"],["tags/hexo6/index.html","35a64ebb8fad944b5e6a34efa00a73c5"],["tags/hexo美化/index.html","3714615551f35b363d78e73b1208aaeb"],["tags/http流量复制工具/index.html","44e056c21ec9d6f633f3e14c760b8919"],["tags/index.html","90b2824068ae3707a3bd61c060764d96"],["tags/ip/index.html","81678f20ddd21ff5119549c1765193bb"],["tags/k3s/index.html","db21fd3252a639f17967f4aa21ecf7b2"],["tags/k8s/index.html","78653bed71cbd5c3a5484831bfda52ea"],["tags/k8s存储/index.html","cb8dbd3d3781960abc6ca18b17b327b6"],["tags/kubectl/index.html","71e4e9a1b77dadf69dacbb3a8795b072"],["tags/linux/index.html","4837328764e442dfbf2967b307089dee"],["tags/logstash/index.html","f2305b79ba3fd84c22c73c589f08297d"],["tags/mac/index.html","94d31efce721ef1e87718e30a446148d"],["tags/markdown/index.html","4b73d99c8be464757e32a8a8d2c83a8d"],["tags/mysql/index.html","b2a625845ee94ab09d57b2148bf68f7e"],["tags/mysql5-7/index.html","da3cb4f9d89f9a8efccdd57eba3783f7"],["tags/nfs/index.html","1106d96559e0a137ef4f2f293fd6a93a"],["tags/nginx/index.html","6cdd925e05196218c475f15888e9a5da"],["tags/php/index.html","654a6e6d291c01e44d18e936bb39ba53"],["tags/php5/index.html","5c5e32292bdfab0afae5813bf3048654"],["tags/php7/index.html","c5b7792ac02bfec99b2d5953142505a6"],["tags/promethues/index.html","736e856d148cc0faef7e662174c93989"],["tags/raid/index.html","a5739f3faf13efa02c4e5551956cf07e"],["tags/shell/index.html","4aaa75659758f42429168a409fede342"],["tags/ssh/index.html","048272ae332a2c7cd0315bcf46c77b63"],["tags/storageclass/index.html","7bac594b1929d382360ec9af29455f9a"],["tags/systemd/index.html","3b7c158e58738d62d599a9763489c5a2"],["tags/windows/index.html","58df599eefb0bdeb06db29a12ea0c5ef"],["tags/云原生/index.html","82867113f2b79ad6b1627e6e7410996d"],["tags/大佬博客/index.html","6b61e567620caccc9aab6d2a6d0e64cb"],["tags/收藏/index.html","aa98f23ce665b0817cb1db3cbea4189f"],["tags/特效/index.html","1c32d5bd7284747cbae01cc3f141b804"],["tags/网址/index.html","216b15b2711e993d4800e7a16854a48f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







