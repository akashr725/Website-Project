const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const quesEl = document.getElementById("question");
const inpEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;
quesEl.innerText=`What is ${num1} multiply by ${num2}?`
const correctAns = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inpEl.value
    if(userAns == correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

});

const updateLocalStorage=()=>{
    localStorage.setItem("score",JSON.stringify(score));
}
