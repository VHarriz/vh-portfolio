import React from 'react'

function About() {
  return (
    <div className='aboutme'>
    <div className="skills">
    <h1> Skills I have been learning</h1>
    <ul className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          JavaScript, ReactJS, HTML, CSS, BootStrap
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
        </span>
      </li>
    </ul>
    <h3 className='resume'>Resume will be posted under here once edited.</h3>
    <h4 className='contact'>Contact me at @gmail.com</h4>
  </div>
</div>
  );
}

export default About