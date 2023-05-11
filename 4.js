document.addEventListener('DOMContentLoaded', function() {
  var transitionEffect = document.querySelector('.transition-effect');

  var links = document.querySelectorAll('.circular-menu__item');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      transitionEffect.classList.add('active');
      setTimeout(function() {
        window.location.href = href;
      }, 500);
    });
  }
});