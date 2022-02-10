function rotation(a,b,c){
  document.getElementById("hour").style.transform = "rotate("+a+"deg)";
document.getElementById("myDIV").style.transform = "rotate("+b+"deg)";
  
}
setInterval(() => {
  d = new Date();
  hr = d.getHours();
  mn = d.getMinutes();
  sc = d.getSeconds();
  h = hr*30 + (mn/2);
  m = mn*6;
  s = sc*6;
  hour.style.transform = "rotate("+h+"deg)";
  minute.style.transform = "rotate("+m+"deg)";
  second.style.transform ="rotate("+s+"deg)";
},1000)
