<template>
  <div class="content">
    <g-header :title="$t('myOrder.title')" :back="true"></g-header>
    <g-footer>
      <div class="bottom-btn" @click="continueBuy">
        继续购物 
      </div>
    </g-footer>
  </div>
</template>

<script>
import GHeader from './components/Mobile-header.vue'
import GFooter from './components/Mobile-footer.vue'
export default {
  components: {
    GHeader,
    GFooter
  },
  methods: {
    continueBuy() {
      this.$router.push({
        name: 'orderBuy'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  width: 80%;
  margin: 0 auto;
}
</style>

