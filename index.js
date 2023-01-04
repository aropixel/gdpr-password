import GdprPassword from './src/index.js';

document.addEventListener('DOMContentLoaded', function(){

    var passWordUser = document.querySelector('[data-gdpr]');
    if (passWordUser) {

        var gdprform = passWordUser.closest('form');
        new GdprPassword(passWordUser, {form: gdprform});

    }
});
