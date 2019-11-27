<template>
    <div class="content">
      <g-header :title="$t('index.title')"></g-header>
      <div class="inner-photo">
        <!-- <g-image v-for="(image, index) in images" :key="index" :name="image.name" :image="image.src"></g-image> -->
        <g-image style="max-width: 18%;min-width: 18%;" v-for="item in 10" :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
      </div>
      <g-footer>
        <div class="bottom-btn-pc" @click="goBuyPage">进入订购</div>
        <div class="bottom-btn-pc" @click="goMyOrder">我的订单</div>
      </g-footer>
    </div>
</template>

<script>
import { mapState } from "vuex";
import GImage from '../../components/single-photo.vue'
import GHeader from './components/Mobile-header.vue'
import GFooter from './components/Mobile-footer.vue'
export default {
  data() {
    return {
      images: []
    };
  },
  components: {
    GImage,
    GHeader,
    GFooter
  },
  methods: {
    goBuyPage() {
      this.$router.push({
        name: 'orderBuy',
        query: {
          
        }
      })
    },
    goMyOrder() {
      this.$router.push({
        name: 'myOrder',
        query: {

        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.content{
  padding-top: 25px;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  .inner-photo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
