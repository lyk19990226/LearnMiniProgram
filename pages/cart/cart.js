// pages/cart/cart.js
//注册一个页面
// 页面也有自己的生命周期 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面被加载出来时回调')
    wx.request({
      url:'http://152.136.185.210:8000/api/n3/recommend',
      success:(res) => {
        console.log(res)
        // console.log(this)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面初次渲染完成时回调')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面显示出来时回调")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('当页面隐藏时回调')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('你正在下拉刷新，赶紧重新请求数据')
  },
  // 监听页面的滚动
  onPageScroll(scrollTop){
    console.log(scrollTop)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})