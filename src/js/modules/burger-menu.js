export function burgerMenu() {

/*
    Click the burger to open navigation
*/
    const overlayHaed = document.querySelector('.overlay');
    const btnLine = document.querySelector('.burger-btn2');
    const headerNav = document.querySelector('.head__nav');
    const burgerBtn = document.querySelector('.head__burger').addEventListener('click', openMenu);

    function openMenu () {
        headerNav.classList.toggle('is-open');

        if ( headerNav.classList.contains('is-open')) {
            btnLine.style.transform = 'rotate(180deg)';
            overlayHaed.style.display = 'block';
        } else {
            btnLine.style.transform = 'rotate(90deg)';
            overlayHaed.style.display = 'none';
        } 
    }

/*
    Overlay
*/
   overlayHaed.onclick = (e) => {
        if (e.target.classList = 'overlay') {
            overlayHaed.style.display = 'none';
            btnLine.style.transform = 'rotate(90deg)';
            headerNav.classList.remove('is-open');
        }
    }

/*
    Smooth Scroll
*/

const navLinks = document.querySelectorAll('.nav-link');

for (let link of navLinks) {
    
    link.addEventListener('click', (e) => {

        e.preventDefault()

        const linkID = link.getAttribute('href');

        document.querySelector(linkID).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
}

}