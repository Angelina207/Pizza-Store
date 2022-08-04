export function parallaxEffect() {

    function parallax (e) {

        let offsetX = e.clientX;
        let offsetY = e.clientY;

        this.querySelectorAll('.scene__layer').forEach(layer => {
            let speedAttribute = layer.getAttribute('data-speed');

            console.log(layer.style.transform = `translateX(${offsetX / window.innerWidth * speedAttribute}px) translateY(${offsetY / window.innerHeight * speedAttribute}px)`)
        })
    }

    document.addEventListener('mousemove', parallax);
}
