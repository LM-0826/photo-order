import router from '../router'
const mutations = {
  // 设置用户信息
  setUserInfo (state, info) {
    state.token = info.token;
    state.userInfo = info.user;
  },
  // 清除用户信息
  clearStore (state, info) {
    sessionStorage.clear();
    state.token = '';
    state.userInfo = {};
    router.push({path: '/login'});
  },
}

export default mutations