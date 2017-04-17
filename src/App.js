import React, { Component } from 'react';
import { HorozontalGrid } from './components/horozontal-grid'
import { Pager } from './components/pager'
import { Paging } from './core/paging'
import _ from 'lodash'
import 'bootstrap-css-only'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.rows = _.range(700).map(i => ({
      col1: `row #${i}`,
      col2: `row #${i}`
    }));
    this.state = {
      currentPage: 0
    };
  }

  render() {
    var numPerPage = 6;

    return <div>
      <HorozontalGrid
        rows={Paging
          .on(this.rows)
          .getPage({numPerPage, page: this.state.currentPage})
        }
        columns={["col1", "col2"]}
        noRowsMessage={<i>No data...</i>}
        className="table table-striped" />
      <Pager
        rows={this.rows}
        numPerPage={numPerPage}
        maxPages={5}
        currentPage={this.state.currentPage}
        onPageSelected={currentPage => this.setState({currentPage})} />
    </div>;
  }
}

export default App;
