<template>
  <div id="app" v-loading.body="this.$store.state.loading" customClass="transparent">
    <div class="header-lang" v-if="!isPC">
      <span @click="locale = 'cn'" :class="{'active': locale == 'cn'}">中</span>
      <span @click="locale = 'en'" :class="{'active': locale == 'en'}">EN</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      locale: 'cn'
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  mounted() {
    window.onresize = () => { // 定义窗口大小变更通知事件
      // console.log(location.href)
      // if (this.isPC) {
      //   location.href = location.href.replace('')
      // }
      // location.reload()
    };
  }
};
</script>

<style lang="less">
html{
  font-size: 16px;
}
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
p{
  padding: 0;
  margin: 0;
}
#app{
  max-width: 100%;
  box-sizing: border-box;
  height: 100%;
}
.header-lang{
  position: fixed;
  right: 8px;
  top: 8px;
  z-index: 2;
  span{
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    font-size: 12px;
    background-color: #fff;
    color: #333;
    transition: .3s;
    box-shadow: 0 0 2px #ccc;
  }
  span.active{
    background-color: #888;
    color: #ffffff;
  }
}
.iphoneX{
  padding-bottom: 34px !important;
}
.bottom-btn{
  background-color: #89002f;
  color: #fff;
  border-radius: 80px;
  width: 95%;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  margin: 0 auto;
}
.bottom-btn~.bottom-btn{
  margin-top: 15px;
}
.bottom-btn-pc{
  background-color: #89002f;
  color: #fff;
  border-radius: 80px;
  width: 20%;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  margin: 0 auto;
}
.bottom-btn-pc~.bottom-btn-pc{
  margin-top: 15px;
}
</style>
