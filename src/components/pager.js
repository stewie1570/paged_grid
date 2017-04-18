import React from 'react'
import { Paging } from '../core/paging'

export function Pager(props) {
    var pages = Paging
        .on(props.rows)
        .getAvailablePagesFrom({
            numPerPage: props.numPerPage,
            maxPages: props.maxPages,
            currentPage: props.currentPage
        });
    var allPages = Paging
        .on(props.rows)
        .getAvailablePagesFrom({ numPerPage: props.numPerPage });
    var lastPage = allPages.length - 1;
    var currentPage = Math.min(lastPage, props.currentPage);
    var hasPages = allPages.length > 0;

    return !hasPages ? <div /> : <div>
        {currentPage !== 0 && <button onClick={() => props.onPageSelected(0)}>First</button>}
        {
            pages.map(page => page === currentPage ? (page + 1) : <button
                key={page}
                onClick={() => props.onPageSelected(page)}>
                {page + 1}
            </button>)
        }
        {currentPage !== lastPage && <button onClick={() => props.onPageSelected(lastPage)}>Last</button>}
        <span> of {lastPage + 1} page(s)</span>
    </div>;
}