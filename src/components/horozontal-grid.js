import React from 'react'
import Guid from 'guid'
import { camelToSpacedProper } from '../core'
 
export function HorozontalGrid(props) {
    const { rows, columns, noRowsMessage, columnRenamer, ...otherProps } = props;
 
    return <table {...otherProps}>
        <tbody>
            <tr key="header">
                {
                    columns.map(col => <th key={col}>{(columnRenamer && columnRenamer(col)) || camelToSpacedProper(col)}</th>)
                }
            </tr>
            {
                !noRowsMessage || (rows && rows.length) ? rows.map(row => <tr key={Guid.create().value}>
                    {
                        columns.map(col => <td key={col}>{row[col]}</td>)
                    }
                </tr>) : <tr><td colSpan={columns.length}>{noRowsMessage}</td></tr>
            }
        </tbody>
    </table>;
}