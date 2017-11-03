'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.js_slider');
  var dotContainer = slider.querySelector('.slider_navigation_dots');
  var templateListItem = document.createElement('li');

  function handleEvents(e) {
    if (e.type === 'before.lory.init') {
      for (var i = 0, len = slider.querySelectorAll('.js_slide').length; i < len; i++) {if (window.CP.shouldStopExecution(1)){break;}
        dotContainer.appendChild(templateListItem.cloneNode());
      }
window.CP.exitedLoop(1);

      dotContainer.childNodes[0].classList.add('active');
    }
    if (e.type === 'after.lory.slide') {
      for (var i = 0, len = dotContainer.childNodes.length; i < len; i++) {if (window.CP.shouldStopExecution(2)){break;}
        dotContainer.childNodes[i].classList.remove('active');
      }
window.CP.exitedLoop(2);

      dotContainer.childNodes[e.detail.currentSlide - 1].classList.add('active');
    }
  }

  slider.addEventListener('before.lory.init', handleEvents);
  slider.addEventListener('after.lory.slide', handleEvents);

  var lorySlider = lory(slider, {
    infinite: 1
  });
});