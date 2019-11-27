<template>
    <div class="mobile-index">
      <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.mobile-index{
  padding: 40px 0 0;
  height: 100%;
  box-sizing: border-box;
}

</style>
