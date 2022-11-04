import React from 'react'
import AboutContainer from "../components/aboutContainer.jsx"
import ProjectsContainer from "../components/projectsContainer.jsx"
import Tecnologias from "../components/tecnologiasContainer.jsx"

import "../Styles/MainContent.css"


function MainContent() {
  return (
    <main id="main-content">
    <AboutContainer/>
     <Tecnologias/>
     <ProjectsContainer />
    </main>
  )
}

export default MainContent