Page({

  /**
   * 页面的初始数据
   */
  data: {
    doList: [
      {
        text: '我要去学习英语'
      },
      {
        text: '我要去学习物理'
      },
      {
        text: '我要去学习数学'
      }, 
      {
        text: '我要去学习化学'
      },
      {
        text: '我要去学习生物'
      },
      {
        text: '我要去学习历史'
      }
    ],
    toView: 'red',
    scrollTop: 100
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
    
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  getPhoneNum(num) {
    console.log(num);
  },
  goEdit(event){
    wx.navigateTo({
      url: 'edit',
      success() {
        console.log('进入到了编辑页面了');
      }
    })
  }
})