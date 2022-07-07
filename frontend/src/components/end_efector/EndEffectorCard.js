import React from 'react'
import { Link } from 'react-router-dom'

import "./EndEffectorCard.css"

const EndEffectorCard = ({ name, description, imageUrl, endEffectorId }) => {
    console.log({ imageUrl })
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{description.substring(0, 100)}...</p>

                <Link to={`/process/${endEffectorId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default EndEffectorCard