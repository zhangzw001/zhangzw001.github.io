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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","deb6c79ae66ef32840a9e50da8c804e9"],["2019/09/19/首次搭建hexo博客系统/index.html","a424cbe45184e25bebebb038d0114a22"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","0ba64849d9a370e0e63ace987cbb520f"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","9adb7b3967cfb50b61de2e639442d250"],["2019/09/24/5-hexo添加看板娘/index.html","09c65baa9d0ea809a8228f97b1df24a5"],["2019/09/26/6-ceph安装部署/index.html","40951cdc41827a717bed8936fdb827c4"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","782e42110bd30b9bb2777fb2e5ba0404"],["2019/09/26/8-mysql5-7二进制部署/index.html","ad8aa110fdc30ff718d2ed1af659ab83"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","d0561f4ac3aa5bd58cea2b5deea348df"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","334a1596647dfb3c838ee0016844518e"],["2019/10/10/11-mysql简单记录/index.html","03a31c4c21401698fab5daa48f4d8956"],["2019/10/11/12-awk简单记录/index.html","d8037e96d2bcd130404809b71bc396be"],["2019/10/12/13-云原生博客汇总/index.html","86118270c9eaab3e8009ef1f744c4a5e"],["2019/10/15/14-mysql目录copy方式迁移/index.html","1fb5d155fb489ea054e017b70b2849c8"],["2019/10/16/15-docker简介和使用/index.html","e95cb9971745fabadff446da95fedfc3"],["2019/10/16/16-dockerfile介绍/index.html","16b3f6e54109455f04ae2a849de28b1c"],["2019/10/16/17-markdown一些写法记录/index.html","80e32a6ebff6f1b02edcdc24f6da0e13"],["2019/10/17/18-收藏链接/index.html","4d0f131824cb191ae453f9b543cd93a2"],["2019/10/17/19-shell中gt和>的区别/index.html","21246979ffc31b7115c2bd4ee9ce9278"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","5a5262df4bfadcf48034ab51f08ff5d9"],["2019/10/28/21-流量复制工具gor/index.html","47bd73d94c847998cd91d216d840b172"],["2019/10/28/22-es集群磁盘扩容/index.html","52a3fd3e349a2fa15ee0ef1b091831b3"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","127581ba644679ee8ea3b83295bcaa80"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","6282d739b043bd270828b1c94630590c"],["2019/11/01/25-linux一些脚本汇总/index.html","83541a3a2d3e93634a67e2c6f26d2354"],["2019/11/08/26-logstash配置/index.html","edbdb8a134644d71343b379be3cea09a"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","21be400f85a7dd398b66d380aa90afa3"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","50c8d6513301c045a93e8aa5140f984c"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","c9f101f4c1964e9a32da24f2adb73c48"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","8d5cbe69abb9885737f33de6b15dd9da"],["2019/11/26/31-systemd一些命令/index.html","475cde2cb35fe6e7551177801300e8c7"],["2019/12/02/32-php错误502问题总结/index.html","c83aad6572e8b6cb7e131a0ccbce0fa0"],["2019/12/03/29-k3s安装配置/index.html","0d0c6f761a3893873e5e27b63e12126a"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","8bdc225bb0f04d79a0830388eff34b4b"],["2019/12/05/34-k8s一些命令总结/index.html","536712e443f7bf422d757c817b43da64"],["2020/02/27/35-raid1盘数据迁移/index.html","5122978b3525fef2e491742d6cf8efff"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d902909ba8074eec6fe6d82bb08e0138"],["2020/03/10/37-mac一些常用命令/index.html","0f2ad41e9dc8b0b3a73a6f8b6caba0dc"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","0289f91cc3295f85494af020c35b8b9e"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","4ee3e8dfa9990eec285afceda73d11a7"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","e038a5caa098e7c32c78447daadbc78a"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","35a83c99b246740d3cc620202f74fb59"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","6bf391959cc86c32c586900ddd7d1bf0"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","b61dc54fc8f0c3828c94fd898d7268b1"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","632eeb1f6446e7b5fab611af6177347c"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","dbf22389d37e74a0be9e7494cf62904f"],["2020/05/13/46-docker安装nginx第三方模块/index.html","468c84489114e4ab5f29902dea7ad0e9"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","77283a4e321605682a7de38b20560464"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","916031c73d2c08e6c93bb28e63ae636a"],["2020/05/27/49-go简单记录/index.html","e2a3ec8a35eeed4403780303c2d4ef12"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","b9be13f8a5486f414e807eaa5ee7fb32"],["2020/07/27/51-k8s搭建radius/index.html","e7f88589a00fde81fe696d07756b71f7"],["2020/08/04/52-istio测试nginx-php项目/index.html","3f4eaf2098c3192b870f293e2ff277ab"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","def7a3eb409fe46c87fb5ba95f1e0be0"],["2020/08/12/54-go单元测试和性能测试/index.html","79e3d49154f449c788e8442df35a059d"],["archives/2019/09/index.html","df9cb0d02fb5b4d23a6817c066543894"],["archives/2019/10/index.html","f6114c3291955cc6341546845375f808"],["archives/2019/11/index.html","6f4ffee830b180d845e5f8e6bf553e86"],["archives/2019/12/index.html","58c47475776300356b6dffdfee41995a"],["archives/2019/index.html","f30fbcd8681a6e8d84570f2b505a1dac"],["archives/2019/page/2/index.html","66c2354b8fad9af3aed314f3b2ff30f0"],["archives/2020/02/index.html","3cc9c6ec1252dfb9b7bcecae41f2314d"],["archives/2020/03/index.html","45b947afdfd314567b14104991a169bc"],["archives/2020/04/index.html","5206ab013ac41e6951f7c317d4d15963"],["archives/2020/05/index.html","72831499443c461470b8f49157eb7ecd"],["archives/2020/06/index.html","b5e77284ee2ad06fe30e17107278986c"],["archives/2020/07/index.html","9b96a62770c260a42e006eb286f74d92"],["archives/2020/08/index.html","1286768196a84325c71012f9422c3abb"],["archives/2020/index.html","610d949ad6c1dd7206a6dfed32fad84a"],["archives/index.html","f6b5f8ba87655e15bf764268b8c15561"],["archives/page/2/index.html","76f1506d42991f08c6da172523d9617c"],["archives/page/3/index.html","bf7a9007a9736c8760d57d96708b85be"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","95892ba13829eb68d304c0d8344192cd"],["baidu_verify_SIdT0vzXib.html","575107856fd36158e88d7646e60713ee"],["categories/docker/Dockerfile/index.html","fd2e4d785fc0a5af91d3bbe49a3abb4d"],["categories/docker/index.html","e5a76367e0957942cd7078bdf0f7e863"],["categories/elk/elasticsearch5/index.html","532707e5705d8a54a1b66c3c425e9084"],["categories/elk/elasticsearch7/index.html","d3573cd28719bd9dff5a000a6d5e677f"],["categories/elk/index.html","903834a113b3cf85649d8f1d9453c5fe"],["categories/elk/logstash/index.html","95d1690a4110e15ac7c7f87bd16c90ce"],["categories/elk7/filebeat7/index.html","53ba5f26aa9b564a4285e21bee44f42b"],["categories/elk7/index.html","306ae40a56f96cfa2e20c8012975d213"],["categories/fluentd/index.html","11e93feb67d82c450b9ec9945d29be33"],["categories/gitlab-ci/index.html","64e8f98b57565ac588db1f9aac73a8d9"],["categories/go/index.html","b4b35ee50d0b6d7267b31e85c2044aec"],["categories/index.html","f40c7702b03c81f4e58db1398a7587b4"],["categories/item2/index.html","e42bc6e7791b0a0bd7cb34772c2be110"],["categories/k3s/index.html","2bba1841e579f3af51c6f4c408e47da2"],["categories/k3s/lnmp/index.html","d97ea962416d14011fb76e6585b2c0bb"],["categories/k8s/elk5/index.html","d7f82c045d1addf34ba73000e9d44cd7"],["categories/k8s/elk7/index.html","a9c4ee36007b6312d54b62995f97ef7b"],["categories/k8s/index.html","3bce59ccbacdf0a3a4309806d2469cb4"],["categories/k8s/kubectl/index.html","cd3808f4bb9b59dc50da508b36120a9b"],["categories/k8s/mysql/index.html","cabb4bac02a1a06c5031505b6f9311f0"],["categories/k8s/prometheus/index.html","1f5e4a74c15ba73458ee79fc2f1d79be"],["categories/k8s/storageclass/index.html","74e6b5dd7e1b35f302346cf3c0440e5d"],["categories/k8s/问题总结/index.html","2c7165ba020edf9b9006589b06d569b6"],["categories/linux/awk/index.html","77686d85fcbb357a7b09286f2c18cad0"],["categories/linux/index.html","5d4099f3e72b4cb1ea2946661412b9e3"],["categories/linux/shell/index.html","ca5b21d9ea25af5f6c926dc1e08529c1"],["categories/linux/systemd/index.html","4e09496ff19784be0d1bfd15d2bc955e"],["categories/linux/问题总结/index.html","52e3743b517eea9b3beedcb996e1d8cc"],["categories/mac/index.html","2fd8a7f07cca8307c667af74917a539e"],["categories/markdown/index.html","6ea4ea1c8e30e76c97c645a006d98ca4"],["categories/mysql/index.html","c6baf745f5b10b4a1e0cb975378a7265"],["categories/mysql/主从/index.html","8761997e1fd1c92f929fcc9eed4d706f"],["categories/nfs/index.html","9a1ed4fcb247fe1e16759edbd46372c7"],["categories/nginx/index.html","4dcc39fc6d25723b8135d218ffe7476e"],["categories/nginx/问题总结/index.html","645d1ed0a99a860a8fcd7341afc8c98c"],["categories/php/index.html","d36deeba26e8e033c05c92e0a2b7cd6f"],["categories/php/问题总结/index.html","259b96e972ce41c1996ba885c8be8234"],["categories/radius/index.html","8a2a031fb5d66f1152707be427d3edc4"],["categories/raid/index.html","156ed9eddbeeaf87ab07ade0d3be2097"],["categories/windows/index.html","1a7bcdc1554f2936044916e9205955bf"],["categories/博客/index.html","332ebbcd3d13deac89833b3f09da70e7"],["categories/博客/美化/index.html","2fb18ffae9bfc8a46d554d906db1cac3"],["categories/存储/ceph/index.html","dbaa135c7fcd1c1be2566113dab6340b"],["categories/存储/index.html","08c1b059bce1d29cf4c162b18b3ab9ec"],["categories/存储/nfs/index.html","9ccde8a9b7e28c9abea64c600af4b8e8"],["categories/技术文档/index.html","379c410c7e29aa6ae66bb9e7a7341c3e"],["categories/技术文档/page/2/index.html","62fb756b2292ce732aaba68998defea9"],["categories/有趣/index.html","7977c49e0f0453a36ebd457cccd55bd6"],["categories/有趣/二次元/index.html","65602a74893500c68fbc580c4a9dc54b"],["categories/流量复制工具/gor/index.html","29800213daf365cb61c5e7cf89b0e91d"],["categories/流量复制工具/index.html","b552dcf4987fd4fceb5aef2f14a44b2f"],["categories/网卡/index.html","b8bb1ff627ea3be4f7c7d3f2ea7c2a1f"],["categories/网址/index.html","1650fa2c3c2361473d3428dfdb9467e7"],["categories/网址/大佬博客/index.html","e72819521c14975d4b98f01df7bafd2b"],["categories/网址/收藏/index.html","2d7b5f9639942067548f7944a80d6d9e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["googleb6c70596855d90ca.html","0a568385e287e14d4f76225f126bcac7"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","a500faeb4ac057e6702191fdbbe1bdc1"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","ee0f1801226be7062fd1b241c5155a8c"],["page/3/index.html","49ec97dc6cc028f7341cc0c0548f98f0"],["page/4/index.html","9891846d7b210198c6c1be91eb4c8678"],["page/5/index.html","ddf477a63e51fe71d2f1f193c25a45ff"],["page/6/index.html","3a4d2a9a0b98d1a9932b32e628b1b6a1"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","b51e87cc133509e9c3a9a46d0a1c9a98"],["tags/ceph/index.html","a0f02ea93f794149974b81cf6ff6ddaf"],["tags/cephfs/index.html","cee49f8bae8144fd9e0755d1a8548227"],["tags/cloud-native/index.html","a458c450348cf257026b836c874e69a2"],["tags/daloradius/index.html","1c1680e8346924a48d640ac16bfc089d"],["tags/docker/index.html","91d24e1ff49fda14d2564a89cd5fdfe6"],["tags/elasticsearch5/index.html","42b7d0358043337bb64b747c2fedf0dc"],["tags/elasticsearch7/index.html","3195e2572c9ffde2547fd2d9c3f2f576"],["tags/elk/index.html","c20bc01ebc70d244a3c012d0a9ec49e7"],["tags/elk5/index.html","cc0e80e1f76c1f345cf0df33445a4a49"],["tags/elk7/index.html","4c92d386ae8912a0e1ebb089afc171f0"],["tags/filebeat7/index.html","057ca96fad539ff25ae54884fcf347fb"],["tags/fluentd/index.html","cb90ba04af7da27735b0205736c30169"],["tags/freeradius/index.html","b63ce0708cd5a57f59f3ec5401f3fae0"],["tags/gitlab-runner/index.html","d811c7a3c65b2373d2f3c3c143c474b1"],["tags/go/index.html","e11c9ae76b3c2278a59c74f67df380ca"],["tags/gor/index.html","22b8878d8d474e3c2c3c03db2f4a456c"],["tags/hexo6/index.html","29ac1984c604a71747a50872cdc1c070"],["tags/hexo美化/index.html","a0b92400da3ff1fcc7e572c14732d479"],["tags/http流量复制工具/index.html","aa391ca9745b2543f73122e81ab8c627"],["tags/index.html","df6093bab9c5fd9d64658a26928204d7"],["tags/ip/index.html","526a71de4bf0a282fa030955e2104412"],["tags/istio/index.html","ad590479b97f6bc0a1019d5e0b531d6b"],["tags/k3s/index.html","54d0f1a8266f6ad0d1dedf66164c7d04"],["tags/k8s/index.html","a9cc62129ab95e202fcc819d8f6bbc8f"],["tags/k8s存储/index.html","cbcda697d2616bf8ee8916841bc97d48"],["tags/kubectl/index.html","e9287a1762c0a4e3a3f891d3c8f0627e"],["tags/linux/index.html","be322be70c023e83955dbf20fd7a9051"],["tags/logstash/index.html","7adc2a023b6c4a88efa73aa4aa271d5e"],["tags/mac/index.html","9de157cf4f5d38c8ff20ba0dfbfa92bf"],["tags/markdown/index.html","30bc33bb227f6435044ebfa5359de440"],["tags/mysql/index.html","46e35ae09333bbdcbdecfc0ecb72488e"],["tags/mysql5-7/index.html","44bd8e2c866698e5f01d26e86fddb480"],["tags/nfs/index.html","69246883b3301e2459418960cb1cc9c3"],["tags/nginx/index.html","56b22c6d910b2a6d1e0ca4250a84f95d"],["tags/php/index.html","c0ddbe99a7433693b36c62abc2e425da"],["tags/php5/index.html","5737b5c49b8bae21459ddbefb4e9f774"],["tags/php7/index.html","757afc639d11a1b08463e823776803f2"],["tags/promethues/index.html","0b4738db4fb0b0a0a38181538c7e2962"],["tags/raid/index.html","8e032d000bc949556c73acd4bc6cfb32"],["tags/shell/index.html","de88bb4ef9455154e763ea7169334afb"],["tags/ssh/index.html","026c2b5ef723f6616cbc254c6fd4f045"],["tags/storageclass/index.html","933b1222d64a8021e838189238a20fc1"],["tags/systemd/index.html","c43c4f0c9f7906d154307d7ff9078b18"],["tags/windows/index.html","3f986d08ca30e19f423845a5ff85d582"],["tags/云原生/index.html","7b4efb2ae93b37b8168fdbf97912b567"],["tags/大佬博客/index.html","20c809e914187a73e26fcfa340159962"],["tags/收藏/index.html","ecbfe3f81b52b84b1409758dc49102fc"],["tags/特效/index.html","0e51f0cda29f3cff9659383def298d41"],["tags/网址/index.html","afb334fb933932482c634b041745aa63"]];
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







