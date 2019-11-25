<template>
  <div id="app" v-loading.body="this.$store.state.loading" customClass="transparent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
html,body,p{
  margin: 0;
  padding: 0;
}
html, body{
  width: 100%;
  height: 100%;
  overflow-y: auto !important;
  padding-right: 0 !important;
}
#app{
  width: 100%;
  background: #e9ecf3;
}
.full-height{
  height: 100%;
}
/* 分割线 */
.el-divider--horizontal{
  margin: 15px 0;
}
/* 面包屑 */
.prev-crumb .el-breadcrumb__inner{
  color: #337ab7!important;
}
.next-crumb .el-breadcrumb__inner{
  color: #9eacb4!important;
}
// 弹框顶部
.custom-dialog{
  .el-dialog__header{
    padding: 0;
  }
  .el-dialog--center .el-dialog__body{
    padding: 20px;
  }
}
// 表格操作文本样式
.user-actions{
    color: #337ab7;
    cursor: pointer;
}
// 到右侧输入框距离微调
.el-form-item__label{
  padding-right: 25px!important;
}
// 自定义弹框底部
.dialog-footer{
  display: flex;
  justify-content: flex-end;
}
.hidden-columns{
  display: none!important;
}
// 自定义分页样式
.pagination{
  text-align: center;
  margin-top: 20px;
}
// 处理预览图片关闭按钮
.el-image-viewer__btn{
  color: #ffffff;
}
</style>
