// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 1.用原生的方式发送网络请求
    this.get_data_origin()
  // 2.使用封装的request发送网络请求
  // Promise最大的好处就是防止出现回调地狱
    request({
      url:'http://152.136.185.210:8000/api/n3/recommend',
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  },
  
  get_data_origin() {
    // 1.发送网络请求
    wx.request({
      url:'http://152.136.185.210:8000/api/n3/recommend',
      success: function(res) {
        console.log(res)
      }
    })

    // 2.get请求，但是携带参数
    // wx.request({
    //   url:'http://152.136.185.210:8000/home/data',
    //   data: {
    //     type:'sell',
    //     page:1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 3.post请求，并且携带参数:   post请求url后面不能直接写参数
    // wx.request({
    //   method:'post',
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     name:'lyk',
    //     age:20
    //   },
    //   success: function(res) {//请求成功回调的函数
    //     console.log(res)
    //   },
    //   fail: function(err) {//请求失败回调的函数
    //     console.log(err)
    //   } 
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})