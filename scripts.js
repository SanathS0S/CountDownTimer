let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

function timecalc()
{
    let currdate = new Date();
    let newyear = currdate.getFullYear()+1;
    let newyears = '1 Jan' + newyear.toString();
    let newyeardate = new Date(newyears);

    let currtime = newyeardate - currdate;

    let secs = currtime/1000;
    let mins = secs/60;
    let hours = mins/60;
    let days = hours/24;
    let currsec = fix(Math.floor((secs)%60));
    let currmin = fix(Math.floor((mins)%60));
    let currhour = fix(Math.floor((hours)%24));
    let currday = fix(Math.floor((days)%24));

    day.innerText = currday +' : '+ 'days';
    hour.innerText = currhour +' : '+ 'hours';
    minute.innerText = currmin +' : '+ 'minutes';
    second.innerText = currsec +' : '+ 'seconds';
    console.log(currday,"+",currhour,"+",currmin,"+",currsec);
}
function fix(time)
{
    return time<10?(`0${time}`) : time;
}
timecalc();
setInterval(timecalc,1000);