// pages/day/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeArray: [30,60,90,120,150,180],
    index: 0,
    toDolistTitle: '',
    todoListTime: 30,
    toDolistDescr: '',
    doingPropor:0, // 0表示完成百分之0
    isDoing: false // 新建的时候默认没有完成，完成度百分百的时候为true
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  addTodoList() {
    const db = wx.cloud.database();
    const data = {
      toDolistTitle: this.data.toDolistTitle,
      todoListTime: this.data.todoListTime,
      toDolistDescr: this.data.toDolistDescr,
      doingPropor: 0,
      isDoing: false
    };
    db.collection('todoList').add({
      data: data
    }).then(res => {
      console.log(res)
    })
  },
  setTitle(e) {
    this.setData({
      toDolistTitle: e.detail.value
    })
  },
  setListTime(e) {
    this.setData({
      index: e.detail.value
    })
    this.setData({
      todoListTime: this.data.timeArray[e.detail.value]
    })
  },
  setDolistDescr(e) {
    this.setData({
      toDolistDescr: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init();
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