import React from 'react';

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

export default function Header(props) {

    return (
        <CardHeader
            title={
            <Typography
                align="center"
                variant="h5"
                color="textSecondary"
            >
            {props.children}
            </Typography>
            }
        ></CardHeader>
    )
}