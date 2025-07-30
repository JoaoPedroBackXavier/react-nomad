import React from 'react'
import './Card1.css'
import BotaoB from './BotaoB'

function Card1(props) {
    const height = props.height
    const width = props.width
    const style = {
        height: height,
        width: width,
    }  
    const style2 = {
        backgroundImage: 'url{'+ props.url +'}'
    }

    return (
        <div style={style} id='devizenhao'>
            <div style={style2} id='imagem'>
                <div>
                    <img src={props.flag}/>
                    <p></p>
                </div>
            </div>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
                <div>

                </div>
                <BotaoB width='150px' texto='Book Now'/>
            </div>
        </div>
    )

    // 
}

export default Card1