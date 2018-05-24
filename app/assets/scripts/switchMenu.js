class SwitchMenu {
  constructor(header) {
    this.container = header;
    this.elements = this.container.querySelectorAll('.mobile__switch');
    this.form = this.container.querySelector('.mobile__switch--form');
    this.nav = this.container.querySelector('.mobile__switch--nav');

    this.selector = this.container.querySelector('.navigation__mobile');
    this.formSelector = this.selector.querySelector('.navigation__mobile__search');
    this.navSelector = this.selector.querySelector('.navigation__mobile__burger');

    console.log(this.elements,this.form, this.nav, this.selector, this.formSelector,this.navSelector );
  }

  hideAll() {
    var that = this;
    for ( var i = 0; i< that.elements.length; i++) {
      console.log(that.elements[i]);
      that.elements[i].classList.add('hidden__element__header')
    }
  }

  show(elem) {
    console.log(elem);
    elem.classList.remove('hidden__element__header');
  }

  run() {
    var that = this;
    this.formSelector.onclick = function() {
      console.log('form');
      that.hideAll();
      that.show(that.form);
    }

    this.navSelector.onclick = function() {
      console.log('nav');
      that.hideAll();
      that.show(that.nav);
    }
  }
}
export default SwitchMenu
