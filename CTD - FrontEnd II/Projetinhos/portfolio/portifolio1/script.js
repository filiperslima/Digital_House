const sections = document.querySelectorAll('section');
const bg = document.getElementsByClassName('bg');
let actualPage = 0;
function firstRender() {
    sections.forEach((section, index) => {
        if (index == 0) {
            // section.style.zIndex = '1';
            section.style.zIndex = '0';
            section.style.opacity = '1';
            return
        }
        section.style.zIndex = '0';
        section.style.opacity = '0';


    });
}
function handleScroll() {
    window.onmousewheel = (event) => {
         event.wheelDeltaY < 0 ? onScrollDown() : onScrollUp();
    }

}
function onScrollUp() {
    if (actualPage > 0) {
        actualPage--;
        sections.forEach((section, index) => {
            if (index == actualPage) {
                sections[actualPage + 1].style.animation = '1.25s ease 0s 1 none running slideDown';
                sections[actualPage + 1].style.opacity = '1';
                sections[actualPage + 1].style.zIndex = '0';
                section.style.opacity = '1';
            } else {
                section.style.zIndex = '0';
                setTimeout(() => {
                    sections[actualPage].style.opacity = '1';
                    section.style.opacity = '0';
                }, 1200);
            }
        });
    }
    else {
        return
    }
};
function onScrollDown() {
    if (actualPage < sections.length - 1) {
        actualPage++;
        sections.forEach((section, index) => {
            if (index == actualPage) {
                sections[actualPage].style.zIndex = '1';
                sections[actualPage].style.opacity = '1';
                sections[index].style.animation = '0.8s cubic-bezier(0.3, 1, 0.8, 0.96) 0s 1 none running slideUp';
                section.style.opacity = '1'
            }
        });
    }
    else {
        return
    }
    setTimeout(() => {
        sections[actualPage - 1].style.zIndex = '0';
        sections[actualPage - 1].style.opacity = '0';
        sections[actualPage - 1].style.animation = '1.25s ease 0s 1 none paused slideDown';

    }, 1300);
};
handleScroll()
firstRender()