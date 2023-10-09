let green = document.querySelector('.thumb1');
let purple = document.querySelector('.thumb2');
let pink = document.querySelector('.thumb3');
let change = document.querySelector('.starbucks');
green.onclick = function(){
    change.src = "img1.png"
}
purple.onclick = function(){
    change.src = "img2.png"
}
pink.onclick = function(){
    change.src = "img3.png"
}
