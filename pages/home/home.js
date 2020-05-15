// pages/home/home.js
Page({
  handleShowToast() {//Toast
    wx.showToast({
      title: '操作成功',
      duration: 3000,
      // icon:'loading',
      // image:'/assets/icon/icon.jpg' , //自定义图标
      mask:true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      }
    })
  },
  handleShowModal() {//对话框
    wx.showModal({
      title:'真的需要收藏吗？',
      content:'我是内容，哈哈哈',
      cancelColor: 'cancelColor',
      confirmText:'是的',
      cancelText:'我再想想',
      success: function() {
        console.log('展示对话框成功')
      },
      fail: function() {
        console.log('展示对话框失败')
      }
      
    })
  },
  handleShowLoading() {//loading提示框
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: function() {
        console.log('展示loading提示框成功')
      },
      fail: function() {
        console.log('展示loading提示框失败')
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  handleShowActionSheet() {//显示操作菜单
    wx.showActionSheet({
      itemList: ['发送给朋友','发送到朋友圈','分享到qq'],
      itemColor:'#ff5700',
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },

  onShareAppMessage: function(options) {//用户点击右上角分享
    return {
      title:'你好啊，lyk',
      path: '/pages/about/about',
      imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})