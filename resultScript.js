let question = document.querySelector('.q');
let abutton = document.querySelector('.abutton');
let options = document.querySelector('.options');
let wanswer = document.querySelector('.wrong');
let hint = document.querySelector('.hint');
let audio = document.getElementById('song');

let qa = [
    {
        'q': 'What is AK more likely to choke on?',
        'o1': 'Water',
        'click1': 'water()',
        'o2': 'My d hehe',
        'click2': 'd()',
        
    },
    {
        'q': 'What does AK like more?',
        'o1': 'Taco',
        'click1': 'taco()',
        'o2': 'Herself',
        'click2': 'herself()',
    },
    {
        'q': 'Which rank does AK deserve?',
        'o1': 'Silver',
        'click1': 'silver()',
        'o2': 'Plat',
        'click2': 'plat()',
    },
    {
        'q': 'NSFW: Where does AK want my cum?',
        'o1': 'In her pussy',
        'click1': 'pussy()',
        'o2': 'In her ass',
        'click2': 'ass()',
    },
    {
        'q': 'Not a question but.. I love you',
        'o1': '<3',
        'click1': 'water()',
        'o2': '<3',
        'click2': 'water()',
    },
    {
        'q': 'Will AK become a famous streamer and do great things with her life?',
        'o1': 'Yes',
        'click1': 'water()',
        'o2': 'Yes (Sorry, no is not even a possibility)',
        'click2': 'water()',
    },
    {
        'q': 'Do you like the background image?',
        'o1': 'Yes',
        'click1': 'picYes()',
        'o2': 'No',
        'click2': 'picNo()',
    },
    {
        'q': 'Are you ready for the final question?',
        'o1': 'Yes',
        'click1': 'picYes()',
        'o2': 'No',
        'click2': 'picNo()',
    },
    {
        'q': 'Will you grind valo with me?',
        'o1': 'Yes',
        'click1': 'picYes()',
        'o2': 'No',
        'click2': 'picNo()',
    },
    {
        'q': "Oh, and also",
        'o1': '...',
        'click1': 'picYes()',
        'o2': '...',
        'click2': 'picYes()',
    },
    {
        'q': 'Will you date me?',
        'o1': 'Yes',
        'click1': 'Yes()',
        'o2': 'No',
        'click2': 'No()',
    },
    
]

let currentQues = 0;
let totalQuestions = 11;

function loadNewQues(){
    while(options.hasChildNodes()){
        options.removeChild(options.childNodes[0]);
    }

    hint.innerHTML = "";
    question.innerHTML = qa[currentQues].q;

    let b1 = document.createElement('button');
    b1.innerHTML = qa[currentQues].o1;
    b1.classList.add('anbutton');

    let b2 = document.createElement('button');
    b2.innerHTML = qa[currentQues].o2;
    b2.classList.add('anbutton');

    if(currentQues == (totalQuestions-1)){
        question.classList.remove('q');
        question.classList.add('lastQ');
    }

    b2.setAttribute('onclick', qa[currentQues].click2);
    b1.setAttribute('onclick', qa[currentQues].click1);

    options.appendChild(b1);
    options.appendChild(b2);
}


function water(){
    currentQues++;
    loadNewQues();
    audio.volume = 0.2;
    audio.play();
}

function d(){
    hint.innerHTML = 'Hopefully future mein :P';
}

function taco(){
    hint.innerHTML = "I'd rather eat AK than taco ;)";
}

function herself(){
    currentQues++;
    loadNewQues();
}

function silver(){
    hint.innerHTML = "Itna maarunga na";
}

function plat(){
    currentQues++;
    loadNewQues();
}

function pussy(){
    currentQues++;
    loadNewQues();
}

function ass(){
    hint.innerHTML = "There's no wrong answer ;)";
}

function picYes(){
    currentQues++;
    loadNewQues();
}

function picNo(){
    hint.innerHTML = ":(";
}

function Yes(){
    hint.innerHTML = "I love you so much :')";
}

function No(){
    hint.innerHTML = "P A I N";
}

loadNewQues();
