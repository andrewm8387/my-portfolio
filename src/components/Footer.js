import React from "react"

import linkedIn from "../imgs/linkedin.svg"
import email from "../imgs/email.svg"
import github from "../imgs/logos/github-142-svgrepo-com.svg"

export default function Footer() {
    return (
        <div className="footer">
            <p>© Andrew McLaren 2023. All rights reserved</p>
            <a href="https://www.linkedin.com/in/andrew--mclaren/">
                <img src={linkedIn} />
            </a>
            <a href="mailto:mclara2@mcmaster.ca">
                <img src={email} className="footer-email"/>
            </a>
            <a href="https://github.com/andrewm8387">
                <img src={github} className="footer-email"/>
            </a>
        </div>
    )
}