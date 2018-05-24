class SliderMain {
  constructor(slider) {
    if ( !slider ) {
      console.log('pas de slider ici');
      return;
    }
    this.slider = slider;
    this.views = this.slider.querySelectorAll('.item__view');
    this.items = this.slider.querySelectorAll('.slider__item');
    this.iteration = 0;
    this.duration = 6000;
    this.playing = true;
    if ( !this.verify) {
      console.log('erreur');
      return;
    }
  }



  static aleat() {
    return 10;
  }

  verify() {
    if (this.views.length !== this.items.length) {
      return false;
    } else {
      return true;
    }
  }

  // initialise le player
  play() {
    var that = this;
    var validate = that.verify();
    if ( !validate ) {
      return false;
    }
    else {
      that.run();
    }
  }

  // itération
  iterator() {
    if (this.iteration == this.views.length - 1) {
      this.iteration = 0;
    } else {
      this.iteration += 1;
    }
  }

  removeClass(element,classname) {
    element.classList.remove(classname);
  }






  run() {
    var that = this;
    var running = setInterval(function() {
      if (that.playing) {
        // iterator # 00:00
        // add class --playing  to the actual items__view # 00:00
        // add class --enter  to the actual items__view # 00:00
        // remove class --enter add class --out to the actual items__view # 04:00
        // remove class --out to the actual items__view # 06:00


        setTimeout(function() {
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

        setTimeout(function() {
            // remove class enter à la view
            that.views[that.iteration].classList.remove('item__view--enter');
          }, 2000);

        setTimeout(function() {
            // ajoute la class out à la view
            that.views[that.iteration].classList.add('item__view--out');
          }, 4000);

        setTimeout(function() {
            // retire la class out à la view
            that.views[that.iteration].classList.remove('item__view--out');
          }, 6000);
      }
    }, this.duration);
  }

  handler() {
    var that = this;
    var caption = this.views[this.iteration].querySelector('.slider__caption');
    //console.log(caption);
    caption.onmouseover = function() {
      that.playing = false;
      //console.log("stop");
      that.views[that.iteration].classList.add('item__view--paused');
      clearInterval(that.running);
    }
    caption.onmouseout = function() {
      that.playing = true;
      //console.log("replay");
      that.views[that.iteration].classList.remove('item__view--paused');
    }
  }

}

export default SliderMain
