class HeaderMobile {

  constructor (header)  {

	this.$container = header
	this.$menuToggler = header.querySelector('.header-mobile__burger')
	this.$menu = header.querySelector('.header-mobile__menu')
	this.$body = document.body
	
	this.initEvents()

  }

  initEvents() {

	this.$menuToggler.addEventListener('click', this.toggleMenu.bind(this))
  	window.addEventListener('resize', this.bindWindowResize.bind(this))
  }

  toggleMenu() {	
  	if (this.$body.classList.contains('menu-open')) {
		this.$body.classList.remove('menu-open')
		this.$menu.classList.remove('header-mobile__menu--open')
	} else {
		this.$body.classList.add('menu-open')
		this.$menu.classList.add('header-mobile__menu--open')
	}
  }

  bindWindowResize() {
  	if (window.matchMedia("(min-width: 1024px)").matches) {
		this.$body.classList.remove('menu-open')
		this.$menu.classList.remove('header-mobile__menu--open')
	}
  }


}

export default HeaderMobile