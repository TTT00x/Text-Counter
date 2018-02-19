class TextBox {
  init() {
    this.doc = document;
    this.counter = this.doc.getElementById('counter');
    this.counterManuscript = this.doc.getElementById('counterManuscript');
    this.counterPage = this.doc.getElementById('counterPage');
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
    this.numberOfPaper = Math.ceil(this.length / 400);
    this.numberOfPage = Math.ceil(this.length / 1000);
    this.counter.innerHTML = this.length;
    this.counterManuscript.innerText = this.numberOfPaper;
    this.counterPage.innerText = this.numberOfPage;
  }
}
export default TextBox;
