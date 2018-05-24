import SliderMain from './slider.js';
import SwitchMenu from './switchMenu.js';

var sliderHome = document.querySelector('.slider__main');
const Slider = new SliderMain(sliderHome);
var header = document.querySelector('.header');
const switchMenu = new SwitchMenu(header);

Slider.run();
switchMenu.run();
