/**
 * Created by Bianrongcheng on 2018
 */

import {
  reqEAPP,
  reqCAROUSEL,
  reqCLASSIFY,
  reqBRAND,
  reqCaptcha,
  reqALLBRAND,
  reqUserInfo
} from '../api';
import {
  RECEIVE_EAPP,
  RECEIVE_CLASSIFY,
  RECEIVE_BRAND,
  RECEIVE_CAROUSEL,
  RECEIVE_ALLBRAND,
  RECEIVE_USER_INFO
} from './mutatison-types'



export default {
  //获取主页数据
  async getEapp({commit}) {
    const result = await reqEAPP();
    if(result.code===0){
      commit(RECEIVE_EAPP,{eapp:result.data})
    }
  },
  //获取轮播和每日疯抢
  async getCarousel({commit}) {
    const result = await reqCAROUSEL();
    if(result.code===0){
      commit(RECEIVE_CAROUSEL,{carousel:result.data})
    }

  },

  //获取分类数据
  async getClassify({commit}) {
    const result = await reqCLASSIFY();
    if(result.code===0){
      commit(RECEIVE_CLASSIFY,{categorys:result.data})
    }

  },
  //品牌数据
  async getBrand({commit}) {
    const result = await reqBRAND();
    if(result.code===0){
      commit(RECEIVE_BRAND,{brand:result.data})
    }
  },
  //全部品牌数据
  async getAllBrand({commit}) {
    const result = await reqALLBRAND();
    if(result.code===0){
      commit(RECEIVE_ALLBRAND,{allbrand:result.data})
    }
  },
  // 存储指定的用户
  saveUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
}
