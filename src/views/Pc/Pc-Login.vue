<template>
    <div id="login" @keyup.enter="submit">
      <el-row type="flex" justify="center" align="middle" style="height: 100%">
        <el-col :span="6">

          <!-- school -->
          <el-row>
            <el-col :span="6" style="color: #fff;text-align: right;transform:translateX(-15px);line-height: 40px">
              SCHOOL：
            </el-col>
            <el-col :span="18">
              <el-input v-model="school" type="text" placeholder="SCHOOL"></el-input>
            </el-col>
          </el-row>

          <!-- password -->
          <el-row style="margin: 20px 0;">
            <el-col :span="6" style="color: #fff;text-align: right;transform:translateX(-15px);line-height: 40px">
              PASSWORD：
            </el-col>
            <el-col :span="18">
              <el-input v-model="password" type="password" placeholder="PASSWORD"></el-input>
            </el-col>
          </el-row>
          
          <!-- login button -->
          <el-row type="flex" style="justify-content: flex-end;">
            <el-col :span="18" style="display: flex;justify-content: center;">
              <el-button style="width: 100%" type="primary" @click="submit" @keyup.enter="submit">登录</el-button>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { Message } from 'element-ui';
import axios from 'axios';
import config from '../../config';
export default {
  data() {
    return {
      password: '',
      school: ''
    };
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
      axios.post(config.baseUrl + '/user/login', data)
        .then(res => {
          if (res.data.code == 0){
            this.setUserInfo(res.data.data);
            if (res.data.data.user) {
              sessionStorage.setItem("id", res.data.data.user.id);
              sessionStorage.setItem("school", res.data.data.user.school);
              sessionStorage.setItem("team", res.data.data.user.team);
              sessionStorage.setItem("grade", res.data.data.user.grade);
              sessionStorage.setItem("token", res.data.data.token);
              this.$router.push({name: 'OrderIndex'})        
            }
          } else {
            Message({
              showClose: true,
              message: res.data.message,
              type: 'error',
              duration: 1500
            })
          }
        }).catch(error => {
          Message({
              showClose: true,
              message: error.message,
              type: 'error',
              duration: 1500
            })
        })
    }
  }
};
</script>
<style lang="less" scoped>

.form{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login {
  position: absolute;
  padding: 50px 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../assets/imgs/bg.jpg") no-repeat center;
  background-size: cover;
}
</style>




