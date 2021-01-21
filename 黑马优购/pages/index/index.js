// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    textList: [],
    floortop: []
  },

  // 获取轮播
  getSwoper() {
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
      method: "GET",
      success: (res) => {
        console.log(res);
        let {
          message,
          meta
        } = res.data
        let data = []
        message.forEach(element => {
          data.push(element.image_src)
        });
        if (meta.status == 200) {
          this.setData({
            imageList: data
          })
        }
      }
    })
  },

  // 获取分类数据
  getCatitems() {
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      method: "GET",
      success: (res) => {
        let {
          message,
          meta
        } = res.data
        if (meta.status == 200) {
          this.setData({
            textList: message
          })
        }
      }
    })
  },

  // 获取首页楼层数据
  getfloor() {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      method: 'GET',
      success(res) {
        const { message, meta } = res.data
        if (meta.status == 200) {
          _this.setData({
            floortop: message
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwoper()
    this.getCatitems()
    this.getfloor()
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