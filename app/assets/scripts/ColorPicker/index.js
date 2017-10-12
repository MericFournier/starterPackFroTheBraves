class ColorPicker {

  constructor (product)  {

  	this.product = product

    this.$colorPicker = this.product.querySelectorAll('.color-picker')[0]
    this.$colors = [... this.$colorPicker.querySelectorAll('.color-picker__color')]

    this.setColors()
    this.initEvents()

  }

  setColors () {

  	this.$colors.forEach((color) => {
		const colorData = color.getAttribute('data-color')
		color.style.backgroundColor = `#${colorData}`
		color.style.color = `#${colorData}`
  	})

  }

  initEvents () {

  	this.$colors.forEach((color) => {
		color.addEventListener('click', this.changeActiveColor.bind(this))
  	})

  }

  changeActiveColor (e) {

	const $color = e.target
	const colorData = $color.getAttribute('data-color')

	this.product.setAttribute('data-current-color', colorData)
	
	// DO AJAX CALL TO CHANGE IMG HERE

	const $activeColor = this.product.querySelectorAll('.color-picker__color--active')[0]
	$activeColor.classList.remove('color-picker__color--active')
	$color.classList.add('color-picker__color--active')


  }

}

export default ColorPicker