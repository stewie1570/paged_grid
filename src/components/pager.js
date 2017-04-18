import React from 'react'
import { Paging } from '../core/paging'

export function Pager(props) {
    var length = props.length || props.rows.length;
    var pages = Paging
        .getAvailablePagesFrom({
            numPerPage: props.numPerPage,
            maxPages: props.maxPages,
            currentPage: props.currentPage,
            length
        });
    var numPages = Paging.getAvailablePagesFrom({ numPerPage: props.numPerPage, length }).length;
    var lastPage = numPages - 1;
    var currentPage = Math.min(lastPage, props.currentPage);
    var hasPages = numPages > 0;

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