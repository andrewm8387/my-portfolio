import React from "react";

export default function Skill(props) {
    return (
        <div className="skill">
            <img src={props.logo} className="skill-logo"/>
            <h1>{props.skill}</h1>
        </div>
    )
}