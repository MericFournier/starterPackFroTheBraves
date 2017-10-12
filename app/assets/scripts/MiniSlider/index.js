// import {TweenMax, Expo} from 'gsap';

class MiniSlider {

    constructor (slider)  {
        this.slider = slider;
        this.ui = this.getUI();

        this.sliderWidth = this.slider.offsetWidth;
        this.nbImages = this.ui.item.length-1;
        this.step = 0;
        this.direction = null;
        this.isBusy = false;

        this.bind();
        this.listen();
        this.setSlider();
    }

    getUI() {

        return {
            arrowLeft : this.slider.getElementsByClassName('mini-slider__nav__arrow--left')[0],
            arrowRight : this.slider.getElementsByClassName('mini-slider__nav__arrow--right')[0],
            item : this.slider.getElementsByClassName('mini-slider__item'),
            images : this.slider.getElementsByClassName('mini-slider__item__image'),
            container : this.slider.querySelector('.mini-slider__container')
        }
    }

    bind() { 
        // this.clickArrow = this.clickArrow.bind(this);
        this.listen = this.listen.bind(this);
    }

    listen() {

    }

}

export default MiniSlider