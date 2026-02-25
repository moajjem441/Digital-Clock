function clock(){
  const  time=document.getElementById('time');

    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    hours=hours.toString().padStart(2,'0');
    minutes=minutes.toString().padStart(2,'0');
    seconds=seconds.toString().padStart(2,'0');


    time.innerText=`${hours}:${minutes}:${seconds}`;
}

clock();

setInterval(clock,1000);

