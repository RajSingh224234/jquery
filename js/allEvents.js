let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
let btn5=document.querySelector("#btn5");
$(document).ready(function(){
   $(btn1).click(function(){
    alert("you clicked onclick event");
   })
})
$(document).ready(function(){
    $(btn2).mouseover(function(){
     alert("you clicked onmouseover event");
    })
 })
 $(document).ready(function(){
    $(btn3).keypress(function(){
     alert("you clicked onkeypress event");
    })  
 })
 $(document).ready(function(){
    $(btn4).keydown(function(){
     alert("you clicked onkeydown event");
    })
 })
 $(document).ready(function(){
    $(btn5).keyup(function(){
     alert("you clicked onkeyup event");
    })
 })