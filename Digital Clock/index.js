const hrEl = document.getElementById("hour");
const miEl = document.getElementById("minutes");
const seEl = document.getElementById("secound");
const amEl = document.getElementById("ampm");

const updtClock=()=>{

    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm ="AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m
    s = s < 10? "0" + s : s;
s
    hrEl.innerText=h;
    miEl.innerText=m;
    seEl.innerText=s;
    amEl.innerText=ampm;

    setTimeout(()=>{
        updtClock();
    },1000);
}

updtClock();