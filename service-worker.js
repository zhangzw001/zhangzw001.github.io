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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","15fb473673628792d5c2fd2265614c47"],["2019/09/19/首次搭建hexo博客系统/index.html","cd143c49e3fb4d56e40ffbc0955002f2"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","416f8995c3a0c81d347ab2ed1223cb13"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","930fff0016cb5daebeff07a687ec61e1"],["2019/09/24/5-hexo添加看板娘/index.html","6af17c1ea4e6cab3ed0b6ced387838e5"],["2019/09/26/6-ceph安装部署/index.html","b7b0bc62f3cbd7d0ff76291cb21b80f6"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","40c8d8861989cc06a13d70f5bd8a952c"],["2019/09/26/8-mysql5-7二进制部署/index.html","30edea5c5d8dfdd2e2be682528416cdc"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","01e7096ead2a2232b9f2639c5dd458d1"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","0a8a628ed94eb1ea4ce8aa75cb279a27"],["2019/10/10/11-mysql简单记录/index.html","22806cbf3a4247a5acfebd2c9f18bec2"],["2019/10/11/12-awk简单记录/index.html","4c7bd5265deb021cd2ff157aa1403f89"],["2019/10/12/13-云原生博客汇总/index.html","c5931aa9c5d0fae6976c081b3e8a338d"],["2019/10/15/14-mysql目录copy方式迁移/index.html","cde228dd12a90e56fc4717a657ebd336"],["2019/10/16/15-docker简介和使用/index.html","445b6479560abf5ad4995cb7f5f596f6"],["2019/10/16/16-dockerfile介绍/index.html","02c267cb23389c6950d18070ae8b2302"],["2019/10/16/17-markdown一些写法记录/index.html","fbcb7c7ce8f1ffab5b784c78edbca58a"],["2019/10/17/18-收藏链接/index.html","cbb44471c5bc9f7d3705a534189e23f3"],["2019/10/17/19-shell中gt和>的区别/index.html","0313ae858abfc3d866f94e5736a86b50"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","d96cba054a45d25e62c5a0d6007af65a"],["2019/10/28/21-流量复制工具gor/index.html","5f9f06e2bc2f73ab7afed5eda2f39c7d"],["2019/10/28/22-es集群磁盘扩容/index.html","49e972b840a602ac6c3928ea7ab9cd61"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","09ac9edea5fe715aaa7ec64f9b99bc5c"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","3f792cc16141438d13cf2db613d50567"],["2019/11/01/25-linux一些脚本汇总/index.html","c0f967be578026c7524518e9e56ba790"],["2019/11/08/26-logstash配置/index.html","1c9f0a1a7bf5caa583b142010d1399a0"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","94161b4fc1d5e737bcfab76a0ee32fc0"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","626ed5b5d40d88c72310e3cbe54f7306"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","d236474bb03e28e94055bccb51d54b87"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","0c61df1a564578e5874e427a38f1f5c3"],["2019/11/26/31-systemd一些命令/index.html","5f5b9692e0ac00d7364a8e8d9f39b880"],["2019/12/02/32-php错误502问题总结/index.html","cdc70ee56ae2296c8566853bf8d55b57"],["2019/12/03/29-k3s安装配置/index.html","f3a0a2ddd9792431fe8b86d34e1a8141"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","274184a99da14c8ce11c98e242397f71"],["2019/12/05/34-k8s一些命令总结/index.html","8ef64e16abc8f4f031fbad3d52f70009"],["2020/02/27/35-raid1盘数据迁移/index.html","6d3a13483c09d18aa527cc6776e912e7"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","cadc63a16aa3dde3db86009a2447e1f9"],["2020/03/10/37-mac一些常用命令/index.html","6686aba7b0a7f2de9e7fb25a16210262"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","dbf5de0eaf8cc8ee9ca073fb50768f99"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","22f2a64d98828342e0085998cf184bc5"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","e8252063419986149a8ff82429fde80f"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","75c9eb439f95408819b568d3d2445125"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","09558df3ea2b2a0cf7ba33b74d55f953"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","8055e42b708b7143e620bccf808067bf"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","8f449295bb623606d78ea8cc16b04f99"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","f187fe2a5a40aa9ea28058c70aca5cf8"],["2020/05/13/46-docker安装nginx第三方模块/index.html","cdb18aea16dc6170b503d8d358e3ce48"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","804696191db1979dd18e5d51941d0b7b"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","f33089f57e00797ba571fdbc8b13c4f5"],["2020/05/27/49-go简单记录/index.html","ae6bb9dbcb390359b8dbf9cf77dbd8f6"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","4e807585527c27279d141ea9e6300b6d"],["2020/07/27/51-k8s搭建radius/index.html","483d4e725b9678a6c57c8a35cf3a289b"],["archives/2019/09/index.html","d221c07bd0d52364588da2de190dfd65"],["archives/2019/10/index.html","2525e99f3186d4dc277f2786f542967e"],["archives/2019/11/index.html","437727dae3994102a397ebafa30af7ad"],["archives/2019/12/index.html","5ab65503a7395e33f9ff35893aff8934"],["archives/2019/index.html","d52efe063299c162981c6143fc484d6a"],["archives/2019/page/2/index.html","d62223eb102f76a5a2827649b7a63c82"],["archives/2020/02/index.html","af765861230ff4dfc940c65bdd889514"],["archives/2020/03/index.html","2687449e5180dc835b81a00384dc3d75"],["archives/2020/04/index.html","4451d0d0666ef82df73605f8edc28a9a"],["archives/2020/05/index.html","38195b7cbefd85fb07377898a9044283"],["archives/2020/06/index.html","5651b013e98f11f7db9c2e9b76228a39"],["archives/2020/07/index.html","97efd92e6dda9583f0489971dc5414c0"],["archives/2020/index.html","9f9a8235cbd8789fd24c1d83901ada06"],["archives/index.html","51120648b4c818b9e819a4bc2ee9fa19"],["archives/page/2/index.html","a75110befa800fdcc5e8139a04ecc3e4"],["archives/page/3/index.html","1ae48e678fa2bf99f6d00c14d5050838"],["categories/docker/Dockerfile/index.html","3d3d8d4a0387f2c16c8293df20bf0a72"],["categories/docker/index.html","865911c9aee1b7772f23240820cbf224"],["categories/elk/elasticsearch5/index.html","c7290ab2dc0762ba4e205a42e77b5042"],["categories/elk/elasticsearch7/index.html","dd95eaf512c827881c63686bc5a3d4ab"],["categories/elk/index.html","16ca67b5d16ebc3b812eeaf0a3e18a8f"],["categories/elk/logstash/index.html","8425d2ffcf145839c04d577b478c2d8f"],["categories/elk7/filebeat7/index.html","10dcb8f68daa1cd7a9ef54b48a060a1a"],["categories/elk7/index.html","35d371a86d3d034cef4e59d3869329b1"],["categories/fluentd/index.html","61e29e6427c57621b5fa8e9c6f221a78"],["categories/gitlab-ci/index.html","8c8106a4ce756e89dc42b73cbea28124"],["categories/go/index.html","2b3e1c38a8984222af2e705385a4e502"],["categories/index.html","bfb15fd92d3d38b1a536294caabbf935"],["categories/item2/index.html","428f75cbd7ca49bcf209b55183f8f624"],["categories/k3s/index.html","a6257b556fc333645b93ffb9395d6a98"],["categories/k3s/lnmp/index.html","41ceda7ccdc8c0c4593eaaaa6a62701b"],["categories/k8s/elk5/index.html","4445b974fcb93c6d2732767299e8ef32"],["categories/k8s/elk7/index.html","a43d063ac0a92399af9e4644de12a5d9"],["categories/k8s/index.html","0a241cdb10f8ce324588175a88f85741"],["categories/k8s/kubectl/index.html","746b80cb31ff5ca4e1b0af3e7bfb69c8"],["categories/k8s/mysql/index.html","0e317f7ecd0e9569b3f1b45242aa4d8a"],["categories/k8s/prometheus/index.html","b5abf1d989e11489cfd1524413c68526"],["categories/k8s/storageclass/index.html","dd91fa145bda3247593ec36f29959f86"],["categories/k8s/问题总结/index.html","f0bd6b3592619f25ea0ce7e7e3332368"],["categories/linux/awk/index.html","70eb6b6e8a01b99e71fdb929d2816db8"],["categories/linux/index.html","4eabef9c747327488c178794b0ce5e2a"],["categories/linux/shell/index.html","f5884a33ed603a643277c52cbcaf2bfe"],["categories/linux/systemd/index.html","059fff77d2c1bfdde0379c25582b4986"],["categories/linux/问题总结/index.html","e24e5f7d997cc4cc464dd0d70e8c8e3e"],["categories/mac/index.html","db4c3f8c129fe7b33a3cb6ee2e45b79f"],["categories/markdown/index.html","730fdd28b6925b50614171d901f9f2ba"],["categories/mysql/index.html","0a32e53463221d6d192726d10d7fe5f2"],["categories/mysql/主从/index.html","05016aa59b3b2bf1ee856387dcaae612"],["categories/nfs/index.html","046801b496bfa8567aee96040434f370"],["categories/nginx/index.html","a1588a61713af6bede2e5b3ce66a9153"],["categories/nginx/问题总结/index.html","bb49215d65c9986d6d50464d380a8993"],["categories/php/index.html","b58d08b32b2a33acf3cfcb452535974b"],["categories/php/问题总结/index.html","a2ed88662a7aefac186b99d02e7eb69d"],["categories/radius/index.html","8c96e633ce847183938eecb751169da2"],["categories/raid/index.html","e249b5f331ffdf7e17f4a0703b8b0792"],["categories/windows/index.html","b6bbde441260e8fb1280122dad9ce102"],["categories/博客/index.html","527ac6608d12e81a5886add4ba57e35c"],["categories/博客/美化/index.html","63f2f79e4d5ff38d4f12d57f70695a83"],["categories/存储/ceph/index.html","a25f83e5b1d3f8bb98b05389d26349a7"],["categories/存储/index.html","4e555db206f343f05c1bc4cd69702901"],["categories/存储/nfs/index.html","2aee8a6d2a92414e277fcf5db6a6f0e7"],["categories/技术文档/index.html","38ace7862f892c400b9276bd6b53079c"],["categories/技术文档/page/2/index.html","c2427e7e64e51d0c5ead6e32f5635dd1"],["categories/有趣/index.html","63f43b34a9eed2ff9b1dcd8eae1da1e3"],["categories/有趣/二次元/index.html","3952876e2e001b50be4f1d47c225e978"],["categories/流量复制工具/gor/index.html","a7766655948ec2e094302062853f59a7"],["categories/流量复制工具/index.html","92573bf99244c88833a6dfc93de5e0d0"],["categories/网卡/index.html","11793b509745de619a5b49249ec0d440"],["categories/网址/index.html","e983b8a8c4b2e1d2e1f9865891d266ab"],["categories/网址/大佬博客/index.html","665e6e4452148ab193ce364e3be8bb86"],["categories/网址/收藏/index.html","fe9f8608a210ed5dc9579c10471bd2c7"],["css/main.css","6bbbf28ea00df1df94615a0151a3ff1c"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","56205ce019ac817299ddf85959304327"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","a97bf37d86453ddc76a5a851de65a791"],["page/3/index.html","276c04554a0c6a0c5bc984a6872e87ee"],["page/4/index.html","2505fa28eb5d0f398429f7d25ec55230"],["page/5/index.html","c898daeaacae7a5cc26181f90d3c09a3"],["page/6/index.html","2ffb3544232b12f49e275cdfbec86601"],["tags/awk/index.html","adbf7fb517c9cbfb5633cc32e6c0b701"],["tags/ceph/index.html","67b415bca4cba58edb24507d88dd9a6c"],["tags/cephfs/index.html","57595295a9816eb375e01b34771ea8d3"],["tags/cloud-native/index.html","d647bc3802807abc7c5d03424a21c3e9"],["tags/daloradius/index.html","6234c2d23791ff7d95da405afcca3f64"],["tags/docker/index.html","061a39d746dfe135f7e2e1bba4c012fc"],["tags/elasticsearch5/index.html","6bc8d8689f70d185c51a58631f2c8845"],["tags/elasticsearch7/index.html","2cd82eb1a85227e0d1a4243d946834ea"],["tags/elk/index.html","3d65285b81a1762ba9e70fce816b8ef2"],["tags/elk5/index.html","3338b7193de6d8d2071b29f9e44f14a6"],["tags/elk7/index.html","d3653461e1ca160a5022406c142754e4"],["tags/filebeat7/index.html","0a1a54363bee2ae501bb43860f09799e"],["tags/fluentd/index.html","c3ba9845d80e1495cc6e2d4bff79a16b"],["tags/freeradius/index.html","9cc73dda8953da8e137484c5fce811df"],["tags/gitlab-runner/index.html","f8d0543dc716f9028867bb77a36415fa"],["tags/go/index.html","074a4fe4095b446de41e09b6fbc993a0"],["tags/gor/index.html","caa75523e5c656b3f27b50102f9ce209"],["tags/hexo6/index.html","6f1f63e060bcb70b8d601a324c80a3df"],["tags/hexo美化/index.html","6457140cbb7547281bfef67ed04bd19f"],["tags/http流量复制工具/index.html","4a2f70ab4b71884251eb34251d4f1970"],["tags/index.html","027b0aa6fbe5fd800319058696291142"],["tags/ip/index.html","a314b8e0f3b588dd6523b3bcdb5a33fe"],["tags/k3s/index.html","1cdfa88346570e5a13b6ec2db1ce276c"],["tags/k8s/index.html","3d9d592032edaf88b135c45aa48a4d15"],["tags/k8s存储/index.html","d4c35a9d71065c99fc9cdf0a7ec5c375"],["tags/kubectl/index.html","612c1927d7a0a80332b96f78b4ccdd50"],["tags/linux/index.html","240d49e21154db1c4d4d4e722f5edc92"],["tags/logstash/index.html","640bb6e8969c12e3e7d5a41390dc548f"],["tags/mac/index.html","6b072c8357325ec187262908300e4729"],["tags/markdown/index.html","d5f4d3d2f38bde78fa3187cf7c3caf56"],["tags/mysql/index.html","eb6b8caa2814cfbd58ae795e4998fc4a"],["tags/mysql5-7/index.html","127d53f3a9dfdb3d08b42df73fffaab5"],["tags/nfs/index.html","e92b7a1bdb8d2cb07fa06a1a84eb4c80"],["tags/nginx/index.html","e3f3243e6473a30f42c2b80a48a0ddd3"],["tags/php/index.html","8963bfa97395c44bd46c1b0c2a5fbdc4"],["tags/php5/index.html","45bfaaddb12cb39dff32d97d9b92dfc8"],["tags/php7/index.html","d4b9a35ecfba2035168a7db611942d4a"],["tags/promethues/index.html","5e6095fbe9c3f719c65ac32883d816aa"],["tags/raid/index.html","0ea28cadea90fc198886c536e3a59e0d"],["tags/shell/index.html","46b1730da555a290311ba00e22bd1d4a"],["tags/ssh/index.html","fd0f7e649aa1b2acb33113245c752100"],["tags/storageclass/index.html","84dfd76f511da0627ae4722b0fe7a94d"],["tags/systemd/index.html","5f26e8d7d8f076570c3c9da47abee9c7"],["tags/windows/index.html","d1b32bd02e2b02ea88707efa0bff6fe2"],["tags/云原生/index.html","215647e11b1c177b95f0cbf350f66237"],["tags/大佬博客/index.html","324e2f085325b93a0d24f119ac9d56d7"],["tags/收藏/index.html","992e27f614452bb4df7c551a05e1c662"],["tags/特效/index.html","a1adc2532c74221143d63a82f9d1aa73"],["tags/网址/index.html","d8cd2ab8d3e9f38094642f7a33b7d05a"]];
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







