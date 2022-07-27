export function burgerMenu() {

/*
    Click the burger to open navigation
*/
    const body = document.querySelector('body');
    const overlayHaed = document.querySelector('.overlay');
    const btnLine = document.querySelector('.burger-btn2');
    const headerNav = document.querySelector('.head__nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const burgerBtn = document.querySelector('.head__burger').addEventListener('click', openMenu);

    function openMenu () {
        headerNav.classList.toggle('is-open');
        
        if (headerNav.classList.contains('is-open')) {

            body.style.overflow = 'hidden';
            btnLine.style.transform = 'rotate(180deg)';
            overlayHaed.style.display = 'block';
        } else {
            body.style.overflow = 'scroll';
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
            body.style.overflow = 'scroll';
        }
    }

/*
    Smooth Scroll
*/
    for (let link of navLinks) {

        link.addEventListener('click', (e) => {

            e.preventDefault()

            const linkID = link.getAttribute('href');

            document.querySelector(linkID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            headerNav.classList.remove('is-open');
            overlayHaed.style.display = 'none';
            btnLine.style.transform = 'rotate(90deg)';
            body.style.overflow = 'scroll';
        })
    }

}