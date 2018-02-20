particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var close = document.getElementById('close');

close.onclick = function closePopup() {
  var popup = document.getElementById('message');
  popup.remove();
};