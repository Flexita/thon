// pages/homePage/homePage.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 加载更多
   */
  // loadMore: function (tid) {
  //   if (!this.data.hasMore) {
  //     return;
  //   }
  //   wx.request({
  //     url: '',
  //     data: {
  //       pageSize: this.data.pageSize,
  //       pno: ++this.data.pageIndex,
  //       tid: tid
  //     },
  //     success: (res) => {
  //       var newList = this.data.shopList.concat(res.data.msg);
  //       var pageCount = res.data.pageCount;
  //       var flag = this.data.pageIndex < pageCount;
  //       this.setData({
  //         shopList: newList,
  //         hasMore: flag
  //       })
  //     }
  //   })
  // },

  /**
   * 页面跳转
   */
  jump:function () {
    wx.navigateTo({
      url: '../readMission/readMission',
    })
  },
  jumpRank:function(){
    wx.navigateTo({
      url: '../rankPage/rankPage',
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
    console.log("下拉刷新");
    // this.setData({
    //   shopList: [],
    //   pageIndex: 0,
    //   hasMore: true
    // });
    // var tid = this.data.tid;
    // this.loadMore(tid);
    // wx.stopPullDownRefresh()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("上拉触底");
    var tid = this.data.tid;
    this.loadMore(tid);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})