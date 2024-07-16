window.onload = function() {
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  let dd = document.getElementById('dd');
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let dayDot = document.querySelector('.day-dot');
  let hrDot = document.querySelector('.hr-dot');
  let minDot = document.querySelector('.min-dot');
  let secDot = document.querySelector('.sec-dot');

  let endDate = '07/14/2024 00:00:00';

  let x = setInterval(function() {
    let now = new Date().getTime();
    let start = new Date(endDate).getTime();
    let distance = now - start; 
    //time calculation for days, hours, minutes and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);
    //output the result in the elements
    if(days) days.innerHTML = d + "<br><span>Days</span></br>";
    if(hours) hours.innerHTML = h + "<br><span>Hours</span></br>";
    if(minutes) minutes.innerHTML = m + "<br><span>Minutes</span></br>";
    if(seconds) seconds.innerHTML = s + "<br><span>Seconds</span></br>";

    //365 days in a year
    if(dd) dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    //24 hr in a day
    if(hh) hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    //60 min in an hour
    if(mm) mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60 sec in a minute
    if(ss) ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //animate circle dots
    // 360deg / 365days = 0.986deg/day
    if(dayDot) dayDot.style.transform = `rotate(${0.986 * d}deg)`;
    // 360deg / 24hr = 15deg/hr
    if(hrDot) hrDot.style.transform = `rotate(${15 * h}deg)`;
    // 360deg / 60min = 6deg/min
    if(minDot) minDot.style.transform = `rotate(${6 * m}deg)`;
    // 360deg / 60sec = 6deg/sec
    if(secDot) secDot.style.transform = `rotate(${6 * s}deg)`;

    //if the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        let timeElement = document.getElementById('time');
        let raceElement = document.querySelector('.race_in_paris');
        if(timeElement) timeElement.style.display = 'none';
        if(raceElement) raceElement.style.display = 'block';
    }
  }, 1000);
}
