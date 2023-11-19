import React from "react";
import portrait from "../imgs/headshot.jpg"

export default function About() {
    return(
        <div className="about-container">
            <div className="about" id="about">
                <div className="about-profile">
                    <img src={portrait} className="about-portrait" />
                    <div className="about-para">
                        <p>Hi,</p>
                        <p>I'm <span className="about-name">Andrew</span>,</p>
                        <p className="about-student">Software Eng Student</p>
                    </div>
                </div>
                <p className="about-bio">I’m currently studying at McMaster University and in my third year of Software Engineering</p>
            </div>
            <div className="about" style={{backgroundImage: "radial-gradient(26.76% 85.52% at 86.73% -12.86%, rgb(194, 65, 255) 6.65%, rgb(107, 87, 255) 100%)"}}>
                <p>My other interests include being active and the outdoors. Chiefly, I am a Elite level Orienteer
                    and have been on the national team since 2021 with notable results such as 2nd in the Sprint distance
                    at the North American Orienteering Championships in 2023.</p>
            </div>
        </div>
    )
}