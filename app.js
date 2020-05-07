// 注册一个小程序示例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('小程序初始化完成,onLaunch')
    // console.log(options)
    wx.getUserInfo({//这里是异步操作，所以会靠后显示  （第一种获取用户信息的方式，这个api以后可能会被废弃）
      success:(res) => {
        // console.log(res)
        // console.log(res.userInfo.avatarUrl)
      }
      
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来了,onShow')
    setTimeout(() => {//new一个报错实例并抛出,来检验onError声明周期函数
      const err = new Error()
      // throw err
    },2500)

    // 判断小程序进入的场景
    console.log(options)
    const scene = options.scene
    console.log(scene)
    switch(options,scene) {
      case 1001:
      break;
      case 1005:
      break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行，onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当小程序中发生错误时执行，onError')
  },
  globalData: {
    name: 'lyk',
    age: 18
  }
})
