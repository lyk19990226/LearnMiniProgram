// pages/home/home.js
Page({
  data:{
    titles:['衣服','裤子','鞋子','寸衫']
  },
  // 1.事件处理的回顾
  handleBtnClick(event) {
    console.log('按钮发生了点击',event)
  },
  // 2.常用的一些事件
  handleTouchStart() {
    console.log('手指触摸动作开始：handleTouchStart')
  },
  handleTouchMove () {
    console.log('手指触摸后移动：handleTouchMove')
  },
  handleTouchEnd () {
    console.log('手指触摸动作结束：handleTouchEnd')
  },
  handleTap () {
    console.log('手指触摸后马上离开：handleTap')
  },
  handleLongPress () {//如果触发了这个事件，则bind：tap 事件将不再会触发
    console.log('手指触摸超过350ms后离开：handleLongPress')
  },
  // 3.事件对象的分析
  handleEventClick(event) {
    console.log('普通监听按钮的点击测试：',event)
  },
  // 3.1分析changedTouches和touches的区别
  handleEventEnd(event) {
    console.log('(touchend)监听手指触摸动作结束：',event)
  },
  // 3.2分析currentTarget和target的区别
  handleInner(event) {
    console.log('点击测试内层',event)
  },
  handleOuter(event) {
    console.log('点击测试外层',event)
  },
  // 4.事件的传递参数
  handleItemClick(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index)
},
// 5.事件冒泡和事件捕获
handleCaptureView1() {
  console.log('事件捕获：handleCaptureView1')
},
handleCaptureView2() {
  console.log('事件捕获：handleCaptureView2')
},
handleCaptureView3() {
  console.log('事件捕获：handleCaptureView3')
},
handleBindView1() {
  console.log('事件冒泡：handleBindView1')
},
handleBindView2() {
  console.log('事件冒泡：handleBindView2')
},
handleBindView3() {
  console.log('事件冒泡：handleBindView3')
},
})

