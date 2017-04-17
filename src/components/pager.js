import React from 'react'
import {Paging} from '../core/paging'

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
        .getAvailablePagesFrom({numPerPage: props.numPerPage});

    return <div>
        <button onClick={() => props.onPageSelected(0)}>First</button>
        {
            pages.map(page => page === props.currentPage ? (page + 1) : <button
                key={page}
                onClick={() => props.onPageSelected(page)}>
                {page + 1}
            </button>)
        }
        <button onClick={() => props.onPageSelected(allPages.length - 1)}>Last</button>
        </div>;
}