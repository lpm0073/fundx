(function() {

 // change the number "3000" to however many seconds should pass before the Grid's page changes
 var interval = 5000, timer, mouseOn;

 jQuery('#home-news .esg-grid').on('mouseenter', function() {

 mouseOn = true;
 clearInterval(timer);

 }).on('mouseleave', mouseOut);

 function mouseOut() {

 mouseOn = false
 timer = setInterval(changeGrid, interval);

 }

 function changeGrid() {

 jQuery('#home-news .esg-right').trigger('click');

 }

 var gridLoaded = setInterval(function() {

 if(jQuery('#home-news .esg-grid').is(':visible')) {

 clearInterval(gridLoaded);
 if(!mouseOn) mouseOut();

 }

 }, 500);

})();
