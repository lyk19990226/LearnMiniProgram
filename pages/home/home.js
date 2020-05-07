// pages/home/home.js
  // getApp()获取App()产生的示例对象
  const app = getApp()
  console.log(app.globalData)

//注册一个页面
// 页面也有自己的生命周期 
Page({
  handelGetUserInfo(event) {
    console.log(event)
  },
})