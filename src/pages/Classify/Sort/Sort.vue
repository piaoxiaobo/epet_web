<template>
  <div class="classify_content">
    <div class="content_left">
      <div>
        <ul>
          <li :class="{'active':ind === index}" class="leftlist" @click="getsort(index)"
              v-for="(cate,index) in categorys.categorys" :key="index">{{cate.name}}</li>
        </ul>
      </div>
    </div>
    <div class="content_right" v-for="(sort,index) in sorts" :key="index">
      <div>
        <div class="sort">
          <div class="sort_content">
            <p>
              <span style="font-size: 12px">{{sort.title}}</span>
              <img style="float: right;width: 46px;height: 10px;vertical-align: middle;margin-right: 5px;"
                   src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
            </p>
            <ul class="sort_list">
              <li v-for="(sortli,index) in sort.list" :key="index">
                <a href="javascript:;">
                  <div class="list_li" >
                    <img v-lazy="sortli.photo||sortli.logo" alt="">
                  </div>
                  <p>{{sortli.name}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--初始化-->
    <div v-if="isshow&&categorys.categorys">
      <div class="content_right"
           v-for="(sort,index) in categorys.categorys[0].cate_list" :key="index">
        <div>
          <div class="sort">
            <div class="sort_content">
              <p>
                <span style="font-size: 12px">{{sort.title}}</span>
                <img style="float: right;width: 46px;height: 10px;vertical-align: middle;margin-right: 5px;"
                     src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
              </p>
              <ul class="sort_list">
                <li v-for="(sortli,index) in sort.list" :key="index">
                  <a href="javascript:;">
                    <div class="list_li" >
                      <img v-lazy="sortli.photo||sortli.logo" alt="">
                    </div>
                    <p>{{sortli.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <img src="../../../common/loading/loading.gif">
      <div>数据加载中...</div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        sorts:[],
        isshow:true,
        ind: 0,
        loading:true
      }
    },
    mounted(){
      this.$store.dispatch('getClassify');
      new BScroll('.content_left', {
        click: true,
        scrollY: true,
      });
    },
    computed:{
      ...mapState(['categorys'])
    },
    methods:{
      getsort(index,event){
        this.sorts=this.categorys.categorys[index].cate_list;
        this.isshow = false;
        this.ind = index;
      }
    },
    watch:{
      categorys(){
        setTimeout(()=>{
          this.loading=false
        },200)

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
        .active
          background: #f3f4f5;
          color: #ed4044;
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
