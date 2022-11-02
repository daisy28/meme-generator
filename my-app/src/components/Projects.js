import React from "react"
// import proj from "../img/images (1).jpg"

const Projects = (props) => {

     return(

                    <div className="cards">
                         <div className="cards-img">
                              <img src={props.items.img} alt="" />
                         </div>

                         <div className="card-text">
                         <h1>{props.items.project}</h1>
                         <div className="underline"></div>
                         <p>{props.items.text}</p>
                         </div>
                         

                         <div className="hero-btn btn2">
                            <button><a href={props.items.link}>Look it up</a></button>
                         </div>
                    </div>
     
     )
}

export default Projects