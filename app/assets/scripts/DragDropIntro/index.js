import {TweenLite, Power4} from 'gsap';
import Draggable from 'Draggable';

class DragDropIntro {
  constructor () {
    this.draggableContainer = document.querySelector('.drag-container')
    this.draggableElem = document.querySelector('.drag-drop__top')
    this.targetElem    = document.querySelector('.lower-half')
    this.transitionContainer = document.querySelector('.page-transition')
    this.transitionCircle = document.querySelector('.page-transition__circle')
    this.initDrag()
  }
  
  initDrag () {
    const that = this
    const overlapThreshold = '50%'
    const dragHeight = this.draggableContainer.scrollHeight - 20

    Draggable.create(this.draggableElem, {
      bounds: this.draggableContainer,
      type: "y",
      dragResistance: 0.2,
      onDragEnd: function (e) {
        if (this.hitTest(that.targetElem, overlapThreshold)) {
          TweenLite.to(that.draggableElem, 1, {
            y: dragHeight + 10,
            ease: Power4.easeOut,
            onComplete: () => {
              that.pageTransition()
            }
          })
        } else {
          TweenLite.to(that.draggableElem, 1, {
            y: 0,
            ease: Power4.easeOut
          })
        }
      }
    })
  }

  pageTransition () {
    const circleMaxSize = window.outerWidth * 1.5

    TweenLite.set(this.transitionContainer, {css:{zIndex:999, visibility: 'visible'}})
    TweenLite.to(this.transitionCircle, 1, {width: circleMaxSize, height: circleMaxSize})
  }
}

export default DragDropIntro