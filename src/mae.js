import './css/style.css';

export const cage = Array.from(document.querySelectorAll('.cage'));

export const addImg = document.createElement('img');
addImg.setAttribute('class', 'goblin');
addImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
const randomCage = Math.floor(Math.random() * 16);
cage[randomCage].appendChild(addImg);

/* Перемещение изображения с помощью setInterval() */

export function addImgInterval() {
  const elem = document.querySelector('div img');
  const indexElem = cage.indexOf(elem.parentElement);

  const randomCage2 = Math.floor(Math.random() * 16);

  if (indexElem !== randomCage2) {
    elem.remove();
    cage[randomCage2].insertBefore(elem, null);
  } else {
    let randomCage3 = 0;
    for (let i = 0; indexElem === randomCage2 && randomCage3 === randomCage2; i += 1) {
      randomCage3 = Math.floor(Math.random() * 16);
    }
    elem.remove();
    cage[randomCage3].insertBefore(elem, null);
  }
}

export default function funSet() {
  setInterval(addImgInterval, 1000);
}
