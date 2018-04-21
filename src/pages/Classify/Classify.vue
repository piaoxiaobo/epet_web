<template>
  <div class="wrap">
    <div class="header">
      <div class="header_classify">
        <router-link to="/Classify/sort" replace><span>分类</span></router-link>
      </div>
      <div class="header_brand">
        <router-link to="/Classify/brand" replace><span>品牌</span></router-link>
      </div>
      <div >
        <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
          <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="search_icon"></a>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
    import Sort from './Sort/Sort';
    import Brand from './Brand/Brand';
    export default {
      components:{
        Sort,
        Brand
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #e7e7e7
    .header
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      position: fixed
      left: 0
      right: 0
      top: 0
      height 40px
      z-index 11
      background-color white
      display flex
      flex-direction row
      .header_classify
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        float: left
        font-weight 700
        a
          display inline-block
          height 40px
          padding 0 4px
          cursor pointer
          float right
          font-weight 700
          &.router-link-active
            color #ed4044
            border-bottom 2px solid #ed4044
      .header_brand
        padding-left 5%
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        float left
        font-weight 700
        a
          display inline-block
          height 40px
          padding 0 4px
          cursor pointer
          float left
          font-weight 700
          &.router-link-active
            color #ed4044
            border-bottom 2px solid #ed4044
      .search_icon
        margin-top 13px
        right 15px
        width 14px
        height 14px

</style>
