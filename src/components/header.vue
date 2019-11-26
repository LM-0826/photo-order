<template>
    <header class="mf-header">
      <p>{{ $t('header.title') }}</p>
      <div>
        <span>{{ $t('header.crumb') }}</span>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-s-tools" style="font-size: 20px;padding: 10px;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-set-up" command="chinese">中文</el-dropdown-item>
            <el-dropdown-item icon="el-icon-set-up" command="english">English</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-close" command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>
<script>
  export default {
    data () {
      return {
        locale: 'cn'
      };
    },
    created () {
        
    },
    methods: {
      handleCommand(command) {
        switch(command) {
          case 'chinese':
            this.locale = 'cn';
            break;
          case 'english':
            this.locale = 'en';
            break;
          case 'loginout':
            this.loginOut();
            break;
          default:
            break;
        }
      },
      // 退出登录
      loginOut() {
        sessionStorage.clear()
        this.$router.replace({
          name: 'login'
        })
      }
    },
    watch: {
      locale (val) {
        this.$i18n.locale = val
      }
    }
  }
</script>
<style lang="less">
.mf-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px!important;
  padding: 0 20px;
}
</style>
