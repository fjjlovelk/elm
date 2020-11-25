(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5740588"],{"0811":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("base-layout",[a("el-form",{ref:"goodsRef",attrs:{model:t.goodsForm,rules:t.goodsRule,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"当前店铺"}},[a("strong",[t._v(t._s(t.shopName))])]),a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{model:{value:t.goodsForm.name,callback:function(e){t.$set(t.goodsForm,"name",e)},expression:"goodsForm.name"}})],1),a("el-form-item",{attrs:{label:"商品详情"}},[a("el-input",{model:{value:t.goodsForm.detail,callback:function(e){t.$set(t.goodsForm,"detail",e)},expression:"goodsForm.detail"}})],1),a("el-form-item",{attrs:{label:"上传商品图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,action:t.uploadURL,headers:t.headers,"on-success":function(t){e.goodsForm.imgUrl=t.url}}},[t.goodsForm.imgUrl?a("img",{staticClass:"avatar",attrs:{src:t.goodsForm.imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"添加商品分类"}},[a("el-input",{model:{value:t.goodsCateForm.name,callback:function(e){t.$set(t.goodsCateForm,"name","string"===typeof e?e.trim():e)},expression:"goodsCateForm.name"}},[a("el-button",{attrs:{slot:"prepend"},on:{click:t.addGoodsCate},slot:"prepend"},[t._v("确定")])],1)],1),a("el-form-item",{attrs:{label:"商品分类"}},[a("el-select",{model:{value:t.goodsForm.category,callback:function(e){t.$set(t.goodsForm,"category",e)},expression:"goodsForm.category"}},t._l(t.goodsCateList,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1),a("el-button",{staticStyle:{"margin-left":"10px",color:"red"},attrs:{type:"text"},on:{click:t.delGoodsCate}},[t._v("点此删除选中分类")])],1),a("el-form-item",{attrs:{label:"商品特点"}},[a("el-select",{model:{value:t.goodsForm.feature,callback:function(e){t.$set(t.goodsForm,"feature",e)},expression:"goodsForm.feature"}},[a("el-option",{attrs:{value:"新品"}}),a("el-option",{attrs:{value:"招牌"}})],1)],1),a("el-form-item",{attrs:{label:"包装费"}},[a("el-input-number",{attrs:{min:0},model:{value:t.goodsForm.packing_fee,callback:function(e){t.$set(t.goodsForm,"packing_fee",e)},expression:"goodsForm.packing_fee"}})],1),a("el-form-item",{attrs:{label:"价格"}},[a("el-input-number",{attrs:{min:0},model:{value:t.goodsForm.price,callback:function(e){t.$set(t.goodsForm,"price",e)},expression:"goodsForm.price"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),a("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")])],1)],1)],1)],1)},r=[],s=(o("b0c0"),o("96cf"),o("1da1")),n=o("5530"),c=o("c1fb"),i=o("5880"),u={data:function(){return{goodsForm:{name:"",shop:"",detail:"",imgUrl:"",category:"",feature:"",packing_fee:0,price:0},goodsCateForm:{name:"",shop:""},goodsCateList:[],goodsRule:{name:[{required:!0,message:"请填写商品名称",trigger:"blur"}]},shopName:"",flag:!1,goodsId:null,shopId:null}},computed:Object(n["a"])({},Object(i["mapState"])({uploadURL:function(e){return e.uploadURL},headers:function(e){return e.headers}})),beforeRouteEnter:function(e,t,o){o((function(e){e.shopId=e.$route.query.shopId,"/goodsList"===t.path?(e.flag=!0,e.goodsId=e.$route.query.goodsId,e.getGoodsDetail()):(e.flag=!1,e.getShop()),e.getGoodsCate()}))},methods:{getGoodsDetail:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["i"])(e.goodsId);case 2:o=t.sent,a=o.data,e.goodsForm=a.data,e.shopName=a.data.shop.name,e.goodsForm.category=a.data.category._id;case 7:case"end":return t.stop()}}),t)})))()},getGoodsCate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["h"])(e.shopId);case 2:o=t.sent,a=o.data,e.goodsCateList=a.data;case 5:case"end":return t.stop()}}),t)})))()},getShop:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["k"])(e.shopId);case 2:o=t.sent,a=o.data,e.shopName=a.data.name;case 5:case"end":return t.stop()}}),t)})))()},addGoodsCate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.goodsCateForm.name){t.next=2;break}return t.abrupt("return");case 2:return e.goodsCateForm.shop=e.shopId,t.next=5,Object(c["q"])(e.goodsCateForm);case 5:o=t.sent,a=o.data,201===a.meta.status&&(e.$message.success(a.meta.message),e.goodsCateForm.name="",e.getGoodsCate());case 8:case"end":return t.stop()}}),t)})))()},delGoodsCate:function(){var e=this;""!==this.goodsForm.category&&this.$confirm("确定删除该商品分类吗","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["c"])(e.goodsForm.category);case 2:o=t.sent,a=o.data,200===a.meta.status&&(e.$message.success(a.meta.message),e.goodsForm.category="",e.getGoodsCate());case 5:case"end":return t.stop()}}),t)})))).catch((function(){}))},save:function(){var e=this;this.$refs.goodsRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(o){var a,r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return",!1);case 2:if(!e.flag){t.next=10;break}return t.next=5,Object(c["u"])(e.goodsId,e.goodsForm);case 5:a=t.sent,r=a.data,e.$message.success(r.meta.message),t.next=16;break;case 10:return e.goodsForm.shop=e.shopId,t.next=13,Object(c["p"])(e.goodsForm);case 13:s=t.sent,n=s.data,e.$message.success(n.meta.message);case 16:e.$router.push("/goodsList");case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},l=u,d=o("2877"),m=Object(d["a"])(l,a,r,!1,null,"202fde1d",null);t["default"]=m.exports},b0c0:function(e,t,o){var a=o("83ab"),r=o("9bf2").f,s=Function.prototype,n=s.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in s)&&r(s,i,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-c5740588.71a8bbe2.js.map