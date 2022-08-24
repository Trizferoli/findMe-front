import React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import logoFindMe from '../assets/favicon.ico'
import logoFindMe from '../../assets/companyName.png'
import './style.css'

function CustomForm({ type }) {
    const [value, setValue] = useState('Controlled');
    const [formType, setFormType] = useState([]);
    const formLoginConfig = {
        fields: ['E-mail', 'Senha'],
        linkMessage: 'Não tem cadastro? Cadastre-se'
    }
    const formSigninConfig = {
        fields: ['Nome', 'E-mail', 'Senha'],
        linkMessage: 'Já tem cadastro? Entrar'
    }


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        type === 'login' ? setFormType(formLoginConfig.fields) : setFormType(formSigninConfig.fields)
    }, []);


    return (
        <div className='form' onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{

                    '& .MuiTextField-root': {
                        width: '25ch'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                noValidate
                autoComplete="off"
            >
                <b><p>{`${type[0].toUpperCase() + type.slice(1)}:`}</p></b>
                {formType.map((item, i) => {
                    return (<TextField
                        id={i}
                        fullWidth
                        label={item}
                        placeholder={item}
                        multiline
                        sx={{ mt: '20px' }}
                    />)
                })}
                <button
                    className='submit-button'
                    type='submit'>
                    Continuar
                </button>
            </Box>
            <img className='logo-findme' src={logoFindMe} alt='logo empresa FindMe'></img>
        </div>
    )
}
export default CustomForm;