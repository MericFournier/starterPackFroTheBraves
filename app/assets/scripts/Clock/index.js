class Clock {

  constructor (clock)  {

    this.$clock = clock
    this.$hoursHand = this.$clock.querySelector('.clock__hour')
    this.$minutesHand = this.$clock.querySelector('.clock__minute')
    this.$secondsHand = this.$clock.querySelector('.clock__second')

    if (window.innerWidth > 767) {
      this.animate()
    }
    

  }

  animate() {

    this.updateTime()
    window.requestAnimationFrame(() => {this.animate()})

  }

  updateTime() {

    //Set variable
    let now = new Date()
    let hoursAngle = parseFloat( (now.getHours() * 15) + (now.getMinutes() * 0.5) + (now.getSeconds() * 0.1) - 90 )
    let minutesAngle = parseFloat( (now.getMinutes() * 6) + ( now.getSeconds() * 0.1) - 90 )
    let secondsAngle = (now.getSeconds() * 6) - 90

    //Set hands
    this.$hoursHand.style.transform = `rotate(${hoursAngle}deg)`
    this.$minutesHand.style.transform = `rotate(${minutesAngle}deg)`
    this.$secondsHand.style.transform = `rotate(${secondsAngle}deg)`

  }

}

export default Clock