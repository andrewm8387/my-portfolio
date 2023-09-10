import React from "react"

export default function Projects(props) {
    return(
        <div className="projects-container">
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects">
                {props.projectArray}
            </div>
        </div>
    )
}