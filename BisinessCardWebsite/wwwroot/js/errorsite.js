function backToMain() {
    addClass('animation-img', 'shuttle');
    addClass('animation-button', 'back-button');
    addClass('animation-error-block', 'error-block');
    addClass('animation-desc', 'desc');
    setTimeout(() => {
        addClass('animation-img-right', 'shuttle');
        setTimeout(() => {
            window.location.href = 'https://localhost:44318/';
        }, 1800);
    }, 800);
}

function addClass(style, id) {
    let block = document.getElementById(id);
    block.classList.add(style);
}