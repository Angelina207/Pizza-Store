export function Products() {

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

// Current Tab
    const tabBtn = document.querySelectorAll('.tab-btn');
    let tabAtribute;

    for (let itemTab of tabBtn) {
        itemTab.addEventListener('click', e => {
            tabAtribute = itemTab.dataset.tab;

            if (e.target != tabAtribute) {
                itemTab.classList.remove('tab-btn-current'); 
            } else {
                itemTab.classList.add('tab-btn-current'); 
            }           
        })
    }
}
