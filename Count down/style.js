//找到id为timmer__unit且属性值分别为:hour,minute,second的元素
var hourse=document.querySelector(
  "[timmer_unit=hour]"
);
var minutese=document.querySelector(
  "[timmer_unit=minute]"
);
var secondse=document.querySelector(
  "[timmer_unit=second]"
);
  function getDate() {
      var oDate = new Date();//获取日期对象
      var oldTime = oDate.getTime();//现在距离1970年的毫秒数
      var newDate = new Date('2020/6/17 00:00:00');
      var newTime = newDate.getTime();//2020年距离1970年的毫秒数
      var second = Math.floor((newTime - oldTime) / 1000);//未来时间距离现在的秒数
      var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
      second = second % 86400;//余数代表剩下的秒数；
      var hour = Math.floor(second / 3600);//整数部分代表小时；
      second %= 3600; //余数代表 剩下的秒数；
      var minute = Math.floor(second / 60);
      second %= 60;
      hourse.innerHTML=hour;
      minutese.innerHTML=minute;
      secondse.innerHTML=second;
    }
    getDate();
    setInterval(getDate, 1000);