//darkmode
let drk = document.querySelector(':root');
let rs = getComputedStyle(drk);
let fdark = document.getElementById("darkmode");
let sdrk = document.getElementById("drk");
let flag=true;

fdark.addEventListener("click",function(){
    if(flag === true){
        drk.style.setProperty('--brightMode', '#333');
        drk.style.setProperty('--c0c0c', '#fff');
        drk.style.setProperty('--t424750', '#fff');
        drk.style.setProperty('--t232933', '#fff');

        drk.style.setProperty('--t81858B', '#fff');
        drk.style.setProperty('--t616368', '#fff');
        drk.style.setProperty('--tc0c2c5', '#fff');
        drk.style.setProperty('--c0c0c', '#fff');
        drk.style.setProperty('--t303338', '#fff');
        drk.style.setProperty('--t677179', '#fff');
        drk.style.setProperty('--t3f4064', '#fff');
        drk.style.setProperty('--t990208', '#fff');
        drk.style.setProperty('--softWhite', '#555');

        this.style.backgroundColor="rgb(240,240,241)";
        sdrk.classList.remove("fa-moon-stars");
        sdrk.classList.add("fa-sun");
        
        flag = false;
    }
    else{
        drk.style.setProperty('--brightMode', '#fff');
        drk.style.setProperty('--c0c0c', '#0c0c0c');
        drk.style.setProperty('--t424750', '#424750');
        drk.style.setProperty('--t232933', '#232933');

        drk.style.setProperty('--t81858B', '');
        drk.style.setProperty('--t616368', '');
        drk.style.setProperty('--tc0c2c5', '');
        drk.style.setProperty('--c0c0c', '');
        drk.style.setProperty('--t303338', '');
        drk.style.setProperty('--t677179', '');
        drk.style.setProperty('--t3f4064', '');
        drk.style.setProperty('--t990208', '');
        drk.style.setProperty('--softWhite', '');

        this.style.backgroundColor="";
        sdrk.classList.remove("fa-sun");
        sdrk.classList.add("fa-moon-stars");

        flag=true;
    }
});