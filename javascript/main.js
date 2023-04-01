(function () {
    const scrollToTopButton = document.querySelector('#scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.classList.add('show')
        } else {
            scrollToTopButton.classList.remove('show')
        }
    })

    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})();