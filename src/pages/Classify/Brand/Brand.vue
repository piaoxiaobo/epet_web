<template>
    <div class="brand_wrap">
        <div class="brand_content" v-for="(list,index) in brand.brand" :key="index">
          <div class="title">
            <span>—— {{list.title}} ——</span>
          </div>
          <div class="brand_list" >
            <ul>
              <li class="list_item" v-for="(item,index) in list.list" :key="index">
                  <a href="javascript:;">
                    <div class="item_brand">
                      <img v-lazy="item.logo" alt="">
                    </div>
                    <div>
                      <img v-if="item.recommend" src="./jian.png" alt="" class="jian">
                    </div>
                    <!--<span class="taGongYi">TA公益</span>-->
                    <img v-if="item.tagongyi" class="taGongYi" src="./tagongyi.png" alt="">
                    <p class="p1">{{item.name}}</p>
                    <p class="p2">{{item.address}}</p>
                  </a>
              </li>
            </ul>
          </div>
        </div>
         <div class="allbrand">
        <router-link to="/allbrand">全部</router-link>
    </div>
      <div class="loading" v-if="loading">
        <img src="../../../common/loading/loading.gif">
        <div>数据加载中...</div>
      </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import AllBrand from '../../AllBrand/AllBrand'
    export default {
      data(){
        return{
          loading:true
        }
      },
      computed:{
        ...mapState(['brand'])
      },
      mounted(){
        this.$store.dispatch('getBrand');
      },

      components:{
        AllBrand
      },
      watch:{
        brand(){
          setTimeout(()=>{
            this.loading=false
          },200)

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand_wrap
    background #f3f4f5
    padding 45px 0 0
    .brand_content
      padding-bottom 15px
      margin-bottom 10px
      background-color white
      .title
        padding-top 20px
        font-size 12px
        color #999
        text-align center
      .brand_list
        padding 0 5px
        ul
          display flex
          flex-wrap wrap
        .list_item
          display flex
          flex-direction column
          margin-top 20px
          width 30.33%
          padding 0 5px
          position relative
          .item_brand
            height 60px
            width 109px
            border 1px solid #e2e2e2
            img
              height 40px
              margin 11px 11px
          .jian
            width 13px
            height 13px
            top 0
            left 5px
            position absolute
          .taGongYi
            /*font-size 8px*/
            /*padding 0 2px*/
            top 0
            right 3px
            /*background #e44b46*/
            /*color white*/
            position absolute
            height 13px
            width 35px
          .p1
            text-align center
            height 20px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            margin-top 10px
            font-size 13px
            color black
          .p2
            text-align center
            height 20px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 12px

    .allbrand a
      width 40px
      height 40px
      right 6px
      bottom 65px
      position fixed
      z-index 10
      background rgba(0,0,0 .4)
      line-height 40px
      border-radius 50%
      font-size 12px
      color #fff
      text-align center
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
</style>
