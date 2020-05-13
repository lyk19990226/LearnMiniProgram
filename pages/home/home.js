// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    name:'李雨康'
  },
  handleIncrement(event) {
    console.log('-----',event)
    this.setData({
      counter:this.data.counter += 1
    })
  },
  handleTabClick(event) {
    console.log(event)
    console.log(event.detail.index,event.detail.title)
  },
  handleIncrementCpn() {//在home中修改组件的内部数据
    // console.log('dsfsdfsdf')
    // 最终目的：修改my-sel组件中的sel_counter

    //1.获取组件对象
    // const my_sel = this.selectComponent('.sel-class')
    const my_sel = this.selectComponent('#sel-id')
    console.log(my_sel)
    //2. 通过setData修改组件内部的数据（在这里修改数据不合理，不符合我们的规范）
    // my_sel.setData({
    //   sel_counter:my_sel.data.sel_counter + 20
    // })
    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(20)
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