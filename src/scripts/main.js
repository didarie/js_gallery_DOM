'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');
  const linkHref = link.getAttribute('href');

  largeImg.setAttribute('src', linkHref);
});
