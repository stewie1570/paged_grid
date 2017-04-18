import React from 'react'

export function TextInput(props) {
    var {onChange, value, ...otherProps} = props;

    return <input
        {...otherProps}
        type="text"
        value={props.value}
        onChange={({target}) => props.onChange && props.onChange(target.value)} />;
}