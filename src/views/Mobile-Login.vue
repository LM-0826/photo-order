<template>
    <div class="login-form">
      <input class="password" :placeholder="$t('login.school')" type="text">
      <input class="password" :placeholder="$t('login.password_ph')" type="password">
      <!-- <x-button>{{ $t('login.button') }}</x-button> -->
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { AjaxPlugin, XButton } from 'vux';
import config from '../config';
import { setTimeout, clearTimeout } from 'timers';
export default {
  data() {
    return {
      password: '',
      school: '',
    };
  },
  components: {
    XButton
  },
  created() {
    
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    // 登录
    submit() {
      if (!this.school){
          Message({
            showClose: true,
            message: '请输入学校',
            type: 'error',
            duration: 1500
          })
        return;
      }
      if (!this.password){
          Message({
            showClose: true,
            message: '请输入密码',
            type: 'error',
            duration: 1500
          })
        return;
      }
      var data = {
        password: this.password,
        school: this.school
      };
       
      AjaxPlugin.$http.post(config.baseUrl + '/user/login', data)
        .then(res => {
          if (res.data.code == 0){
            this.setUserInfo(res.data.data);
            if (res.data.data.user) {
              sessionStorage.setItem("id", res.data.data.user.id);
              sessionStorage.setItem("school", res.data.data.user.school);
              sessionStorage.setItem("team", res.data.data.user.team);
              sessionStorage.setItem("grade", res.data.data.user.grade);
              sessionStorage.setItem("token", res.data.data.token);
              let p = new Promise((resolve, reject) => {
                this.$vux.toast.show({
                  text: 'Loading',
                  type: 'success'
                })
                let timer = setTimeout(() => {
                  clearTimeout(timer)
                  resolve()
                }, 1000)
              })
              p.then(() => {
                this.$router.push({name: 'OrderIndex'}) 
              })
            }
          } else {
            this.$vux.toast.show({
              text: res.data.message,
              type: 'error'
            })
          }
        }).catch(error => {
          this.$vux.toast.show({
            text: res.data.message,
            type: 'error'
          })
        })
    }
  }
};
</script>
<style lang="less" scoped>
.login-form{
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0) url("../assets/imgs/mobil-login.png") no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: fixed;
}

.password{
  width: 100%;
  height: 0.9rem;
  color: #fff;
  text-align: center;
  font-size: 0.28rem;
  border: none;
  border-bottom: 1px solid #fff;
  height: 2rem;
  outline: none;
  background-color:transparent;
}
::-webkit-input-placeholder{
  color: #ffffff;
  transition: .3s;
}
</style>



