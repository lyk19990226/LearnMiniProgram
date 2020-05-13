// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     titles: {
      type:Array,
      value:['流行','新款','精选']//默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      console.log(event)
      // 取出index
      const index = event.currentTarget.dataset.index
      console.log(index)
      // 修改index
      this.setData({
        currentIndex:index
      })
      // 通知外部：组件内部的点击事件
      this.triggerEvent("itemclick",{index, title:this.properties.titles[index]},{})
      //                             传出去的第二个对象，会保存在监听发出的这个事件的事件的组件的 event中 的detail中
    }
  }
})
