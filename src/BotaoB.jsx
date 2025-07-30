import React from 'react'
import './BotaoB.css'

function BotaoB(props) {
    const style ={
        height: '50px',
        width: props.width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
    }

    return (
        <button className='botaoB' style={style}>
            <p><b>{props.texto}</b></p>
        </button>
    )
}

export default BotaoB