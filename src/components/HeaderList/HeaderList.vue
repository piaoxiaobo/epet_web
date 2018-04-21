<template>
  <transition name="fade">

      <div class="title_content" v-if="hideList">
        <div style="height: 8px"></div>
        <a href="javascript:;" @click="goto('/home')">
          <span class="iconfont icon-shouye"></span>
          <p>首页</p>
        </a>
        <a href="javascript:;" @click="goto('/classify')">
          <span class="iconfont icon-zhizhang9"></span>
          <p>商品分类</p>
        </a>
        <a href="javascript:;" @click="goto('/shopcart')">
          <span class="iconfont icon-gouwuche2"></span>
          <p>购物车</p>
        </a>
        <a href="javascript:;" @click="goto('/myshop')">
          <span class="iconfont icon-chongwu"></span>
          <p>我的e宠</p>
        </a>
      </div>
  </transition>
</template>

<script>
    export default {
      data(){
        return{
          hideList:false
        }
      },
      methods:{
        goto(path){
          this.$router.push(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title_content
    width 100%
    background #fff
    border-bottom 1px solid #d7d7d7
    overflow hidden
    /*padding 10px 0*/
    height 55px
    &.fade-enter-active, &.fade-leave-active
      transition 0.5s all
    &.fade-enter, &.fade-leave-to
      height 0
    a
      display inline-block
      width 25%
      text-align center
      float left
      p
        color #666
        font-size 14px
        text-align center
        margin-top 5px

</style>
