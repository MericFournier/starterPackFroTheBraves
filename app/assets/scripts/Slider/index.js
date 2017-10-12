import Flickity from 'Flickity';

class Slider {

  constructor (slider)  {
    this.$container = slider
    this.$slider = this.$container.querySelectorAll('.slider__slider')[0]
    this.$sliderControls = this.$container.querySelectorAll('.slider__controls ul')[0]
    this.initSlider()
  }

  initSlider () {
    
    const flky = new Flickity( this.$slider, {
      accessibility: true,
      adaptiveHeight: false,
      autoPlay: 4000,
      cellAlign: 'center',
      cellSelector: undefined,
      contain: false,
      draggable: true,
      dragThreshold: 3,
      freeScroll: false,
      groupCells: false,
      initialIndex: 0,
      lazyLoad: true,
      percentPosition: true,
      prevNextButtons: false,
      pageDots: false,
      resize: true,
      rightToLeft: false,
      setGallerySize: true,
      watchCSS: false,
      wrapAround: false
    })

    for (var i = 1; i <= flky.cells.length; i++) {
      const li = document.createElement('li')
      li.setAttribute('data-index', i-1)
      const value = document.createTextNode(i)
      li.appendChild(value)
      this.$sliderControls.appendChild(li)
    }

    this.$slides = this.$container.querySelectorAll('.slider__controls li')

    this.$slides.forEach( $slide => {
      $slide.addEventListener('click', this.updateCurrentSlide.bind(this, flky, $slide))
    })
    
    flky.on('select', this.updateControls.bind(this, flky))
    this.updateControls(flky)

  }

  updateControls (flky) {
    const $slide = this.$slides[flky.selectedIndex]
    const $active = this.$container.querySelectorAll('.slider__controls li.active')[0]
    $slide.classList.add('active')
    if ($active) {
      $active.classList.remove('active')
    }
  }

  updateCurrentSlide (flky, $slide) {

    flky.select($slide.getAttribute('data-index'))

  }

}

export default Slider