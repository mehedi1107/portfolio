import React from 'react'
import './Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = () => {
   const [text] = useTypewriter({
      words: ['Web Designer', 'Web Developer', 'Full-stack-Developer'],
      typeSpeed: 100,
      deleteSpeed: 100,
      delaySpeed: 1500,
      loop: true,


   });

   return (

      <div>
         <div id='section'>
            <div id='text'>
               <h3>Hello,It's Me</h3>
               <h1>Mehedi Hasan</h1>
               <h3>And I'm a <span id='front' >{text}<Cursor /></span> </h3>
               <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quia molestiae ipsa nobis autem quam itaque esse excepturi quis nulla necessitatibus, maxime quae quasi culpa cupiditate id nostrum exercitationem et.</p>
               <span id='social'>
                  <a href='https://www.facebook.com/mehedi11074'><i class='bx bxl-facebook'></i></a>
                  <a href='https://www.instagram.com/mehedi11074'><i class='bx bxl-instagram-alt'></i></a>
                  <a href='https://github.com/mehedi1107'><i class='bx bxl-github'></i></a>
                  <a href='https://www.linkedin.com/in/mehedi1107/'><i class='bx bxl-linkedin-square'></i></a>
               </span>
            </div>
            <div id='img'>
               < img src={ "public/image/pic.png" }alt=''></img>
            </div>


         </div>
         <button id='cv'>Download Cv</button>
      </div>


   )
}


export default Home
