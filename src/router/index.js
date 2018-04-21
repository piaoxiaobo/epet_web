/**
 * Created by Bianrongcheng on 2018
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home.vue';
import Classify from '../pages/Classify/Classify.vue';
import ShopCart from '../pages/ShopCart/ShopCart.vue';
import MyShop from '../pages/MyShop/MyShop.vue';
import Sort from '../pages/Classify/Sort/Sort';
import Brand from '../pages/Classify/Brand/Brand';
import AllBrand from '../pages/AllBrand/AllBrand';
import Profile from '../pages/Profile/Profile';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[

    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        showFooter:true
      },
      children:[
        {
          path:'/Classify/sort',
          component: Sort,
          meta:{
            showFooter:true
          },
        },
        {
          path: '/Classify/brand',
          component: Brand,
          meta:{
            showFooter:true
          },
        },
        {
          path: '/',
          redirect: '/Classify/sort'
        },
      ],
    },
    {
      path: '/allbrand',
      component: AllBrand,

    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/myshop',
      component: MyShop,
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
