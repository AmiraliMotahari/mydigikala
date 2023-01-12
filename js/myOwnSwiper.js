/// creating my own swiper
let leftbtn = document.getElementById("leftButton");
let rightbtn = document.getElementById("rightButton");
let rr = document.getElementById("rlock");
let mm = document.getElementById("mlock");
let ll = document.getElementById("llock");
let flager = 0;

console.log(flager);

leftbtn.addEventListener("click",function(){
    if(flager === 0){
        rr.style.left="105%";
        mm.style.left="0";
        rightbtn.style.display="block";
        flager++;
        console.log(flager);
    }
    else if (flager === 1) {
        mm.style.left="105%";
        ll.style.left="0";
        flager++;
        leftbtn.style.display="none";
    }
});
rightbtn.addEventListener("click",function(){
    if(flager === 2){
        ll.style.left="-105%";
        mm.style.left="0";
        leftbtn.style.display="";
        flager--;
    }
    else if (flager === 1) {
        mm.style.left="-105%";
        rr.style.left="0";
        flager--;
        rightbtn.style.display="";
    }
});

