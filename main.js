let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let techno = document.querySelector('.techno')

window.onscroll = function () {
    let value = scrollY
stars.style.left = value +'px' 
 moon.style.top = value*3 + "px" 
 mountains3.style.top = value*2 + "px" 
 mountains4.style.top = value*1.5 + "px" 
 river.style.top = value + "px" 
 boat6.style.top = value + "px" 
 boat6.style.left = value*2 + "px" 
techno.style.fontSize = value + 'px'
   if(scrollY >= 65 ){
     techno.style.fontSize = 65 +'px' 
     techno.style.position = 'fixed'
if(scrollY >= 427){
    techno.style.display ='none'
   }else{
    techno.style.display ='block'

   }
   if(scrollY >= 115){
document.querySelector('.main').style.background ="linear-gradient(#617f8b,#10001f)"
   }else{
    document.querySelector('.main').style.background ="linear-gradient(#200016,#10001f)"

   }
 }
}