import { range } from './index'

var numOfPagesFrom = ({ length, numPerPage }) => Math.round((length / numPerPage) + 0.49999999999);

export var Paging = {
    on: data => ({
        getPage: ({ numPerPage, page }) => {
            var lastPage = numOfPagesFrom({ length: data.length, numPerPage }) - 1;
            var currentPage = Math.min(page, lastPage);

            return data.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage);
        }
    }),
    
    getAvailablePagesFrom: ({ numPerPage, maxPages, currentPage, length }) => {
        var numOfPages = numOfPagesFrom({ length, numPerPage });
        var lastCenteredStart = numOfPages - (maxPages || numOfPages);
        var centeredStart = Math.min(
            lastCenteredStart,
            Math.floor((currentPage || 0) - ((maxPages || numOfPages) / 2)) + 1);
        var start = Math.max(0, centeredStart);

        return range({ start, end: start + Math.min((maxPages || numOfPages), numOfPages) });
    }
}