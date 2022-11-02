import React from "react"

const Technologies = (props) => {
     return(
          <section>
              
                    <div className="progress-div">
                         <h2>{props.tech.title}</h2>
                         <div className="progress">
                              <div className="progress-bar">{props.tech.progressWidth}</div>
                         </div>
                    </div>

                    
               
          </section>
     )
}

export default Technologies