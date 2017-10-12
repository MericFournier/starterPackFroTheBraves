class Video {

  constructor (video)  {

    this.$video = video
    this.$videoWrapper = video.querySelectorAll('.video__video-wrapper')[0]
    this.$cta = video.querySelectorAll('.video__cta')[0]
    this.$iframe = video.querySelectorAll('iframe')[0]
    this.pageHeight = document.documentElement.offsetHeight
    this.videoWrapperHeight = this.$videoWrapper.offsetHeight
    this.videoWrapperTop = this.$videoWrapper.offsetTop

    this.initEvents()

  }

  initEvents () {

	  this.$cta.addEventListener('click', this.playVideo.bind(this))
    window.addEventListener('scroll', this.scaleVideo.bind(this))

  }

  playVideo (e) {
	
    e.preventDefault()
    const src = this.$iframe.getAttribute('src') + '&autoplay=1'
    this.$iframe.setAttribute('src', src)
    this.$video.classList.add('video--playing')

  }

  scaleVideo () {
    const toVideo = this.videoWrapperTop - window.scrollY

    if (toVideo > -this.videoWrapperHeight && toVideo < this.videoWrapperHeight + 300) {
      //console.log('kappa delimiter')
    }
  }


}

export default Video