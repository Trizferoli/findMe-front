import React from 'react';
import crossroadsIMG from '../../assets/rodes.jpg'
import CustomForm from '../../controllers/form/CustomForm'
import './style.css'

export default function Login() {
    const formConfig = ['E-mail', 'Senha'];

    return (
        <main className="container-login">
            <div className="left-side">
                <img alt='crossroads aerial view' src={crossroadsIMG}></img>
                <h1 className='left-side-title'>Ordens de Serviço</h1>
            </div>
            <div className='right-side'>
                <CustomForm type='login'></CustomForm>
            </div>
        </main>
    )
}