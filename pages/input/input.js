// pages/input/input.js
Page({
  handleInput(event) {
    console.log('你正在输入',event)
  },
  handleFocus(event) {
    console.log("获取焦点",event)
  },
  handleBlur(event) {
    console.log("失去焦点",event)
  }
})