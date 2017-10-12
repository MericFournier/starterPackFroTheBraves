import {Draggable, TweenLite, Power4} from 'gsap';
import Flickity from 'Flickity';

class Bands {

  constructor (bands)  {

    this.$bands = [... bands.querySelectorAll('.bands__band')]
    this.$bandsChildrenCount = this.$bands[0].children
    this.$activeBands = [... bands.querySelectorAll('.bands__bands .active')]
    this.$nextBands = [... bands.querySelectorAll('.bands__bands .next')]
    this.draggableContainer = bands.querySelector('.drag-container')
    this.draggableElem = bands.querySelector('.drag-drop__top')
    this.targetElem    = bands.querySelector('.lower-half')
    this.$bandsSlider  = bands.querySelector('.bands__slider')
    this.$prevButton   = bands.querySelector('.bands__prev-slider')
    this.$nextButton   = bands.querySelector('.bands__next-slider')

    this.initDrag()
    this.initEvents()
    this.bindWindowResize()

  }

  initDrag () {
    const that = this
    const overlapThreshold = '50%'
    const dragHeight = this.draggableContainer.scrollHeight - 20

    Draggable.create(this.draggableElem, {
      bounds: this.draggableContainer,
      type: "y",
      dragResistance: 0.2,
      onDrag: function (e) {
        const yPercent = this.y / dragHeight * 100
        that.updateBands(yPercent)
      },
      onDragEnd: function (e) {
        if (this.hitTest(that.targetElem, overlapThreshold)) {
          TweenLite.to(that.draggableElem, 1, {
            y: dragHeight + 10,
            ease: Power4.easeOut,
            onComplete: () => {
              let currentIndex = [].indexOf.call(that.$bandsChildrenCount, that.$nextBands[0])

              if (currentIndex >= that.$bandsChildrenCount.length - 1) {
                currentIndex = -1
              }

              console.log(currentIndex)

              that.$activeBands.forEach( $activeBand => {
                $activeBand.style.height = '0%'
                $activeBand.classList.remove('active')
              })
              that.$nextBands.forEach( $nextBand => { 
                $nextBand.classList.add('active')
                $nextBand.classList.remove('next')
              })
              that.$bands.forEach( $band => {
                const nextBand = $band.querySelectorAll('img')[currentIndex + 1]
                nextBand.classList.add('next')
              })
              that.$nextBands = [... document.querySelectorAll('.bands__bands .next')]
              that.$activeBands = [... document.querySelectorAll('.bands__bands .active')]
            }
          })
          TweenLite.to(that.draggableElem, 1, {
            delay: 1,
            y: 0,
            ease: Power4.easeOut
          })
          that.updateBands(100)
        } else {
          TweenLite.to(that.draggableElem, 1, {
            y: 0,
            ease: Power4.easeOut
          })
          that.updateBands(0)
        }
      }
    })
  }

  initEvents () {

    window.addEventListener('resize', () => this.bindWindowResize.bind(this))

  }

  updateBands(position) {
	this.$nextBands.forEach( $band => {
    TweenLite.to($band, 1, {
      height: `${position}%`,
      ease: Power4.easeOut
    })
	})
  }

  bindWindowResize() {

    const that = this

    if (window.matchMedia("(max-width: 1023px)").matches) {
      setTimeout(() => { 
        that._initMobileSlider()
      }, 1000)
    }
  }

  _initMobileSlider() {

    const flky = new Flickity( this.$bandsSlider, {
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
      wrapAround: true
    })

    this.initSliderEvents(flky)
  }

  initSliderEvents (flky) {

    this.$prevButton.addEventListener('click', () => this.slidePrev(flky))
    this.$nextButton.addEventListener('click', () => this.slideNext(flky))
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

export default Bands
