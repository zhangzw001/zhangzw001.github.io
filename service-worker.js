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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","7e0a8e20c1dd5ac2e5ac39bc7150020d"],["2019/09/19/首次搭建hexo博客系统/index.html","877daf307271a08b376448302a144d4f"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","c19f26502e8a4768d80e1169391c5430"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","8029d17b87274ddabfb4ae57c99341a7"],["2019/09/24/5-hexo添加看板娘/index.html","a60a0f3d045d8c651b0821085b7fac9e"],["2019/09/26/6-ceph安装部署/index.html","31213da442633ee5367ac0b743bad952"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","3393331445627ef0ea76c855c0267760"],["2019/09/26/8-mysql5-7二进制部署/index.html","bff469d10c741f8aaa384c35cfeaae83"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","c43c7fae664437799e3a0a4133f04aef"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","f1d39d72be3af64e3cb96da5a3164fe6"],["2019/10/10/11-mysql简单记录/index.html","cb962f71040007c6ee00e8210ff21018"],["2019/10/11/12-awk简单记录/index.html","bcb5e03ab8b6abf9b28798d8680c2f93"],["2019/10/12/13-云原生博客汇总/index.html","0928f46558cf8efe24fb0e44dce28d18"],["2019/10/15/14-mysql目录copy方式迁移/index.html","421b3d380a24f8b237b60ddb45598076"],["2019/10/16/15-docker简介和使用/index.html","2b549b3fb9fe5d01b2ed7007dc70313c"],["2019/10/16/16-dockerfile介绍/index.html","da8ef041956e43a84293bb85908b2e7e"],["2019/10/16/17-markdown一些写法记录/index.html","a59372f14eddc69e3d660ef0d364d472"],["2019/10/17/18-收藏链接/index.html","0d6d54cfed8bc6b008f7d791cdb2717e"],["2019/10/17/19-shell中gt和>的区别/index.html","63a8a3865b4f7af4e705985666bf0cb5"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","143981cb7fed9357d845e90daa7ad41c"],["2019/10/28/21-流量复制工具gor/index.html","23fc93b520e0c64d1380cd4023c17abb"],["2019/10/28/22-es集群磁盘扩容/index.html","c2ef543e049c91b288b02076a0648c56"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","863949e14314a64ec9f6f0d360849af6"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","bf110b0ab98ee204ff41b0a09e871111"],["2019/11/01/25-linux一些脚本汇总/index.html","fa48a57c8e24cb0c5bd8cb89f8879f4f"],["2019/11/08/26-logstash配置/index.html","03c7600feb0eb8140f360afcb9a03399"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","80c5f8a57f8bbff1ea482fc92600fd4e"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","a48e586205ae7d8db838d9f030f6c1a9"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","a484862c0da651011086e21c2c6cae46"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","85febd22a8b76ded1f27284735491520"],["2019/11/26/31-systemd一些命令/index.html","5e6975ccd1e145762fd8f29dd8d17272"],["2019/12/02/32-php错误502问题总结/index.html","4c35c47afcf67978db815dac9baeeaf4"],["2019/12/03/29-k3s安装配置/index.html","7998c36191cc2a1536303a8c55363b99"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","bf7f878e10446c5da9299e73558ef24b"],["2019/12/05/34-k8s一些命令总结/index.html","5461f7ac9fe1775e0ed0878a28c24945"],["2020/02/27/35-raid1盘数据迁移/index.html","b8eaa8ebf82cde5f1fd8bf5f88ec6fd0"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","b53bb779573dded2322f0a33d1e13e70"],["2020/03/10/37-mac一些常用命令/index.html","fac50f0ff8d4132746d3f4f507ddf2c9"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","7dde40d23df43a98d48d388ca67ef0dd"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","84a9cbeb0ae0891d6b526115aebd4405"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","1057f0e40251916e84d811291d42700c"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","a521faf945115c510f71bb69753bebca"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","d2240abe754a986f17ed6c13215bd7f8"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","9b86f72fd8520cac08c54e47a3cc1f18"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","dcc7742b3ab728e3ae1dc5cc58984a31"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","7708e223fefc13ba701ceeb784102d7b"],["2020/05/13/46-docker安装nginx第三方模块/index.html","9cae9065951987677a5b998d82c52906"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","f787912079a3879f238a0b304a45e152"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","0696a1ffcf172a9cec0c55f474c20609"],["2020/05/27/49-go简单记录/index.html","e0c7bc6c87743aafd5d843436cb0656d"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","030a0a13b24a9086ef19d9f26f1c28ea"],["2020/07/27/51-k8s搭建radius/index.html","31a43ab642664affb4f39ba32db4e9f1"],["2020/08/04/52-istio测试nginx-php项目/index.html","b5f26f6473a7770c7fc89b9d32d549d1"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","744f676be6c9d93bb4202b23dce3f156"],["2020/08/12/54-go单元测试和性能测试/index.html","cea036ca37b27c0373694b2b73fe6b6f"],["archives/2019/09/index.html","d04d4ea9d1dce30d2bdeee965c8be34c"],["archives/2019/10/index.html","761a7d57eb646ad0c65a594dd46f4e74"],["archives/2019/11/index.html","7f212d6571ee3168f398188f18428862"],["archives/2019/12/index.html","ebb4e2ae4019eba708d3670db3839e1c"],["archives/2019/index.html","e3465507bb350f4fd1917e749fcbffdf"],["archives/2019/page/2/index.html","7e736ae9bf60089d2f7f5548bdbe5e77"],["archives/2020/02/index.html","bffb1226ce9de7b2f046e920c691b33c"],["archives/2020/03/index.html","40955c8e406b32e27f9c9ee0c2d8c24c"],["archives/2020/04/index.html","df273bccc8dcdbc5085b6daa136d5194"],["archives/2020/05/index.html","d30f46562b88fd8eb695ef107356b095"],["archives/2020/06/index.html","adb9dfcf73000df6bd7372220c771f72"],["archives/2020/07/index.html","dae8468ca2a7bdbac43ec8cc44782a56"],["archives/2020/08/index.html","2bfb63948ad2aa913765dbc33276f4e1"],["archives/2020/index.html","82c6d07f55ed0e701b0722538f1cec17"],["archives/index.html","1805066e24d39767a56a5b2a8a1cdd49"],["archives/page/2/index.html","96733d6626b75d9cb4b6b83f9ec259a0"],["archives/page/3/index.html","fe47d8ddbd0585b047f5999ead53167b"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","a5e9cc551568f1e5721f148047e9bd6a"],["baidu_verify_SIdT0vzXib.html","b077295726c2eb8b22211cb0d3a2434b"],["categories/docker/Dockerfile/index.html","d9d5c3c1789908d702703836bdeaff93"],["categories/docker/index.html","60e0d43c6d4859780d5a9687841a883a"],["categories/elk/elasticsearch5/index.html","c17d0ce209e077f19471ad7945a3977e"],["categories/elk/elasticsearch7/index.html","32b629327da686dad1bb5041c2201e9d"],["categories/elk/index.html","50bbeff98fbbacb2544be2259b7a194b"],["categories/elk/logstash/index.html","28551393bff9ef113e12f2141bb673b3"],["categories/elk7/filebeat7/index.html","1d5093d27ef43425a2e72425edf04f21"],["categories/elk7/index.html","d031675efb345d242974e8ac0798c480"],["categories/fluentd/index.html","d43f1dd6f87792edf11a4532fbbb580a"],["categories/gitlab-ci/index.html","a1ff4c7b21b28d77ce1957537881ef60"],["categories/go/index.html","4d7c72157e8a509eb2c7009f2b4f0b88"],["categories/index.html","e25dc6109e3d42facb924fbab0e13b6a"],["categories/item2/index.html","04631590b1f6505d2a313b1c387d3584"],["categories/k3s/index.html","8a48a174bbe9d716ac53998858ebaa40"],["categories/k3s/lnmp/index.html","4eb1a09dcb1ea49efed157e50a8b6f7e"],["categories/k8s/elk5/index.html","c3bde81862d35649c89758c62fc9ed48"],["categories/k8s/elk7/index.html","27850e3dccb3f4c4c4023a332fa5f44f"],["categories/k8s/index.html","fd5703ee06faaecd73e0ce475b6e5b54"],["categories/k8s/kubectl/index.html","f75bffcc391b9589959bbd09380e48ff"],["categories/k8s/mysql/index.html","4ce36f7d824198d708147d292c8f5278"],["categories/k8s/prometheus/index.html","6a4298cd127351c4c0c746582d418651"],["categories/k8s/storageclass/index.html","fd8c78a9fc7cdfba037def4aea51ff34"],["categories/k8s/问题总结/index.html","099dc4f2ffe1144c73f98d738ba58621"],["categories/linux/awk/index.html","5f463d901365c67d8c9920fd18fdf29d"],["categories/linux/index.html","987cfd5e13b527c19fb38fde03209a66"],["categories/linux/shell/index.html","95e0c9708f55a4b268cb38077536ed4c"],["categories/linux/systemd/index.html","905a9e6097c9909b94ec7cda3b087824"],["categories/linux/问题总结/index.html","a478ad4697ce10a482c0309d07cb01f9"],["categories/mac/index.html","ae76a64c360228810eaca42ba76091a0"],["categories/markdown/index.html","32077155b49fdee4cbeee425dfc3bb7d"],["categories/mysql/index.html","7a5f945ac134047fd455908c93472b05"],["categories/mysql/主从/index.html","3ef9c9e55fb24e01584c823744be362b"],["categories/nfs/index.html","bc65b434c4343b3f5b08f21bfc9c2796"],["categories/nginx/index.html","f5842819166979f5eb27bc7855059cd4"],["categories/nginx/问题总结/index.html","cbbf74610e24a213acd89e27411e79db"],["categories/php/index.html","3faed9ac467e1f083fe9b7019e9aa27b"],["categories/php/问题总结/index.html","e32a4d4eb5e71c0daa9241b6698cea9e"],["categories/radius/index.html","5d85107d04dd59410fe8b143160da55f"],["categories/raid/index.html","1093bba2b0798024e67a1608bf99188b"],["categories/windows/index.html","abbc5a24ceb07930d08c6c5d39875f64"],["categories/博客/index.html","5287e5648c3f4094c057f6ed426e1971"],["categories/博客/美化/index.html","3f3297740369deeaaa685b9459cda28c"],["categories/存储/ceph/index.html","2dadb8d4bff42026759fde676361cd32"],["categories/存储/index.html","00e287e97d4f099ed509884e573655a0"],["categories/存储/nfs/index.html","1ba1dd7953f50750ccedb9c46e05b4fa"],["categories/技术文档/index.html","fc2d8275154410d4e1491ad9dd5b0bc5"],["categories/技术文档/page/2/index.html","b983d2ad1ebfc45b66d24dc894134092"],["categories/有趣/index.html","f46b877a1bbacc5bda137bc990816801"],["categories/有趣/二次元/index.html","3bc19ef24606113103fec0d764fa4407"],["categories/流量复制工具/gor/index.html","a08b3aa5db1b2c9cf9da557f13f5be1a"],["categories/流量复制工具/index.html","c877d39f80e71fb126257a1d37ad54a3"],["categories/网卡/index.html","a78185786e9b6506031e3d2301af70b4"],["categories/网址/index.html","d6f82a45c0375540ac31469705497b3f"],["categories/网址/大佬博客/index.html","6f4c9c0186d4749c2b46b6f8d646eee9"],["categories/网址/收藏/index.html","fe745117bf30e8938b07b4026f2d4e24"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["googleb6c70596855d90ca.html","bead4c9b1906f9c6c5ad81b622bcceda"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","1b606336905519b265f613cf05c03ce7"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","8ffee34f9bb8fc8dae79348a653a29c7"],["page/3/index.html","4006995a598c8dcb0ad7b6ac39879ec8"],["page/4/index.html","b09f712c2f17a5d6ef4364279a785d81"],["page/5/index.html","f0686a1823c38eb017d01cdae53d1d1d"],["page/6/index.html","f901d856e849acb727adec209551dc79"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","19a9940874ccda91ff4ae9bee1e6596e"],["tags/ceph/index.html","063b9dde09731699aaca96a16c4123aa"],["tags/cephfs/index.html","8bf990fc322059b7435b361c2e20e7fc"],["tags/cloud-native/index.html","b6b86ec028ac0dbb453b8bdf358710df"],["tags/daloradius/index.html","8bc625de84086e9276826a98b52a8762"],["tags/docker/index.html","6ff9ddbb869f3621164a61e11da839ec"],["tags/elasticsearch5/index.html","fc66bfdab9215ed0e46b1da163acde6b"],["tags/elasticsearch7/index.html","4c1cead5d833a7639415a21e81fa6f5d"],["tags/elk/index.html","8873714ef74efb1542419f24afc4eaaf"],["tags/elk5/index.html","1f85d9a1539a4b81684ac4d21eb1e868"],["tags/elk7/index.html","a85bdbf9ac075313c7f212234c737722"],["tags/filebeat7/index.html","3ca07d4264beec5e18e6aed11ef07074"],["tags/fluentd/index.html","7c58fbc3139877f397dbdc3bbaad55dc"],["tags/freeradius/index.html","044edcafd962346acbcf1dec544cc58a"],["tags/gitlab-runner/index.html","df5eb5b4106c32918a61dc28e0fec128"],["tags/go/index.html","540786977f1094d5b1d5db29722e06a1"],["tags/gor/index.html","17167504127cfa20e055f5c3ae50903e"],["tags/hexo6/index.html","cb268ca198c4ed14f673861dc8dc6f5c"],["tags/hexo美化/index.html","1e0090e6de58065e97f24a1e586c63e1"],["tags/http流量复制工具/index.html","f49305c6ae47bc9e354b87235e15d066"],["tags/index.html","26dba430ac5ce7f975f1dade2570fead"],["tags/ip/index.html","31319b615875535b7ef3dc94ad2f056c"],["tags/istio/index.html","0db21d67f8ee297af30b0a8969840269"],["tags/k3s/index.html","9d3020b2e6542c32d12a5938cda06a70"],["tags/k8s/index.html","7997c04a20f0d3cc0a7ff634abdd8ecd"],["tags/k8s存储/index.html","a7ebaead869b9e14c436dfad89ebb253"],["tags/kubectl/index.html","cf1928751435ec350a098a54b4956cac"],["tags/linux/index.html","050e6371b31c6a25bb5774de3db13519"],["tags/logstash/index.html","6b9845b800d84ba3ef5a89f111bfef06"],["tags/mac/index.html","1ad261d1d933ce5fce24fd51ddcb95da"],["tags/markdown/index.html","f5b6221b7455686e7a99d5036f2c3517"],["tags/mysql/index.html","910fa5b98ec9f0a6986fc16403394dfa"],["tags/mysql5-7/index.html","2f11109fd53cf649eaf95daf110eed9f"],["tags/nfs/index.html","cc37e149ff720189bf642d0c9abbbed9"],["tags/nginx/index.html","9e5a455ebcc5d23dd08e7bfd1ae9c909"],["tags/php/index.html","b4b3f77f5bf188beace141a497262860"],["tags/php5/index.html","d9c875c0bd19fd8f5fc0e96b29530c0f"],["tags/php7/index.html","6dcd806f6dff44dab52e8550a2c42f61"],["tags/promethues/index.html","8e8b4466041522510f3450f44bf4548e"],["tags/raid/index.html","a94e7894c2eae7b87dc27f725c7b56f3"],["tags/shell/index.html","2175aa7ca1ef1822f27b0f55b6f97e6c"],["tags/ssh/index.html","60be3e3c5823441d58af70dcd93ec96f"],["tags/storageclass/index.html","cecffec6d02c37026b45f4bbdec0f10b"],["tags/systemd/index.html","1e3c112285dc81c3b6ed32f30df9eb7c"],["tags/windows/index.html","141457a536fb2e7ffbf75e714512cc7d"],["tags/云原生/index.html","d42f97d9d175693eba072ba2f223de3a"],["tags/大佬博客/index.html","c66165ceeff804c395b7f99955e36617"],["tags/收藏/index.html","d600324d2ea35ad4771f72101e64ff2f"],["tags/特效/index.html","e1e33b3749b9a2f2cf8718cf727218d3"],["tags/网址/index.html","1062722ce08303d54baa77adf30d48a2"]];
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







