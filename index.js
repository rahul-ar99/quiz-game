questions = [
    {
        question:"Which is the largest island in the world?",
        options:["Switzerland","Iceland","Greenland","Ireland"],
        ans:"Greenland"
    },
    {
        question:"_____ is known as the brain of the computer.",
        options:["ROM","RAM","GPU","CPU"],
        ans:"CPU"
    },
    {
        question:"Which planet is known as the 'Red Planet'?",
        options:["Mars","Earth","Jupiter","Venus"],
        ans:"Mars"
    },
    {
        question:"What is the chemical symbol for water?",
        options:["O2","H2O","CO2","NaCl"],
        ans:"H2O"
    },
    {
        question:"Which of the following is a primary color in additive color mixing?",
        options:["Green","Yellow","Black","Cyan"],
        ans:"Green"
    }
]
function myFunc(){
    document.getElementById("first-page").style.display="none";
    document.getElementById("main").style.display="flex"
    document.getElementById("time").innerHTML=60;
    
    quest = document.getElementById(`quest-ul`)
    quest.innerHTML = ""
    let i = 0
    for(a of questions){
        i++
        quest.innerHTML += `<li id="q${i}">
        <p class="q-no" id="q-no${i}">question ${i}</p>
        <p class="question">Which is the largest island in the world?</p>`
        let j = 0
        for(let b of a["options"]){
            j++
            quest.innerHTML += `
            <input type="radio" id="option${i}-${j}" name="option${i}" autocomplete="off" value="${b}">
            <label for="option${i}-${j}">${b}</label>`
        }
        quest.innerHTML +=` <p id="reply${i}">-</p>
        </li>`
    }
}
function timer(){
    let time = document.getElementById("time").innerHTML
    if(time==0){
        document.getElementById("time").innerText = "Time is up!!"
        clearInterval(timer_loop)
        submit()
        document.getElementById("submitBtn").style.display = "none";
        
    }
    else{
        time--;
        document.getElementById("time").innerHTML = time
    }
    
}
var timer_loop = setInterval(timer, 1000)

// console.log(questions[1]["ans"])
gameScore = 0
function submit(){
    clearInterval(timer_loop)
    for(let j=1;j<6;j++){
        document.getElementById("submitBtn").style.display = "none";
        var answ = document.getElementsByName(`option${j}`);
        rightAns = 0
        for(let i=0;i<4;i++){
            if(answ[i].checked){
                if(answ[i].value==questions[j-1]["ans"]){
                    gameScore++
                    userAns = document.getElementById(`reply${j}`)
                    userAns.innerText = "right ans"
                    userAns.style.color = "green"
                    rightAns = "right"
                    break
                }
                
            }
            else{
                answ[i].disabled = "True"
                rightAns++
            }
        }
        if(rightAns<4){
            userAns = document.getElementById(`reply${j}`)
            userAns.innerText = "wrong ans\n right ans is "+questions[j-1]["ans"];
            userAns.style.color = "red";
        }
        else if(rightAns==4){
            userAns = document.getElementById(`reply${j}`)
            userAns.innerText = "you selected non of these\n right ans is "+questions[j-1]["ans"];
            userAns.style.color = "grey";

        }
    }
    document.getElementById("scoreHead").innerText = "Your Score";
    document.getElementById("myScore").innerText = `${gameScore} /5`;
}

