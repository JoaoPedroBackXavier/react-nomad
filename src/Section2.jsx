import React from 'react'
import './Section2.css'
import BotaoB from './BotaoB'
import Card1 from './card1'

function Section2() {
  return (
    <div className='section2'>
        <div id='div3'>
            <p>Recommended Destination</p>
            <BotaoB texto='View More' width='125px' />
        </div>
        <div id='div4'>
            <Card1 url='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp' flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg' height='500px' width='400px'/>
            <Card1 url='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/matheen-faiz-OcrTk7qXcdM.webp' flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg' height='500px' width='400px'/>
            <Card1 url='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/rayyu-maldives-Nbu3v_UDg6w.webp' flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg' height='500px' width='400px'/>
        </div>
    </div>
  )
}

export default Section2