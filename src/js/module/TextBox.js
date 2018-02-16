class TextBox {
  init() {
    this.doc = document;
    this.counter = this.doc.getElementById('counter');
    this.praise = this.doc.getElementById('praise');
    this.countFunc = this.countFunc.bind(this);
  }
  start() {
    this.textbox = document.getElementById('textBox');
    if (!this.textbox) return;
    this.init();
    this.textbox.addEventListener('input', this.countFunc);
  }
  countFunc() {
    this.length = this.textbox.value.length;
    this.counter.innerHTML = this.length;
  }
  praiseFunc() {
    this.praise.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      this.praise.setAttribute('aria-expanded', 'false');
    }, 3000);
  }
}
export default TextBox;
