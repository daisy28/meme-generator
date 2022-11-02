import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

const Body = () => {

     return(
          <div className="body-con">
               <App />
          </div>
     )
}

ReactDOM.render(<Body />, document.getElementById("root"))