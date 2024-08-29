document.querySelectorAll('.xOption, .oOption').forEach(el => {
    el.addEventListener('click', function() {
        // Add the explode class to trigger the explosion animation
        this.classList.add('explode');
        console.log("boom")

        this.addEventListener('animationend', () => {
            this.classList.remove('explode');
            // Optionally reset styles here if needed
        }, { once: true });
    });
});

document.querySelectorAll('.explosiveElement').forEach(el => {
    el.addEventListener('click', function() {
        // Add the explode class to trigger the explosion animation
        this.classList.add('explode');
        console.log("boom")

        this.addEventListener('animationend', () => {
            this.classList.remove('explode');
            // Optionally reset styles here if needed
        }, { once: true });
    });
});

