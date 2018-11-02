// pages/patriarchInfo/patriarchInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    selectData: ['父亲', '母亲','爷爷','奶奶'],
    region: ['江苏省', '苏州市', '工业园区'],
    relations: ["父亲","母亲","爷爷","奶奶"],
    relation: ["父亲"],
    professions: ["企业高管", "教师","公务员","牧师","农民工"],
    profession: ["企业高管"],
    educations: ["博士","硕士","本科","大专","高中","初中","小学"],
    education: ["博士"],
    date:['2018-10-30'],
    index: 0
  },
  /**
   * 关系选择
   */
  selectRelation: function(e){
    this.setData({
      relation: this.data.relations[e.detail.value]
    })
  },
  /**
   * 学历选择
   */
  selectEducation: function(e){
    this.setData({
      education: this.data.educations[e.detail.value]
    })
  },
  /**
   * 职业选择
   */
  selectProfession: function (e) {
    console.log(e)
    this.setData({
      profession: this.data.professions[e.detail.value]
    })
  },
  /**
   * 生日选择
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 地址
   */
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
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