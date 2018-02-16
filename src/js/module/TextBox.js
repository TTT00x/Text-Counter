class TextBox {
  init() {
    this.doc = document;
    this.counter = this.doc.getElementById('counter');
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
}
export default TextBox;
