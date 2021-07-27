
const dashboard = document.querySelector(".dashboard");
const userScore = dashboard.querySelector(".user_score");
const cpuScore = dashboard.querySelector(".cpu_score");
const initialState = document.querySelector(".initial_state");
const paper = initialState.querySelector('.paper');
const scissor = initialState.querySelector('.scissor');
const rock = initialState.querySelector('.rock');
const userSelected = document.querySelector('.user_selected');
const userBackgroundColor = document.querySelector('.outer_ring');
const userBackgroundImage = document.querySelector('.innerRing');
const playAgain = document.querySelector('.play_again');
const hiddenDiv = document.querySelector('.playAgain');
const WinnerText = playAgain.querySelector('.display_winner');
const playAgainButton = playAgain.querySelector('.button');
const userPickedColor = playAgain.querySelector('.user_picked');
const userPickedBg = playAgain.querySelector('.user_picked_bg');
const cpuBackgroundColor = playAgain.querySelector('.CPU_picked');
const cpuBackgroundImage = playAgain.querySelector('.CPU_picked_bg');
const rulesButton = document.querySelector('.next');
const displayRules = document.querySelector('.display_rules');
const exitRules = displayRules.querySelector('.exit_rules');
const rings = userSelected.querySelector('.ring');

function setPlayAgain(){
    hiddenDiv.style.visibility = "visible";
    hiddenDiv.style.width = "15rem";
    var a = userPickedColor.classList[1];
    var b = cpuBackgroundColor.classList[1];
    var uScore = parseInt(userScore.innerHTML);
    var cScore = parseInt(cpuScore.innerHTML);
    if(a == b){
        WinnerText.innerHTML = "Tie";
    }
    if(a == 'color_paper' && b == 'color_rock'){
        WinnerText.innerHTML="YOU WON";
        uScore++;
        userPickedColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"
    }
    if(a == 'color_paper' && b == 'color_scissor'){
        WinnerText.innerHTML="YOU LOSE";
        cScore++;
        cpuBackgroundColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"
    }
    if(a == 'color_scissor' && b == 'color_rock'){
        WinnerText.innerHTML="YOU LOSE";
        cScore++;
        cpuBackgroundColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"
    }
    if(a == 'color_scissor' && b == 'color_paper'){
        WinnerText.innerHTML="YOU WON";
        uScore++;
        userPickedColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"
    }
    if(a == 'color_rock' && b == 'color_scissor'){
        WinnerText.innerHTML="YOU WON";
        uScore++;
        userPickedColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"

    }
    if(a == 'color_rock' && b == 'color_paper'){
        WinnerText.innerHTML="YOU LOSE";
        cScore++;
        cpuBackgroundColor.style.boxShadow = "0 0 0 1rem hsl(214, 39%, 28%),0 0 0 2rem hsl(214, 44%, 26%), 0 0 0 3rem hsl(214, 47%, 23%)"
    }
    userScore.innerHTML = JSON.stringify(uScore);
    cpuScore.innerHTML=JSON.stringify(cScore);
    playAgain.classList.add('active_play_again');
}

function setCpuSelected(){
    var ind = Math.floor(Math.random()*3);
    if(ind== 0){
        cpuBackgroundImage.classList.add('bg_paper');
        cpuBackgroundColor.classList.add('color_paper');
    }
    if(ind == 1){
        cpuBackgroundImage.classList.add('bg_scissor');
        cpuBackgroundColor.classList.add('color_scissor');
    }
    if(ind == 2){
        cpuBackgroundImage.classList.add('bg_rock');
        cpuBackgroundColor.classList.add('color_rock');
    }
    userSelected.classList.remove('active_user_selected');
    playAgain.classList.add('active_play_again');
    let i=0;
    let interval = setInterval(function(){
        i++;
        if(i==1){
            setPlayAgain();
            clearInterval(interval);
            return;
        }
    },3000);

}
function setUserSelected(e){
    setClassNames(userBackgroundImage);
    setClassNames(userBackgroundColor);
    setClassNames(userPickedBg);
    setClassNames(userPickedColor);
    setClassNames(cpuBackgroundImage);
    setClassNames(cpuBackgroundColor);
    if(e.className == 'paper'){
        userBackgroundImage.classList.add('bg_paper');
        userBackgroundColor.classList.add('color_paper');
        userPickedBg.classList.add('bg_paper');
        userPickedColor.classList.add('color_paper');
        console.log(userBackgroundColor.classList,userBackgroundImage.classList);

    }
    else if(e.className == 'scissor'){
        userBackgroundImage.classList.add('bg_scissor');
        userBackgroundColor.classList.add('color_scissor');
        userPickedBg.classList.add('bg_scissor');
        userPickedColor.classList.add('color_scissor');
    }
    else{
        userBackgroundImage.classList.add('bg_rock');
        userBackgroundColor.classList.add('color_rock');
        userPickedBg.classList.add('bg_rock');
        userPickedColor.classList.add('color_rock');
    }
    initialState.classList.remove('active_initial_state');
    userSelected.classList.add('active_user_selected');

    let i=0;
    let interval = setInterval(function(){
        i++;
        if(i==1){
            setCpuSelected();
            clearInterval(interval);
            return;
        }
    },3000);
}

function displayRulesFunction(){
    displayRules.classList.add('active_display_rules');
}
function exitRulesFunction(){
    displayRules.classList.remove('active_display_rules');
}
function playAgainFunction(){
    playAgain.classList.remove('active_play_again');
    initialState.classList.add('active_initial_state');
    hiddenDiv.style.visibility = "hidden";
    hiddenDiv.style.width = "0rem";
    userPickedColor.style.boxShadow="0 0 0 rgba(0,0,0,.1)";
    cpuBackgroundColor.style.boxShadow="0 0 0 rgba(0,0,0,.1)";
}
function setClassNames(e){
    var len = e.classList.length;
    while(len > 1){
        e.classList.remove(e.classList[len-1]);
        len--;
    }
}
rulesButton.addEventListener('click', displayRulesFunction);
exitRules.addEventListener('click',exitRulesFunction);
playAgainButton.addEventListener('click',playAgainFunction);


