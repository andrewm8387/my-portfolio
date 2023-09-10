import React from "react"

export default function Project(props) {
    return(
        <a href={props.link} target="_blank" >
            <div className="project">
                <img src={props.image} className="project-image" />
                <h1 className="project-title" >{props.title}</h1>
            </div>
        </a>
    )
}