// pages/rankPage/rankPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontId: 1,
    page: true,
    mes: [{'show': true}],
    students:[
      { 'listId': '0', 'sname': '张依依', 'checkNum': '20', 'zanNum': '300' },
      { 'listId': '1', 'sname': '张依依', 'checkNum': '19', 'zanNum': '291' },
      { 'listId': '2', 'sname': '张依依', 'checkNum': '18', 'zanNum': '282' },
      { 'listId': '3', 'sname': '张依依', 'checkNum': '17', 'zanNum': '273' },
      { 'listId': '4', 'sname': '张依依', 'checkNum': '16', 'zanNum': '264' },
      { 'listId': '5', 'sname': '张依依', 'checkNum': '15', 'zanNum': '255' },
      { 'listId': '6', 'sname': '张依依', 'checkNum': '14', 'zanNum': '246' }
    ]
  },
  tapAt: function (e) {
    var that = this
    that.setData({
      fontId: e.currentTarget.dataset.id
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