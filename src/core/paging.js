import { range } from './index'

var numOfPagesFrom = ({ numItems, itemsPerPage }) => {
    const numPages = numItems / itemsPerPage;
    const flooredNumPages = Math.floor(numPages);

    return numPages > flooredNumPages ? flooredNumPages + 1 : flooredNumPages;
}

export var Paging = {
    on: data => ({
        getPage: ({ itemsPerPage, pageNumber }) => {
            var lastPage = numOfPagesFrom({ numItems: data.length, itemsPerPage }) - 1;
            var currentPage = Math.min(pageNumber, lastPage);

            return data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
        }
    }),
    
    getAvailablePagesFrom: ({ itemsPerPage, maxPages, currentPage, numItems }) => {
        var numOfPages = numOfPagesFrom({ numItems, itemsPerPage });
        var lastCenteredStart = numOfPages - (maxPages || numOfPages);
        var centeredStart = Math.min(
            lastCenteredStart,
            Math.floor((currentPage || 0) - ((maxPages || numOfPages) / 2)) + 1);
        var start = Math.max(0, centeredStart);

        return range({ start, end: start + Math.min((maxPages || numOfPages), numOfPages) });
    }
}