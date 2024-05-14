import React, { useState } from "react";
// import ReactDom from "react-dom"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


const Styling = () => {

    const [service, setService] = useState("WEB DEVELOPMENT")
    const [website, setWebsite] = useState("WEBWONDER.NETLIFY.APP")



    const internalStyle = {
        // fontSize: '30px',
        color: 'rgb(243, 198, 102)',
        textAlign: 'center'
    }


    return (
        <body style={{ backgroundColor: "beige" }}>
            <h1 style={{ color: "brown", textAlign: "center" }}> WEB WONDERS </h1>
            <h1 style={internalStyle}> SERVICE : {service}  </h1>
            <h1 className="extrenal-css">  WEBSITE : <a href='https://webwonder.netlify.app' className="external-css"> {website} </a></h1>


        </body >
    )

}
export default Styling