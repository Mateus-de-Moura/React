import React from 'react'
import "../Styles/tecnologiasContainer.css"

import {DiMsqlServer,DiDotnet,DiGit} from "react-icons/di"
import{SiCsharp,SiAzuredevops} from "react-icons/si"

const tecnologies = [
    {id:"sql", name:"SqlServer", icon:<DiMsqlServer/>} ,
    {id:"dotnet", name: ".Net", icon:<DiDotnet/>},
    {id:"git", name: "Git", icon:<DiGit/>},
    {id:"csharp", name: "CSharp", icon:<SiCsharp/>},
    {id:"azure", name: "Azure", icon:<SiAzuredevops/>},
];

const tecnologiasContainer = () => {
  return (
    <section className="tecnologies-container">
        <h2>Tecnologias</h2>
    <div className="tecnologia-grid">
        {tecnologies.map((tech) =>(
        <div className="tecnologia-card" id={tech.id} key={tech.id}>        
             {tech.icon}
             <div classname="teconologia-info">
                 <h3>{tech.name}</h3>                 
            </div>
         </div>
))}
</div>
    </section>
  ) 
}

export default tecnologiasContainer