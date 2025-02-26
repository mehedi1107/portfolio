import React from 'react'
import'./about.css'
const About = () => {
  return (
    
    <div id='about'>
      
        
        <img src={ import.meta.env.BASE_URL +"src/component/image/pic.png"  } alt=''></img>
        
      
      
      
      <div id='text2'>
        <h2 id='me'>About Me</h2>
        <h3 id='me'>Fronted Developer</h3>
        <p id='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eum accusamus pariatur totam dignissimos consectetur! Rem sunt similique exercitationem praesentium corporis. Quam aspernatur cupiditate harum quae nam. Cumque exercitationem cum minus dolores inventore sit deleniti illo, rem beatae, placeat perferendis possimus nisi amet itaque minima </p>
        <a href='#' id='cv'>Read More</a>
        </div>
        
        
    </div>
  )
}

export default About
