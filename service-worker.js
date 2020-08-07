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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/19/首次搭建hexo博客系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/24/5-hexo添加看板娘/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/26/6-ceph安装部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/26/8-mysql5-7二进制部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/10/11-mysql简单记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/11/12-awk简单记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/12/13-云原生博客汇总/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/15/14-mysql目录copy方式迁移/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/16/15-docker简介和使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/16/16-dockerfile介绍/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/16/17-markdown一些写法记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/17/18-收藏链接/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/17/19-shell中gt和>的区别/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/28/21-流量复制工具gor/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/28/22-es集群磁盘扩容/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/01/25-linux一些脚本汇总/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/08/26-logstash配置/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/11/26/31-systemd一些命令/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/12/02/32-php错误502问题总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/12/03/29-k3s安装配置/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2019/12/05/34-k8s一些命令总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/02/27/35-raid1盘数据迁移/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/10/37-mac一些常用命令/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/05/13/46-docker安装nginx第三方模块/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/05/27/49-go简单记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/07/27/51-k8s搭建radius/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/08/04/52-istio测试nginx-php项目/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","1f4eaa2515eeaab36d2acd2af5d29262"],["baidu_verify_Og0HzH3bO9.html","d41d8cd98f00b204e9800998ecf8427e"],["baidu_verify_SIdT0vzXib.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/docker/Dockerfile/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk/elasticsearch5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk/elasticsearch7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk/logstash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk7/filebeat7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/elk7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/fluentd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/gitlab-ci/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/go/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/item2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k3s/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k3s/lnmp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/elk5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/elk7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/kubectl/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/mysql/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/prometheus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/storageclass/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/k8s/问题总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/linux/awk/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/linux/shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/linux/systemd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/linux/问题总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/mysql/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/mysql/主从/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nfs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nginx/问题总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/php/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/php/问题总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/radius/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/raid/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/windows/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/博客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/博客/美化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/存储/ceph/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/存储/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/存储/nfs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/技术文档/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/技术文档/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/有趣/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/有趣/二次元/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/流量复制工具/gor/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/流量复制工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/网卡/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/网址/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/网址/大佬博客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/网址/收藏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ceph/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/cephfs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/cloud-native/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/daloradius/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/elasticsearch5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/elasticsearch7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/elk/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/elk5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/elk7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/filebeat7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/fluentd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/freeradius/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/gitlab-runner/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/go/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/gor/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/hexo6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/hexo美化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/http流量复制工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ip/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/istio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/k3s/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/k8s/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/k8s存储/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/kubectl/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/logstash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/mysql/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/mysql5-7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/nfs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/php/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/php5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/php7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/promethues/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/raid/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ssh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/storageclass/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/systemd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/windows/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/云原生/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/大佬博客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/收藏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/特效/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/网址/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







