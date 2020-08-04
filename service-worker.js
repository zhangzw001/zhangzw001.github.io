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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","39a78d7a06eff11d281e26aab4844b70"],["2019/09/19/首次搭建hexo博客系统/index.html","ad756dd30cb4b8e918a2d8c7493aea3a"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","01b5f3aa98aefc6b40ecea860382b451"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","fe0d3a40f9cd19ada53def3a5ef90a59"],["2019/09/24/5-hexo添加看板娘/index.html","740b81a74b277c9715e21ac118203873"],["2019/09/26/6-ceph安装部署/index.html","b20441f63f7cfe3506b82c8770f2f2e9"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","13c303dd6277b3b192f392b331718aa6"],["2019/09/26/8-mysql5-7二进制部署/index.html","1f8a0d7fe1a83e495c1ae121d7c87430"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","b6ec8dc25bea840a49ecd721cea720ef"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","86ade6244aec9c8184787a4ee04c0e62"],["2019/10/10/11-mysql简单记录/index.html","1b8fe6bd276cbf1c5feb4df6a1d4958e"],["2019/10/11/12-awk简单记录/index.html","d2fb6b3849435169929e07a5a7699da6"],["2019/10/12/13-云原生博客汇总/index.html","6934ff033ef1c2eb2dbed18606e6afe7"],["2019/10/15/14-mysql目录copy方式迁移/index.html","f1e2f306bfb2e67eaafaac0984c5a2eb"],["2019/10/16/15-docker简介和使用/index.html","0c50a72706fe9aa511da7ea984f71506"],["2019/10/16/16-dockerfile介绍/index.html","2ad57809ceb97b83c2507cf315b6a06a"],["2019/10/16/17-markdown一些写法记录/index.html","2007c495ea1243de90c16205ee5b37a1"],["2019/10/17/18-收藏链接/index.html","a39f70679a581fa7be0f5caf7843825f"],["2019/10/17/19-shell中gt和>的区别/index.html","c632a66d13df023504397ba612d2b4ab"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","e3aff3c4cf370fc3bd809cebc152d8c2"],["2019/10/28/21-流量复制工具gor/index.html","699b72fd307dab0e56b034f86d945475"],["2019/10/28/22-es集群磁盘扩容/index.html","6df84591b1f0eaa2ca4b56d07255eac6"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","69403a2789351ea26c251e372d032c2d"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","1587e7dbecfe0926a2704e14cbc0fb77"],["2019/11/01/25-linux一些脚本汇总/index.html","5a2b68a3ed0e6991a2fec9fb93a04a2a"],["2019/11/08/26-logstash配置/index.html","c1af7c3bc98a73668be07bc111239ca5"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","3fb50a32e36d068992a50d7f2936048c"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","1621eeed44d605f955c09ea924ac0a5d"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","d80632057d06433712c6d06556d80e22"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","1c15dda19a951ad6493ebf77c6fc0466"],["2019/11/26/31-systemd一些命令/index.html","79732d2e400897378c681dc0c9766180"],["2019/12/02/32-php错误502问题总结/index.html","ed236e687a4887d66fdcb96f2cbfffb1"],["2019/12/03/29-k3s安装配置/index.html","7315fc6f40f1f545ffb94fe791d5df6c"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","9acda44d788d3e80d284740ee306dde7"],["2019/12/05/34-k8s一些命令总结/index.html","1b07c86c4cd05b82043b392fd433553a"],["2020/02/27/35-raid1盘数据迁移/index.html","4a127272db2246c5e4b1513987861bed"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","aaa3b9bf89eb110776eb693bd72e43bf"],["2020/03/10/37-mac一些常用命令/index.html","09c9c133693855070c8f8fea1232b221"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","1cef20edb9d72a9e59b15b50e5e749f2"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","0528fa0f68ee999bdc4e9a4b774a206f"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","c76fcb281919b57d9647ff3e0fe53741"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","8f2458864eec1b10e03eaea20bcbf6a9"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","91bbac4e825862b8ce46255ee8e71eb9"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","35dde6ba4bc6b4652ab134770d3132a1"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","9e77d2e996cc78f0d462314f98ab360b"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","0ba6b7a6cf701739480ce9c7532ab4b3"],["2020/05/13/46-docker安装nginx第三方模块/index.html","2ae0cbe584806c49eec1f151860c3721"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","9e1fff8bbe1b4651f69e4417bda88ec7"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","a2fd372cc5e68ec73c5206b85347d295"],["2020/05/27/49-go简单记录/index.html","4928cdfa9b28f7f323568d7a1faf914a"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","c003b252efe97961b230cb24a2606354"],["2020/07/27/51-k8s搭建radius/index.html","bef55280e6e6bc2b6d4e04a9bf2f9565"],["2020/08/04/52-istio测试nginx-php项目/index.html","de046e8ffbbeb088bd75854f2c708ca9"],["archives/2019/09/index.html","e21e506cb948b441fc22761bcaa54b92"],["archives/2019/10/index.html","51b106afe40328570b1c25e554419c86"],["archives/2019/11/index.html","9c7211cc002840c59161577f5f617620"],["archives/2019/12/index.html","759a7860a60eaee31f436de53dafa9bd"],["archives/2019/index.html","d9e735c771e9f0373b16c4fe8ae12fc6"],["archives/2019/page/2/index.html","5f383a8533bb5376002ea2ad040452f2"],["archives/2020/02/index.html","dbf30e103a07fc5d73a88e68aff344e7"],["archives/2020/03/index.html","5b6101b3e9e5eeed03169966f409acf2"],["archives/2020/04/index.html","e1e5572d491e1a8e15dc8bd431577fe6"],["archives/2020/05/index.html","469796d03c7b01c1243c86ea8d64fc29"],["archives/2020/06/index.html","066113f61b99c9868ef53b56d7bf0175"],["archives/2020/07/index.html","24ed925302f10b860763f63ed0934a33"],["archives/2020/08/index.html","31662c73ef49bffcb7e897e8b805a585"],["archives/2020/index.html","3e8ddca37e935306e4652c3d348ac68b"],["archives/index.html","bab572d265793f2be6d0a888ed461e87"],["archives/page/2/index.html","0fdb98914402b50b8679083c0f203d2d"],["archives/page/3/index.html","4c65c78dbcf6e55c46862a3de44af1b0"],["categories/docker/Dockerfile/index.html","2cced6aeff3821d8e0f68f3a490aadca"],["categories/docker/index.html","ee09ce71795a700a4be455feb44349ac"],["categories/elk/elasticsearch5/index.html","be1a0a0360a9b0f22d828b60b33c5a8a"],["categories/elk/elasticsearch7/index.html","e7877333895dc89b752ea949a00b5a74"],["categories/elk/index.html","9ca38cae01904745035f627697805713"],["categories/elk/logstash/index.html","a9c9f1c3f8e3fceb7900cbdc2747559f"],["categories/elk7/filebeat7/index.html","b66fbedd9beef3d0835d8998785fb698"],["categories/elk7/index.html","f746e302742f2b739ad07a0453c368d2"],["categories/fluentd/index.html","16c1b2f59ee890ca48d7cdc0c1e6cc88"],["categories/gitlab-ci/index.html","9d31b27af4785b2b9be3de49d99f4176"],["categories/go/index.html","f924e5283e60434d867cf6580a6806c2"],["categories/index.html","62c7655341db874a852d183c9ea15ad7"],["categories/item2/index.html","bf8007aac83dbca06f5d7c09ab71bef3"],["categories/k3s/index.html","4f472ff4bccc71120fc0766fdc820e52"],["categories/k3s/lnmp/index.html","680a9bc2b3d770f28d5b61b133835dc8"],["categories/k8s/elk5/index.html","62dded8c72abaf37f27e123f8545b7a2"],["categories/k8s/elk7/index.html","a81885e0edcb82c146c417e7d6a3b3e2"],["categories/k8s/index.html","168fa51e21ae1ca378d9a8bd028af37f"],["categories/k8s/kubectl/index.html","ce3cea6cf618bca57112180a1d4a4a5b"],["categories/k8s/mysql/index.html","ea4f1cb2691e8a1ef77484e0a860add9"],["categories/k8s/prometheus/index.html","c4ff1df61f14c0b7e175344b86a6dc3b"],["categories/k8s/storageclass/index.html","a2efff5a9b2b75efad71e2732dabcac1"],["categories/k8s/问题总结/index.html","b456339da4a046edcfe1123f144b9f93"],["categories/linux/awk/index.html","9051f3922c11303272c6635790fc1528"],["categories/linux/index.html","ab1ea01b6f1975d4021bd4e7f9044ce7"],["categories/linux/shell/index.html","4ae613f33c6c91eec47f44fcf573d30b"],["categories/linux/systemd/index.html","e05aed82ac1ddadb04ac4384c58d07a3"],["categories/linux/问题总结/index.html","92a262b2aa4038a8a6d579980d3fd1a6"],["categories/mac/index.html","d566ee625020520c3c66ec0d95626301"],["categories/markdown/index.html","0b28d857662a2d5d64259975d514ae01"],["categories/mysql/index.html","e39cabe5bf228c277a46efe72c03dc1f"],["categories/mysql/主从/index.html","4974539923fc06998d169304055c9fe8"],["categories/nfs/index.html","c9bf040d1a5ddb87bb55a8f0847bc3c4"],["categories/nginx/index.html","0e345b0c955cddcc429eed557fb57814"],["categories/nginx/问题总结/index.html","47716a4e810cbf567d0ef162faca18a5"],["categories/php/index.html","7b4721f73d878c084af19c69645f1bce"],["categories/php/问题总结/index.html","f9c9c04928c883c98aa2245d911c4882"],["categories/radius/index.html","f59dcacc50c236e7c7ab77ea5d6b2379"],["categories/raid/index.html","fc089fccb53189348e8225c49d5804b7"],["categories/windows/index.html","8ec9b6617329d21e1b48b1a9501710a2"],["categories/博客/index.html","ffba3112c0e061f89b1b6d505617acfa"],["categories/博客/美化/index.html","57ad9c68145cc09e8e119e4a01896f36"],["categories/存储/ceph/index.html","f7010df12f559e6723205d2708a25247"],["categories/存储/index.html","a1debec9503a4f527f963ac4670e3766"],["categories/存储/nfs/index.html","0d0040b763f3227b3ac06a21efe93adf"],["categories/技术文档/index.html","f6250241eaa5fe928d9cad28ad43440a"],["categories/技术文档/page/2/index.html","f28ee837d6789e2ff3ed9989de521637"],["categories/有趣/index.html","bb0f80fc20a0964be1dbf8162bef141d"],["categories/有趣/二次元/index.html","68567aba6c45f40a9fc4d9b32ffd8c1a"],["categories/流量复制工具/gor/index.html","17b82537e92ee2713667622d41f6c35e"],["categories/流量复制工具/index.html","cca42c5827f56f9eab8f8c2332a6bcd1"],["categories/网卡/index.html","b905a2153e832c8f7e77a8590430c5c7"],["categories/网址/index.html","e6d07f659e13457a815858f173bd3054"],["categories/网址/大佬博客/index.html","8ad97eaa7f827cbd9481680692bf2537"],["categories/网址/收藏/index.html","646dff7b9b7d16bfdcf425811075fd8b"],["css/main.css","9a1cb8d0e6aa4cd116cc30ff0d5bfc22"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","d540826aaf8aa9568678e4e36d107c72"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","56a43508b7d1bec352b26b20258d4a90"],["page/3/index.html","2a83f889dc3e495b720389078727e4a8"],["page/4/index.html","bed1cc1f61d0a671567d321dd362aaee"],["page/5/index.html","16932f7e4262bee70fd57c7dc3d38ffb"],["page/6/index.html","c71b66c9c505d2fa236cea835e624ce3"],["tags/awk/index.html","812ad399943eefaf6668b778a5824df4"],["tags/ceph/index.html","04d438ade6c081507b7a5263657c1e1d"],["tags/cephfs/index.html","2a418f09e550428a8a6308ea5d5a5514"],["tags/cloud-native/index.html","ee9cb613318610b4b1179fd7581da2e4"],["tags/daloradius/index.html","cc86c26f4667de976bc63e6c04e69622"],["tags/docker/index.html","4ffef37971b86635891ff6e1f44e1fd7"],["tags/elasticsearch5/index.html","2d980096302e877e24237958b80148d5"],["tags/elasticsearch7/index.html","348f8b1eaf47e4833d8a7ada01fb4bd0"],["tags/elk/index.html","62e81eda6a58384baaf7b23d6efde39f"],["tags/elk5/index.html","3ca68674bf5f93ffe6890f2baf11faf7"],["tags/elk7/index.html","0e0b445b7b80bc975e742c9b43d2f38b"],["tags/filebeat7/index.html","52ed84fc09d7c5356175a84c02997f4e"],["tags/fluentd/index.html","211fe3b5422147ade3e3a4b4293b92ca"],["tags/freeradius/index.html","ec33eb25b59941bd7dce7fbd465d9825"],["tags/gitlab-runner/index.html","3f9b2e1c73b62782a199acfe27898d50"],["tags/go/index.html","cbfcfad69a4cf67d37588ea1a566408c"],["tags/gor/index.html","26c2858e685e958808e9cc910beffbc1"],["tags/hexo6/index.html","24902c2417af29c11ad6987b74c2ee33"],["tags/hexo美化/index.html","2cbe9a9a3994676e0959bcb33b2973dc"],["tags/http流量复制工具/index.html","668524a30de8ae001c618e6b892a0358"],["tags/index.html","79c46f1f29f58bce92ba0490fc6db8c8"],["tags/ip/index.html","7d7dbfb9958757e64296dd7f5adf8d2d"],["tags/istio/index.html","e707765e1cb69021548d20c96dcbd18f"],["tags/k3s/index.html","13900a0ac0228e4b570909d4b40f5d22"],["tags/k8s/index.html","ba37c3658b6a0bf6c5a6734c42fb921b"],["tags/k8s存储/index.html","6270bb705f16937926bba4ac77d0e063"],["tags/kubectl/index.html","64f79001dc1f52dec7e5d4a4f287279a"],["tags/linux/index.html","22775853beb5fbc70794e94c129118d7"],["tags/logstash/index.html","074d29a160bff32ea7bf830ff72079b2"],["tags/mac/index.html","1c98aba2569c7ed466180a635ac2c406"],["tags/markdown/index.html","eec702d829a7e0574c7a962e8cb874b0"],["tags/mysql/index.html","c9b4a47e7dc6dbadb6b0468b534d8d64"],["tags/mysql5-7/index.html","d6be2c8ae8b01582a243dbbdafc117aa"],["tags/nfs/index.html","49a1db65067ac784e8da31688ec3cca0"],["tags/nginx/index.html","79591983f67aa96cd0505357a32f02a6"],["tags/php/index.html","df38d0e0b2b20974db185335e339af1c"],["tags/php5/index.html","5d32d9bca7f1b7d7f318aaadb41a5150"],["tags/php7/index.html","e9c1929d4f471feeeefdbaa03f86c794"],["tags/promethues/index.html","9f65491e23e697bee437b2a4a56d7898"],["tags/raid/index.html","6da99abd9fa27638e97469c775149b1f"],["tags/shell/index.html","25195f1b1d8229575123c17218e788a9"],["tags/ssh/index.html","63cead6c8811a21ca91e09443a8fcd16"],["tags/storageclass/index.html","f1b719db0c03a4b1de8c584d202a4416"],["tags/systemd/index.html","63f1d133860670df2c84c8123f3860ef"],["tags/windows/index.html","c8876af320f16cec0618606b6c7f5119"],["tags/云原生/index.html","7fb959b19b2b63daf84564016d3c5318"],["tags/大佬博客/index.html","322a983f5f01224602f6d25c5f054ca1"],["tags/收藏/index.html","3f27c66f629c9d711fba445bd04ea03e"],["tags/特效/index.html","a0369c795410d03792f0a9a5529560be"],["tags/网址/index.html","428da812ad65497d55f02d37a102b483"]];
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







