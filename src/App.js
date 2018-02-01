import React, { Component } from 'react';
import { HorozontalGrid } from './components/horozontal-grid'
import { Pager } from './components/pager'
import { TextInput } from './components/text-input'
import { range, camelToSpacedProper } from './core'
import { Paging } from './core/paging'
import { Filter } from './core/filtering'
import 'bootstrap-css-only'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.rows = range({ start: 1, end: 700 }).map(i => ({
            col1: `row #${i}`,
            col2: `row #${i}`
        }));
        this.state = {
            currentPage: 0,
            filter: ""
        };
    }

    render() {
        var itemsPerPage = 6;
        var filteredData = Filter.on({
            data: this.rows,
            onColumns: ["col1", "col2"],
            value: this.state.filter
        });

        return <div>
            <TextInput onChange={filter => this.setState({ filter })} />
            <HorozontalGrid
                rows={Paging
                    .on(filteredData)
                    .getPage({ itemsPerPage, pageNumber: this.state.currentPage })
                }
                columns={["col1", "col2"]}
                noRowsMessage={<i>No data...</i>}
                columnRenamer={camelToSpacedProper}
                className="table table-striped" />
            <Pager
                numItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                maxPagesDisplayed={9}
                currentPage={this.state.currentPage}
                onPageSelected={currentPage => this.setState({ currentPage })} />
        </div>;
    }
}

export default App;
