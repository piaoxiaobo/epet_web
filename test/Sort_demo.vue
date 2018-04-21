<template>
  <div class="classify_content">
    <div class="content_left">
      <div>
        <ul>
          <li class="leftlist on"  v-for="(cate,index) in categorys.categorys" :key="index"
              @click="getSort(index,$event)" :class="{on:currentIndex===index}">{{cate.name}}</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <div>
        <div class="sort">
          <div class="sort_content" v-if="categorys.categorys">
            <p>
              <span style="font-size: 12px">{{computedCurrent[0].title}}</span>
              <img style="float: right;width: 46px;height: 10px;vertical-align: middle;margin-right: 5px;"
                   src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
            </p>
            <ul class="sort_list">
              <li >
                <a href="#">
                  <div class="list_li" v-for="(sort,index) in computedCurrent[0].list" :key="index">
                    <img :src="sort.photo||sort.logo" alt="">
                    <p>{{sort.name}}</p>
                  </div>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0,
        isCurrent:0
      }
    },
    mounted(){
      this.$store.dispatch('getClassify');
    },
    computed:{
      ...mapState(['categorys']),
      computedCurrent(){
        const {currentIndex}=this;
        return this.categorys.categorys[currentIndex].cate_list
      }
    },
    methods:{
      getSort(index,event){
        this.currentIndex=index
      }
    },
    watch:{
      categorys(){
        this.$nextTick(() =>{
          new BScroll('.content_left', {
            click: true,
            scrollY: true, //水平方向滑动
          });
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify_content
    display block
    margin-top 40px
    .content_left
      position fixed
      top 40px
      left 0
      overflow-y scroll
      bottom 50px
      padding-bottom 45px
      border-right 5px solid #f3f4f5
      background #fff
      width 70px
      .leftlist
          background #fff
          text-align center
          line-height 50px
          border-bottom 1px solid #f3f4f5
          width 70px
          height 50px
          font-size 13px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
    .content_right
      margin-left 75px
      border-top 5px solid #f3f4f5
      background #fff
      .sort
        background #fff
        .sort_content
          padding: 5px 5px 20px
          border-top 1px solid #f3f4f5
          p
            font-size 12px
            display block
            color #999
            padding-left 5px
            margin-top 10px
          .sort_list
            display flex
            flex-direction row
            flex-wrap wrap
            li
              margin-top: 20px
              .list_li
                display flex
                flex-direction column
                img
                  width 87px
                  height 87px
              p
                width 85px
                overflow hidden
                text-overflow ellipsis
                height 20px
                font-size 13px
                color #333
                margin-top 10px
                text-align center
</style>
