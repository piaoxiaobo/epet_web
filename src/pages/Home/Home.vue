<template>
    <div class="home">
      <div id="header">
        <!--头部广告-->
        <div v-if="isShow">
          <div class="overflow xiaozaiApp">
            <div class="overflow rela">
             <span class="clsoe_btn" @click="hiddenApp" >
               <img id="close_down_bar" src="./images/app/close_down_bar.png" alt="xiaozaiApp">
             </span>
              <div class="appdowimg">
              <a href="javascript:;">
                <img src="./images/app/app.jpg" alt="xiaozaiapp">
              </a>
            </div>
          </div>
        </div>
      </div>
        <!--首页头部-->
        <div class="index_header">
          <div class="main">
            <div class="header_search">
              <div class="search_location">
                <a href="javascript:;">
                  <span>狗狗</span>
                  <span>|</span>
                  <span class="myposition">北京</span>
                  <i class="serach-ico"></i>
                </a>
              </div>
              <p  class="search-text">
                <a href="javascript:;">
                  <input type="search" placeholder="搜索商品和品牌">
                  <span class=""></span>
                </a>
              </p>
              <div>
                <a href="javascript:;" class="news"><img src="./images/news.png" alt="news"></a>
              </div>
            </div>
            <div class="find_nav">
              <div class="find_nav_left dscroll">
                <div class="find_nav_list dscroll-div" style="width: 140%">
                  <ul class="dscroll-ul">
                    <li class="dscroll-li" v-for="(menu,index) in eapp.menus" :key="index"><a href="javascript:;"><span><span class="rela">{{menu.menu_name}}</span><i></i></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_box" v-if="isShow"></div>
      <!--首页内容-->
      <div class="index_content">
        <!--轮播图-->
        <Carousel />
        <!--导航-->
        <div>
          <div class="columnnavdiv">
            <div>
              <ul class="nav_list" v-if="eapp.datas">
                <li class="nav_list_item" v-for="(nav,index) in eapp.datas[1].menus" :key="index">
                  <a href="javascript:;"><img v-lazy="nav.image" alt=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="banner_item">
            <a href="javascript:;">
              <img src="./images/nav/nav_banner.gif" alt="banner">
            </a>
          </div>
          <div class="banner-round"></div>
          <!--每日疯抢-->
          <div class="surprise">
            <div class="surprise-items">
              <div class="one_day" v-if="carousel.data">
                <img :src="carousel.data[3].surprise_icon.image" alt="每日疯抢">
              </div>
              <div class="next_tip" v-if="carousel.data">{{carousel.data[3].title}}</div>
              <div class="next_time">
                <div class="time1">
                  <span class="time-1">10</span>
                  <span class="time-zi">:</span>
                  <span class="time-1">00</span>
                </div>
              </div>
              <div class="more" v-if="carousel.data">
                <a href="javascript:;"><img v-lazy="carousel.data[3].right_image.image"></a>
              </div>
            </div>
              <div class="pro_warp">
                <div class="pro_items" v-if="carousel.data">
                  <div class="pro_block" v-for="(good,index) in carousel.data[3].goods" :key="index">
                    <a href="javascript:;">
                      <div class="block_img">
                        <img :src="good.image.image" alt="">
                      </div>
                      <div class="cred">
                        <span class="ft12">￥</span>
                        <span class="ft17">{{good.sale_price}}</span>
                      </div>
                      <p class="ftc">{{good.little_price}}</p>
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <!--分割线-->
          <Split/>
          <!--推荐导购-->
          <div class="divboximg">
            <div class="divboximg_left">
              <a href="javascript:;">
                <img src="./images/divboximg/ytr_32.jpg" alt="javascript:;">
              </a>
            </div>
            <div class="divboximg_right">
              <div class="divboximg_right_top">
                <a href="javascript:;">
                  <img src="./images/divboximg/ytr_33.jpg" alt="#">
                </a>
              </div>
              <div class="divboximg_right_bottom">
                <a href="javascript:;">
                  <img src="./images/divboximg/ytr_18.jpg" alt="#">
                </a>
              </div>
            </div>
          </div>
          <Split/>
          <!--商品预告-->
          <div class="shop_foreshow">
            <a href="javascript:;">
              <img src="./images/divboximg/shopyugao.jpg" alt="#">
            </a>
          </div>
          <Split/>
          <div class="e_items_box">
            <div class="e_itemsleft_box">
              <div class="left_box_top">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt="">
                </a>
              </div>
              <div class="left_box_bottom">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water" alt="">
                </a>
              </div>
            </div>
            <div class="e_itemsright_box">
              <div class="right_box_top">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" alt="">
                </a>
              </div>
              <div class="right_box_bottom">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water" alt="">
                </a>
              </div>
            </div>
          </div>
          <Split/>
          <!--潮品视频-->
          <Card/>
          <Split/>
          <!--底部图片-->
          <div>
            <div>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" alt="" style="width: 100%">
              </a>
            </div>
          </div>
          <!--公司版权-->
          <div class="footer" >
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div style="text-align:center;margin:10px 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>
      </div>
      <div class="loading" v-if="loading">
        <img src="../../common/loading/loading.gif">
        <div>数据加载中...</div>
      </div>
      <div class="dognav" @click="gochange" ></div>
      <transition name="fade">
      <div class="changepop" v-show="showchange">
        <div class="cartc-bg">

          <div class="xbsj_header xbsj_box">
            <div class="xbsj_title">
              <p class="xp1">小泊随記</p>
              <p class="xp2">亲爱的小主</p>
              <p class="xp3">您即将进入小泊随記</p>
            </div>
          </div>
          <div class="xbsj_content xbsj_box">
            <div class="xbsj_logo_imgs">
              <div class="xbsj_logo2">
              <img src="./logo.png" alt="">
            </div>
              <div class="xbsj_logo2">
                <img src="./logo.png" alt="">
              </div>
            </div>
          </div>
          <div class="xbsj_footer xbsj_box">
            <div class="xbsj_btn">
              立即进入
            </div>
          </div>
          <div class="xbsj_close">
            <span class="iconfont icon-guanbi" @click="closexbsj"></span>
          </div>
          <div></div>
        </div>
      </div>
      </transition>
    </div>
</template>

<script>

  import BScroll from 'better-scroll';
  import Carousel from '../../components/Carousel/Carousel';
  import Split from '../../components/Split/Split';
  import Card from '../../components/Card/Card';

  import {mapState} from 'vuex'


  export default {
    data(){
      return{
        isShow:true,
        loading:true,
        showchange:false
      }
    },
    methods:{
      hiddenApp(){
        this.isShow=false
      },
      gochange(){
        this.showchange=true
      },
      closexbsj(){
        this.showchange=!this.showchange
      }
    },
    mounted() {
      this.$store.dispatch('getEapp');
      this.$store.dispatch('getCarousel');
    },
    computed: {
      ...mapState(['eapp','carousel'])
    },
    components:{
      Carousel,
      Split,
      Card
    },
    watch:{
      carousel(){
        this.$nextTick(() =>{
          new BScroll('.pro_warp', {
            click: true,
            scrollX: true,
          });
        })
      },
      eapp(){
        setTimeout(()=>{
          this.loading=false
        },200);
      }
    }
  }
</script>

<style>

  #header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 102;
    border-bottom: 1px solid #e9e9e9;
  }
  .xiaozaiApp{
    display: block;
    max-width: 640px;
    margin: 0 auto;
    color: #fff;
    position: relative;
    z-index: 102;
    height: 65px;
  }
  .appdowimg img{
    width: 100%;
  }
  .rela{
    position: relative;
  }
  .clsoe_btn{
    display: inline-block;
    width: 5%;
    margin-right: 2%;
    vertical-align: middle;
    position: absolute;
    top: 20%;
    left: 2%;
  }
  .clsoe_btn img{
    height: 100%;
    width: 100%;
  }
  .index_header{
    height: 65px;
  }
  .header_box{
    height: 65px;
    background-color: red;
  }
  .main{
    display: block;
    max-width: 640px;
    margin: auto;
  }
  .header_search{
    margin: 5px 10px;
    display: flex;
    flex-direction: row;
  }
  .search_location{
    background: #fff;
    text-align: center;
    display: -webkit-box;
    -webkit-box-align: center;
    display: -moz-box;
    -moz-box-align: center;
    margin-right: 20px;
    float: left;
  }
  .search_location a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #333;
    font-size: 14px;
  }
  .search_location span{
    color: #898989;
  }
  .myposition{
    font-size: 13px;
  }
  .search-text{
    position: relative;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
  }
  .search-text input{
    width: 150%;
    border: 0;
    height: 25px;
    background: #e9e9e9;
    border-radius: 4px;
    color: #bcbcbc;
    text-indent: 10px;
    font-size: 13px;
    outline: 0;
  }
  .news{
    display: block;
  }
  .news img{
    float: right;
    width: 25px;
    margin-left: 85px;
    vertical-align: middle;
  }
  .index_content{
    max-width: 640px;
    margin: 70px auto 0;
  }
  .find_nav{
    width: 100%;
    height: 35px;
    min-width: 320px;
    margin-top: 10px;
  }
  .carousel img{
    width: 100%;
    height: 160px;
  }
  .dscroll{
    overflow-x: auto;
    overflow-y: hidden;
  }
  .dscroll-div{
    margin-bottom: -10px;
  }
  .dscroll-ul{
    white-space: nowrap;
    display: flex;
  }
  .dscroll-li{
    width: 20%;
    float: left;
  }
  .dscroll-li a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .dscroll-li a span{
    color: #666666;
    display: inline-block;
  }
  .nav_list{
    display: inline-table;
    background-color: white;
  }
  .nav_list_item{
    width: 20%;
    height: 90px;
    display: inline-block;
  }
  .nav_list_item img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .banner_item img{
    height: 120px;
    width: 100%;
    background-color: white;
  }
  .banner-round{
    height: 0.5px;
    width: 100%;
    background-color: #e7e7e7;
  }
  .surprise{
    position: relative;
    background-color: white;
  }
  .surprise-items{
    padding: 10px;
  }
  .next_tip{
    position: absolute;
    right: 107px;
    margin-right: 5px;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 3px;
    float: left;
  }
  .next_time{
    position: absolute;
    right: 50px;
    margin-left: 5px;
    float: left;
    text-align: center;
  }
  .time1{
    display: inline-block;
    font-size: 12px;
  }
  .time-1{
    border: 1px solid #ddd;
    padding: 1px 2px;
    font-size: 13px;
  }
  .time-zi{
    margin: 0 3px;
    font-weight: 700;
    font-size: 12px;
  }
  .more{
    top: 0;
    position: absolute;
    right: 0px;
  }
  .more a{
    display: block;
    text-align: right;
  }
  .more img{
    display: block;
    margin: 0 0 0 auto;
    vertical-align: middle;
    width: 50%;
  }
  .one_day{
    float: left;
  }
  .one_day img{
    width: 85px;
  }

  .pro_warp{
    position :relative;
    width :100%;
    height :140px;
    overflow :hidden;
  }
  .pro_items{
    position:absolute;
    display:flex;
    flex-direction:row;
  }
  .pro_block{
    width :89px;
    height :130px;
    margin :0 10px;
    display: flex;
    flex-direction :column;
    text-align :center;
  }

  .block_img img{
    margin-top: 5px;
    width: 85px;
  }
  .cred{
    color: red;
    margin-top: 5px;
    text-align: center;
  }
  .ft12{
    font-size: 12px;
  }
  .ft17{
    font-size: 14px;
  }
  .ftc{
    color: #999;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
  }

  .divboximg{
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .divboximg_left img{
    height: 250px;
    width: 100%;
  }
  .divboximg_left a{
    display: block;
    overflow: hidden;
  }
  .divboximg_right a{
    display: block;
    overflow: hidden;
  }
  .divboximg_right{
    display: flex;
    flex-direction: column;
    height: 250px;
  }
  .divboximg_right_top img{
    height: 125px;
    width: 100%;
  }
  .divboximg_right_bottom img{
    height: 125px;
    width: 100%;
  }
  .shop_foreshow img{
    width: 100%;
    height: 160px;
  }

  .footer{
    display: block;
    background-color: white;
    clear: both;
  }
  .footer div{
    font-size: 14px;
  }
  .ft{
    padding: 15px 0 5px;
    text-align: center;
  }
  .ft span{
    padding-right: 10px;
  }
  .ft .bt{
    color: red;
  }
  .e_items_box{
    display: flex;
    flex-direction: row;
  }
  .e_itemsleft_box{
    display: flex;
    flex-direction: column;
  }
  .e_itemsleft_box img{
    width: 100%;
  }
  .e_itemsright_box{
    display: flex;
    flex-direction: column;
  }
  .e_itemsright_box img{
    width: 100%;
  }
  /*loading*/
  .loading{
    border-radius: 10px;
    background-color:#555555;
    width: 100px;
    height:100px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left: -40px;
    margin-top:-40px ;
    text-align: center;
    z-index: 100;

  }
  .loading img{
    position: relative;
    top:20px;
    width: 50px;
    height:50px;
  }
  .loading div{
    position: relative;
    top:24px;
    color:white;
    font-size: 12px;
  }
  .dognav {
    position: fixed;
    right: -1px;
    bottom: 15%;
    z-index: 20;
    width: 41px;
    height: 46px;
    background: url('./images/godog.png') 0 0/85px 46px;
    background-size: 80px auto;
    animation: skipdog steps(1, end) 2s infinite;
    }
  @keyframes skipdog{
    50%{
      background-position: -41px 0;
    }

  }
  .changepop{
  }

  .cartc-bg{
    height: 100%;
    width: 100%;
    background-color: white;
    float: left;
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    transition-duration: 0.5s;
  }
  .xbsj_btn a{
    font-size: 10px;
    color: white;
  }
  .xbsj_box{
    height:200px;
    width: 100%;

  }
  .xbsj_header{
    text-align: center;
  }
  .xp1{
    height: 30px;
  }
  .xp2{
    height: 30px;
  }
  .xp3{
    height: 30px;
  }
  .xbsj_content{
    display: flex;
    flex-direction: row;
  }
  .xbsj_logo_imgs{
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  .xbsj_content img{
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  .xbsj_footer{
  }
  .xbsj_close{
    height: 100%;
    width: 100%;
    border-top: 1px solid #e7e7e7;
  }
  .xbsj_close span{
    margin: 50%;
    top: 20px;
  }
  .xbsj_title{
    line-height: 200px;
  }
  .xbsj_btn{
    border-radius: 30px;
    padding: 3px 15px;
    margin-top: 25px;
    font-size: 12px;
    background: #4e9a36;
    width: 50px;
    color: white;
    margin: auto;
  }
</style>
