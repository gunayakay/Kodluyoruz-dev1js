let gorunecekIsim=document.querySelector("#myName");
var isim= prompt("Adınızı Girin");
if(isim.length>0){
gorunecekIsim.innerHTML=isim;
}
else{
gorunecekIsim.innerHTML="Misafir";
}



function showTime(){

var tarih= new Date();
var gun=tarih.getDay();
  var saat=tarih.getHours();
  var dakika=tarih.getMinutes();
  var saniye=tarih.getSeconds();
let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];	
document.getElementById("myClock").innerHTML=saat+":"+dakika+":"+saniye+" "+ gunler[gun];
setTimeout(showTime, 1000); 

}

showTime();