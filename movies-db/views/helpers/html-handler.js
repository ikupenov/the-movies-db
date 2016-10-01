/* globals Promise */

const HTMLS_PATH = './views/';

let htmlHandler = (function () {
    function getHtml(htmlName) {
        let htmlPath = `${HTMLS_PATH}${htmlName}.html`;

        return new Promise((resolve, reject) => {
            $.get(htmlPath)
                .done(resolve)
                .fail(reject);
        });
    }

    function setHtml(htmlName, targetSelector) {
        targetSelector = targetSelector || '#content';

        return getHtml(htmlName)
            .then(html => {
                $(targetSelector).html(html);
            }).catch(console.log);
    }

    return {
        getHtml, setHtml
    }
} ());

export default htmlHandler;