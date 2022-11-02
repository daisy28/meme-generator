import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CardData from "./components/CardData"
import TechData from "./components/TechData"
import AboutData from "./components/AboutData"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"


const App = () => {

     const renderCard = CardData.map((items) => {
          return <Projects 
          key = {items.id}
          items = {items}
          />
        })

        const renderTech = TechData.map((tech) => {
          return <Technologies 
          key = {tech.id}
          tech = {tech}
          />
        })

        const renderAbout = AboutData.map((about) => {
          return <About 
          key = {about.id}
          about = {about}
          />
        })


     return(
          <div>
               <Header />

               <Hero />

               <section className="proj" id="project">
                    <h1>Projects</h1>
                    <div className="cards-div">
                         {renderCard}
                    </div>
               </section>
              
               <div className="technologies" id="technology">
                    <h1>Technologies</h1>
               {renderTech}
               </div>
               <Skills />
               {/* <About /> */}
               <div className="about" id="about">
                    <h1>About me</h1>
                    <div className="group">
                         <div className="divider">
                              <div className="circle"></div>
                              <div className="circle"></div>
                              <div className="circle"></div>
                              <div className="circle"></div>
                         </div>

                         <div className="about-text">
                              {renderAbout}
                         </div>
                    </div>
                    
                    
               </div>
               <Footer />
          </div>
     )
}

export default App