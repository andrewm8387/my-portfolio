import './styling/About.css'
import './styling/Header.css'
import './styling/Projects.css'
import './styling/Project.css'
import './styling/Skills.css'
import './styling/Skill.css'
import './styling/Footer.css'

import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Skill from "./components/Skill"
import Footer from "./components/Footer"

import {projectData} from "./projectData.js"
import {skills} from "./skillData";

function App() {
    let projectArray = projectData.map((project) => {
        return <Project image={project.image} title={project.title} link={project.link} />
    })
    let skillsArray = skills.map((skill) => {
        return <Skill logo={skill.logo} skill={skill.skill} />
    })
    const [page, setPage] = React.useState("home")

    function toHome() {
        setPage("home")
    }

    function toMyProjects() {
        setPage("projects")
    }

    function toMySkills() {
        setPage("skills")
    }

    return (
      <main>
          <Header toHome={toHome} toMyProjects={toMyProjects} toMySkills={toMySkills}/>
          {page === "home" && <About />}
          {page === "projects" && <Projects projectArray={projectArray}/>}
          {page === "skills" && <Skills skillsArray={skillsArray}/>}
          <Footer />
      </main>
    );
}

export default App;
