<template>
    <div class="con">
        <section class="left">
            <div class="info">
                <section class="infoLeft">
                    <div class="photo">
                        <img src="../assets/img/11_10.png" alt="">
                        <span class="info-pho">136****3948</span>
                        <span class="info-name">小马致远科技</span>
                    </div>
                </section>
                <scetion class="infoRight">
                    <div class="info-other">
                        <span class="other1">
                            <img src="../assets/img/11_03.png" alt="">
                            <span class="other1-font">安全等级：<span class="font-level">高</span></span>
                        </span>
                        <span class="other2">
                            <img src="../assets/img/11_05.png" alt="">
                            <span class="other2-font">已认证</span>
                        </span>
                        <span class="other3">
                            <img src="../assets/img/11_07.png" alt="">
                            <span class="other3-font">已绑定</span>
                        </span>
                    </div>
                    <div class="money">
                        <span class="money-extra">余额：</span>
                        <div class="extra-num">86<span>.00</span></div>
                        <span class="add-money">充值</span>
                    </div>
                    <div class="product-info">
                        <span class="wait-pro">待续费产品：</span>
                        <div class="wait-num">2</div>
                        <span class="pro-list">
                            <ul>
                                <li>费用中心</li>
                                <li>|</li>
                                <li>我的订单</li>
                                <li>|</li>
                                <li>服务历史</li>
                            </ul>
                        </span>
                    </div>
                </scetion>
            </div>
            <div class="status">
                <span class="sta-title">服务状态</span>
                <div class="line"></div>
                <div class="status-list">
                    <div class="status-details">
                        <img src="../assets/img/22_08.png" alt="">
                        <span class="details-name">H5设计场景*2</span>
                        <span class="details-design">设计师： <span>王凯</span></span>
                        <span class="details-progress">制作已完成，请您预览并进行验收确认</span>
                        <span v-if="show" class="status-icon" v-on:click="show = !show">
                            <i class="el-icon-arrow-up"></i>
                        </span>
                        <span v-if="!show" class="status-icon" v-on:click="show = !show">
                            <i class="el-icon-arrow-down"></i>
                        </span>
                    </div>
                    <transition name="slide-fade">
                        <div class="status-extra" v-if="show">
                            <div class="extra-name">大转盘H5设计、企业秀H5设计</div>
                            <div class="extra-process">
                                <el-steps :space="170" :active="2" finish-status="success">
                                <el-step title="开始" description=" 2016.11.20  19:00"></el-step>
                                <el-step title="分配设计师" description="2016.11.20  19:00"></el-step>                                                      <el-step title="确认需求" description="2016.11.20  19:00"></el-step>
                                <el-step title="确认支付" description="2016.11.20  19:00"></el-step>
                                </el-steps>

                            </div>
                            <div class="extra-last">
                                <span class="last-time">2016.11.20 19:00</span>
                                <span class="last-design">设计师：王凯</span>
                                <span class="last-detail">已完成沟通制，正在规划设计中</span>
                                <span class="last-view"><a href="#">查看详情</a></span>
                            </div>
                        </div>
                    </transition>
                    <div class="status-details">
                        <img src="../assets/img/22_08.png" alt="">
                        <span class="details-name">企业门户规划设计</span>
                        <span class="details-design">设计师： <span>王凯</span></span>
                        <span class="details-progress">制作已完成，请您预览并进行验收确认</span>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="pro-wrapper">
                    <div class="pro-head">我的产品</div>
                    <div class="pro-line"></div>
                    <div class="pro-all">
                        <div class="pro-door">
                            <span>|</span>
                            <span class="door-head">门户云</span>
                            <div class="door-list">
                                <div class="net-door"><img src="../assets/img/33_15.png" alt=""> 全网门户</div>
                                <div class="yuming"><img src="../assets/img/33_09.png" alt="">域名</div>
                            </div>
                        </div>
                        <div class="pro-door pro-sale">
                            <span>|</span>
                            <span class="door-head">营销云</span>
                            <div class="door-list">
                                <el-row>
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_06.png" alt="">大把推
                                    </el-col>
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_12.png" alt="">企业秀
                                    </el-col>
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_03.png" alt="">智能投放
                                    </el-col>
                                </el-row>
                                <el-row class="sale-bottom">
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_22.png" alt="">智能客服
                                    </el-col>
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_23.png" alt="">二维码营销
                                    </el-col>
                                    <el-col :span="8" class="sale-list">
                                        <img src="../assets/img/33_24.png" alt="">会申宝
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                    <div class="pro-line"></div>
                    <div class="extend-head">可扩展产品/服务</div>
                </div>
                <div class="extend-list">
                    <div class="pro-wrapper">
                        <el-row class="extend-bott">
                            <el-col :span="6">
                                <span>|</span>
                                <span class="door-head">门户云</span>
                            </el-col>
                            <el-col :span="6">
                                <span>|</span>
                                <span class="door-head">营销云</span>
                            </el-col>
                            <el-col :span="6">
                                <span>|</span>
                                <span class="door-head">业务云</span>
                            </el-col>
                            <el-col :span="6">
                                <span>|</span>
                                <span class="door-head">管理云</span>
                            </el-col>
                        </el-row>
                        <el-row class="extend-bott">
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">移动门户
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">Google ADwords
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">pc商城
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">企业邮箱
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="extend-bott1">
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">外贸门户
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">视频推广
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">移动商铺
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">有翼云霄
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="extend-bott1">
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">微信app
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">社交广告
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">移动分销
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="extend-one">
                                    <img src="../assets/img/44_03.png" alt="">富通天下
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <div class="plat-help">
                <div class="pro-wrapper">
                    <div class="help-head">服务与支持</div>
                    <div class="pro-line"></div>
                    <div class="help-list">
                        <el-row class="extend-bott">
                            <el-col :span="6" class="help-one">平台使用帮助</el-col>
                            <el-col :span="6" class="help-one">门户产品使用帮助</el-col>
                            <el-col :span="6" class="help-one">域名&邮局使用帮助</el-col>
                            <el-col :span="6" class="help-one">其他产品</el-col>
                        </el-row>
                        <el-row class="extend-bott">
                            <el-col :span="6" class="help-one1"><a href="">企业门户后台使用手册</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">域名产品时的操作禁忌</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">客户 API文档</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">如何注销域名的备案号？</a></el-col>
                        </el-row>
                        <el-row class="extend-bott1">
                            <el-col :span="6" class="help-one1"><a href="">移动电商使用手册</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">推广工具的业务限制</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">客户意向 API文档</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">如果增加域名备案?</a></el-col>
                        </el-row>
                        <el-row class="extend-bott1">
                            <el-col :span="6" class="help-one1"><a href="">微信营销使用手册</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">微信营销的注意事项</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">订单 API文档</a></el-col>
                            <el-col :span="6" class="help-one1"><a href="">备案审核需要多久？</a></el-col>
                        </el-row>
                        <el-row class="extend-bott1 extend-bott1-last">
                            <el-col :span="6" class="help-one"><a href="">更多</a></el-col>
                            <el-col :span="6" class="help-one"><a href="">更多</a></el-col>
                            <el-col :span="6" class="help-one"><a href="">更多</a></el-col>
                            <el-col :span="6" class="help-one"><a href="">更多</a></el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </section>
        <section class="right">
            <div class="service">
                <div class="card">
                    <img src="../assets/img/22_03.png" alt="">
                    <span class="card-hi">Hi , 我是您的商务顾问</span>
                    <span class="card-name">罗欣</span>
                    <span class="card-pho">
                        <img src="../assets/img/22_01.png" alt="">
                        <span>13910733521</span>
                    </span>
                    <span class="card-email">
                         <img src="../assets/img/22_02.png" alt="">
                        <span>lizhanpin@qq.com</span>
                    </span>
                </div>
                <div class="card">
                    <img src="../assets/img/22_06.png" alt="">
                    <span class="card-hi">Hi , 我是您的客服经理</span>
                    <span class="card-name">中企动力客服</span>
                    <span class="card-pho">
                        <img src="../assets/img/22_01.png" alt="">
                        <span>400 660 5555</span>
                    </span>
                </div>
            </div>
            <div class="recommend">
                <img src="../assets/img/66.png" class="hot" alt="">
                <div class="rec-wrapper">
                    <div class="rec-head">推荐应用/应用<a href="#">更多</a></div>
                    <div class="pro-line"></div>
                    <div class="picture">
                        <img src="../assets/img/55.png" alt="">
                    </div>
                    <div class="rec-list">
                        <div class="rec-one">
                            <img src="../assets/img/55_03.png" alt="">
                            <span class="one-head">微信场景传播-H5秀</span>
                            <span class="one-price">300元/页</span>
                        </div>
                        <div class="rec-one">
                            <img src="../assets/img/55_06.png" alt="">
                            <span class="one-head">移动营销活动，手机专题页设计服务</span>
                            <span class="one-price">300元/页</span>
                        </div>
                        <div class="rec-one">
                            <img src="../assets/img/55_08.png" alt="">
                            <span class="one-head">企业品牌形象，LOGO设计</span>
                            <span class="one-price">300元/页</span>
                        </div>
                        <div class="rec-one">
                            <img src="../assets/img/55_10.png" alt="">
                            <span class="one-head">专业化母语级翻译（英/日/德/法/韩）</span>
                            <span class="one-price">费用面议</span>
                        </div>
                        <div class="rec-one one-last">
                            <img src="../assets/img/55_10.png" alt="">
                            <span class="one-head">专业化母语级翻译（英/日/德/法/韩）</span>
                            <span class="one-price">费用面议</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="net-univer">
                <div class="rec-wrapper">
                    <div class="rec-head">互联网+大学<a href="#">更多</a></div>
                    <div class="pro-line"></div>
                    <div class="net-list">
                        <div class="net-one">
                            • H5营销如何引爆朋友圈，技巧分享
                        </div>
                        <div class="net-one">
                            • 门户流量从何而来，案例实操
                        </div>
                        <div class="net-one">
                            • 商品二维码，O2O神器
                        </div>
                        <div class="net-one">
                            • 酒店行业，如何摆脱OTA
                        </div>
                        <div class="net-one">
                            • 微信应用号连接商家与客户
                        </div>
                        <div class="net-one one-last">
                            • 微信应用号连接商家与客户
                        </div>
                    </div>
                </div>
            </div>
            <div class="active">
                <div class="rec-wrapper">
                    <div class="rec-head">线下活动<a href="#">更多</a></div>
                    <div class="pro-line"></div>
                    <div class="time-line">
                        <!--<Timeline>-->
                            <!--<Timeline-item>-->
                                <!--【北京】企业信息化之路专题讨论会-->
                            <!--</Timeline-item>-->
                            <!--<Timeline-item>-->
                                <!--【北京】企业信息化之路专题讨论会-->
                            <!--</Timeline-item>-->
                            <!--<Timeline-item>-->
                                <!--【北京】企业信息化之路专题讨论会-->
                            <!--</Timeline-item>-->
                            <!--<Timeline-item>-->
                                <!--【北京】企业信息化之路专题讨论会-->
                            <!--</Timeline-item>-->
                            <!--<Timeline-item>-->
                                <!--【北京】企业信息化之路专题讨论会-->
                            <!--</Timeline-item>-->
                        <!--</Timeline>-->
                        <div class="myTimeLine">
                            <ul>
                                <li>
                                    <div class="myTime">
                                        <span class="my-minute">11.01</span>
                                        <span class="my-circle"></span>
                                        <span class="my-thing">【北京】企业信息化之路专题讨论会</span>
                                        <div class="vert-line"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="myTime">
                                        <span class="my-minute">11.01</span>
                                        <span class="my-circle"></span>
                                        <span class="my-thing">【北京】企业信息化之路专题讨论会</span>
                                        <div class="vert-line"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="myTime">
                                        <span class="my-minute">11.01</span>
                                        <span class="my-circle circle-active"></span>
                                        <span class="my-thing font-active">【北京】企业信息化之路专题讨论会</span>
                                        <div class="vert-line"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="myTime">
                                        <span class="my-minute">11.01</span>
                                        <span class="my-circle"></span>
                                        <span class="my-thing">【北京】企业信息化之路专题讨论会</span>
                                        <div class="vert-line"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="myTime">
                                        <span class="my-minute">11.01</span>
                                        <span class="my-circle"></span>
                                        <span class="my-thing">【北京】企业信息化之路专题讨论会</span>
                                        <div class="vert-line vert-last"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: 'mainPage',
  data () {
    return {
      show: true
    }
  }
}
</script>
