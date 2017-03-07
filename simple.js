// Function for toggling expandos on/off using CSS classes

var toggleinfobox = function() {
  var infobox = this.parentNode;
  if (hasClass(infobox, 'infobox-on')) {
    removeClass(infobox, 'infobox-on');
    addClass(infobox, 'infobox-off');
  } else {
    removeClass(infobox, 'infobox-off');
    addClass(infobox, 'infobox-on');
  }
};

// Get the infobox on the page, add initial CSS class and event listener

var infobox = getElementsByClass('infobox');
for (var i=0; i < infobox.length; i++) {
  addClass(infobox[i], 'infobox-off');
  var infoboxTitle = infobox[i].getElementsByTagName('h1')[0];
  addEventSimple(infoboxTitle, 'click', toggleinfobox);
}