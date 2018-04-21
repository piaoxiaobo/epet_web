<template>
    <div>
      <div class="login_header">
        <div class="login_bg">
          <div class="allBrand_title" >
            <div>
              <a href="javascript:;"><span class="iconfont icon-return" style="position: absolute;
                color: white" @click="$router.back()"></span></a>
              <span class="sp2"  @click="gologin">{{tologin?'登陆':'注册'}}</span>
            </div>
          </div>
          <div class="mlogo"></div>
          <div class="login">
            <ul>
              <li>
                <a href="javascript:;" @click="goshow1">{{tologin?'普通注册':'普通登录'}}</a>
                <i v-show="isshow1"></i>
              </li>
              <li>
                <a href="javascript:;" @click="goshow2">{{tologin?'手机动态密码注册':'手机动态密码登录'}}</a>
                <i v-show="isshow2"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="login_content">
        <div class="mfrom">
          <div class="mfrom_content">
            <form method="post"  action="" v-show="isshow1">
                <ul class="mform_ul">
                  <li>
                    <span class="iconfont icon-yonghu name_icon"></span>
                    <input type="text" placeholder="输入用户名" v-model="name">
                  </li>
                  <li>
                    <span class="iconfont icon-42 pwd_icon"></span>
                    <input type="password" placeholder="输入密码" v-model="pwd">
                  </li>
                </ul>
            </form>
            <form method="post"  action="" v-show="isshow2">
              <ul class="mform_ul">
                <li>
                  <span class="iconfont icon-yonghu name_icon"></span>
                  <input type="text" placeholder="已注册的手机号" v-model="phone"></li>
                <li>
                  <span class="iconfont icon-42 pwd_icon"></span>
                  <input type="text" placeholder="请输入图片内容" class="text" name="password" v-model="captcha">
                  <span class="yzm"><img @click="updateCaptcha"  src="http://localhost:3000/captcha" alt=""></span>
                </li>
                <li>
                  <span class="iconfont icon-42 pwd_icon"></span>
                  <input type="text" placeholder="动态密码" class="text" name="password" v-model="code" >
                  <a href="javascript:;" class="get_pass">短信已发送</a>
                  <a href="javascript:;" class="get_phonepass" @click.prevent="sendCode">获取动态密码</a>
                </li>
              </ul>
            </form>
            <div class="forget_pwd" ><a href="javascript:;">忘记密码?</a></div>
            <div>
              <div class="login_btn" @click="login">{{tologin?'注册':'登陆'}}</div>
              <div style="height: 100px"></div>
              <div class="other-login">
                <div class="other_title">合作网站登录</div>
                <ul class="other_img">
                  <li>
                    <a href="javascript:;">
                    <img src="http://static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="http://static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertTip v-if="isShowAlert" :alertText="alertText" @closeTip="closeTip"/>
      <div class="loading" v-if="loading">
        <img src="../../common/loading/loading.gif">
        <div>数据加载中...</div>
      </div>
    </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import {loginPwd, loginSms, sendCode} from '../../api/index.js'
    export default {
      data(){
        return{
          isshow1:true,  //用户名登陆
          isshow2:false, //手机登陆
          isShowAlert: false, // 是否显示警告框
          alertText: '', // 警告框的文本
          phone: '', // 手机号
          code: '', // 短信验证码
          name: '', // 用户名
          pwd: '', // 密码
          captcha: '', // 图片验证码
          computeTime: 0, // 倒计时的时间
          tologin:false,
          loading:true
        }
      },
      mounted() {
        setTimeout(()=>{
          this.loading=false
        },200)
      },
      methods:{

        gologin(){
          this.tologin=!this.tologin
        },
        goshow1(){
          if(this.isshow1===false){
            this.isshow1=!this.isshow1;
            this.isshow2=false
          }else{
            return;
          }

        },
        goshow2(){
          if(this.isshow2===false){
            this.isshow2=!this.isshow2;
            this.isshow1=false
          }else{
            return;
          }
        },
        showAlert(text) {
          this.isShowAlert = true
          this.alertText = text
        },

        async sendCode () {
          this.computeTime = 30;
          const intervalId = setInterval(() => {
            this.computeTime--;
            if(this.computeTime===0) {
              clearInterval(intervalId)
            }
          }, 1000)
          const result = await sendCode(this.phone);
          if(result.code===1) {
            this.showAlert(result.msg);
            clearInterval(intervalId);
            this.computeTime = 0
          }
        },

        async login () {
          let result;
          if(this.isshow2) {


            const {rightPhone,code,captcha,phone} = this;
            if(!rightPhone) {
              this.showAlert('手机号不正确');
              return
            } else if(!captcha){
              this.showAlert('验证码不正确');
              return
            }else if(!code){
              this.showAlert('动态密码不正确');
              return
            }
            result = await loginSms({phone,code,captcha})
          } else {
            const {name, pwd} = this;
            if(!name) {
              this.showAlert('必须指定用户名');
              return
            } else if(!pwd) {
              this.showAlert('必须指定密码');
              return
            }

            console.log(name)
            console.log(pwd)
            result = await loginPwd({name, pwd})
          }
          if(result.code===1) {
            this.showAlert(result.msg)
          } else {
            const user = result.data;
            this.$store.dispatch('saveUserInfo', user);
            this.$router.replace('/profile')
          }
        },
        updateCaptcha(event){
          event.target.src='http://localhost:3000/captcha?time='+Date.now()
        },
        closeTip () {
          this.isShowAlert = false;
          this.alertText = ''
        },

      },
      components:{
        AlertTip
      },
      computed: {
        rightPhone () { // 以1开头, 11位数字
          return /^1\d{10}$/.test(this.phone)
        }
      },


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color white !important
  .login_header
    display block
    .login_bg
      background url('https://www.itsolotime.com/img/login_bg.png') no-repeat
      background-size 100% 100%
      .allBrand_title
        height 50px
        line-height 50px
        position relative
        padding 0 10px
        background transparent
        color white
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
          font-size 17px !important


      .mlogo
        height 50px
        padding 1em 0 2em 0
      .login
        background-color rgba(255,255,255,0.3)
        height 44px
        li
          float left
          width 50%
          text-align center
          height 44px;
          line-height 44px
          position relative
          a
            font-size 15px
            color #fff
            display block
          i
            display block
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            position absolute
            bottom: 0px
            left 0
            right 0
            margin auto

  .login_content
    background #fff
    .mfrom
      background #fff
      border-radius 0.5em
      margin 0em 4% 1em 4%
      padding 0 1.6%
      .mform_ul
        li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0 12px 30px
          position relative
        .name_icon
          float left
          display inline
          width 17px
          height 21px
          background-size contain
          margin 1px 0 0 -25px
        input
          display block
          height 21px
          width 100%
          font-size 15px
          border none
          padding 0px
          color #666
          font-family "Microsoft Yahei",tahoma,arial
          outline none
          -webkit-appearance none
          border-radius 3px
          background-color #fff
        .pwd_icon
          float left
          display inline
          width 17px
          height 20px
          margin 0px 0 0 -25px
          background-size contain
        .get_pass
          display none
          margin-right 0px
          background #f5f5f5
          color #b8b8b8
          border 1px solid #b8b8b8
          position absolute
          right 0
          top 0.5em
          border-radius 3px
          width 100px
          text-align center
          padding 0.3em 0
        .get_phonepass
          background #fff
          color #ff4259
          border 1px solid #eb4c33
          position absolute
          right 0
          top 0.5em
          border-radius 3px
          width 100px
          text-align center
          padding 0.3em 0
          font-size 15px
        input
          display block;
          height 21px
          width 100%
          font-size 15px
          border none
          padding 0px
          color #666
          font-family "Microsoft Yahei",tahoma,arial
          outline none
        .yzm
          display block
          position absolute
          top 5px
          right 0px
          img
            width 110px
      .forget_pwd
        font-size 14px
        a
          float right
          margin-top 10px
      .login_btn
        width 100%
        color white
        text-align center
        display block
        letter-spacing 5px
        border-radius 5px
        background #2ec975
        font-size 15px
        padding .6em 0
        margin-top 40px
      .other_title
        color #d7d7d7
        margin-top 0.5em
        font-size 16px
        text-align center
      .other_img
        padding 1.5em 0
        li
          /*width 33.3%*/
          padding 0 1.2em
          float left
          display inline
          img
            height 60px
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
