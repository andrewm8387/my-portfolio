import React from "react";

export default function Header(props) {
    return(
        <nav className="nav">
            <h1 className="nav-title">My Portfolio</h1>
            <div className="navbar">
                <h3 onClick={props.toHome}>Home</h3>
                <h3 onClick={props.toMyProjects}>My Projects</h3>
                <h3 onClick={props.toMySkills}>Skills</h3>
            </div>
        </nav>
    )
}