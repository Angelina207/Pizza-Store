export function products() {

/* Show and hide the total price. */

    const totalPrice = document.querySelector('.bin-total');

    document.querySelector('.bin-link').onmouseover = () => {
        totalPrice.style.opacity = '1';
        }
    document.onclick = e => {
        if(e.target.className != 'bin-link') {
            totalPrice.style.opacity = '0';
        }
    }
}
