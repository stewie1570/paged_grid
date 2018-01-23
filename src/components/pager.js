import React from 'react'
import { Paging } from '../core/paging'
import './pager.css'

export function Pager(props) {
    var numItems = props.numItems || props.rows.length;
    var pages = Paging
        .getAvailablePagesFrom({
            itemsPerPage: props.itemsPerPage,
            maxPages: props.maxPagesDisplayed,
            currentPage: props.currentPage,
            numItems
        });
    var numPages = Paging.getAvailablePagesFrom({ itemsPerPage: props.itemsPerPage, numItems }).length;
    var lastPage = numPages - 1;
    var currentPage = Math.min(lastPage, props.currentPage);
    var hasPages = numPages > 0;

    return !hasPages ? <div /> : <div>
        {currentPage !== 0 && <button onClick={() => props.onPageSelected(0)}>First</button>}
        {
            pages.map(page => page === currentPage
                ? <span className={pages.length > 1 ? "current-page" : ""} key={page}>{(page + 1)}</span>
                : <button
                    key={page}
                    onClick={() => props.onPageSelected(page)}>
                        {page + 1}
                </button>)
        }
        {currentPage !== lastPage && <button onClick={() => props.onPageSelected(lastPage)}>Last</button>}
        <span> of {lastPage + 1} page(s)</span>
    </div>;
}