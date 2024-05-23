import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import MainForm from '../blocks/modules/main_form/main_form.js';
import MainRev from '../blocks/modules/main_reviews/main_reviews.js';
import MainQues from '../blocks/modules/main_questions/main_questions.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        mainForm: new MainForm(),
        mainRev: new MainRev(),
        mainQues: new MainQues(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.mainForm.init();
        this.mainRev.init();
        this.mainQues.init();
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});