function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var figure = document.getElementById(id);
  var timer = setInterval(function() {
    current += increment;
    figure.innerHTML = current;
    if (current == end) {
        clearInterval(timer);
    }
  }, stepTime);
}

var scroll3 = false;

window.addEventListener('scroll', function(e) {
  if (window.scrollY > 700 && !scroll3) {
    scroll3 = true;
    animateValue("value1", 500, 893, 200);
    animateValue("value2", 0, 23, 900);
    animateValue("value3", 3700, 4000, 200);
  }
});
