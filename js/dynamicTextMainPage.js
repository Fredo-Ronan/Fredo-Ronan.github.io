
// handle dynamic typing effect introducing words on greetings side of the HTML with class identifier : .introducingWords
var words = ['An Informatics Engineering Student', 'Tech Enthusiast', 'I like software developing', 'I also like Music, Photography and Videography', 'Always learn new thing'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 40,
    speed = 25;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.words').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});