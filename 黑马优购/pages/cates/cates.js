// pages/cates/cates.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateLeftData: [],
    cateRightData: [],
    height: 0,
    currentIndex: 0
  },

  /**
   * @name: 获取分类数据
   */
  handleCateGoryGet(index) {
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: "GET",
      success: (res) => {
        console.log(res);
        const {
          meta,
          message
        } = res.data
        if (meta.status == 200) {
          this.setData({
            cateLeftData: message,
            cateRightData: message[index].children
          })
        }
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },

  /**
   * 点击左侧菜单 更新右侧数据
   */
  handleCateClick: function (e) {
    let index = e.currentTarget.dataset.index
    this.handleCateGoryGet(index)
    this.setData({
      currentIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleCateGoryGet(this.data.currentIndex)
    this.setData({
      height: (wx.getSystemInfoSync().windowHeight - 50) * 2
    })
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