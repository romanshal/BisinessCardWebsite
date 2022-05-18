
const animItems = document.querySelectorAll('.animation-item');
const animItemsSmall = document.querySelectorAll('.animation-item-small');
const animSkills = document.querySelectorAll('.animation-skill');
const animBarItems = document.querySelectorAll('.animation-bar');
const animReviewItems = document.querySelectorAll('.animation-review');

if (animItems.length > 0 || animItemsSmall.length > 0 || animSkills.length > 0 || animBarItems.length > 0 || animReviewItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        if (animItems.length > 0) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint)/* && pageYOffset < (animItemOffset + animItemHeight)*/) {
                    animItem.classList.add('animation-activ');
                }
            }
        }

        if (animItemsSmall.length > 0) {
            for (let index = 0; index < animItemsSmall.length; index++) {
                const animItem = animItemsSmall[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 12;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint)) {
                    animItem.classList.add('animation-activ');
                }
            }
        }

        if (animSkills.length > 0) {
            for (let index = 0; index < animSkills.length; index++) {
                const animItem = animSkills[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 0.3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint)) {
                    animItem.classList.add('animation-activ');
                }
            }
        }

        if (animBarItems.length > 0) {
            for (let index = 0; index < animBarItems.length; index++) {
                const animItem = animBarItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 0.3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint)) {
                    animItem.classList.add('animation-activ');
                }
            }
        }

        if (animReviewItems.length > 0) {
            for (let index = 0; index < animReviewItems.length; index++) {
                const animItem = animReviewItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 0.15;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint)) {
                    animItem.classList.add('animation-activ');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + screenTop, left: rect.left + screenLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300)
}