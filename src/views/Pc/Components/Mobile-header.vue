<template>
  <div class="mobile-header">
    <span style="width: 30px;height: 40px;" v-if="!back"></span>
    <x-icon type="ios-arrow-back" style="height: 40px;" size="30" @click="backPage" v-if="back"></x-icon>
    <span>{{ title }}</span>
    <span style="width: 30px;height: 40px;"></span>
  </div>
</template>

<script>
export default {
  props: ['title', 'back'],
  methods: {
    backPage() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.mobile-header{
  position: fixed;
  top: 0;
  left: 10%;
  right: 10%;
  height: 40px;
  z-index: 1;

  background-color: #89002f;
  color: #fff;
  text-align: center;
  line-height: 40px;

  display: flex;
  justify-content: space-between;
  align-content: center;
}
.vux-x-icon {
  fill: #ffffff;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>

