<template>
    <header class="mf-header">
      <p>Photo Display</p>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-s-tools" style="font-size: 20px;padding: 10px;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-circle-close" @click="outLogin">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>
<script>
    export default {
        data () {
            return {

            };
        },
        created () {
           
        },
        methods: {
            // 退出登录
            outLogin() {
                sessionStorage.clear()
                this.$router.replace({
                  name: 'login'
                })
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
