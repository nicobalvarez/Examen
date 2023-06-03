/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import * as CardStyles from './Card.module.css'

const Card = ({cardContent}) => {
    return (
        <div className={CardStyles.card}>
            <p>Tu entrada es:
                <span> {cardContent.entrada}</span>
            </p>

            <p>Tu plato principal es:
                <span> {cardContent.principal}</span>
            </p>
            <p>Tu postre es: 
                <span> {cardContent.postre} </span>
            </p>
        </div>
    )
}

export default Card