export function parallaxEffect() {

    function parallax (e) {
        let offsetX = e.clientX;
        let offsetY = e.clientY;

        this.querySelectorAll('.scene__layer').forEach(layer => {
            let speedAttribute = layer.getAttribute('data-speed');

            layer.style.transform = `translateX(${offsetX / window.innerWidth * speedAttribute}px) translateY(${offsetY / window.innerHeight * speedAttribute}px)`;
        })
    }

    function windowScroll (e) {
        let offsetScroll = window.scrollY;
        let scene = document.querySelector('.scene');

            if (offsetScroll > 1000) {
                scene.style.display = 'none';
                
            } else {
                scene.style.display = 'block';
        }
    }

    document.addEventListener('mousemove', parallax);
    document.addEventListener('scroll', windowScroll);
}
