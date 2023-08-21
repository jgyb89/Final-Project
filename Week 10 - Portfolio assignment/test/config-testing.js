'use strict';

const configModule = (function () {

    let obj = {};

    /**
     * Returns api url based on current domain
     * @returns {string} url
     */
    obj.get_api_url = function () {

        let url ='https://ict4510.herokuapp.com/';

        if (window.location.hostname === 'ondigitalocean') {
            url = 'https://ict-4510-api-service-nq86b.ondigitalocean.app/';
        } else if(window.location.hostname === 'localhost') {
            url = 'http://localhost:3000/';
        }

        return url;
    };

    obj.get_api_key = function () {
        // used for instructional purposes only.
        return '1c9eba53d73d107f1da8ca54692b2d02';
    };

    obj.init = function () {};
    return obj;

}());