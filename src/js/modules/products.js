import { EffectCards } from "swiper";

export function Products() {


/* Show and hide the total price. */

const totalPrice = document.querySelector('.bin-total');

document.querySelector('.bin-link').onmouseover = () => {
    totalPrice.style.opacity = '1';
    }
document.onclick = (e) => {
        if(e.target.className != 'bin-link') {
            totalPrice.style.opacity = '0';
        }
    }


/*
    Cards are hidden in the mobile version. Click the button bellow to show more cards.
*/
const cards = document.querySelectorAll('.card-item');
const btnIcon = document.querySelector('.btn-update-svg');
const btnUpdate = document.querySelector('.btn-update');
const mediaQueryMax = matchMedia('(min-width: 1024px)');
let cardNone;

function cardHidden() {
    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].display = 'none') {
            cardNone = parseInt(cards.length) / 2;
            }
            console.log(cardNone)
        }
    }
cardHidden()
}