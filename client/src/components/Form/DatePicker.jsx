import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Box } from "@material-ui/core";


export default function DatePicker(props) {
    const { name, label, value, onChange } = props;

    return (
        <Box 
            display="flex" 
            justifyContent="center"
        >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker 
                    variant="dialog" 
                    inputVariant="outlined"
                    format="MM/dd/yyy"
                    margin="normal"
                    id="date-picker"
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                    />
            </MuiPickersUtilsProvider>
        </Box>
    )
}