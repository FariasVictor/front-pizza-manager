import React from 'react';
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(7),
        paddingTop:'20px',
    },

}));

export default function Container(props) {
    const classes = useStyles();
    const { children } = props;

    return (
        <>
            <Header />
            <main className={classes.main}>{children}</main>
        </>
    );
}