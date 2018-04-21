<template>
  <!--轮播图-->
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="carousel.data">
      <div class="swiper-slide" v-for="(images,index) in carousel.data[1].value" :key="index"><img :src="images.image" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      computed:{
        ...mapState(['carousel'])
      },
      mounted() {
        this.$store.dispatch('getCarousel');

      },
      watch:{
        carousel(value){
          this.$nextTick(() => {
            if(!this.swiper){
              this.swiper=new Swiper(".swiper-container", {
                loop: true,
                autoplay: true,
                pagination: {
                  el: '.swiper-pagination',
                }
              });
            }
          })
        }
      }
    }
</script>

<style>
  .swiper-container{
    width:100%;
    height:100%;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
  }

  .swiper-slide{
    display:flex;
    justify-content:center;
    align-items :flex-start;
    flex-wrap :wrap;
  }
  .swiper-slide img{
    display:inline-block;
    width:100%;
    height:160px;
  }
  .swiper-pagination{
  > span.swiper-pagination-bullet-active
  background:#02a774
  }
  .swiper-pagination{
    transition: all .2s ease !important;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: unset;
    left: 0;
    width: 100%;
    top: 120px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: white;
    width: 15px;
    height: 5px;
    border-radius: 25px;
    transition: all .25s ease !important;
  }
  .pic-item :last-child{
    margin: 0;
  }
  .swiper-pagination-bullet{
    transition: all .25s ease !important;
    height: 5px;
  }
</style>
