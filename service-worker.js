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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","ec20befab9abe08286233520b2c1438a"],["2019/09/19/首次搭建hexo博客系统/index.html","f6405c826fd0ae238ac6464dcd660ec2"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","6b9d2338aed4bc791aaae497b019f0d7"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","bb32079ed88ed377272bc5a12f0bc83a"],["2019/09/24/5-hexo添加看板娘/index.html","ff10dbb9b85c053e1ddaa0d1ddcdd2ad"],["2019/09/26/6-ceph安装部署/index.html","ede2997a2a197bf589018b24b1d111a1"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","a99a3990b36840a68248d570eda2e015"],["2019/09/26/8-mysql5-7二进制部署/index.html","0379e40bde9e2e6975193509f2eb027b"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","b6fb4682de11a21b0016a1bec48eb117"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","324fcbf90eeeb342f3db9d74cd89ffa2"],["2019/10/10/11-mysql简单记录/index.html","9255da44cc7aabb225de40a82ed354ee"],["2019/10/11/12-awk简单记录/index.html","1fbbe08eb6257b4d668d1a4c515eeee1"],["2019/10/12/13-云原生博客汇总/index.html","47d7757d404ca7a51caf68322e587826"],["2019/10/15/14-mysql目录copy方式迁移/index.html","6ebc8ac4a3dd97505f95f8d70dedd69f"],["2019/10/16/15-docker简介和使用/index.html","0bff5ffcf2645bfc9e6b3af7a115a698"],["2019/10/16/16-dockerfile介绍/index.html","0aef40c0c3f892d5c24349749cb7b908"],["2019/10/16/17-markdown一些写法记录/index.html","8d7461447d713e77bdf76cf96a98ba50"],["2019/10/17/18-收藏链接/index.html","655413c6f38378ea46add34dde9760eb"],["2019/10/17/19-shell中gt和>的区别/index.html","6faf709210fabbb05069de758a9bceb3"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","e05e5ec35240ab577ce4013ebcc2a0b9"],["2019/10/28/21-流量复制工具gor/index.html","e566faefd60d9f3fe492525aef3b3dcd"],["2019/10/28/22-es集群磁盘扩容/index.html","58fd284e067d63f32ea81e4571fab775"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","5b5afecd7b9f6c0ea24af635d13ca1c8"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","082ae71df5a4981423de07f4a3e78071"],["2019/11/01/25-linux一些脚本汇总/index.html","9813598035f73f7c6b03fbbc97b05a14"],["2019/11/08/26-logstash配置/index.html","cd35382f08a43045992bd06316483faf"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","8a15601c6caf2594d11626ef7e5ad4f6"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","5ef30c59f645141bdbf1c479749845ae"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","c5d24eeb6087847e349f30c3034a7731"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","46ee28b82ae8842b47c0db5a05fbde04"],["2019/11/26/31-systemd一些命令/index.html","15aa1a435f4378946d7d2d9761d1781a"],["2019/12/02/32-php错误502问题总结/index.html","f8d35f6f69435921f7ed77be9dd8f4d5"],["2019/12/03/29-k3s安装配置/index.html","88d028db7603a5c00eed92f62c7753d0"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","259a551c2f25a9cb52bc2997ee554beb"],["2019/12/05/34-k8s一些命令总结/index.html","9d2439d6a5639ce3d4ce0e04a031fd18"],["2020/02/27/35-raid1盘数据迁移/index.html","b690c2434a9321a30c8e7effdc7db7d5"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","47bd57074b9aeba8fea152469f425765"],["2020/03/10/37-mac一些常用命令/index.html","4d5100b099b9494abef3a5987aea7cab"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","7a9fcc8e8b6a7251769b21823b41f10f"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","3165f2dd7f3101753755414f3bfb8bf7"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","475f31ebea14d46d9e9a6617ec0cbd17"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","b910e62a8a0f74522ee709c4217c7b25"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","d9789f579e58d5d64926e1538c42a8e0"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","a261ffca51fd7d201d2ba7a268aa6cae"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","732e4eee063ea74d9c261c6d6c6b3803"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","7423041eeb7d1cfcb12e5340729b52b4"],["2020/05/13/46-docker安装nginx第三方模块/index.html","9b4d972fba53ad1817c8ae16ed77ad31"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","3eab951020ec6a85d24195fd9f3bd5ea"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","cee6343203d0a935b20e966549a1c9c9"],["2020/05/27/49-go简单记录/index.html","ae11e46aabbe2b89bd196e89a867f887"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","1a804429999233b47f28b8098748dfe6"],["2020/07/27/51-k8s搭建radius/index.html","cb57c33e7b0608e92376e9fef9440f7f"],["2020/08/04/52-istio测试nginx-php项目/index.html","932e6445597eef3e4b587262c74e9520"],["archives/2019/09/index.html","7b08b7b8dfa4b88d50baba3f4b661193"],["archives/2019/10/index.html","9a0497fdea1bd3c335644544598b70c4"],["archives/2019/11/index.html","d879c54905950f512da274dfb82f2be7"],["archives/2019/12/index.html","8f48460cb1eaa4967a02d0363e14371e"],["archives/2019/index.html","112e3f5fa09654b3eb2bdf012765f7ab"],["archives/2019/page/2/index.html","88fd45c61ba40a9a430f0d57a8c5e98f"],["archives/2020/02/index.html","bb99231fe2c0d6edb004b1c2cb97559d"],["archives/2020/03/index.html","f01d49b9b611bad50414a526d697ffbf"],["archives/2020/04/index.html","4633eb744905d3eb9384635c2391d20e"],["archives/2020/05/index.html","a2ce18745630b53b42cc29027970664f"],["archives/2020/06/index.html","9cbc81b50501866694f90c4d644ba80e"],["archives/2020/07/index.html","fdb6caf012743db196b77707b33eadd2"],["archives/2020/08/index.html","1cc88e782d38e7e29b0650ce65504134"],["archives/2020/index.html","a683d9d91218c8e750ad58544a30585f"],["archives/index.html","75564077faae788c04d3f58b1f4b8fba"],["archives/page/2/index.html","afbbce0887ead50ad0fd9abce4ddf289"],["archives/page/3/index.html","6bcec8f4d10ddaf65d849b68cb8dd05b"],["categories/docker/Dockerfile/index.html","a3a1687cc99a42355664a85cf6b8e1c2"],["categories/docker/index.html","9491f282cdfad482dfbbc864247528c0"],["categories/elk/elasticsearch5/index.html","254da94645fc0e9bca14e70a25bc040e"],["categories/elk/elasticsearch7/index.html","782f106691d3473a935699aeebd10983"],["categories/elk/index.html","35b9e56996208b887a14f78e11eae0e3"],["categories/elk/logstash/index.html","8a84e5e0b56eea3961dc30172e35b043"],["categories/elk7/filebeat7/index.html","31230af01796a3c6c769688664abe264"],["categories/elk7/index.html","93c754b9a7cba81d978410994c8894ba"],["categories/fluentd/index.html","cb0bf9fad275db87daeb65a4f142c70f"],["categories/gitlab-ci/index.html","d976f99d0111f77b57149e5d31710c33"],["categories/go/index.html","3a5200bdd2c5fa24d7367810bef96e6d"],["categories/index.html","5f6cc00aaed7056915d9b24d5e1c441c"],["categories/istio/index.html","3e841616c6d39939d1682925e536f42b"],["categories/item2/index.html","219b565217564ba9b9ff19abedae61e9"],["categories/k3s/index.html","489f3e7e2e8ce484f9c03af039691419"],["categories/k3s/lnmp/index.html","7d9312d6d0800f8475763a995992a6d6"],["categories/k8s/elk5/index.html","9e6817bf728d74153c5541662dfadcd9"],["categories/k8s/elk7/index.html","42aaec5d7aa065f3b92289fa24d30bb9"],["categories/k8s/index.html","bd29034ce2ce51f61da5da4e8f92cfbb"],["categories/k8s/kubectl/index.html","425c53b5f2cc5c433596aac01ca5697c"],["categories/k8s/mysql/index.html","8dfcebbe3b0992aa39e42294b49b0170"],["categories/k8s/prometheus/index.html","acb62122d45f3f83149dd3257344b3ea"],["categories/k8s/storageclass/index.html","64c50eb1a04d0b38422ec00290239dfc"],["categories/k8s/问题总结/index.html","a9de130c1c53c5d6bddca1057b14cd9f"],["categories/linux/awk/index.html","f0d09ea035df10e5f681d50d9021fccb"],["categories/linux/index.html","e5b0855379712fa1eff3a7b048302dda"],["categories/linux/shell/index.html","47ffa001d84bd170f884cdd98c7033ca"],["categories/linux/systemd/index.html","e30a3b72db69176f5303cf3c3fc3ede1"],["categories/linux/问题总结/index.html","80b2aeecc91974c6364f9c8f1f408607"],["categories/mac/index.html","5b0d057ad0e2d0d447ed86c5111519da"],["categories/markdown/index.html","c74da77dda5488043103d6880c029f6b"],["categories/mysql/index.html","1d780ed5ae6972a6f348c3fd8fe7c44a"],["categories/mysql/主从/index.html","86e111d1da0d78aaadc34ea30fa87ea7"],["categories/nfs/index.html","91118cd4fe78e9b14dc8eb892a18946a"],["categories/nginx/index.html","72f5d01756e55bcceb87baed12b31964"],["categories/nginx/问题总结/index.html","9121fb307e111aa546678bf90781bff3"],["categories/php/index.html","c4717cec42f25480d24c1f6d67ba83c8"],["categories/php/问题总结/index.html","3c3b417fe0425f64ae1cdbf9458eceed"],["categories/radius/index.html","00059df754ebcc09d88bc9db3794134c"],["categories/raid/index.html","8118f6794b56bac2bef9f556417bd8f8"],["categories/windows/index.html","d1808b4848f0b4b0242f5195eac5c650"],["categories/博客/index.html","1b38609a2f26b84fe1e2e170fa14b523"],["categories/博客/美化/index.html","658f29a0b0579c961507540e2b97f7dd"],["categories/存储/ceph/index.html","1393d70f098441eab9c7111efe69b4b1"],["categories/存储/index.html","01aec4649fc8de55a0ba8759add033cf"],["categories/存储/nfs/index.html","bb80222e361cdd567f01f7b5bb8a2df5"],["categories/技术文档/index.html","84c4900d34eac7abe179354ff2436146"],["categories/技术文档/page/2/index.html","9a9770081b0359cf295f4d92314c71c3"],["categories/有趣/index.html","8931882c9460e4255fb23e9881053a66"],["categories/有趣/二次元/index.html","03c86c5650c93ba27f328a21f641d46c"],["categories/流量复制工具/gor/index.html","f73864e2e1a41a7765b8ec25c5cc4818"],["categories/流量复制工具/index.html","9629a76a356ecc054f6909ca8990e4e6"],["categories/网卡/index.html","a39e6e09652f638261cac8d1ad0de35a"],["categories/网址/index.html","d8063995759f7362fa3886175f3d2eaf"],["categories/网址/大佬博客/index.html","05c7ee255f9efe2ce906196e1cad7916"],["categories/网址/收藏/index.html","a0bf0176501e4e4402af40788827d7b0"],["css/main.css","6ca9a5449c4e759f8df17943e97ae279"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","3768f5c93586ce6b6424766a2d01401f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f3e0589f1848dadec0b790a31d607af5"],["page/3/index.html","c0ed99325c177dddcf513a861d7c3d2b"],["page/4/index.html","0b5b221b11df5547379066a8d06955ce"],["page/5/index.html","5803027fc5f05b2f4034390cfcaea021"],["page/6/index.html","441da839534dc43633d05697aa65bd94"],["tags/awk/index.html","96da8da29b17be1612d85d08b73194f7"],["tags/ceph/index.html","daf0ca89386f6ea1b923c2057c604dfe"],["tags/cephfs/index.html","eb267c7e14cdcf0a39a3ce780d72429f"],["tags/cloud-native/index.html","ab45190a72d8e0325393e5fdc4d1468f"],["tags/daloradius/index.html","aa61ad849ee25aeb00f0a816f29f87aa"],["tags/docker/index.html","eceb08f3708766dc5fb1ff28bbd397bd"],["tags/elasticsearch5/index.html","39cdcaf3656f664a6624f37f9129b2fb"],["tags/elasticsearch7/index.html","da001f50b527de4037d6ee4fb4400e08"],["tags/elk/index.html","cbfa54af6922ad68505d957d60f337ad"],["tags/elk5/index.html","44a690a4d715fe8b34a8bcb53ea6e36a"],["tags/elk7/index.html","060d27e62581b3f4ca1be229102e29c2"],["tags/filebeat7/index.html","312cae8fb8fbba2edd0aaf48eb3c889a"],["tags/fluentd/index.html","48e94b3512a61d6d19712eaa205dbe51"],["tags/freeradius/index.html","b66608f08302d5e7507f318b16edc6b3"],["tags/gitlab-runner/index.html","762d16abec03ab4fe34f501662a6915c"],["tags/go/index.html","f49cf49bf946d551ec93dd88a8641334"],["tags/gor/index.html","d0c619b4ef5f4c8af61448a22dc19b36"],["tags/hexo6/index.html","a73cc0a4edb35c24fdb1ce15250671c6"],["tags/hexo美化/index.html","5ce7a5b17175445a7cf9c01ef7e79571"],["tags/http流量复制工具/index.html","f50da9e44a8846186a0e39534b178c5e"],["tags/index.html","40b07805c8d32de5ebf4950c60e890a9"],["tags/ip/index.html","5aa217362c53718e491229c15240a41f"],["tags/istio/index.html","5db374b9b654a48c5d33ff383ecc90b0"],["tags/k3s/index.html","3535d741fa87718e1f17e370fd2284d7"],["tags/k8s/index.html","eaf2bd32d4b0d525dcf246f6e22e1170"],["tags/k8s存储/index.html","0a918b61e4b9f0a5e1a638bd41e09012"],["tags/kubectl/index.html","ac74bf0ea01022df80c385f02e879569"],["tags/linux/index.html","dcb61aa3fc9364575233694e7cd7089c"],["tags/logstash/index.html","e1586ed87db6f806ebedc4765f3c0e61"],["tags/mac/index.html","5835981fed4190e41647fbea063c0a6f"],["tags/markdown/index.html","b26ebb5dea647a308f18f771c05cae72"],["tags/mysql/index.html","ab7b2095fb43b87a994b344677e82823"],["tags/mysql5-7/index.html","d2ef66d08fe38d108a2ab6bccaf2baa0"],["tags/nfs/index.html","feea1ff64f8b4bb0b10f514eafcbd3ca"],["tags/nginx/index.html","ae7b54459389fb6d17f8866e0b091ce0"],["tags/php/index.html","40723a5a65aaae74afffb1fcffc0357c"],["tags/php5/index.html","7e7cd041eea028c7396462921e018a9f"],["tags/php7/index.html","826c80bbc8d33ff3669a72065008d6a2"],["tags/promethues/index.html","f20c6db577b2e99faa2360d474d06e0e"],["tags/raid/index.html","de92cfe607e6a5c1c83b1898496bf756"],["tags/shell/index.html","44fd5e9c57dda4667677004ec4b3cf0e"],["tags/ssh/index.html","b0a64b6df81cdb8436280c7c1b15aafa"],["tags/storageclass/index.html","b07244804c5a4f558bc3363c4d29e7ee"],["tags/systemd/index.html","c46d1c825d64cfa49db5f2650942b1f0"],["tags/windows/index.html","955dad205d1aab026ea94d1cf15578a7"],["tags/云原生/index.html","b1db0a0fe2b58cc06a529ac384801044"],["tags/大佬博客/index.html","b036078d9ea8c1e361d21714c4c39942"],["tags/收藏/index.html","2878e92abbf7480070248f0f8181233a"],["tags/特效/index.html","25b578c1288e7d454ef7bba1d556a046"],["tags/网址/index.html","901035fb06c759f845cf8d0f6405dd69"]];
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







