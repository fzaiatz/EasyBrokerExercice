const EasyBrokerAPI = require('./helpers/EasyBrokerAPI.js');

const easyBroker = new EasyBrokerAPI('l7u502p8v46ba3ppgvj5y2aad50lb9');
let currentPage = 1;

(async () => {
    try {
        let morePages = true;
        do {
            const properties = await easyBroker.getProperties(currentPage);
            properties.content.forEach(property => {
                console.log(property.title);
            });
            currentPage++;
            morePages = properties.pagination.next_page != null;
        } while (morePages);
    } catch (e) {
        console.error(e);
    }
})();