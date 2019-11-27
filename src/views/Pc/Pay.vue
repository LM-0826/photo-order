<template>
  <div class="content">
    <g-header :title="$t('orderBuy.title')" :back="true"></g-header>
    
    <div class="pay-num">
      ￥0.00
    </div>

    <div>
      微信支付
    </div>

    <g-footer>
      <div class="bottom-btn" @click="buySure">
        确认支付 
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
  data() {
    return {
    }
  },
  methods: {
    buySure() {
      // 调微信支付
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.content{
  width: 80%;
  margin: 0 auto;
}
.inner{
  .title{
    background: #eeeeee;
    color: #666666;
    font-size: 14px;
    padding: 6px 15px;
  }
  .package{
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    padding: 0px 15px;
    &-content{
      padding: 0px 15px;
      &-item{
        font-size: 12px;
        line-height: 30px;
      }
    }
  }
  .product-item{
    padding: 10px 15px;
    .item-bottom{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #89002f;
      .add-cart{
        color: #ffffff;
        background: #89002f;
        line-height: 12px;
        border-radius: 8px;
        padding: 5px 8px;
      }
    }
  }
}
.bottom-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  .buy-num{
    border-radius: 50%;
    color: #ffffff;
    background: #000;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-left: 5px;
  }
}
</style>

