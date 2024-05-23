import $ from 'jquery';
import 'slick-carousel';

const MainRev = class MainRev {
    constructor(){}
    initTabs() {
        document.addEventListener('DOMContentLoaded', () => {
            if (innerWidth > 1023) {
                const titles = document.querySelectorAll('.main_reviews__l-side .main_reviews__item');
                const contents = document.querySelectorAll('.main_reviews__r-side .main_reviews__content');
        
                function showContentByIndex(index) {
                    contents.forEach(content => content.style.display = 'none');
                    if (contents[index]) {
                        contents[index].style.display = 'block';
                    }
                }
        
                titles.forEach((title, index) => {
                    title.addEventListener('click', () => {
                        titles.forEach(t => t.classList.remove('isActive'));
                        title.classList.add('isActive');
                        showContentByIndex(index);
                    });
                });
        
                // Найти элемент с классом isActive и показать соответствующий контент
                const activeIndex = Array.from(titles).findIndex(title => title.classList.contains('isActive'));
                if (activeIndex !== -1) {
                    showContentByIndex(activeIndex);
                } else {
                    // Если нет активного элемента, показать первый элемент по умолчанию
                    titles[0].classList.add('isActive');
                    showContentByIndex(0);
                }
            }
        });
    }
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            if (innerWidth < 1024) {
                $('.js_rev_slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: false,
                    fade: true
                });
            }
        });
    }
    init() {
        this.initTabs();
        this.initSlider();
    }
}

export default MainRev;