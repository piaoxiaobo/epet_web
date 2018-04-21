<template>
    <div>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <FootGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
    export default {
      components:{
        FootGuide
      },
    }
</script>

<style>

</style>
