function clock(){
    
    const now=new Date();

    let hours=now.getHours().toString().padStart(2,'0');
    let minutes=now.getMinutes().toString().padStart(2,'0');
    let seconds=now.getSeconds().toString().padStart(2,'0');

    const hour1= document.getElementById('hour')
     const minutes1=document.getElementById('min')
     const second1=document.getElementById('sec')



     hour1.innerText=hours;
     hour1.style.setProperty('--value',hours);

     minutes1.innerText=minutes;
     minutes1.style.setProperty('--value',minutes);

     second1.innerText=seconds;
     second1.style.setProperty('--value',seconds);


}


clock();

setInterval(clock,1000);