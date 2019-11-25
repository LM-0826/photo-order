/********** 请求地址动态配置 **********/
const devUrlArr = [
	'localhost',
	'172.16.1.246',
	'172.16.1.238'
]
const testUrlArr = [
	'172.16.1.246',
	'172.16.1.238',
]
const buildUrlArr = [
	'172.16.1.246',
]
const config = { 
		baseUrl: 'http://172.16.1.246:8080/mall'
};

if (window && window.location) {
	// 开发模式配置
	if (devUrlArr.indexOf(window.location.hostname) > -1) {
		config.baseUrl = 'http://172.16.1.246:8080/mall'
	}
	// 测试配置
	if (testUrlArr.indexOf(window.location.hostname) > -1) {
		config.baseUrl = 'http://172.16.1.246:8080/mall'
	}
}

export default config