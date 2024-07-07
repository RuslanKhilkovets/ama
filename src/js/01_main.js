const burgerBtn = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const mobileMenuItem = document.querySelectorAll(".mobile-navbar__item");

const handleOpenBurger = () => {
    mobileNavbar.classList.toggle("active");
    burgerBtn.classList.toggle("active");
}

burgerBtn.addEventListener("click", handleOpenBurger);

mobileMenuItem.forEach(item => {
    item.addEventListener("click", handleOpenBurger)
})

/////////////////////////////////////////////////////////

const sectionTypes = {
    HEADER: 0,
    OVERVIEW: 1,
    SHARE: 2,
    FEATURE: 3,
    GALLERY: 4,
    DOWNLOAD: 5,
    COMPATIBILITY: 6
}

const getSectionByType = (sectionType) => {
    switch(sectionType){
        case sectionTypes.HEADER: {
            return "header";
        }
        case sectionTypes.OVERVIEW: {
            return "overview";
        }
        case sectionTypes.SHARE: {
            return "share";
        }
        case sectionTypes.FEATURE: {
            return "feature";
        }
        case sectionTypes.GALLERY: {
            return "gallery";
        }
        case sectionTypes.DOWNLOAD: {
            return "download";
        }
        case sectionTypes.COMPATIBILITY: {
            return "compatibility";
        }
        default:
            return null; 
    }
}

const getScrollCoordinateY = (sectionType) => {
    const blockId = getSectionByType(sectionType)

    if(blockId === null){
        return 0;
    }
    const getElement = document.querySelector(`#${blockId}`);

    if (getElement) {
        const coordinateY = getElement.offsetTop;
        return coordinateY;
    } else {
        return null;
    }
}

const scrollToSection = (sectionType, e) => {
    e.preventDefault(); 
    
    const scrollToY = getScrollCoordinateY(sectionType);
    const headerHeight = 75;
    const links = document.querySelectorAll('.header__link--link');

    links.forEach(link => link.classList.remove('active'));

    e.target.classList.add('active')

    window.scrollTo({
        top: scrollToY - headerHeight,
        behavior: 'smooth'
    });
}

window.onload = function() {
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function() {
    const getWindowSize = window.innerWidth;
    const mobileDevicesScreenWidth = 768;

    if(+getWindowSize >= mobileDevicesScreenWidth){
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
        });
    }

    new Swiper('.info__slider-share', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.info__slider-feature', {
        slidesPerView: 1,
        spaceBetween: 0, 
        pagination: {
            el: '.feature-slider__swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1
    });
});

const getData = async() => {
    return await fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))
}

console.log(getData());