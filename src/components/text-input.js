import React from 'react'

export function TextInput(props) {
    var {onChange, value, ...otherProps} = props;

    return <input
        {...otherProps}
        type="text"
        value={value}
        onChange={({target}) => onChange && onChange(target.value)} />;
}