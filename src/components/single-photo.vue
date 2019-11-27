<template>
  <div class="single-photo" :class="{'mobile-photo': !isPC}">
    <div class="photo">
      <img class="image-show" :class="randomClass" :src="image" @click="showPreview(0)">
    </div>
    <p class="image-name">{{name}}</p>
    <!--图片预览-->
    <div v-transfer-dom>
      <previewer :list="previewImages" ref="previewer" :options="options"></previewer>
    </div>
  </div>
</template>

<script>
import { TransferDom, Previewer } from 'vux'
export default {
  data() {
    return {
      previewImages: [],  // 预览
      options: {},
      randomClass: '',    // 随机类名 用于预览图片（Previewer组件需要不同的类来抓取。 为了实现组件化使用）
    }
  },
  directives:{
    TransferDom
  },
  components: {
    Previewer
  },
  props: ['image', 'name'],
  methods: {
    // 展示预览图片
    showPreview (index) {
      this.$refs.previewer.show(index)
    },
    // 随机取词
    randomWord() {
      let words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      let randomWord = ''
      for (let i = 0; i < 8; i++) {
        randomWord += words[Math.floor(Math.random() * words.length)]
      }
      return randomWord
    },
  },
  created() {
    this.$nextTick(() => {
      this.randomClass = 'previewer-' + this.randomWord()
      this.previewImages.push({
        src: this.image,
        type: 'image'
      })
      this.options.getThumbBoundsFn = (index) => {
        // find thumbnail element
        let thumbnail = document.querySelectorAll('.' + this.randomClass)[index]
        // get window scroll Y
        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        // optionally get horizontal scroll
        // get position of element relative to viewport
        let rect = thumbnail.getBoundingClientRect()
        // w = width
        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        // Good guide on how to get element coordinates:
        // http://javascript.info/tutorial/coordinates
      }
    })
  }
}
</script>

<style lang="less" scoped>
.single-photo{
  min-width: 47%;
  max-width: 47%;
  margin-top: 25px;
  .photo{
    max-height: 300px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 8px #eeeeee;
    img{

    }
  }
  .image-name{
    background: rgba(97, 94, 94, 0.4);
    color: #000000;
    text-align: center;
    padding: 4px 12px;
    border-radius: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    margin-top: 15px;
  }
}
.mobile-photo:nth-of-type(1),.mobile-photo:nth-of-type(2){
  margin-top: 0;
}
</style>
