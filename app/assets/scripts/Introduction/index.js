class Introduction {

  constructor (introduction)  {

    this.$container = introduction
    this.$cta = document.querySelector('.intro__cta img')
		this.options = {
			CTA_PATH: 'img/decouvrir.gif',
			DELAY: 1500
		}
    
    setTimeout(() => {
      this.$cta.setAttribute('src',this.options.CTA_PATH)
    }, this.options.DELAY)

  }


}

export default Introduction