import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Divider,
    Typography,
    makeStyles,
    InputLabel,
    TextField,
    MenuItem,
    FormControl,
    FormHelperText,
    Select,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';

import { useStyles } from '../common/css';
import { type } from 'os';

type HeaderProps = {
    children?: any;
    sibling?: Function;
};

export function Header(props: HeaderProps) {
    const classes = useStyles();

    return (
        <Card className={classes.pageCard}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <Typography variant={'h5'} color="textPrimary">
                        Telepresence
                    </Typography>
                    {props.sibling ? (
                        props.sibling()
                    ) : (
                        <Typography>telepresence.io/docs/latest</Typography>
                    )}
                </div>
                <Divider />
            </div>
            <div className={classes.pageBody}>{props.children}</div>
        </Card>
    );
}