document.addEventListener('DOMContentLoaded', function() {
    var transitionEffect = document.createElement('div');
    transitionEffect.classList.add('transition-effect');
    var content = document.createElement('div');
    content.classList.add('content');
    transitionEffect.appendChild(content);
    document.body.appendChild(transitionEffect);
  
    var links = document.querySelectorAll('.menu-item');
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