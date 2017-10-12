import Flickity from 'Flickity';

class ProductSlider {

  constructor (slider) {

    this.$container  = slider
    this.$slider     = this.$container.querySelectorAll('.product-slider__products')[0]
    this.$prevButton = this.$container.querySelectorAll('.product-slider__prev')[0]
    this.$nextButton = this.$container.querySelectorAll('.product-slider__next')[0]
    this.$prevButtonMobile = this.$container.querySelectorAll('.product-gallery__prev-mobile')[0]
    this.$nextButtonMobile = this.$container.querySelectorAll('.product-gallery__next-mobile')[0]
    this.initSlider()
  }

  initSlider () {

    let options = {
      accessibility: true,
      autoPlay: false,
      cellAlign: 'left',
      cellSelector: '.product',
      draggable: true,
      dragThreshold: 3,
      groupCells: 4,
      initialIndex: 0,
      lazyLoad: true,
      percentPosition: true,
      prevNextButtons: false,
      pageDots: false,
      resize: true,
      rightToLeft: false,
      setGallerySize: true,
      watchCSS: false,
      wrapAround: true
    }

    if (window.innerWidth < 1024) {
      options.groupCells = 1
    }

    const flky = new Flickity( this.$slider, options )

    this.initEvents(flky)
  }

  initEvents (flky) {

    if (window.innerWidth < 1024) {
      this.$prevButtonMobile.addEventListener('click', () => this.slidePrev(flky))
      this.$nextButtonMobile.addEventListener('click', () => this.slideNext(flky))
    } else {
      this.$prevButton.addEventListener('click', () => this.slidePrev(flky))
      this.$nextButton.addEventListener('click', () => this.slideNext(flky))
    }

  }

  slidePrev (flky) {
    flky.pausePlayer()
    flky.previous()
    flky.unpausePlayer()
  }

  slideNext(flky) {
    flky.pausePlayer()
    flky.next()
    flky.unpausePlayer()
  }
}

export default ProductSlider
