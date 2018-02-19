import TextBox from './module/TextBox';
import Praise from './module/Praise';

window.onload = () => {
  const textBox = new TextBox();
  const praise = new Praise();

  textBox.start();
  praise.start();
};
