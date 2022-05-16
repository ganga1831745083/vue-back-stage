// 使用 Mock
import Mock from 'mockjs'


//设置模拟返回数据时间
Mock.setup({
    timeout: '200-600'
})
//mock 配置

var data = Mock.mock(
    "/user/userinfo",
    'get',
    () => {
        return {
            username: 'awj',
            type: 'soon'
        }
    }
)
// 输出结果
export default data