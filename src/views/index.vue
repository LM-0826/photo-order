<template>
    <el-container class="mf-container" style="height: 100vh;overflow: hidden;">
        <el-header class="header">
            <my-header @menuControl="menuControl"></my-header>
        </el-header>
        <el-container style="overflow: auto;">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-container>
        <el-footer class="compunty">摄影工作室</el-footer>
    </el-container>
</template>

<script>
import { mapState } from "vuex";
import LoadingTpl from "../components/loading.vue";
import Header from "../components/header.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  data() {
    return {
      isCollapse: false // 菜单收缩控制
    };
  },
  components: {
    sidebar: Sidebar,
    myHeader: Header
  },
  methods: {
    // 菜单收缩
    menuControl(isCollapse) {
      this.isCollapse = isCollapse;
    }
  },
  computed: {
    currentIndex() {
      return this.$route.path;
    },
    currentUrl() {
      let tempList = sessionStorage.getItem('menuList')
      if (!tempList) {
          this.$router.replace({
              name: 'login'
          })
          return '/user/1'
      }
      tempList = JSON.parse(tempList)
      let url = '/user/1'
      tempList.forEach(menu => {
          menu.children.length > 0 && menu.children.forEach(item => {
              if (this.$route.path === item.url || item.siblings.includes(this.$route.path)) {
                  url = menu.url
              }
          })
      })
      return url
    }
  },
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 10%;
  right: 10%;
  padding: 0;
  height: 51px!important;
  z-index: 9;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.mf-container{
  padding-top: 51px;
  width: 80%;
  margin: 0 auto;
}
.compunty {
  text-align: center;
  border-top: 1px solid #ccc;
  background: #fff;
  font-size: 13px;
  height: 30px!important;
  line-height: 30px;
  color: #666;
}
.mf-content{
  overflow: auto;
}
.mf-content::-webkit-scrollbar{
    width: 10px;
    height: 10px;
}
.mf-content::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #999;
}
.el-header{
  padding: 0!important;
}
</style>
