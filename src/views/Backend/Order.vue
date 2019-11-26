<template>
  <div class="page">
    <el-table :data="tableData" border style="width: 99%;" size="small" :highlight-current-row="true">
      <el-table-column fixed align='center' type="index" label="序号" width="100">
          <template slot-scope="scope">
              {{scope.$index + 1 + (currentPage - 1) * offset}}
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
    <!-- 分页 -->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSize"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        class="pagination">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.productQueryList()
  },
  data() {
    return {
      tableData: [],                      // 表数据
      currentPage: 1,                     // 当前页
      size: 10,                           // 每页展示的数量
      pageSize: [10, 30, 50, 100, 500],   // 可供选择的每页展示数
      total: 0,                           // 查询到的表格数据总数
    }
  },
  computed: mapGetters(['getSchool', 'getTeam', 'getGrade', 'getId']),
  methods: {
    // 查询某学校下的列表
    productQueryList() {
      let params = {
        page: this.currentPage,
        size: this.size,
        school: this.getSchool,
      }
      this.api.productQueryList(params).then(res => {
        if (res.code === 0) {
          this.tableData = res.data
        } else {
          this.notice(res.message, 'error')
        }
      })
    },
    // 分页 表格可显示数量变更
    handleSizeChange(page) {
      this.offset = page
      this.productQueryList()
    },
    // 分页 当前页更改   page 切换的表格当前页
    handleCurrentChange(page) {
      this.currentPage = page
      this.productQueryList()
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
