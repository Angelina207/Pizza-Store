export function parallaxEffect() {

    function parallax (e) {
        let offsetX = e.clientX;
        let offsetY = e.clientY;

        let screenWidth = window.matchMedia('(max-width: 768px)');

        this.querySelectorAll('.scene__layer').forEach(layer => {
            let speedAttribute = layer.getAttribute('data-speed');
            if (screenWidth.matches === true) {
                layer.style.transform = 'translateX(0px)'
            } else {
                layer.style.transform = `translateX(${offsetX / window.innerWidth * speedAttribute}px) translateY(${offsetY / window.innerHeight * speedAttribute}px)`;
            }
        });

        this.querySelectorAll('.foo-scene').forEach(scene => {
            let speedAttribute = scene.dataset.speed;
            if (screenWidth.matches === true) {
                scene.style.transform = 'translateX(0px)'
            } else {
                scene.style.transform = `translateX(${offsetX / window.innerWidth * speedAttribute}px)`;
            }
        });
    }

    document.addEventListener('mousemove', parallax);
}
