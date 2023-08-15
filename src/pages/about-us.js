import { Popup } from '../components/Popup.js';

const popupWithImage = new Popup('.popup_main');
const images =["../images/prospekt-2.jpeg", "../images/prospekt-shop.jpeg", "../images/блокнот.jpeg",];
let mainImage = document.querySelector('.main__image');
mainImage.src = images[0];
mainImage.addEventListener('click', () => {
    popupWithImage.open(mainImage.src)
})
let numberOfMainImage = 0;
const rightExpand = document.querySelector('.main__image-expand_right');
const leftExpand = document.querySelector('.main__image-expand_left');
rightExpand.addEventListener('click', () => {
    if(numberOfMainImage < images.length-1){
        numberOfMainImage++
    }
    mainImage.src = images[numberOfMainImage]
})
leftExpand.addEventListener('click', () => {
    if(numberOfMainImage > 0){
        numberOfMainImage--
    }
    mainImage.src = images[numberOfMainImage]
})
popupWithImage.setEventListeners();