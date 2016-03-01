$(function() {
    var slider = {
        slideInterval: 5000,
        controlSelector: '.slide-control',
        slideSelector: '.slide',
        slide: function(slides, currentSlide) {
            slides.css('transform', 'translate3d(-' + currentSlide * 100 + '%, 0, 0)');
        },
        init: function() {
            var currentSlide = 0,
                slides = $(this.slideSelector),
                slideControl = $(this.controlSelector),
                slidesCount = slides.length,
                direction = 'up';

            slideControl.on('click', function() {
                var self = $(this);

                if (self.hasClass('prev')) {
                    if (currentSlide - 1 >= 0) {
                        currentSlide -= 1;

                        slider.slide(slides, currentSlide);
                    }
                }

                if (self.hasClass('next')) {
                    if (currentSlide + 1 < slidesCount) {
                        currentSlide += 1;

                        slider.slide(slides, currentSlide);
                    }
                }
            });

            setInterval(function() {
                if (currentSlide + 1 >= slidesCount) {
                    direction = 'down';
                }

                if (currentSlide <= 0) {
                    direction = 'up';
                }

                switch (direction) {
                    case 'up':
                        currentSlide += 1;
                        break;
                    case 'down':
                        currentSlide -= 1;
                        break;
                    default: console.warn('Invalid slide direction');
                }

                slider.slide(slides, currentSlide);
            }, this.slideInterval);
        }
    };

    $(function() {
        slider.init();
    })
});