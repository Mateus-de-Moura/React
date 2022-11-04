import React from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import  "../Styles/SocialNetwork.css"

const socialNetwork =[
    {name: "linkedin", icon:<FaLinkedinIn/>, link:"https://www.linkedin.com/in/mateus-moura-208134197/"},
    {name: "github", icon:<FaGithub/>, link: "https://github.com/Mateus-de-Moura"},
    {name: "instagram", icon:<FaInstagram/>,link: ""},
];

const SocialNetwork = () => {
  return (
    <section id="social-network">
        {socialNetwork.map((network) =>(          
            <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
};

export default SocialNetwork