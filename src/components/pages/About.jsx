// import React from 'react'
import {Link} from 'react-router-dom'

import Card from "../share/Card"
function About() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This a React App to leave a feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <Link to="/">Back to home</Link>
        </div>
    </Card>
  )
}

export default About
