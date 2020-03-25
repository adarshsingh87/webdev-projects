var hour, min, sec;
var x = document.getElementById('hmm');
var y = document.getElementById('alarm');
function timer() {
  if (hour == 0 && min == 0 && sec == 0) {
    y.play();
    x.innerHTML = hour + ':' + min + ':' + sec;
  } else if (hour != 0 && min == 0 && sec == 0) {
    hour = hour - 1;
    min = 60;
    sec = 60;
    x.innerHTML = hour + ':' + min + ':' + sec;
  } else if (hour != 0 && min == 1 && sec == 0) {
    hour = hour - 1;
    min = 60;
    sec = 60;
  } else if (min != 0 && sec == 0) {
    min = min - 1;
    sec = 60;
    x.innerHTML = hour + ':' + min + ':' + sec;
  } else {
    sec = sec - 1;
    x.innerHTML = hour + ':' + min + ':' + sec;
  }
  x.innerHTML = hour + ':' + min + ':' + sec;
  setTimeout(timer, 1000);
  setTimeout(color, 1000);
}
function color() {
  h = hour;
  m = min;
  s = sec;
  if (h <= 9) {
    h = '0' + h;
  }
  if (m <= 9) {
    m = '0' + m;
  }
  if (s <= 9) {
    s = '0' + s;
  }
  clr = '#' + hour + min + sec;
  document.body.style.background = clr;
}
function start_timer(hours, mins, secs) {
  hour = hours;
  min = mins;
  sec = secs;
  timer();
  document.getElementById('from').style.display = 'none';
  x.innerHTML = hour + ':' + min + ':' + sec;
  document.getElementById('end').innerHTML =
    '<input  type="button"  onclick="pause()"  class="btn btn-success"  value="End"/>';
}
function pause() {
  y.pause();
  history.go(0);
}
color();
