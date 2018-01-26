import { range } from './index'

var numOfPagesFrom = ({ numItems, itemsPerPage }) => Math.round((numItems / itemsPerPage) + 0.49999999999);

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