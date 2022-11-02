import React from "react"

const Header = () => {
     
     return(
          <header>
               <div className="header">
                    <div className="logo">
                    <ion-icon name="earth-outline"></ion-icon>
                  <p>Portfolio</p>
                    </div>
                 
                    <div className="header-links">
                         <a href="#project" id="">Projects</a>
                         <a href="#technology">Technologies</a>
                         <a href="#about">About me</a>
                    </div>
                    <div className="social-icons">
                         <a href="https://github.com/daisy28"><ion-icon name="logo-github"></ion-icon></a>
                         <a href="https://www.linkedin.com/in/gloria-ubah-a74446156"><ion-icon name="logo-linkedin"></ion-icon></a>
                         <a href="https://twitter.com/gloriah_CU"><ion-icon name="logo-twitter"></ion-icon></a>
                    </div>
                    <div className="menu">
                    <ion-icon name="menu-outline"></ion-icon>
                    </div>
               </div>
          </header>
     )
}

export default Header