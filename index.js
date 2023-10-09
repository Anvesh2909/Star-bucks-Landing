let green = document.querySelector('.thumb1');
let purple = document.querySelector('.thumb2');
let pink = document.querySelector('.thumb3');
let change = document.querySelector('.starbucks');
let changecircle = document.querySelector('.circle');
let changetext = document.querySelector('.green');
let changebtn = document.querySelector('.button');
green.onclick = function(){
    change.src = "img1.png"
    changecircle.style.background= "#017143";
    changetext.style.color= "#017143";
    changebtn.style.background= "#017143"
}
purple.onclick = function(){
    change.src = "img2.png"
    changecircle.style.background = "#eb4595";
    changetext.style.color= "#eb4595";   
    changebtn.style.background= "#eb4595"
}
pink.onclick = function(){
    change.src = "img3.png"
    changecircle.style.background= "#d752b1";
    changetext.style.color= "#d752b1";
    changebtn.style.background= "#d752b1"
}
