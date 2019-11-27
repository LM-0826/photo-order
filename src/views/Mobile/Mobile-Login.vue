<template>
    <div class="login-form">
      <input class="password" @focus="focus" @blur="blur" v-model="school" :placeholder="$t('login.school_ph')" type="text">
      <input class="password" @focus="focus" @blur="blur" v-model="password" :placeholder="$t('login.password_ph')" type="password">
      <div class="submit-button" @click="submit">{{ $t('login.button') }}</div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { AjaxPlugin } from 'vux';
import config from '../../config';
export default {
  data() {
    return {
      password: '',
      school: '',
    };
  },
  components: {
  },
  created() {
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    // 登录
    submit() {
      if (!this.school){
          this.$vux.toast.show({
            text: '请输入学校',
            type: 'warn'
          })
        return;
      }
      if (!this.password){
          this.$vux.toast.show({
            text: '请输入密码',
            type: 'warn'
          })
        return;
      }
      var data = {
        password: this.password,
        school: this.school
      };
      this.$http.post(config.baseUrl + '/user/login', data)
      .then(res => {
        if (res.code === 0){
          this.setUserInfo(res.data);
          if (res.data.user) {
            sessionStorage.setItem("id", res.data.user.id);
            sessionStorage.setItem("school", res.data.user.school);
            sessionStorage.setItem("team", res.data.user.team);
            sessionStorage.setItem("grade", res.data.user.grade);
            sessionStorage.setItem("token", res.data.token);
            this.$vux.toast.show({
              text: res.message,
              type: 'success'
            })
            this.$router.push({name: 'OrderIndex'}) 
          }
        } else {
          this.$vux.toast.show({
            text: res.message,
            type: 'warn'
          })
        }
      }).catch(error => {
        this.$vux.toast.show({
          text: error.message,
          type: 'warn'
        })
      })
    },
    focus() {
      this.scrollTop = document.scrollingElement.scrollTop;
    },
    blur() {
      document.scrollingElement.scrollTo(0, this.scrollTop);
    }
  }
};
</script>
<style lang="less" scoped>
.login-form{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../../assets/imgs/mobil-login.png") no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: fixed;
  padding: 0 20px;
}

.password{
  width: 100%;
  height: 0.9rem;
  color: #fff;
  text-align: center;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #fff;
  height: 2rem;
  outline: none;
  background-color:transparent;
}
.submit-button{
  text-align: center;
  display: block;
  width: 100%;
  line-height: 2rem;
  border-radius: 2rem;
  background-color: #fff;
  font-size: .8rem;
  color: #89002f;
  margin: 3rem 0;
}

::-webkit-input-placeholder{
  color: #ffffff;
  transition: .3s;
}
</style>



