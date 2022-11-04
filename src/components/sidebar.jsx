import React from 'react'
import Redes from "../components/SocialNetwork.jsx"
import Information from "../components/informationContainer.jsx"
import Avatar from "../img/mateus.png"
import "../Styles/sidebar.css"

const sidebar = () => {
  return (
    <aside id="sidebar">
    <img src={Avatar} alt="Mateus Moura" />
    <p className='title'>Desenvolvedor .Net</p>
    <Redes/>
    <Information/>
    <a href="https://drive.google.com/file/d/1Hx692Zd0FpQa0Y0Lu58-rqLs3xeeelHZ/view?usp=share_link" target="_blank" className="btn">Dowload curriculo</a>
    </aside>
  )
}

export default sidebar