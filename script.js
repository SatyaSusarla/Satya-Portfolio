var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {
  var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }
  
  
  
});
// Digital Clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();  // Initial call to display the time immediately
var navbarHeight = $('.navbar').height(); 

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const modeButton = document.getElementById('modeButton');
  if (body.classList.contains('dark-mode')) {
    modeButton.textContent = '🌜';
  } else {
    modeButton.textContent = '🌞';
  }
}

function showEmailTooltip(event) {
  event.preventDefault(); // Prevent the link from being followed
  const tooltip = document.getElementById('emailTooltip');
  tooltip.style.display = 'block';
}

document.addEventListener('click', function(event) {
  const tooltip = document.getElementById('emailTooltip');
  const tooltipContainer = document.querySelector('.tooltip-container');
  if (event.target !== tooltipContainer && !event.target.closest('.btn.gmail')) {
    tooltip.style.display = 'none';
  }
});

