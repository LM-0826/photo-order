const menuList = [
  {
    dataId: 1,
    text: "运营账户管理",
    url: "/user/1",
    icon: "el-icon-user-solid",
    parentId: 0,
    name: 'operation',
    children: [{
      dataId: 11,
      text: "查询账户",
      url: "/user/queryAccount",
      icon: "el-icon-success",
      parentId: 1,
      children: [],
      siblings: ["/user/addOperationAccount"]
    }]
  },
];

export default menuList;
