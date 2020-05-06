// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: 'Lyk',
      age: 20,
      students:[
        {iid: 1001, name:'kobe', age:39},
        {iid: 1002, name:'james', age:35},
        {iid: 1003, name:'curry', age:30},
        {iid: 1004, name:'wade', age:37},
        {iid: 1005, name:'lyk', age:20}
      ],
      counter:0
  },
  handleBtnClick() {
    //1. 错误做法，界面不会刷新近，但是counter是有改变的(即这里不是响应式的)
      // this.data.counter --
      console.log('按钮发生了点击'+this.data.counter)

    // 2. this.setData({})
       this.setData({
         counter:this.data.counter - 1
       })
  },
  handleSubtraction() {
      this.setData({
        counter:this.data.counter + 1
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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