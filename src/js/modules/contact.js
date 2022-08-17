export function contactForm() {
    const inputNumber = document.querySelector('.input-num');

    inputNumber.addEventListener('click', () => {
        inputNumber.setAttribute('value' , ('+380'));
    })
}