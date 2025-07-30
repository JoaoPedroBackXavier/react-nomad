import React from 'react'
import './BotaoL.css'

function BotaoL(props) {
    const style = {
        height: '50px',
        width: props.width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        border: '0'
    }

  return (
    <button className='botaoL' style={style}>
        <p><b>{props.texto}</b></p>
    </button>
  )
}

export default BotaoL