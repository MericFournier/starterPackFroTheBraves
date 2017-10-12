class Header {

  constructor (header)  {

		this.$container = header
		this.$textLoop = [... this.$container.querySelectorAll('.header__text-loop li')]
		this.initLoop()

  }

  initLoop () {

  	this.$textLoop[0].classList.add('active')
  	setInterval( this.changeCurrentText.bind(this), 3000)

  }

  changeCurrentText () {

  	let next
  	let $current

	this.$textLoop.forEach( ($item, index) => {
		if ($item.classList.contains('active')) {
			next = index + 1
			if (next == this.$textLoop.length){
				next = 0
			}
			$current = $item
			return
		}	
	})

	$current.classList.remove('active')
	this.$textLoop[next].classList.add('active')


  }

}

export default Header