<template>
  <div class="footernav bottomBox">
    <ul class="footernav_ul">
      <li class="footer_icons"><a href="javascript:;" :class="{on:'/home' === $route.path}" @click="goto('/home')"><i class="iconfont icon-mall"></i><span>首页</span></a></li>
      <li class="footer_icons"><a href="javascript:;" :class="{on:'/classify' === $route.path || '/Classify/sort' === $route.path || '/Classify/brand' === $route.path}" @click="goto('/classify')"><i class="iconfont icon-fenlei"></i><span>分类</span></a></li>
      <li class="footer_icons"><a href="javascript:;" :class="{on:'/shopcart' === $route.path }" @click="goto('/shopcart')"><i class="iconfont icon-gouwuche2"></i><span>购物车</span></a></li>
      <li class="footer_icons icons_E"><a href="javascript:;" :class="{on:'/myshop' === $route.path}" @click="goto('/myshop')"><i class="iconfont icon-biaoqing"></i><span>我的E宠</span></a></li>
    </ul>
  </div>
</template>

<script>
    export default {
      methods:{
        goto(path){
          this.$router.push(path)
        }
      }
    }
</script>

<style>
  .footernav{
    height: 55px;
  }
  .bottomBox {
    height: 50px;
    box-sizing: content-box;
  }
  .footernav_ul {
    height: 55px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    border-top: 1px solid #e7e7e7;
    box-sizing: content-box;
    background-color: white;
  }
  .footernav li {
    float: left;
    width: 25%;
    height: 55px;
    background-color: white;
  }

  .footer_icons{
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .on{
    color: #6EB361  ;
  }
  .iconfont{
    font-size: 22px !important;
    position: relative;
    /*color: #898989;*/
  }
  .footer_icons span{
    font-size: 11px;
    /*color: #898989;*/
    margin-left: -23px;
    margin-top: 22px;
    position: absolute;
  }
  .icons_E span{
    margin-left: -32px;
  }

</style>
