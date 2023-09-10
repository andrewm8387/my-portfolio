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

import blackJackImage from "./imgs/blackjack.jpg"
import pirateImage from "./imgs/pirate.jpg"
import urbanismImage from "./imgs/lucas-marcomini-9VGOu_EgQkA-unsplash.jpg"
import webCalculator from "./imgs/chris-liverani-ViEBSoZH6M4-unsplash.jpg"
import engineeringImage from "./imgs/thisisengineering-raeng-SyRlD4s_amw-unsplash.jpg"

import pythonLogo from "./imgs/logos/python-logo.svg"
import javaLogo from "./imgs/logos/java-logo.svg"
import cLogo from "./imgs/logos/c-logo.svg"
import gitLogo from "./imgs/logos/github-142-svgrepo-com.svg"
import bashLogo from "./imgs/logos/terminal-bash.svg"
import htmlLogo from "./imgs/logos/html-124-svgrepo-com.svg"
import cssLogo from "./imgs/logos/css3-02-svgrepo-com.svg"
import jsLogo from "./imgs/logos/js01-svgrepo-com.svg"
import reactLogo from "./imgs/logos/react-svgrepo-com.svg"
import googleLogo from "./imgs/logos/google-svgrepo-com.svg"
import officeLogo from "./imgs/logos/microsoft-150-svgrepo-com.svg"

function App() {
    const projects = [
        {
            image: blackJackImage,
            title: "Blackjack strategy calculator",
            link: "https://github.com/andrewm8387/BlackjackCalculator"
        },
        {
            image: pirateImage,
            title: "Piraten Karpen",
            link: "https://github.com/andrewm8387/Piraten-Karpen"
        },
        {
            image: urbanismImage,
            title: "Pathfinder road network",
            link: "https://github.com/andrewm8387/Urbanism-Pathfinder"
        },
        {
            image: webCalculator,
            title: "Web Calculator",
            link: "https://andrewm8387.github.io/Calculator-Web-App/"
        },
        {
            image: engineeringImage,
            title: "First Year Engineering Projects",
            link: "https://plum-book-cd2.notion.site/Andrew-McLaren-12c002ff1aeb425f908062baa6f8c4eb"
        }
    ]
    const skills = [
        {
            logo: pythonLogo,
            skill: "Python"
        },
        {
            logo: javaLogo,
            skill: "Java"
        },
        {
            logo: cLogo,
            skill: "C"
        },
        {
            logo: bashLogo,
            skill: "Bash"
        },
        {
            logo: gitLogo,
            skill: "Git/GitHub"
        },
        {
            logo: htmlLogo,
            skill: "HTML"
        },
        {
            logo: cssLogo,
            skill: "CSS"
        },
        {
            logo: jsLogo,
            skill: "JavaScript"
        },
        {
            logo: reactLogo,
            skill: "React"
        },
        {
            logo: officeLogo,
            skill: "Microsoft 365"
        },
        {
            logo: googleLogo,
            skill: "Google Suite"
        }
    ]
    let projectArray = projects.map((project) => {
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
