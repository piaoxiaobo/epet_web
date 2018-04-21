/**
 * Created by Bianrongcheng on 2018
 */

import {
  RECEIVE_EAPP,
  RECEIVE_BRAND,
  RECEIVE_CAROUSEL,
  RECEIVE_CLASSIFY,
  RECEIVE_ALLBRAND,
  RECEIVE_USER_INFO
} from  './mutatison-types'


export default {
  //主页信息
  [RECEIVE_EAPP](state, {eapp}) {
    state.eapp = eapp
  },
  //轮播和每日疯抢
  [RECEIVE_CAROUSEL](state, {carousel}) {
    state.carousel = carousel;
  },
  //分类数据
  [RECEIVE_CLASSIFY](state, {categorys}) {
    state.categorys = categorys;
  },
  //品牌数据
  [RECEIVE_BRAND](state, {brand}) {
    state.brand = brand;
  },
  //全部品牌数据
  [RECEIVE_ALLBRAND](state, {allbrand}) {
    state.allbrand = allbrand;
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
}
