document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
    anchor.addEventListener(`clic`, function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute(`href`)).scrollIntoView({
            behavior: `smooth`
        });
    });
});