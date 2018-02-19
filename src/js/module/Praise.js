class Praise {
  init() {
    this.doc = document;
    this.praise = this.doc.getElementById('praise');
    this.praiseWord = this.doc.getElementById('praiseWord');
    this.words = ['すごい', '天才か', '本にしよう'];
    this.show = this.show.bind(this);
  }
  start() {
    this.praiseBtn = document.getElementById('praiseBtn');
    if (!this.praiseBtn) return;
    this.init();
    this.praiseBtn.addEventListener('click', this.show);
  }
  show() {
    this.selectWords();
    this.praise.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      this.praise.setAttribute('aria-expanded', 'false');
    }, 3000);
  }
  selectWords() {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.praiseWord.innerHTML = this.word;
  }
}
export default Praise;
