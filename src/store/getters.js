const getters = {
  getUserInfo: state => state.userInfo,
  getToken: state => state.token || sessionStorage.getItem('token'),
  getSchool: state => state.userInfo.school || sessionStorage.getItem('school'),
  getTeam: state => state.userInfo.team || sessionStorage.getItem('team'),
  getGrade: state => state.userInfo.grade || sessionStorage.getItem('team'),
  getId: state => state.userInfo.id || sessionStorage.getItem('id'),
}

export default getters