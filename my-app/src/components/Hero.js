import React from "react"
import Picture from "../img/ZwjOPs2h_400x400.jpg"

const Hero = () => {
     
     return(
          <section>
               <div className="hero">
                    <div className="hero-text">
                         <h1>Hi, I'm Gloria.
                         </h1> 
                         <p> I'm a super talented human with 2+ years of experience in Software Development. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
			          </p>
                         <p> I'm easily inspired and more then willing to follow my fascinations wherever they take me. I'm passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire.
                         </p>

                         <div className="hero-btn">
                              <button>Lets Begin</button>
                         </div>
                    </div>
                    <div className="hero-img">
                         <img src={Picture} alt="" />
                    </div>
                   
               </div>
          </section>
     )
}

export default Hero