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
  // 设置对应的参数
  setMoreActionsStatus (state, flag) {
    state.moreActionsStatus = flag
  },
  // 设置对应的参数
  setLifeBannerStatus (state, flag) {
    state.lifeBannerStatus = flag
  },
  // 设置对应的参数
  setLifeAdStatus (state, flag) {
    state.lifeAdStatus = flag
  },
  // 设置对应的参数
  setLifeEntryStatus (state, flag) {
    state.lifeEntryStatus = flag
  },
  // 设置对应的参数
  setStartBannerStatus (state, flag) {
    state.startBannerStatus = flag
  }
}

export default mutations