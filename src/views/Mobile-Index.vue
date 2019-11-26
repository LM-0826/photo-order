<template>
    <div>
      
    </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/header.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    myHeader: Header
  },
  methods: {

  },
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  height: 51px!important;
  z-index: 9;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.mf-container{
  padding-top: 51px;
  width: 100%;
  margin: 0 auto;
}
.compunty {
  text-align: center;
  border-top: 1px solid #ccc;
  background: #fff;
  font-size: 13px;
  height: 30px!important;
  line-height: 30px;
  color: #666;
}
.mf-content{
  overflow: auto;
}
.mf-content::-webkit-scrollbar{
    width: 10px;
    height: 10px;
}
.mf-content::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #999;
}
.el-header{
  padding: 0!important;
}
</style>
