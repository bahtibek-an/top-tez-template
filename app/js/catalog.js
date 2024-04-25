

$(document).ready(function() {
    $('.catalog__dropdown-item-toggle').click( function(e) {
        e.preventDefault();
        let _this = this;
        $(".catalog__dropdown-item-toggle").each(function() {
            if(_this != this) {
                $(this).next('.catalog__dropdown-sublist').slideUp('slow');
                $(this).removeClass("dropdown_opened");
            }
        })
        if($(this).hasClass("dropdown_opened")) {
            $(this).next('.catalog__dropdown-sublist').slideUp('slow');
            $(this).removeClass("dropdown_opened");
            return;
        }
        $(this).addClass("dropdown_opened");
        $(this).next('.catalog__dropdown-sublist').slideDown('slow');
    });

});

$(function() {

    function imageZoom( img, result, lens ) {
        result.width( img.innerWidth() ); result.height( img.innerHeight() );
        lens.width( img.innerWidth() / 3 ); lens.height( img.innerHeight() / 3 );
    
        result.offset({ top: img.offset().top, left: img.offset().left + img.outerWidth() + 10 });
    
        var cx = img.innerWidth() / lens.innerWidth(); var cy = img.innerHeight() / lens.innerHeight();
    
        result.css('background-image', 'url(' + img[0].src + ')');
        result.css('background-size', img.width() * cx + 'px ' + img.height() * cy + 'px');
    
        lens.mousemove(function(e) { moveLens(e); });
        img.mousemove(function(e) { moveLens(e); });
        lens.on('touchmove', function() { moveLens(); })
        img.on('touchmove', function() { moveLens(); })
    
        function moveLens(e) {
            var x = e.clientX - lens.outerWidth() / 2;
            var y = e.clientY - lens.outerHeight() / 2;
            if ( x > img.outerWidth() + img.offset().left - lens.outerWidth() ) { x = img.outerWidth() + img.offset().left - lens.outerWidth(); }
            if ( x < img.offset().left ) { x = img.offset().left; }
            if ( y > img.outerHeight() + img.offset().top - lens.outerHeight() ) { y = img.outerHeight() + img.offset().top - lens.outerHeight(); }
            if ( y < img.offset().top ) { y = img.offset().top; }
            lens.offset({ top: y, left: x });
            result.css('background-position', '-' + ( x - img.offset().left ) * cx  + 'px -' + ( y - img.offset().top ) * cy + 'px');
        }
    }
  

    function eventMouse(elem, callbackIn, callbackOut) {
        let element;
        if (typeof elem === 'string') {
          element = document.querySelector(elem);
        } else if (typeof elem === 'object') {
          element = elem;
        }
        const elementPos = element.getBoundingClientRect();
        let isCursorInside = false;
        let isCallbackOutTriggered = false;
      
        document.addEventListener('mousemove', function (e) {
          if (
            e.clientY >= elementPos.y &&
            e.clientX >= elementPos.x &&
            e.clientY <= elementPos.y + elementPos.height &&
            e.clientX <= elementPos.x + elementPos.width
          ) {
            if (!isCursorInside) {
              isCursorInside = true;
              isCallbackOutTriggered = false;
              callbackIn();
            }
            return;
          }
      
          if (isCursorInside && !isCallbackOutTriggered) {
            isCursorInside = false;
            isCallbackOutTriggered = true;
            callbackOut();
          }
        });
    }

    if (!window.matchMedia("(max-width: 700px)").matches) 
      eventMouse(
          '.product-detail__main-image-slider-item-img',
          function() {
              $('#lens').show(); $('#result').show();
              imageZoom( $('.product-detail__main-image-slider-item-img'), $('#result'), $('#lens') )
          },
          function() {
              $('#lens').hide(); $('#result').hide();
          }
      )
});
