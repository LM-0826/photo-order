<template>
  <div id="app" v-loading.body="this.$store.state.loading" customClass="transparent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
html, body, p{
  margin: 0;
  padding: 0;
}
html, body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  background: #e9ecf3;
}
</style>
