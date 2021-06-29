var body = document.querySelector('body');
//color-ul下的li标签数组
var lis = document.querySelectorAll('#color-ul li');
var text = document.getElementById('text');
var addColor = document.getElementById('addColor');
var close = document.getElementsByClassName('close');
var Mask = document.getElementsByClassName('Mask');
var opres = document.querySelectorAll('.opre');
console.log(opres.innerHTML);
new Vue({
  el: '#app',
  data: {
    colorName:'薄青',
    R:'145',
    G:'180',
    B:'147',
    C:'0',
    M:'73',
    Y:'24',
    K:'0',
    colorList:[
      {colorName:'薄青',color:'#91B493',R:145,G:180,B:147,C:0,M:73,Y:24,K:0},
      {colorName:'赤木橡',color:'#E1A679',R:225,G:166,B:121,C:15,M:98,Y:61,K:0},
      {colorName:'水浅葱',color:'#66BAB7',R:102,G:186,B:183,C:68,M:10,Y:33,K:0},
      {colorName:'群青',color:'#51A8DD',R:81,G:168,B:221,C:48,M:59,Y:49,K:0},
      {colorName:'桑染',color:'#E64363C',R:100,G:54,B:60,C:69,M:86,Y:65,K:35},
      
    ],
    // 动态类的索引  控制显示
    curState:""
  },
  methods: {
    // 改变背景颜色 及h1文字
    ChangeColor(idx) {
      body.setAttribute('style', 'background-color:' + this.colorList[idx].color);
      document.getElementById('text').innerText = this.colorList[idx].colorName
      this.curState=idx;
      
      this.C = this.colorList[idx].C;
      this.M = this.colorList[idx].M;
      this.Y = this.colorList[idx].Y;
      this.K = this.colorList[idx].K;
      this.R = this.colorList[idx].R;
      this.G = this.colorList[idx].G;
      this.B = this.colorList[idx].B;
    },
    //将li恢复正常显示
    endChange(){
      this.curState = ""; 
    },
     //获取图片地址
     getImgUrl (img) {
      return ("/img/rgbcmyk/cmyk/"+ img +".png");
  },
  getRgbImgUrl (img) {
    return ("/img/rgbcmyk/rgb/"+img+ ".png")
  },
  remove(idx){
    var r = confirm("确定要删除吗?");
    if(r){
      this.colorList.splice(idx, 1);
    }
  },
  close(){
    document.getElementById('addColor').style.display = 'none';
    document.getElementById('Mask').style.display = 'none';
  },
  insert(){
    document.getElementById('addColor').style.display = 'block';
    document.getElementById('Mask').style.display = 'block';
  }
  },
  computed:{
      
  },
  created() {
     
  }, 
  filters:{//过滤器
    showId(colorId){
        if(colorId < 10){
            return '00'+colorId.toFixed()
        }else{
            return '0' + colorId.toFixed()
        }
    },
},
mounted() {
  
  }
});

