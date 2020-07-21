import http from './axios'

/*--------------------login-------------------*/

// 注册   Login.vue
export function login(form) {
  return http.post('login', form)
}

/*--------------------admin-------------------*/

// 获取管理员列表  AdminList.vue
export function getAdminList(form) {
  return http.get('admins', {
    params: form
  })
}

/*--------------------user-------------------*/

// 获取用户列表  UserList.vue
export function getUserList(form) {
  return http.get('users', {
    params: form
  })
}

/*--------------------shop-------------------*/

// 获取商家分类列表   ShopCategory.vue  ShopEdit.vue
export function getCategoryList() {
  return http.get('shops/category')
}

// 新增商家一级分类   ShopCategory.vue
export function postCategory(form) {
  return http.post('shops/category', form)
}

// 修改商家一级分类   ShopCategory.vue
export function putCategory(id, form) {
  return http.put(`shops/category/${id}`, form)
}

// 删除商家一级分类   ShopCategory.vue
export function delCategory(id) {
  return http.delete(`shops/category/${id}`)
}

// 新增商家二级分类   ShopCategory.vue
export function postSubCate(form) {
  return http.post('shops/subCategory', form)
}

// 修改商家二级分类   ShopCategory.vue
export function putSubCate(id, form) {
  return http.put(`shops/subCategory/${id}`, form)
}

// 删除商家二级分类   ShopCategory.vue
export function delSubCate(id) {
  return http.delete(`shops/subCategory/${id}`)
}

// 获取商家列表   ShopList.vue
export function getShopList(form) {
  return http.get('shops', { params: form })
}

// 删除商家   ShopList.vue
export function delShop(id) {
  return http.delete(`shops/${id}`)
}

// 获取商家详情  ShopEdit.vue
export function getShopDetail(id) {
  return http.get(`/shops/${id}`)
}

// 新增商家  ShopEdit.vue
export function postShop(form) {
  return http.post('/shops', form)
}

// 修改商家  ShopEdit.vue
export function putShop(id, form) {
  return http.put(`shops/${id}`, form)
}

/*--------------------goods-------------------*/

// 获取商品列表   GoodsList.vue
export function getGoodsList(form) {
  return http.get('goods', { params: form })
}

// 删除商品   GoodsList.vue
export function delGoods(id) {
  return http.delete(`goods/${id}`)
}

// 新增商品   GoodsEdit.vue
export function postGoods(form) {
  return http.post('goods', form)
}

// 修改商品   GoodsEdit.vue
export function putGoods(id, form) {
  return http.put(`goods/${id}`, form)
}

// 获取商品详情   GoodsEdit.vue
export function getGoodsDetail(id) {
  return http.get(`goods/${id}`)
}

// 获取商品分类   GoodsEdit.vue
export function getGoodsCate(shopId) {
  return http.get(`goods/category/${shopId}`)
}

// 新增商品分类   GoodsEdit.vue
export function postGoodsCate(form) {
  return http.post('goods/category', form)
}

// 删除商品分类   GoodsEdit.vue
export function delGoodsCate(id) {
  return http.delete(`goods/category/${id}`)
}