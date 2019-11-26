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
#app{
  width: 100%;
  height: 100%;
}
.header-lang{
  position: fixed;
  right: 20px;
  top: 15px;
  z-index: 2;
  span{
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    transition: .3s;
  }
  span.active{
    background-color: #666666;
    color: #ffffff;
  }
}

</style>
