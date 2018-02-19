class TextBox {
  init() {
    this.doc = document;
    this.counter = this.doc.getElementById('counter');
    this.counterManuscript = this.doc.getElementById('counterManuscript');
    this.praise = this.doc.getElementById('praise');
    this.praiseBtn = this.doc.getElementById('praiseBtn');
    this.countFunc = this.countFunc.bind(this);
    this.praiseFunc = this.praiseFunc.bind(this);
  }
  start() {
    this.textbox = document.getElementById('textBox');
    if (!this.textbox) return;
    this.init();
    this.textbox.addEventListener('input', this.countFunc);
    this.praiseBtn.addEventListener('click', this.praiseFunc);
  }
  countFunc() {
    this.length = this.textbox.value.length;
    this.numberOfPaper = Math.ceil(this.length / 400);
    this.counter.innerHTML = this.length;
    this.counterManuscript.innerText = this.numberOfPaper;
  }
  praiseFunc() {
    this.praise.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      this.praise.setAttribute('aria-expanded', 'false');
    }, 3000);
  }
}
export default TextBox;
