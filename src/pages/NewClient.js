import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: 200,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(3),
    },
    requiredAdvice: {
        marginTop: theme.spacing(2),
        color: 'red',
        fontSize: '14px',
    }
}));

export default function NewClient() {

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                id="outlined-required"
                label="Nome"
                defaultValue=""
                variant="outlined"
            />

            
            <TextField
                required
                id="outlined-required"
                label="Telefone"
                placeholder="(XX) XXXXX-XXXX"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Cidade"
                defaultValue="Itápolis"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Bairro"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Rua"
                defaultValue=""
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Número"
                variant="outlined"
            />
            <TextField
                label="Complemento"
                placeholder="Ex: Fundos"
                variant="outlined"
            />
            <span className={classes.requiredAdvice}>Campos com * são obrigatórios </span>
        </form>
    );
}