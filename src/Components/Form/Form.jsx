// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import * as FormStyles from './Form.module.css'
import Card from '../Card/Card';

const Form = () => {

    const [comida, setComida] = useState({
        entrada: '',
        principal: '',
        postre: ''
    });
    
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);

    const actualizarEntrada = (e) => {

        setComida((prevComida) => ({...prevComida, entrada: e.target.value}));
        ocultarCard();
    }

    const actualizarPrincipal = (e) => {

        setComida((prevComida) => ({...prevComida, principal: e.target.value}));
        ocultarCard();

    }
    
    const actualizarPostre = (e) => {

        setComida((prevComida) => ({...prevComida, postre: e.target.value}));
        ocultarCard();

    }

    const ocultarCard = () => {
        setMostrarInfo(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
       if(comida.entrada.length > 2 && comida.principal.charAt(0) !== ' ' && comida.postre.length > 5) {

            setMostrarInfo(true);
            setMostrarError(false)

        } else {

            setMostrarInfo(false);
            setMostrarError(true)

        }
    }


  return (
    <div>
        <h1>¿Que deseas ordenar?</h1>
    <form onSubmit={handleSubmit}>
        <label>Plato entrada</label>
        <input type="text" placeholder='Entrada' onChange={(e) => actualizarEntrada(e)}/>
        <label>Plato pricipal</label>
        <input type="text" placeholder='Principal' onChange={(e) => actualizarPrincipal(e)}/>
        <label>Postre</label>
        <input type='text' placeholder='Postre' onChange={(e) => actualizarPostre(e)}/>
        <button type='submit'>Pedir</button>
    </form>


    {mostrarInfo ? 
        <> <Card cardContent={comida}/> </> : null}
    {mostrarError ? 
        <>
            <h2 className={FormStyles.error}>Por favor chequea que la información sea correcta.</h2>
        </> : null}
    </div>
  )
}

export default Form