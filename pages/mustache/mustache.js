// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'我是嘿嘿嘿',
    firstname:'kobe',
    lastname:'bryant',
    isActive:false,
    age:18,
    nowTime:new Date().toLocaleString()
  },
  handleSwitchColor() {
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleInput(event) {
    console.log('天哪，你正在输入内容，太可怕了；')
    console.log(event)
    this.setData({
      age:event.detail.value
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  }
  
})