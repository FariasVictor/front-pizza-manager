import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import axios from '../utils/httpClient';

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
    },
    button: {
        color: "white",
        background: '#3D78CC',
    }
}));

const NewAddress = (props) => {
    const classes = useStyles();
    const [address, setAddress] = useState({
        city: "",
        district: "",
        street: "",
        number: "",
        complement: "",
        clientId: props.match.params.clientId,
    });
    const post = async (event) => {
        event.preventDefault();

        async function postAddress() {
            await axios.post('/addresses', address)
        }

        postAddress();
    }

    const handleAddressChange = (event) => {
        let field = event.target.name
        let value = event.target.value;
        setAddress({ ...address, [field]: value });
        console.log(props)
    }

    return (
        <form className={classes.form} noValidate onSubmit={post} >
            <Typography className={classes.root} align='center' variant="h4">
                Cadastro de Endereços
            </Typography>
            <TextField
                required
                name="city"
                onChange={handleAddressChange}
                id="outlined-required"
                label="Cidade"
                defaultValue={address.city}
                variant="outlined"
            />
            <TextField
                required
                name="district"
                onChange={handleAddressChange}
                defaultValue={address.district}
                id="outlined-required"
                label="Bairro"
                variant="outlined"
            />
            <TextField
                required
                name="street"
                onChange={handleAddressChange}
                defaultValue={address.street}
                id="outlined-required"
                label="Rua"
                variant="outlined"
            />
            <TextField
                required
                name="number"
                onChange={handleAddressChange}
                defaultValue={address.number}
                id="outlined-required"
                label="Número"
                variant="outlined"
            />
            <TextField
                name="complement"
                onChange={handleAddressChange}
                defaultValue={address.complement}
                label="Complemento"
                placeholder="Ex: Fundos"
                variant="outlined"
            />
            <input type="hidden" name="clientId" value={address.clientId}/>

            <span className={classes.requiredAdvice}>Campos com * são obrigatórios</span>

            <ButtonGroup >
                <Button variant="contained" color="primary" size="medium" type="submit">
                    Enviar
                </Button>
                <Button variant="contained" color="secondary" size="small">
                    Cancelar
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default NewAddress