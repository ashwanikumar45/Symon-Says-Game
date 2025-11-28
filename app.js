let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let box = ["red", "green", "yellow", "voilet"];
let gamestart = false;
let level = 0;
let h2=document.querySelector("h2");
// let btn=document.querySelector(".btn")

let highestscore = 0;
let copyscore = 0;
document.addEventListener("keypress", function () {

    if (gamestart == false) {
        console.log("key pressed game start ");
        gamestart = true;
        levelup();
    }


})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250)
}

function levelup() {
    userseq = [];
    level++;
    copyscore = level;
    console.log(copyscore);
    h3.innerText = ` level ${level}`;
    let ranidx = Math.floor(Math.random() * 3);
    let rancolor = box[ranidx];
    let ranbtn = document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    console.log(gameseq);
    btnflash(ranbtn);
}



let btns = document.querySelectorAll(".btn");

for (btn of btns) {
    btn.addEventListener("click", btnpress);
}


function btnpress() {
    let btn = this;
    if (gamestart != false) {
        btnflash(btn);
        userclickcolr = btn.getAttribute("id");

        userseq.push(userclickcolr);
        console.log("user:-", userseq);
    }

    matcharr(userseq.length - 1);

}
function matcharr(idx) {
    if (gameseq[idx] === userseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(function () {
                levelup();
            }, 1000);
        }
    } else {
        h3.innerHTML = `game over ! your level is <b> ${level} </b> <br> press any key to start the game..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        if (copyscore >= highestscore) {
            highestscore = copyscore;
            
            h2.innerText = `Highest Score is ${highestscore}`;
        }
        reset();

    }
}

function reset() {
    copyscore = 0;
    gamestart = false;
    level = 0;
    gameseq = [];
    userseq = [];
}
