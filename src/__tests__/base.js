import { cage, addImgInterval } from '../mae';

test('two identical indexes', () => {
  addImgInterval();
  const elem = document.querySelector('div img');
  const indexElem = cage.indexOf(elem.parentElement);

  let indexElem1;

  setTimeout(() => {
    addImgInterval();
    const elem1 = document.querySelector('div img');
    indexElem1 = cage.indexOf(elem1.parentElement);
  }, 1000);

  expect(indexElem === indexElem1).toBe(false);
});
