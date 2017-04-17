import _ from 'lodash'

export var Paging = {
    on: data => ({
        getPage: ({numPerPage, page}) => data
            .slice(page * numPerPage, (page + 1) * numPerPage),
            
        getAvailablePagesFrom: ({numPerPage, maxPages, currentPage}) => {
            var numOfPages = Math.round((data.length / numPerPage) + 0.49999999999);
            var lastCenteredStart = numOfPages - (maxPages || numOfPages);
            var centeredStart = Math.min(
                lastCenteredStart,
                Math.floor((currentPage || 0) - ((maxPages || numOfPages) / 2)) + 1);
            var start = Math.max(0, centeredStart);
            
            return _.range(start, start + Math.min((maxPages || numOfPages), numOfPages));
        }
    })
}