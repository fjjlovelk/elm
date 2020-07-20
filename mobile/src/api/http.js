import http from './axios'

/* ---------------- Home ----------------- */

// 获取商家一级分类  Home.vue
export function getShopCate() {
  return http.get('shops/category')
}

// 根据商家一级分类获取二级分类  ShopCate.vue
export function getShopSubCate(shopCateId) {
  return http.get('shops/subCategory', {
    params: { id: shopCateId }
  })
}

// 获取商家列表   Home.vue & ShopCate.vue
export function getShopList(queryForm) {
  return http.get('shops', {
    params: queryForm
  })
}

// 获取商家详情   Shop.vue
export function getShopDetail(shopId) {
  return http.get(`shops/${shopId}`)
}

// 获取对应商家的商品   ShopContent.vue
export function getGoods(shopId) {
  return http.get(`goods/category/${shopId}`)
}

// 提交订单   Preview.vue
export function postOrder(data) {
  return http.post('orders', data)
}

/* ---------------- Order ----------------- */

// 获取订单列表  Order.vue
export function getOrderList(queryForm) {
  return http.get('orders/list', {
    params: queryForm
  })
}

// 删除订单   Order.vue
export function delOrder(orderId) {
  return http.delete(`/orders/${orderId}`)
}

// 获取订单详情   OrderDetail.vue
export function getOrderData(orderId) {
  return http.get(`/orders/${orderId}`)
}



/* ---------------- Mine ----------------- */

// 登录   Login.vue
export function postLogin(form) {
  return http.post('login', form)
}

// 获取地址列表   AddressList.vue
export function getAddressList(userId) {
  return http.get(`/address/list/${userId}`)
}

// 获取地址详情   AddressEdit.vue
export function getAddress(addressId) {
  return http.get(`/address/${addressId}`)
}

// 新增地址   AddressEdit.vue
export function postAddress(form) {
  return http.post('/address', form)
}

// 修改地址   AddressEdit.vue
export function putAddress(addressId, form) {
  return http.put(`/address/${addressId}`, form)
}

// 删除地址   AddressEdit.vue
export function delAddress(addressId) {
  return http.delete(`/address/${addressId}`)
}