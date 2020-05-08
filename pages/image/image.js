// pages/image/image.js
Page({


  data: {
  imagePath:""
  },
  handleChooseAlbum() {
  // 系统api，让用户从系统相册选择图片，或者拍照
  wx.chooseImage({
    success: (res) => {
      // 取出路径
      const path = res.tempFiles[0].path
      this.setData({
        imagePath:path
      })
    }
  })
  },
  handleImageLoad() {
    console.log('图片加载完成')
  }
})