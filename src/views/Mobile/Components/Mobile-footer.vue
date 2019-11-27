<template>
  <div class="mobile-footer vux-1px-t" :class="{'iphoneX': isIphonX}">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.mobile-footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background: #fff;
}
</style>

