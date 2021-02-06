// code for alarm 

let submit = document.getElementById('submit');

submit.addEventListener('click',alarm);  // adding event listner

audio = new Audio('salamisound-1532427-countdown-e-g-for-bomb-or.mp3');

function play(){                 // audio for alarm
    audio.play();
}

function alarm(e){
    e.preventDefault(); // stop reloading on submit

    let time = document.getElementById('time');

    date = new Date(time.value); // input date time for alarm

    now = new Date(); // current timing Date

    alrmTime = date - now ; // how much millisecond left for alarm

    console.log(alrmTime);

    if(alrmTime>=0){
        setTimeout(() => {
            play();
        }, alrmTime);
    }
    
}


// code for current time 

setInterval(() => {
    myDate = new Date();

    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var h=myDate.getHours();  
    var m=myDate.getMinutes();  
    var s=myDate.getSeconds();
    if (h<10){h = 0+''+h}
    if (m<10){m = 0+''+m}
    if (s<10){s = 0+''+s}
    document.getElementById('curtime').innerHTML = h+":"+m+":"+s;
    document.getElementById('date').innerHTML = myDate.toLocaleDateString(undefined,options);
}, 1000);

