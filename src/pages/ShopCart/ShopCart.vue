<template>
  <div class="shoppingCart">
    <div class="allBrand_header">
      <div class="allBrand_title" >
        <div>
          <a href="javascript:;"><span class="iconfont icon-return" style="position: absolute"
          @click="$router.back()"></span></a>
          <span class="sp1">购物车</span>
          <span class="iconfont icon-fenlei1 sp2" @click="showMenu" ></span>
        </div>
      </div>
      <HeaderList ref="hide"/>
    </div>
    <div class="shop_content ">
      <div class="gouwuche">
        <span class="iconfont icon-gouwuche2"></span>
      </div>
      <div class="gowu_title">购物车是空的</div>
      <div class="end_button">
        <a href="javascript:;">
          <span @click="goto('/home')">去逛逛</span>
        </a>
        <a href="javascript:;">
          <span>我的收藏</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderList from '../../components/HeaderList/HeaderList'
  export default {
    data(){
      return {
        hideList:false,
      }
    },
    methods: {
      showMenu() {
        this.$refs.hide.hideList = !this.$refs.hide.hideList
      },
      goto(path){
        this.$router.push(path)
      }
    },
    components:{
      HeaderList
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    background: white
  .allBrand_header
    display block
    .allBrand_title
      height 50px
      line-height 50px
      position relative
      padding 0 10px
      background-color white
      border-bottom 1px solid #f3f3f3
      .sp1
        width 90%
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        display block
        margin 0 auto
        text-align center
      .sp2
        float right
        margin-top -50px
        font-size 17px !important

  .shop_content
    width 100%
    height 298px
    background #ffffff
    .gouwuche
      width 100%
      height 170px
      background white
      text-align center
      line-height 170px
      span
        font-size 100px !important
        color #e9e9e9

    .gowu_title
      color #dbdbdb
      font-size 16px
      text-align center
      background #ffffff
    .end_button
      width 100%
      height 40px
      background white
      text-align center
      a
        display inline-block
        width 100px
        height 40px
        border 1px solid #999
        border-radius 5px
        line-height 40px
        margin-top 20px
        span
          font-size 16px
          color #999
</style>
