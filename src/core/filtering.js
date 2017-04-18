import _ from 'lodash'

export var Filter = {
    on: ({data, onColumns, value}) => data
        .filter(row => onColumns
            .some(col => row[col]
                .toString()
                .toUpperCase()
                .indexOf(value.toUpperCase()) > -1))
}