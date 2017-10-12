import Waypoint from 'Waypoint'

class ParagraphAnimation {

  constructor (container) {
    this.$container = container
    this.content = document.querySelector('.blockquote__content')
    this.parseParagraph()
  }

  parseParagraph () {
    const initialContent = this.content.innerHTML.trim()
    const words = initialContent.split(' ')
    const wrappedWords = words
      .filter(word => (word && word !== '\n'))
      .map(word => (`<span class="blockquote__word">${word}</span>`))
      .join(' ')

    this.content.innerHTML = wrappedWords
    this.$wrappedWords = [... document.querySelectorAll('.blockquote__word')]

    const SPAN_CLASS     = 'line--'
    const spans          = document.querySelectorAll('.blockquote__content span')
    let currentOffsetTop = spans[0].offsetTop
    let currentLine      = 1
    let spanClass        = SPAN_CLASS + currentLine

    spans.forEach(span => {
      const offsetTop = span.offsetTop

      // span on the same line
      if (currentOffsetTop === offsetTop) {
        span.classList.add(spanClass)
      }

      // span not on the same line, increment the line count and add new class
      else if (currentOffsetTop < offsetTop) {
        currentLine = currentLine + 1
        spanClass = SPAN_CLASS + currentLine
        span.classList.add(spanClass)
        currentOffsetTop = offsetTop
      }

    })

    this.content.style.fontFamily = 'Din Light'
    this.content.style.fontSize = '13px'

    this.initWaypoints()
  }

  initWaypoints () {
    new Waypoint({
      element: this.content,
      offset: '70%',
      handler: () => this.content.classList.add('is-visible')
    })
  }
}

export default ParagraphAnimation
