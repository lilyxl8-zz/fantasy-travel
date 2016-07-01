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

function fadeInList(id) {
  var listChildren = document.getElementById(id).children;
  var current = 0;
  var timer = setInterval(function() {
    listChildren[current].className = "animation-fadein";
    current += 1;
    if (current == listChildren.length) {
        clearInterval(timer);
    }
  }, 400);
}

// scrollPoints
var scroll2, scroll3, scroll4, scroll5 = false;

window.addEventListener('scroll', function(e) {
  if (window.scrollY > 110 && !scroll2) {
    scroll2 = true;
    fadeInList("features-list");
  }
  else if (window.scrollY > 700 && !scroll3) {
    scroll3 = true;
    animateValue("value1", 500, 893, 200);
    animateValue("value2", 0, 23, 900);
    animateValue("value3", 3700, 4000, 200);
  }
  else if (window.scrollY > 1230 && !scroll4) {
    scroll4 = true;
    fadeInList("testies-list");
  }
  else if (window.scrollY > 1900 && !scroll5) {
    scroll5 = true;
    var form = document.getElementById("form");
    form.className = "animation-fadein";
  }
});
