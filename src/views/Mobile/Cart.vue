<template>
  <div>
    <g-header :title="$t('cart.title')" :back="true"></g-header>
    <div class="inner">
      <group style="margin-top: 0!important;">
        <x-input title="邮箱：" v-model="email" style="margin-top: 0!important;"></x-input>
      </group>
      <p class="hint">
        如果您购买了电子版，请正确填写您的邮箱，电子底板将于圣诞节前发送至邮箱
      </p>
    </div>
    <g-footer>
      <div class="cart-bottom">
        <check-icon :value.sync="isSelect">全选</check-icon>
        <div>
          合计： ￥0.00
          <span class="buy-btn" @click="goPay">付款</span>
        </div>
      </div>
    </g-footer>
  </div>
</template>

<script>
import GHeader from './components/Mobile-header.vue'
import GFooter from './components/Mobile-footer.vue'
import { Group, XInput, CheckIcon } from 'vux'
export default {
  components: {
    GHeader,
    GFooter,
    Group,
    XInput,
    CheckIcon
  },
  data() {
    return {
      email: '',
      isSelect: true
    }
  },
  methods: {
    goPay() {
      this.$router.push({
        name: 'pay'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.inner{
  padding: 10px 0;
  background-color: rgba(219, 156, 156, .3);
  font-size: 14px;
  .hint{
    margin-top: 8px;
    font-size: 12px;
    color: rgb(224, 136, 136);
    padding: 0 15px;
  }
}

.weui-cell{
  background-color: rgba(219, 156, 156, .3);
  padding: 5px 10px;
  font-size: 14px;
}

.cart-bottom{
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  .buy-btn{
    display: inline-block;
    background: #89002f;
    color: #ffffff;
    line-height: 24px;
    border-radius: 40px;
    width: 60px;
    text-align: center;
    margin-left: 6px;
  }
}
</style>

<style lang="less">
.vux-no-group-title, 
.weui-cells, 
.weui-cell{
  margin-top: 0!important;
}
.vux-check-icon{
  font-size: 14px!important;
}
</style>


