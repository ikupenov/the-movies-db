/* globals Promise */

import Handlebars from 'handlebars';

const HANDLERS_PATH = './views/templates/';

let templateHandler = (function () {
    function getTemplate(templateName) {
        let templatePath = `${HANDLERS_PATH}${templateName}.handlebars`;

        return new Promise((resolve, reject) => {
            $.get(templatePath)
                .done(resolve)
                .fail(reject);
        });
    }

    function setTemplate(templateName, targetSelector, dataObject) {
        return getTemplate(templateName)
            .then(template => {
                let compiledTemplate = Handlebars.compile(template);
                let templateHtml = compiledTemplate(dataObject);
                let $wrappedTemplate = $('<div/>');

                $wrappedTemplate.html(templateHtml);
                $(targetSelector).html($wrappedTemplate.html());

                return template;
            }).catch(console.log);
    }

    return {
        getTemplate, setTemplate
    };
} ());

export default templateHandler;