export function scrollToPage() {

    // Button Scroll Up
    let s = window.addEventListener('scroll', btnShow);
    let btnUp = document.querySelector('.scroll-up');

    function btnShow () {
        let scrollOffsetY = window.scrollY;
        scrollOffsetY > 1000 ? btnUp.style.opacity = '0.6' : btnUp.style.opacity = '0';
    }
   
    btnUp.addEventListener('click', () => {

        document.querySelector('.header').scrollIntoView({
            block:"center",
            behavior: 'smooth'
        })
    })
}