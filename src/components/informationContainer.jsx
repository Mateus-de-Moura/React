import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import "../Styles/informationContainer.css"

const informationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
           <AiFillPhone id="phone-icon"/> 
           <div>   
            <h3>Telefone</h3>
            <p>
            <a href='tel:+5511967607036'>(11)9 6760-7036</a>
             </p>
            </div>
        </div>
        <div className='info-card'>
           <AiOutlineMail id="mail-icon"/> 
           <div>   
            <h3>E-mail</h3>            
            <a id="E-mail" href="mailto:mateus.demoura@hotmail.com">mateus.demoura@hotmail.com</a>            
            </div>
        </div>
        <div className='info-card'>
           <AiFillEnvironment id="phonepin-icon"/> 
           <div>   
            <h3>Endereço</h3>
            <p>São Paulo - SP</p>
            </div>
        </div>               
    </section>
  )
}

export default informationContainer