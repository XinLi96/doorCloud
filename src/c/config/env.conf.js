export default [

    // 正式环境
    {
        environment: 'production',
        webBaseURL: 'http://intention.ceboss.cn',
        apiBaseURL: 'http://api-intention.ceboss.cn',
    }, 
    // 预发布环境
    {
        environment: 'pre-production',
        webBaseURL: 'http://web.ceboss.cn',
        apiBaseURL: 'http://intention.ceboss.cn',
        logoutURL:''
    },
    //测试环境
//  {
//      environment: 'test',
//      webBaseURL: 'http://intention.ceboss.cn',
//      apiBaseURL: 'http://intention.ceboss.cn/api-intention',
//  },
    // 开发环境
    {
        webBaseURL: 'http://web.ceboss.cn:8188',
        apiBaseURL: 'http://intention.ceboss.cn/api-intention',
    },
    {
        webBaseURL: 'http://test.300.cn:8080',
        apiBaseURL: 'http://test.300.cn'
    }
]