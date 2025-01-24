document.querySelector('.navbar_toggle').addEventListener('click', function () {
    this.classList.toggle('open')

    document.querySelector('.navbar_menu').classList.toggle('open')
});

