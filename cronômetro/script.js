let second = 0;
let minute= 0;
let hour = 0;
var interval;

function twoDigits(digit){
  if(digit<10){
    return('0' + digit);
  } else {
    return (digit)
  }
}


function start() {
  contagem()
  interval = setInterval(contagem,1000);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  document.getElementById('timer').innerHTML ='00:00:00';
}



function contagem (){
  second++
  if(second==60){
    second =0;
    minute++;
  } else if (minute==60){ 
    minute = 0;
    hour ++;

  }
  document.getElementById('timer').innerHTML =twoDigits(hour) + ":" + twoDigits(minute) + ":"+ twoDigits(second);
}
