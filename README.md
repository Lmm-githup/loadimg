# loadimg
微信小程序图片懒加
//通过设置一个三目运算符来判断哪些图片有SRC的链接
<img src =“{{item.cool?item.src：'默认背景图'}}"
wx.getSystemInfo({  // 获取页面可视区域的高度
      success: (res) => {
        this.setData({
          height: res.screenHeight
        })
      },
    });
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
  
  onPageScroll:function(){
  var that = this;
  setTimeout(function(){
    that.loadimg()
  },3000)
