<template>
  <div class="e_items">
    <div class="items_title">
      <img src="./images/items/items_title1.jpg" alt="">
      <div class="title_more">
        <a href="javascript:;">
          <img src="./images/nav/more.png" alt="">
        </a>
      </div>
    </div>
    <div class="items_item">
      <a href="javascript:;" v-if="eapp.datas">
        <img :src="eapp.datas[10].value[0].cover.image" alt="">
      </a>
    </div>
    <div class="items_content">
      <div class="items_content1" v-if="eapp.datas">{{eapp.datas[10].value[0].title}}</div>
      <div class="items_content2" style="margin-top: 5px" v-if="eapp.datas">
        <i class="iconfont icon-yanjing"  style="font-size: 12px !important;"></i>
        <i style="font-style: normal;" >{{eapp.datas[10].value[0].visit}}</i>
        <span style="margin: 0 10px">|</span>
        {{eapp.datas[10].value[0].time}}
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

    export default {
      mounted(){
        this.$store.dispatch('getEapp')
      },
      computed:{
        ...mapState(['eapp'])
      }
    }
</script>

<style>
  .e_items{
    background-color: white;
  }
  .items_title{
    position: relative;
    padding-bottom: 5px;
    text-align: center;
    display: flex;
    flex-direction: row;
  }
  .items_title img{
    margin: 0 auto 0 10px;
    display: block;
    max-width: 50%;
    max-height: 73px;
    vertical-align: middle;
  }
  .title_more img{
    margin: 18px auto 0 10px;
    display: block;
    max-width: 50%;
    max-height: 73px;
    vertical-align: middle;
  }
  .items_item img{
    width: 100%;
  }
  .items_content{
    padding: 10px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .items_content1{
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
    color: #333;
  }

</style>
