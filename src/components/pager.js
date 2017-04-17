import React from 'react'
import {Paging} from '../core/paging'

export function Pager(props) {
    var pages = Paging
        .on(props.rows)
        .getAvailablePagesFrom({
            numPerPage: props.numPerPage,
            maxPages: props.maxPages,
            currentPage: props.currentPage
        })

    return <div>
        {
            pages.map(page => page === props.currentPage ? (page + 1) : <button
                key={page}
                onClick={() => props.onPageSelected(page)}>
                {page + 1}
            </button>)
        }
        </div>;
}