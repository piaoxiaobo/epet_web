<template>
  <div>
    <CartHeader/>
    <mt-index-list>
      <mt-index-section v-for="(brand , index) in allbrand.brand" :index="`${brand.order}`" :key="index">
      <div class="allbrands" >
        <div class="content">
          <div class="brand-item border-bottom-1px" v-for="(evebrand , index) in brand.list">
            <a href="javascript:">
              <img alt="logo" :src="evebrand.logo"/>
              <span class="desc">
                <span class="name">{{evebrand.name}}</span><br>
                <span class="address">{{evebrand.address}}</span>
              </span>
            </a>
          </div>
          <div class="brand-item border-bottom-1px">
            <a href="javascript:;">
              <img alt="logo" src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/16b0a6dd2bc28ee4809ac8945bc8f282.jpg?x-oss-process=style/waterfall&$1=200"/>
              <span class="desc">
                <span class="name">艾尔</span><br>
                <span class="address">中国</span>
              </span>
            </a>
          </div>

        </div>
      </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CartHeader from "../../components/FootGuide/FootGuide"
  import { IndexList, IndexSection } from 'mint-ui';
  import { Cell } from 'mint-ui';
  import {mapState} from "vuex"

  Vue.component(Cell.name, Cell);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  export default {
    components:{
      CartHeader
    },
    mounted () {
      this.$store.dispatch('getAllBrand')
    },
    computed:{
      ...mapState(['all'])
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../static/css/reset.scss';
  .letter
    position fixed
    right 0px
    top 0px
    bottom 0px
    height 100%
    width 20px
    z-index 20

    ul
      margin-top: 100px
      width 100%
      li
        text-align center
  .allbrands
    width 100%
    background-color: rgba(0,0,0,.1)
    .content
      height 100%
      width 100%
      .title
        width 100%
        height 24px
        line-height 24px
        font-size 12px
      .brand-item
        width 100%
        height 70px
        background #fff
        border-bottom-1px(#eee)
        box-sizing border-box
        padding 10px 10px
        >a
          display block
          width 100%
          height 100%
          font-size 0
          >img
            height 100%
            width 88px
            border 1px solid #eeeeee
            padding 5px
            box-sizing border-box
            vertical-align top
          .desc
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            height 100%
            font-size 14px
            margin-left 20px
            .name
              color #000
            .addres
