let minute=document.getElementById('min');
let second=document.getElementById('sec');
let milli=document.getElementById('m-sec');

let startbtn=document.getElementById('st-btn');
let stopbtn=document.getElementById('stop-btn');
let resetbtn=document.getElementById('re-btn');


let milliseconds=0;
let Sec=0;
let Min=0;

let flag=true; //temporary var to start the fun only once

function timer()
{
   milliseconds+=10
   if(milliseconds==1000)
    {
        Sec+=1;
        milliseconds=0;
        if(Sec==60)
        {
            Min+=1;
            Sec=0;
        }
    }
    minute.textContent=concatZero(Min);
    second.textContent=concatZero(Sec);
    milli.textContent=concatZero(milliseconds);     
}

let Interval=null;
startbtn.addEventListener('click',function()
{
    if(flag)
    {
        Interval=setInterval(timer,10);
        flag=false;
    }
});

stopbtn.addEventListener('click',function()
{
    if(!flag)
    {
        clearInterval(Interval);
        flag=true;
    }
});

resetbtn.addEventListener('click',function()
{
    if(flag)
    {
        clearInterval(Interval);
        flag=true;

        minute.textContent='00';
        second.textContent='00';
        milli.textContent='00'; 

         milliseconds=0;
         Sec=0;
         Min=0;
    }
});

function concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}


