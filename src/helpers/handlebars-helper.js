'use strict';

var HandlebarsLayouts = require('handlebars-layouts');

module.exports = function (Handlebars) {
    Handlebars.registerHelper(HandlebarsLayouts(Handlebars));


    Handlebars.registerHelper('json', function (obj) {
        return JSON.stringify(obj);
    });

};

