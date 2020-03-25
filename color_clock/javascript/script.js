var d, h, m, s, clock, clr;
function cclock() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  if (h <= 9) {
    h = '0' + h;
  }
  if (m <= 9) {
    m = '0' + m;
  }
  if (s <= 9) {
    s = '0' + s;
  }
  setTimeout(cclock, 1000);
  clock = h + ':' + m + ':' + s;
  document.getElementById('clock').innerHTML = clock;
  clr = '#' + h + m + s;
  document.body.style.background=clr;
}
cclock();
