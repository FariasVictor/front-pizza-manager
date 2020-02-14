import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import axios from '../utils/httpClient'

const useStyles = makeStyles(theme => ({
    root: {
        // marginTop: '150px',
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: 200,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    requiredAdvice: {
        marginTop: theme.spacing(2),
        color: 'red',
        fontSize: '14px',
    }
}));


const NewClient = (props) => {
    const classes = useStyles();
    const {history} = props;
    const [client, setClient] = useState({ name: "", phone: "" });

    const post = async (event) => {
        event.preventDefault();
        async function postClients() {
            await axios.post('/clients', client).then(()=>history.push("/novo-endereco"))
        }
        postClients();
    }

    const handleClientChange = (event) => {
        let field = event.target.name
        let value = event.target.value;
        setClient({ ...client, [field]: value });
    }

    
    return (
        <>
            <Typography className={classes.root} align='center' variant="h4">
                Cadastro de Clientes
            </Typography>
            <form className={classes.form} noValidate onSubmit={post} >

                <TextField
                    required
                    name="name"
                    onChange={handleClientChange}
                    defaultValue={client.name}
                    id="outlined-required"
                    label="Nome"
                    variant="outlined"
                />
                <TextField
                    required
                    name="phone"
                    value={client.phone}
                    onChange={handleClientChange}
                    id="outlined-required"
                    label="Telefone"
                    placeholder="(XX) XXXXX-XXXX"
                    variant="outlined"
                />
                <span className={classes.requiredAdvice}>Campos com * são obrigatórios</span>
                <Button type="submit">
                    Enviar
                </Button>
            </form>
        </>
    );
}

export default NewClient;