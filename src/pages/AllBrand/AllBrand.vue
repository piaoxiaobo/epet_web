<template>
  <div class="allBrand_nav">
      <div class="allBrand_header">
        <div class="allBrand_title" >
          <div>
            <a href="javascript:;"><span class="iconfont icon-return" style="position: absolute"
            @click="$router.back()"></span></a>
            <span class="sp1">全部品牌</span>
            <span class="iconfont icon-fenlei1 sp2" @click="showMenu" ></span>
          </div>
        </div>
        <HeaderList ref="hide"/>
      </div>
      <div>
        <div class="allBrand_abc">
          <div class="allBrands">
            <div class="list_abc">
              <div class="l_wrap">
                <div class="l_cell">
                  <span class="spabc" v-for="(item,index) in allbrand.brand" :key="index"
                        :class="{current: currentIndex===index}" @click="selectBrand(index)"
                  >{{item.order}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="test" style="height: 375px">
          <div ref="getul">
            <div class="allBrand_list" v-for="(item,index) in allbrand.brand" :key="index">
              <div>
                <h2 class="brand_item">{{item.order}}</h2>
                <div v-for="(bitem,index) in item.list" :key="index">
                  <a href="javascript:;" class="demo">
                    <div class="brand_wrap">
                      <div class="brand_img">
                        <img v-lazy="bitem.logo" alt="">
                      </div>
                      <div>
                        <img v-if="bitem.recommend" src="./jian.png" alt="" class="jian">
                      </div>
                      <!--<span class="taGongYi">TA公益</span>-->
                      <img v-if="bitem.tagongyi" class="taGongYi" src="./tagongyi.png" alt="">
                      <div class="brand_name">
                        <p class="bp1">{{bitem.name}}</p>
                        <p class="bp2">{{bitem.address}}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="loading" v-if="loading">
          <img src="../../common/loading/loading.gif">
          <div>数据加载中...</div>
        </div>
      </div>
  </div>

</template>

<script>
    import {mapState} from 'vuex';
    import BScroll from 'better-scroll'
    import HeaderList from '../../components/HeaderList/HeaderList'
    export default {
      data(){
        return{
          hideList:false,
          scrollY:0,
          tops:[],
          loading:true
        }
      },
      mounted(){
        this.$store.dispatch('getAllBrand')
      },
      computed:{
        ...mapState(['allbrand']),
        currentIndex(){
          const {scrollY,tops}=this
          return tops.findIndex((top,index)=>scrollY>=top&&scrollY<tops[index+1])

        }
      },
      methods:{
        showMenu(){
          this.$refs.hide.hideList=!this.$refs.hide.hideList
        },
        totop(){
          const tops=[];
          let top=0;
          tops.push(top);
          const ul=this.$refs.getul.getElementsByClassName('allBrand_list');
          Array.prototype.slice.call(ul).forEach(item=>{
            top+=item.clientHeight;
            tops.push(top)
          });
          this.tops=tops
        },
        selectBrand(index){
          const y=-this.tops[index];
          this.toscroll.scrollTo(0,y,300)
        }
      },
      components:{
        HeaderList
      },
      watch:{
        allbrand(){
          this.$nextTick(()=>{
            this.toscroll=new BScroll('.test', {
              click: true,
              scrollY: true,
            });
            this.toscroll.on('scroll',(pos)=>{
              this.scrollY=Math.abs(pos.y)
            })
            this.toscroll.on('scrollEnd',(pos)=>{
              this.scrollY=Math.abs(pos.y)
            })
            this.totop()
          })
        },
        allbrand(){
          setTimeout(()=>{
            this.loading=false
          },200)

        }
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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

    .allBrand_abc
      .allBrands
        .list_abc
          top 0
          bottom 0
          right 4px
          width 10px
          z-index 1
          position fixed
          text-align center
          .l_wrap
            display table
            height 100%
            .l_cell
              display table-cell
              height 100%
              vertical-align middle
              .spabc
                display block
                height 12px
                margin-top 2px
                font-size 12px
                &.current
                  color red
    .allBrand_list
      background #f3f4f5
      padding 45px 0 0
      padding-top: 0;
      .brand_item
        text-indent 15px
        line-height 24px
        font-size 12px
      .demo
        display block
        background #fff
        color #333
        .brand_wrap
            padding 10px
            border-bottom 1px solid #f3f4f5
            margin-right 20px
            background-color white
            height 50px
          .brand_img
            text-align center
            width 30%
            max-width 150px
            height 50px
            border 1px solid #f3f4f5
            float left
            overflow hidden!important;
            img
              max-width 90%
              height 40px
              margin 5px auto
              top 0
              left 0
              right 0
              display block
          .jian
            width 13px
            height 13px
            /*top 0*/
            left 10px
            position absolute
          .taGongYi
            /*font-size 8px*/
            /*padding 0 2px*/
            /*top 0*/
            /*right 3px*/
            /*background #e44b46*/
            /*color white*/
            position absolute
            height 13px
            left 83px
            /*width 35px*/
        .brand_name
          margin 5px 0 5px 20px
          float left
          .bp1
            font-size 14px
          .bp2
            font-size 12px
            color #999
            margin-top 10px
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
