// components/my-prop/my-prop.js
Component({
  /**
   * 自定义组件传递数据
   */
  properties: {
    title: {
      type:String,
      value:'如果没有想我传递数据，那么默认显示我',
      observer:(newVal,oldVal) => {
        console.log(newVal,'---',oldVal)
      }
    }
  },

  /**
   * 自定义组件-传递样式
   */
  externalClasses:['titleclass']
})
