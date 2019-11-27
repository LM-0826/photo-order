<template>
    <div class="content">
      <g-header :title="$t('index.title')"></g-header>
      <div class="inner-photo" :style="isIphonX ? 'padding-bottom: 150px' : 'padding-bottom: 125px'">
        <!-- <g-image v-for="(image, index) in images" :key="index" :name="image.name" :image="image.src"></g-image> -->
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
        <g-image :name="123" :image="'https://gxlself.com/images/icon-blog.png'"></g-image>
      </div>
      <g-footer>
        <div class="bottom-btn" @click="goBuyPage">进入订购</div>
        <div class="bottom-btn" @click="goMyOrder">我的订单</div>
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
  width: 100%;
  .inner-photo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
