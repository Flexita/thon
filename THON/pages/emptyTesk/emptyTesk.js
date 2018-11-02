// pages/emptyTesk/emptyTesk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookUrl: null
  },
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
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  addBook: function(){
    var that =  this;
    wx.chooseImage({
      count: 9,
      success: function(res) {},
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: function (res) {
        var imgPath = res.tempFilePaths;
        that.setData({
          bookUrl:imgPath
        })
      }
    })
  },
  /**
   * 扫一扫
   */
  click: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      // fail: (res) => {
      //   this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
      //   that.setData({
      //     show: this.show
      //   })
      //   wx.showToast({
      //     title: '失败',
      //     icon: '\e63b',
      //     duration: 2000
      //   })
      // },
      // complete: (res) => {
      // }
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