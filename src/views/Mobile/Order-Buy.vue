<template>
  <div>
    <g-header :title="$t('orderBuy.title')" :back="true"></g-header>
    <!-- 套餐 -->
    <div class="inner inner-package">
      <p class="title">套餐商品</p>
      <p class="package vux-1px-t">套餐A</p>
      <div class="package-content">
        <p class="package-content-item vux-1px-t">班级合影</p>
      </div>
      <p class="package vux-1px-t">套餐B</p>
      <div class="package-content">
        <p class="package-content-item vux-1px-t">班级合影</p>
      </div>
    </div>
    <!-- 产品 -->
    <div class="inner inner-product">
      <p class="title">产品</p>
      <div class="product-item vux-1px-b">
        <p>8*10 个人肖像馆</p>
        <div class="item-bottom">
          <span>￥100.00</span>
          <span class="add-cart">选照片</span>
        </div>
      </div>
    </div>

    <g-footer>
      <div class="bottom-btn" @click="goCart">
        进入购物车 
        <span class="buy-num">{{num}}</span>
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
      num: 0
    }
  },
  methods: {
    goCart() {
      this.$router.push({
        name: 'cart'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
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

