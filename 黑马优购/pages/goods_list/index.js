// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      title: '综合',
      id: 0
    }, {
      title: '销售',
      id: 1
    }, {
      title: '价格',
      id: 2
    }],
    currentIndex: 0,
    goodsList: []
  },

  handletitle(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    })
  },

  getGoodsList(options) {
    let id = options.cid
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/goods/search',
      method: 'GET',
      data: {
        query: "",
        cid: id,
        // 页数索引
        pagenum: 1,
        // 每页长度
        pagesize: '20'
      },
      success: (res) => {
        console.log(res);
        let {
          message,
          meta
        } = res.data
        if (meta.status == 200) {
          this.setData({
            goodsList: message.goods
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.setNavigationBarTitle({
      title: '商品列表',
    })
    this.getGoodsList(options)
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