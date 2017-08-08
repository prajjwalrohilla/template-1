
$(document).ready(function(){
 
//$('.wrapper-top-layer').hide();
  
$('.second-sec').addClass('animated zoomIn');


  $('.inner-sec-wrapper').hide();
 

  $('.ima').hover(function(){
  $('.second-sec').removeClass('animated zoomIn');
    $(this).addClass('animated hinge');


  }, function(){
    $(this).removeClass('animated hinge');
    
          }

  );



$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 160) {

 $('.inner-sec-wrapper').addClass('animated rollIn');
   $('.inner-sec-wrapper').show();


  } else {

     $('.inner-sec-wrapper').removeClass('animated rollIn');
      $('.inner-sec-wrapper').hide();
  }

if (y > 500) {

 $('.projects-wrapper').addClass('animated flipInY');
   $('.projects-wrapper').show();


  } else {
    
     $('.projects-wrapper').removeClass('animated flipInY');
      $('.projects-wrapper').hide();
  }

});



 setTimeout(function(){ 


  $('.second-sec').removeClass('animated zoomIn');
 /*
   $('.wrapper-top-layer').addClass('animated zoomInRight');
   $('.wrapper-top-layer').show();
*/
 


  }, 1000);

});





/*particle js*/

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },

    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": "repulse",
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

