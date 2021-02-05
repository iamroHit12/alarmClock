
let submit = document.getElementById('submit');

submit.addEventListener('click',alarm);

audio = new Audio('salamisound-1532427-countdown-e-g-for-bomb-or.mp3');

function play(){
    audio.play();
}

function alarm(e){
    e.preventDefault();

    let time = document.getElementById('time');

    date = new Date(time.value);

    now = new Date();

    alrmTime = date - now ;

    console.log(alrmTime);

    if(alrmTime>=0){
        setTimeout(() => {
            play();
        }, alrmTime);
    }
    
}

