import React from "react"
import {Link} from "gatsby"

export default () => (
    <div>
       <h1>Index page</h1>
       <div>
           <Link to="/home">Home</Link> | <Link to="/about">About me</Link>
       </div>
    </div>
)