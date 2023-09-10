import React from "react"

export default function Skills(props) {
    return (
        <div className="skills-container">
            <h1 className="skills-heading">My Skills</h1>
            <div className="skills-list">
                {props.skillsArray}
            </div>
        </div>
    )
}