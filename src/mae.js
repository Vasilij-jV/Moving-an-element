import './css/style.css';
import differentRandom, { generator } from './mae2';

export const cage = Array.from(document.querySelectorAll('.cage'));

export const addImg = document.createElement('img');
addImg.setAttribute('class', 'goblin');
addImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
const randomCage = differentRandom(generator);
cage[randomCage].appendChild(addImg);

/* Перемещение изображения с помощью setInterval() */

export function addImgInterval() {
  const elem = document.querySelector('div img');
  const randomCage2 = differentRandom(generator);
  elem.remove();
  cage[randomCage2].insertBefore(elem, null);
}

export default function funSet() {
  setInterval(addImgInterval, 1000);
}
