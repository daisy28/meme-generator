import React from "react"

const About = (props) => {
     return(
          <section>
               <h3>{props.about.year}</h3>
               <p>{props.about.title}</p>
               <div className="cert-div">
                    <a href={props.about.link} className="cert">Access Certificate</a>
               </div>
               
          </section>
     )
}

export default About