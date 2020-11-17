import React from 'react';
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function TextInput(props) {
    const { label, value, onChange, error, type, helperText, required, my } = props;

    return (
        <Box 
            display="flex" 
            justifyContent="center"
            my={my}
        >
            <TextField
                required={required}
                id="standard-required"
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                error={error}
                type={type}
                margin="normal"
                helperText={helperText}
            />
        </Box>
    )
}

TextInput.defaultProps = {
    error: false,
    type: 'text',
    helperText: '',
    required: true,
    my: 0
}