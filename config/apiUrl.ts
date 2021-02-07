 let ipUrl = 'http://www.bigmeow.club:7001/default/'
// let ipUrl = 'http://127.0.0.1:7002/default/'

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo:ipUrl+ 'getTypeInfo',
    getTypeInfoById:ipUrl+ 'getTypeInfoById',
    getListById:ipUrl + 'getListById',
// 根据类别ID获得文章列表
}
export default servicePath;
