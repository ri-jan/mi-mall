import Mock from 'mockjs';
Mock.setup({
    timeout:1000
})
// Mock.mock('/api/cartList',{
// 	cartList:"购物车中还没有商品，赶紧去选购吧！"
// })
Mock.mock('/home/multidata',{
    msg:'123'
})