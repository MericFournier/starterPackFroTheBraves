(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

<<<<<<< HEAD
var _slider = require('./slider.js');

var _slider2 = _interopRequireDefault(_slider);

var _switchMenu = require('./switchMenu.js');

var _switchMenu2 = _interopRequireDefault(_switchMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderHome = document.querySelector('.slider__main');
var Slider = new _slider2.default(sliderHome);
var header = document.querySelector('.header');
var switchMenu = new _switchMenu2.default(header);

Slider.run();
switchMenu.run();

},{"./slider.js":2,"./switchMenu.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderMain = function () {
  function SliderMain(slider) {
    _classCallCheck(this, SliderMain);

    if (!slider) {
      console.log('pas de slider ici');
      return;
    }
    this.slider = slider;
    this.views = this.slider.querySelectorAll('.item__view');
    this.items = this.slider.querySelectorAll('.slider__item');
    this.iteration = 0;
    this.duration = 6000;
    this.playing = true;
    if (!this.verify) {
      console.log('erreur');
      return;
    }
  }

  _createClass(SliderMain, [{
    key: 'verify',
    value: function verify() {
      if (this.views.length !== this.items.length) {
        return false;
      } else {
        return true;
      }
    }

    // initialise le player

  }, {
    key: 'play',
    value: function play() {
      var that = this;
      var validate = that.verify();
      if (!validate) {
        return false;
      } else {
        that.run();
      }
    }

    // itération

  }, {
    key: 'iterator',
    value: function iterator() {
      if (this.iteration == this.views.length - 1) {
        this.iteration = 0;
      } else {
        this.iteration += 1;
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(element, classname) {
      element.classList.remove(classname);
    }
  }, {
    key: 'run',
    value: function run() {
      var that = this;
      var running = setInterval(function () {
        if (that.playing) {
          // iterator # 00:00
          // add class --playing  to the actual items__view # 00:00
          // add class --enter  to the actual items__view # 00:00
          // remove class --enter add class --out to the actual items__view # 04:00
          // remove class --out to the actual items__view # 06:00


          setTimeout(function () {
            // iterator
            that.iterator();
            // prise en compte des événements
            that.handler();
            // remove class à l'ancienne slide
            that.slider.querySelector('.item__view--playing').classList.remove('item__view--playing');
            that.slider.querySelector('.item__active').classList.remove('item__active');
            // ajoute class à slide actuelle
            that.views[that.iteration].classList.add('item__view--playing');
            that.views[that.iteration].classList.add('item__view--enter');
            that.items[that.iteration].classList.add('item__active');
          }, 0);

          setTimeout(function () {
            // remove class enter à la view
            that.views[that.iteration].classList.remove('item__view--enter');
          }, 2000);

          setTimeout(function () {
            // ajoute la class out à la view
            that.views[that.iteration].classList.add('item__view--out');
          }, 4000);

          setTimeout(function () {
            // retire la class out à la view
            that.views[that.iteration].classList.remove('item__view--out');
          }, 6000);
        }
      }, this.duration);
    }
  }, {
    key: 'handler',
    value: function handler() {
      var that = this;
      var caption = this.views[this.iteration].querySelector('.slider__caption');
      //console.log(caption);
      caption.onmouseover = function () {
        that.playing = false;
        //console.log("stop");
        that.views[that.iteration].classList.add('item__view--paused');
        clearInterval(that.running);
      };
      caption.onmouseout = function () {
        that.playing = true;
        //console.log("replay");
        that.views[that.iteration].classList.remove('item__view--paused');
      };
    }
  }], [{
    key: 'aleat',
    value: function aleat() {
      return 10;
    }
  }]);

  return SliderMain;
}();

exports.default = SliderMain;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SwitchMenu = function () {
  function SwitchMenu(header) {
    _classCallCheck(this, SwitchMenu);

    this.container = header;
    this.elements = this.container.querySelectorAll('.mobile__switch');
    this.form = this.container.querySelector('.mobile__switch--form');
    this.nav = this.container.querySelector('.mobile__switch--nav');

    this.selector = this.container.querySelector('.navigation__mobile');
    this.formSelector = this.selector.querySelector('.navigation__mobile__search');
    this.navSelector = this.selector.querySelector('.navigation__mobile__burger');

    console.log(this.elements, this.form, this.nav, this.selector, this.formSelector, this.navSelector);
  }

  _createClass(SwitchMenu, [{
    key: 'hideAll',
    value: function hideAll() {
      var that = this;
      for (var i = 0; i < that.elements.length; i++) {
        console.log(that.elements[i]);
        that.elements[i].classList.add('hidden__element__header');
      }
    }
  }, {
    key: 'show',
    value: function show(elem) {
      console.log(elem);
      elem.classList.remove('hidden__element__header');
    }
  }, {
    key: 'run',
    value: function run() {
      var that = this;
      this.formSelector.onclick = function () {
        console.log('form');
        that.hideAll();
        that.show(that.form);
      };

      this.navSelector.onclick = function () {
        console.log('nav');
        that.hideAll();
        that.show(that.nav);
      };
    }
  }]);

  return SwitchMenu;
}();

exports.default = SwitchMenu;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwiYXBwL2Fzc2V0cy9zY3JpcHRzL3NsaWRlci5qcyIsImFwcC9hc3NldHMvc2NyaXB0cy9zd2l0Y2hNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLGFBQWEsU0FBUyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsSUFBTSxTQUFTLElBQUksZ0JBQUosQ0FBZSxVQUFmLENBQWY7QUFDQSxJQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxJQUFNLGFBQWEsSUFBSSxvQkFBSixDQUFlLE1BQWYsQ0FBbkI7O0FBRUEsT0FBTyxHQUFQO0FBQ0EsV0FBVyxHQUFYOzs7Ozs7Ozs7Ozs7O0lDVE0sVTtBQUNKLHNCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsUUFBSyxDQUFDLE1BQU4sRUFBZTtBQUNiLGNBQVEsR0FBUixDQUFZLG1CQUFaO0FBQ0E7QUFDRDtBQUNELFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixhQUE3QixDQUFiO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBSyxNQUFMLENBQVksZ0JBQVosQ0FBNkIsZUFBN0IsQ0FBYjtBQUNBLFNBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxRQUFLLENBQUMsS0FBSyxNQUFYLEVBQW1CO0FBQ2pCLGNBQVEsR0FBUixDQUFZLFFBQVo7QUFDQTtBQUNEO0FBQ0Y7Ozs7NkJBUVE7QUFDUCxVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsS0FBc0IsS0FBSyxLQUFMLENBQVcsTUFBckMsRUFBNkM7QUFDM0MsZUFBTyxLQUFQO0FBQ0Qs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LEdBQTRCLFlBQVc7QUFDckMsZ0JBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxhQUFLLE9BQUw7QUFDQSxhQUFLLElBQUwsQ0FBVSxLQUFLLElBQWY7QUFDRCxPQUpEOztBQU1BLFdBQUssV0FBTCxDQUFpQixPQUFqQixHQUEyQixZQUFXO0FBQ3BDLGdCQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsYUFBSyxPQUFMO0FBQ0EsYUFBSyxJQUFMLENBQVUsS0FBSyxHQUFmO0FBQ0QsT0FKRDtBQUtEOzs7Ozs7a0JBRVksVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBTbGlkZXJNYWluIGZyb20gJy4vc2xpZGVyLmpzJztcbmltcG9ydCBTd2l0Y2hNZW51IGZyb20gJy4vc3dpdGNoTWVudS5qcyc7XG5cbnZhciBzbGlkZXJIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbWFpbicpO1xuY29uc3QgU2xpZGVyID0gbmV3IFNsaWRlck1haW4oc2xpZGVySG9tZSk7XG52YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3Qgc3dpdGNoTWVudSA9IG5ldyBTd2l0Y2hNZW51KGhlYWRlcik7XG5cblNsaWRlci5ydW4oKTtcbnN3aXRjaE1lbnUucnVuKCk7XG4iLCJjbGFzcyBTbGlkZXJNYWluIHtcbiAgY29uc3RydWN0b3Ioc2xpZGVyKSB7XG4gICAgaWYgKCAhc2xpZGVyICkge1xuICAgICAgY29uc29sZS5sb2coJ3BhcyBkZSBzbGlkZXIgaWNpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICAgIHRoaXMudmlld3MgPSB0aGlzLnNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbV9fdmlldycpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19pdGVtJyk7XG4gICAgdGhpcy5pdGVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSA2MDAwO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgaWYgKCAhdGhpcy52ZXJpZnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJldXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuXG5cbiAgc3RhdGljIGFsZWF0KCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBpZiAodGhpcy52aWV3cy5sZW5ndGggIT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluaXRpYWxpc2UgbGUgcGxheWVyXG4gIHBsYXkoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciB2YWxpZGF0ZSA9IHRoYXQudmVyaWZ5KCk7XG4gICAgaWYgKCAhdmFsaWRhdGUgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhhdC5ydW4oKTtcbiAgICB9XG4gIH1cblxuICAvLyBpdMOpcmF0aW9uXG4gIGl0ZXJhdG9yKCkge1xuICAgIGlmICh0aGlzLml0ZXJhdGlvbiA9PSB0aGlzLnZpZXdzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuaXRlcmF0aW9uID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVyYXRpb24gKz0gMTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVDbGFzcyhlbGVtZW50LGNsYXNzbmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc25hbWUpO1xuICB9XG5cblxuXG5cblxuXG4gIHJ1bigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHJ1bm5pbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGF0LnBsYXlpbmcpIHtcbiAgICAgICAgLy8gaXRlcmF0b3IgIyAwMDowMFxuICAgICAgICAvLyBhZGQgY2xhc3MgLS1wbGF5aW5nICB0byB0aGUgYWN0dWFsIGl0ZW1zX192aWV3ICMgMDA6MDBcbiAgICAgICAgLy8gYWRkIGNsYXNzIC0tZW50ZXIgIHRvIHRoZSBhY3R1YWwgaXRlbXNfX3ZpZXcgIyAwMDowMFxuICAgICAgICAvLyByZW1vdmUgY2xhc3MgLS1lbnRlciBhZGQgY2xhc3MgLS1vdXQgdG8gdGhlIGFjdHVhbCBpdGVtc19fdmlldyAjIDA0OjAwXG4gICAgICAgIC8vIHJlbW92ZSBjbGFzcyAtLW91dCB0byB0aGUgYWN0dWFsIGl0ZW1zX192aWV3ICMgMDY6MDBcblxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpdGVyYXRvclxuICAgICAgICAgICAgdGhhdC5pdGVyYXRvcigpO1xuICAgICAgICAgICAgLy8gcHJpc2UgZW4gY29tcHRlIGRlcyDDqXbDqW5lbWVudHNcbiAgICAgICAgICAgIHRoYXQuaGFuZGxlcigpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGNsYXNzIMOgIGwnYW5jaWVubmUgc2xpZGVcbiAgICAgICAgICAgIHRoYXQuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX192aWV3LS1wbGF5aW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbV9fdmlldy0tcGxheWluZycpO1xuICAgICAgICAgICAgdGhhdC5zbGlkZXIucXVlcnlTZWxlY3RvcignLml0ZW1fX2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW1fX2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gYWpvdXRlIGNsYXNzIMOgIHNsaWRlIGFjdHVlbGxlXG4gICAgICAgICAgICB0aGF0LnZpZXdzW3RoYXQuaXRlcmF0aW9uXS5jbGFzc0xpc3QuYWRkKCdpdGVtX192aWV3LS1wbGF5aW5nJyk7XG4gICAgICAgICAgICB0aGF0LnZpZXdzW3RoYXQuaXRlcmF0aW9uXS5jbGFzc0xpc3QuYWRkKCdpdGVtX192aWV3LS1lbnRlcicpO1xuICAgICAgICAgICAgdGhhdC5pdGVtc1t0aGF0Lml0ZXJhdGlvbl0uY2xhc3NMaXN0LmFkZCgnaXRlbV9fYWN0aXZlJyk7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjbGFzcyBlbnRlciDDoCBsYSB2aWV3XG4gICAgICAgICAgICB0aGF0LnZpZXdzW3RoYXQuaXRlcmF0aW9uXS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtX192aWV3LS1lbnRlcicpO1xuICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBham91dGUgbGEgY2xhc3Mgb3V0IMOgIGxhIHZpZXdcbiAgICAgICAgICAgIHRoYXQudmlld3NbdGhhdC5pdGVyYXRpb25dLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3ZpZXctLW91dCcpO1xuICAgICAgICAgIH0sIDQwMDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyByZXRpcmUgbGEgY2xhc3Mgb3V0IMOgIGxhIHZpZXdcbiAgICAgICAgICAgIHRoYXQudmlld3NbdGhhdC5pdGVyYXRpb25dLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW1fX3ZpZXctLW91dCcpO1xuICAgICAgICAgIH0sIDYwMDApO1xuICAgICAgfVxuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbiAgaGFuZGxlcigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGNhcHRpb24gPSB0aGlzLnZpZXdzW3RoaXMuaXRlcmF0aW9uXS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19jYXB0aW9uJyk7XG4gICAgLy9jb25zb2xlLmxvZyhjYXB0aW9uKTtcbiAgICBjYXB0aW9uLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJzdG9wXCIpO1xuICAgICAgdGhhdC52aWV3c1t0aGF0Lml0ZXJhdGlvbl0uY2xhc3NMaXN0LmFkZCgnaXRlbV9fdmlldy0tcGF1c2VkJyk7XG4gICAgICBjbGVhckludGVydmFsKHRoYXQucnVubmluZyk7XG4gICAgfVxuICAgIGNhcHRpb24ub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhhdC5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyZXBsYXlcIik7XG4gICAgICB0aGF0LnZpZXdzW3RoYXQuaXRlcmF0aW9uXS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtX192aWV3LS1wYXVzZWQnKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJNYWluXG4iLCJjbGFzcyBTd2l0Y2hNZW51IHtcbiAgY29uc3RydWN0b3IoaGVhZGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBoZWFkZXI7XG4gICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGVfX3N3aXRjaCcpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVfX3N3aXRjaC0tZm9ybScpO1xuICAgIHRoaXMubmF2ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm1vYmlsZV9fc3dpdGNoLS1uYXYnKTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbW9iaWxlJyk7XG4gICAgdGhpcy5mb3JtU2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19tb2JpbGVfX3NlYXJjaCcpO1xuICAgIHRoaXMubmF2U2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19tb2JpbGVfX2J1cmdlcicpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cyx0aGlzLmZvcm0sIHRoaXMubmF2LCB0aGlzLnNlbGVjdG9yLCB0aGlzLmZvcm1TZWxlY3Rvcix0aGlzLm5hdlNlbGVjdG9yICk7XG4gIH1cblxuICBoaWRlQWxsKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGk8IHRoYXQuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQuZWxlbWVudHNbaV0pO1xuICAgICAgdGhhdC5lbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW5fX2VsZW1lbnRfX2hlYWRlcicpXG4gICAgfVxuICB9XG5cbiAgc2hvdyhlbGVtKSB7XG4gICAgY29uc29sZS5sb2coZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5fX2VsZW1lbnRfX2hlYWRlcicpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmZvcm1TZWxlY3Rvci5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybScpO1xuICAgICAgdGhhdC5oaWRlQWxsKCk7XG4gICAgICB0aGF0LnNob3codGhhdC5mb3JtKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdlNlbGVjdG9yLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCduYXYnKTtcbiAgICAgIHRoYXQuaGlkZUFsbCgpO1xuICAgICAgdGhhdC5zaG93KHRoYXQubmF2KTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaE1lbnVcbiJdfQ==
=======
console.log('Bonjour');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLEdBQVIsQ0FBWSxTQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnNvbGUubG9nKCdCb25qb3VyJyk7XG4iXX0=
>>>>>>> 2373646884f4b6cf762123f53a15ae35d436ed4b
