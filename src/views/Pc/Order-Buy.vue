<template>
  <div class="content">
    <el-table :data="tableData1" border style="width: 100%;margin-top: 25px;">
      <el-table-column prop="date" label="产品"></el-table-column>
      <el-table-column prop="name" label="类型"></el-table-column>
      <el-table-column prop="address" label="价格"></el-table-column>
    </el-table>

    <el-table :data="tableData2" border style="width: 100%;margin-top: 25px;">
      <el-table-column prop="date" label="产品"></el-table-column>
      <el-table-column prop="name" label="类型"></el-table-column>
      <el-table-column prop="address" label="单片"></el-table-column>
      <el-table-column prop="address" label="水晶摆台"></el-table-column>
    </el-table>

    <g-footer>
      <div class="bottom-btn-pc" @click="goCart">
        进入购物车 
      </div>
    </g-footer>
  </div>
</template>

<script>
import GFooter from './components/Mobile-footer.vue'
export default {
  components: {
    GFooter
  },
  data() {
    return {
      tableData1: [],
      tableData2: []
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
.content{
  width: 80%;
  margin: 0 auto;
}
</style>

