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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","8320a4fe61cca7adeb417c71b1beb00c"],["2019/09/19/首次搭建hexo博客系统/index.html","45ab356b049ade2f8bb7d9d2cac479d5"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","8b6a3a0042927fae7e7b7925a99eb1a2"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","53b40b9b6a34ccc2d055e1981f2a9bd5"],["2019/09/24/5-hexo添加看板娘/index.html","5994495c447016f87e07766af0dfb4c5"],["2019/09/26/6-ceph安装部署/index.html","d985d8992f47c6a19eb360b7c9030cfa"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","100dd57bbcdeabee47b3022e562db922"],["2019/09/26/8-mysql5-7二进制部署/index.html","90a9a013be7f211b8ea1333309d5b95f"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","4d5b045cde2ffc93fec1979531b46bc9"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","944abe3918a467f0f112a9f003ad391e"],["2019/10/10/11-mysql简单记录/index.html","27d840302147d4a462186928876efe94"],["2019/10/11/12-awk简单记录/index.html","ae0c7734d518f129f95be261a4a2108b"],["2019/10/12/13-云原生博客汇总/index.html","c9c86453398c31020ab2ccca49a317d2"],["2019/10/15/14-mysql目录copy方式迁移/index.html","ab8298cac17a4b7c8b7f544992684c7f"],["2019/10/16/15-docker简介和使用/index.html","b105ace21f708d0ca614881c17e28d0e"],["2019/10/16/16-dockerfile介绍/index.html","fbac4099d6d6912388a685c659173a16"],["2019/10/16/17-markdown一些写法记录/index.html","123c6b46a939f1e865e66ce54e57fafe"],["2019/10/17/18-收藏链接/index.html","7ae212bbc5e21d123bd623f37effe113"],["2019/10/17/19-shell中gt和>的区别/index.html","a9319de0cfee6d8e919307f13f0ee5a8"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","6b48f1b44819b7c50f5cc7060058aebc"],["2019/10/28/21-流量复制工具gor/index.html","5ee4a83030872e4f0d3f00f586da34b2"],["2019/10/28/22-es集群磁盘扩容/index.html","60ba47b1bb03b534ebe1a0f820fe6c96"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","77779d7dbeae5354efa1ebc62e6bac74"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ff6e04bd9f28865863c99eec73be4037"],["2019/11/01/25-linux一些脚本汇总/index.html","68f280acc25ccc8f6fc71dfc9824aa85"],["2019/11/08/26-logstash配置/index.html","c60bc7271cc3871aa8cbfa2a7f570acd"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","10a729f2b4f438edbd249b47c66f6590"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","32f8215b8dabef8f5713027b677230b9"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","6818414e28d263f88ddde3a54dbf4d1f"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","28ad9d43cdd99b9a978b68c55cbb136a"],["2019/11/26/31-systemd一些命令/index.html","a52decf4f8f06895932041aaa3ca231f"],["2019/12/02/32-php错误502问题总结/index.html","e48ad628149ae473ac2be4746e26530b"],["2019/12/03/29-k3s安装配置/index.html","543b21da4f089cb567b26869c1f21435"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","5b1416948492f60b2dd065648e10a789"],["2019/12/05/34-k8s一些命令总结/index.html","c89f1c6ec771bcde860a5cdd6d713069"],["2020/02/27/35-raid1盘数据迁移/index.html","53b1804b24b713c30e0d8e0a4d172ee6"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d9b1e8dd2782c34031fa48db5cf85ff6"],["2020/03/10/37-mac一些常用命令/index.html","a99a4c0c74b0ba131d34bd9a1781357b"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","b0b03a4a93af616c940b2e95055593a6"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","d9bc7f70f019509feda283d0f6f14112"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","1568675a489426c8a9f24e0548635c12"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","4bfc6d84020ef7ef15d8440eb3bbd6d9"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","384d00ff2def0154612cee165722a480"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","d6b0165a8aec7c149d085d70382a48f5"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","c4c4711cd1b49562b008f136446dad7d"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","0cbccd580a6f1fb36a07ca271159bd0c"],["2020/05/13/46-docker安装nginx第三方模块/index.html","c810f7ed6e5c1b1fbd64a1b1dfe17df5"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","60820c6f096721310e4c979978e685a3"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","1a311931db353b5449b94eb68bb86835"],["2020/05/27/49-go简单记录/index.html","e8afb4d927d11b39b8002b1563d469a7"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","a5b7c2bd1d5b225522ac61e49e4c516e"],["2020/07/27/51-k8s搭建radius/index.html","66ea3e7281426a37d8167fb346b012c9"],["2020/08/04/52-istio测试nginx-php项目/index.html","5f308ac32d93e6ca8f1a754647e649b7"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","c016a41bdcc0d66d0c98951f31cbfb7e"],["archives/2019/09/index.html","6bfee7b6a13f888d8e16da65ef404107"],["archives/2019/10/index.html","f7d9868509740542ffafdb234f985d53"],["archives/2019/11/index.html","95dc7a4cd284c4a586facf939a22c68d"],["archives/2019/12/index.html","23db67ec10a90da14e72c1e62b20c77d"],["archives/2019/index.html","3a4aa0bd59936e26687d60e67e88423a"],["archives/2019/page/2/index.html","ac0ad09f388f62e24452a76005b39454"],["archives/2020/02/index.html","03f45a75246ee947dbce441f3ee326a8"],["archives/2020/03/index.html","f550fbb6a49080a702d6c48053f999ee"],["archives/2020/04/index.html","d3db8f10114ff0ba54f097b34fc3ef48"],["archives/2020/05/index.html","4786336ebe0ee671f338eb8814ca9987"],["archives/2020/06/index.html","5a6bdfe5ec6c9f8d22df8c9d643fa0b4"],["archives/2020/07/index.html","c73e56e17981cbea5467b354de2f1ffe"],["archives/2020/08/index.html","60e851507aafc58667daffdfce3e6d3a"],["archives/2020/index.html","7a170016edfa19dc5c01b684b48f4ae3"],["archives/index.html","675d36bef405b494bf60ca20b66d401e"],["archives/page/2/index.html","1c407d761c8831019359cc54b090e1cc"],["archives/page/3/index.html","56111ac8ed30fd0e0e6fc6580f2ce10a"],["baidu_verify_Og0HzH3bO9.html","a5e9cc551568f1e5721f148047e9bd6a"],["baidu_verify_SIdT0vzXib.html","b077295726c2eb8b22211cb0d3a2434b"],["categories/docker/Dockerfile/index.html","2d752c6ba64d603b629b17c0020bc164"],["categories/docker/index.html","6bc38d7a776dfe6480a0fdfc861c5010"],["categories/elk/elasticsearch5/index.html","4bd2fc3c64d23393b11980f13e4c686d"],["categories/elk/elasticsearch7/index.html","b5d5f0dc082eabd20b586602a0d6b599"],["categories/elk/index.html","f539a1ff729dd329d83df9241c265901"],["categories/elk/logstash/index.html","8efc2f70434e4de86f8f3ce50540d963"],["categories/elk7/filebeat7/index.html","7ed223fc83c3ce6c70d9441157b9d07f"],["categories/elk7/index.html","f99c2aa61aed376447e5f940d838e348"],["categories/fluentd/index.html","526eb4ce4579acb4cdd7a7f988757726"],["categories/gitlab-ci/index.html","cc4ec9d553709156f62bbb23e880d585"],["categories/go/index.html","df3127d8efc372327cc26d826a1a06ab"],["categories/index.html","579ad5d85ec0b7cc4e10bae7dbfbe417"],["categories/item2/index.html","6ed80a041c30634f4fa815b0dd512b6a"],["categories/k3s/index.html","bcfe77f5a9a68b2996443bedbb8af44e"],["categories/k3s/lnmp/index.html","290c2a4a65a85b053bd2b9680730c71d"],["categories/k8s/elk5/index.html","a824491f923097cb73916b86360547c4"],["categories/k8s/elk7/index.html","bbd76ca0a6c68749a0a5883c37538ebc"],["categories/k8s/index.html","470ca58afb36649decd0d2a73632d788"],["categories/k8s/kubectl/index.html","d338dbc5dcd51bec7e7ffedb4d16493b"],["categories/k8s/mysql/index.html","f47b64bc4c739f6b3f6f6d3679b9a469"],["categories/k8s/prometheus/index.html","e6e6af326d8244d6d9bbb641d5c9ff63"],["categories/k8s/storageclass/index.html","f5f454f635afa9961ad7ff73e1156e90"],["categories/k8s/问题总结/index.html","8789013a7838f26a60746dea70ba75a9"],["categories/linux/awk/index.html","f91f130f536b333fcf957155fbcce98c"],["categories/linux/index.html","9eaff5b7a86c0bd7649d90ba60e5aac1"],["categories/linux/shell/index.html","dcb545de12c84d182cdbc76457d0a45e"],["categories/linux/systemd/index.html","1fafbaf492af1cf1440b7354a32bf6cb"],["categories/linux/问题总结/index.html","789576d4c53852643fddadb399b6a0ae"],["categories/mac/index.html","85ecb10835ee2a1e772b6f02013c295c"],["categories/markdown/index.html","bdcdc7f233cb31fa685a97dbdec09512"],["categories/mysql/index.html","af69b4653b9d0c451e1931c6677e2dd8"],["categories/mysql/主从/index.html","e8d1b437bc0464f3c821d9229e2a777c"],["categories/nfs/index.html","84c3b080b6e22086aa4e768482f3da56"],["categories/nginx/index.html","114cc47dd8a6a85d5b26076bbdb37dd1"],["categories/nginx/问题总结/index.html","8632301c135413a8dc2db2c5993701f1"],["categories/php/index.html","bb26f2404c92a97907989cf95b75ff46"],["categories/php/问题总结/index.html","c2f08cd98738c9e743c044c066cd175c"],["categories/radius/index.html","a3d445066586828edd88d95550a0adac"],["categories/raid/index.html","750b71aa7b5f3d722127c3e8b66fe941"],["categories/windows/index.html","e5599a3936ee36620bffa6a746e19123"],["categories/博客/index.html","583850790b8db2530a1eb3e5d0ce5c4a"],["categories/博客/美化/index.html","9011e53192d0863f80bf026a66e6a5be"],["categories/存储/ceph/index.html","f0e0fb9a8d1b9242c5e2edd7ef5fe5fc"],["categories/存储/index.html","3c237f3c23dd3db5c66be9510f652681"],["categories/存储/nfs/index.html","dc53a958ebdf3596190f17822d629527"],["categories/技术文档/index.html","59b97cfd09bce1610f5cbec1a6a412ec"],["categories/技术文档/page/2/index.html","3950095b226a60ca7d6964dab2214dd1"],["categories/有趣/index.html","48a1c9971ac0f48585073c486543abd9"],["categories/有趣/二次元/index.html","3c42b636c0fd12e3a404870ecc581fe9"],["categories/流量复制工具/gor/index.html","99f4b658570bf422f90195106feb550e"],["categories/流量复制工具/index.html","b372470f84b581e94fb7e657404a7aab"],["categories/网卡/index.html","46febf6bd7145569debeb7a43a19c692"],["categories/网址/index.html","560321cedaa38ddc1288f02a798664f5"],["categories/网址/大佬博客/index.html","22155a5133fda4393728fc9d2f2a6c4a"],["categories/网址/收藏/index.html","137afa920e9c6d6cb9314a7a6fcbe282"],["css/main.css","4d02e9d8a73448b3bd6767f96158195b"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","13028f07e253e9fd0fe142105b02fccd"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","9121e72ad59333cba433a62b2d6c4163"],["page/3/index.html","90ff8602bfd8643404b2a981faeaedbd"],["page/4/index.html","6394d4f4d6c15a0d42c9e9c2beeba48d"],["page/5/index.html","c2f90bae2b0fc4742dd2b0bb073317b7"],["page/6/index.html","9bcdb0e77dd506803b36427fbc51669b"],["tags/awk/index.html","12c29492d023d0ff72bedbf2d4f9d04d"],["tags/ceph/index.html","43ca3e1a6f59957d078a883f2bbe8ed4"],["tags/cephfs/index.html","995b36a5ef93b660a03696bff127e742"],["tags/cloud-native/index.html","3699a7bcb8a7c139ab63706e0c81a5ae"],["tags/daloradius/index.html","49bb91bfb888c74571e22ad06d3d09d8"],["tags/docker/index.html","46d80d2c9bf2ac84472c35e9dd37c99f"],["tags/elasticsearch5/index.html","b088f6c93692dfee7ed9edb7fe870416"],["tags/elasticsearch7/index.html","23303a4abbab1d02ff03fed5f21c25a0"],["tags/elk/index.html","d986377a4fe74315d97cc9281f577ea3"],["tags/elk5/index.html","26352ed414bcbb69bbe44d68854350d8"],["tags/elk7/index.html","d319eede5e30ec3c7fe72564a6d60ff8"],["tags/filebeat7/index.html","d27061f36dfd22b1fd4310b7b8c5bd44"],["tags/fluentd/index.html","8e662e521317fce175fa6fd3a57a449e"],["tags/freeradius/index.html","f320045153fe5e03f742b41da3066f0e"],["tags/gitlab-runner/index.html","38204794a18f44e520a8ee6c0784915c"],["tags/go/index.html","3ffb9df1afe2631f21c82a1fdd98be37"],["tags/gor/index.html","ba43326a50054e228d5e4f2fd1e1a2e4"],["tags/hexo6/index.html","506a423571682031078e6061c3fcb7ae"],["tags/hexo美化/index.html","00b01377e8e9c375ebe14f3f29bc3dfa"],["tags/http流量复制工具/index.html","5526120bbeff29668f7e27613f138d97"],["tags/index.html","07c252b45f66d75042e7724620cb2117"],["tags/ip/index.html","9de39b137eb00c4090a08f7e7eb99324"],["tags/istio/index.html","74591e07a568115172ce6c415fd10c2d"],["tags/k3s/index.html","befe86d1951b2e90e49b702c360dd68a"],["tags/k8s/index.html","529bc86a2c42467b87cf385ebafdc9f0"],["tags/k8s存储/index.html","a5bd09819d163a507ff3ca1db664e1e3"],["tags/kubectl/index.html","3b64953a0e6cf8bcdd19be0c1fe4121d"],["tags/linux/index.html","e9237effe841effe07fd2b9398d726af"],["tags/logstash/index.html","eb11c1ad13f3b942e204a0d494dd6d6c"],["tags/mac/index.html","c2b3b87763609a78407235b85381e7f9"],["tags/markdown/index.html","1279dc5fffa72a572eacd9c965246497"],["tags/mysql/index.html","5f15889abc5981bfbe05e7105949e06e"],["tags/mysql5-7/index.html","5dcfe703c4aa31159c930996b10dd8c8"],["tags/nfs/index.html","80d5bd1b31209515328c7e1128f4508c"],["tags/nginx/index.html","ed32bc708465862a308c69fe4ef76b8c"],["tags/php/index.html","7f129bb6d53ec149cd05bd9b5308f6dc"],["tags/php5/index.html","60229b15869df8025fa6a778b8f78884"],["tags/php7/index.html","58b8c8f4c5d1d2f164576a49571ab822"],["tags/promethues/index.html","4e3e8157f6e1255f56d1644172b62222"],["tags/raid/index.html","a363abc3c6f8ad58cd55aead21b45d99"],["tags/shell/index.html","0c889f9d637c3bf641bf1f646fcb4f68"],["tags/ssh/index.html","1af0fdfbe095428e7bd4d81deb4c60d6"],["tags/storageclass/index.html","60cf68ba278e15248c3774b8722106c6"],["tags/systemd/index.html","766122dbb843648af7f49dbb65310635"],["tags/windows/index.html","b236206fa7f6bab5ec6feb9c072c1977"],["tags/云原生/index.html","f44542e4a319c147f030be23c1150e59"],["tags/大佬博客/index.html","be1b9c414a931ad35182a5e3528a2056"],["tags/收藏/index.html","b50d6c27aa8049929f370f9b1fee36c1"],["tags/特效/index.html","13d82b5c96a805ff31c450a68a820c49"],["tags/网址/index.html","3800c5855e3204eeb0186357e7bde3b6"]];
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







