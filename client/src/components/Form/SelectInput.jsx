import React, { useState } from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectInput(props) {
    const { label, id, value, onChange, startValue, endValue } = props;
    const [menuItems] = useState(() => {
        const items = [];
        for(let i=startValue; i<=endValue; i++) {
            items.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }
        return items;
    });
    

    return (
        <FormControl className="selectInput" style={{width: '100%'}} margin='dense'>
            <InputLabel id={ id }>
                { label }
            </InputLabel>
            <Select
                labelId={ id }
                value={ value }
                onChange={ onChange }
            >
                { menuItems }
            </Select>
        </FormControl>
    )
}