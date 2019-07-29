// pages/lan/lan.js
// const debounce = (fn, delay = 300) => {
//   let ctx,
//     args;
//   let timer = null;
//   const later = function () {
//     fn.apply(ctx, args)
//     timer = null;
//   }
//   return function () {
//     ctx = this
//     args = arguments;
//     if (timer) {
//       clearTimeout(timer)
//       timer = null
//     }
//   }
//   timer = setTimeout(later, delay)
// }
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgs:[
     {src:  '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },
     { src: '../image/1.jpg' },     
   ],
   height:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({  // 获取页面可视区域的高度
      success: (res) => {
        this.setData({
          height: res.screenHeight
        })
      },
    });
    var that = this;
    let imgs = that.data.imgs;
    imgs.forEach((item, i) => {
      item.cool = false
    })
   that.loadimg()
  },
onPageScroll:function(){
  var that = this;
  setTimeout(function(){
    that.loadimg()
  },3000)

  // debounce(this.loadimg())
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
  loadimg:function(){
    wx.createSelectorQuery().selectAll('.lan').boundingClientRect((ret)=>{
      let imgs = this.data.imgs;
      let height = this.data.height;
      ret.forEach((item,i)=>{
        if(item.top < height){
          imgs[i].cool = true
        }
      })
      this.setData({
        imgs:imgs
      })
    }).exec()
  }
})