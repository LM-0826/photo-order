<template>
  <div class="page">
    <el-table :data="tableData" border style="width: 99%;" size="small" :highlight-current-row="true">
      <el-table-column fixed align='center' type="index" label="序号" width="100">
          <template slot-scope="scope">
              <!-- {{scope.$index + 1 + (currentPage - 1) * offset}} -->
          </template>
      </el-table-column>
      <el-table-column align='center' prop="id" label="id"></el-table-column>
      <el-table-column align='center' prop="productName" label="照片名"></el-table-column>
      <el-table-column align='center' prop="price" label="价格"></el-table-column>
      <el-table-column align='center' prop="productDescribe" label="productDescribe"></el-table-column>
      <el-table-column align='center' prop="flag" label="flag"></el-table-column>
      <el-table-column align='center' prop="createDate" label="创建时间"></el-table-column>
      <el-table-column align='center' prop="lastModifiedDate" label="最后更新时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.productGoodsList()
  },
  data() {
    return {
      tableData: [],                      // 表数据
    }
  },
  computed: mapGetters(['getSchool', 'getTeam', 'getGrade', 'getId']),
  methods: {
    // 查询某学校下的列表
    productGoodsList() {
      let params = {
        school: this.getSchool,
      }
      // this.api.productGoodsList(params).then(res => {
      //   if (res.code === 0) {
      //     this.tableData = res.data.Ataocan
      //   } else {
      //     this.notice(res.message, 'error')
      //   }
      // })
    },
    // 居中提醒框
    notice(message, type = 'warning') {
      this.$message({
          message: message,
          type: type
      });
    },
  }
}
</script>

<style lang="less" scoped>
.page{
  width: 100%;
}
</style>
