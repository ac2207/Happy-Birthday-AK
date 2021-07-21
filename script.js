let question = document.querySelector('.q');
let abutton = document.querySelector('.abutton');
let answer = document.querySelector('.a');
let wanswer = document.querySelector('.wrong');
let hint = document.querySelector('.hint');

let questions = ['What is your name?', 'What is the first movie we watched together','Complete the traumatic sentence: Meri ____ nakli hai','Here is a hard one, you told me a fake height when i asked how tall you were. What was it?',
'Easy one to compensate, Where did we first meet?', "We watched one episode of this series together, it was the first thing we've ever watched just the two of us. Which series is it?",
'Agar mai spiderman hota toh tu kya hoti?', 'While watching which show did i realise i fell for you?',"Oh and also: <a href='https://www.youtube.com/watch?v=Vb3gCwimRpI' target='_blank' class='ml'>Take a break</a>",
'Complete the funniest description ever: Soup kya achha bana liya, ___ par chhada diya', 'What was the first song you told me to listen to?'];

let totalQuestions = 11;

let answers = ['akanksha', 'welcome', 'taang',"5'8",'discord','drive to survive', 'meri jaan', 'modern love','','sar', 'daryaa'];
let hints = ['','','',"It's my height","Name of software","We watched it on silver party and we were interrupted", "It's your joke XD","It's on prime",'Leave this empty','Its from Ratatouille', 'Hindi song'];

let currentNum = 0;

question.innerHTML = questions[currentNum];

abutton.addEventListener('click', function(){
    
    if(answer.value.toLowerCase() === 'tang'){
        answer.value = 'taang';
    }

    if(answer.value.toLowerCase() === 'f1: drive to survive' || answer.value.toLowerCase() === 'formula 1: drive to survive'){
        answer.value = 'drive to survive';
    }

    if(answer.value.toLowerCase() === answers[currentNum]){
        console.log("correct answer");
        if(currentNum==0){
            currentNum++;
            question.innerHTML = "Hello Akanksha qt, " + questions[currentNum];
        }else if(currentNum==2){
            currentNum++;
            question.innerHTML = questions[currentNum];
        }else{
            currentNum++;
            question.innerHTML = questions[currentNum];
        }

        answer.value = "";
        wanswer.innerHTML = "";
        hint.innerHTML = "";

        if(abutton.innerHTML === "SUBMIT"){
            console.log("last question done");
            window.location.href = 'result.html';
        }

        
    }else{
        if(hints[currentNum] != ""){
            hint.innerHTML = "Hint: " + hints[currentNum];
        }else{
            wanswer.innerHTML = "wrong answer";
        }    
    }

    if(currentNum === (totalQuestions-1)){
        abutton.innerHTML =  "SUBMIT";
    }
})
