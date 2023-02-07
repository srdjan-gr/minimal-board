import React, { useState, useEffect, useContext } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";


const SingleItem = ({ cat }) => {

    const { id, kategorija_ime_EN } = cat;

    return (
        <div className="box background-second text">
            <div className="box-icon">

            </div>

            <div className="box-description">
                <h2>{kategorija_ime_EN}</h2>
                <p className='text-second'>{id}</p>
                <button className='btn'>Test btn</button>
            </div>

            <BiDotsHorizontalRounded className='icon-m background' />
        </div>
    )
}

export default SingleItem