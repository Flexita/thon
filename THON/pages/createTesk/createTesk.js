// pages/createTesk/createTesk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  jump:function(){
    wx.switchTab({
      url: '../readMission/readMission',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(123);
  },
  /**
   * 时间下拉选择
   */
  bindDateChangeStart: function (e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  bindDateChangeStop: function (e) {
    this.setData({
      stopDate: e.detail.value
    })
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