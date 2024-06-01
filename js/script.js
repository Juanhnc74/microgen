$(document).ready(function() {
    var countersAnimated = false;

    function animateCounters() {
      if (countersAnimated) return;
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          easing: 'linear',
          step: function() {
            $this.text('+' + Math.floor(this.countNum));
          },
          complete: function() {
            $this.text('+' + this.countNum);
          }
        });
      });
      countersAnimated = true;
    }

    function checkIfInView() {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var sectionTop = $('#section2').offset().top;
      var sectionBottom = sectionTop + $('#section2').height();

      if (windowBottom >= sectionTop && windowTop <= sectionBottom) {
        animateCounters();
      }
    }

    $(window).on('scroll', checkIfInView);
  });