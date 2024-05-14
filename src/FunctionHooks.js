import React, { useState, useEffect } from "react";

// const FunctionHooks = () => {

//     const [counter, setCounter] = useState(0);

//     const incrementCounter = () => {
//         setCounter(counter + 1)
//     }

//     return (
//         <div>
//             <h1>Your Tasbih : {counter}</h1>
//             <button type="button" onClick={incrementCounter}> Click Me </button>
//         </div>
//     )
// }

const FunctionHooks = () => {

    const [company, setCompany] = useState("Web Wonders")
    const [services, setServices] = useState("Web Development App Development Accounts Web Solution")
    const [year, setYear] = useState(2022)

    useEffect = () => {

    }

    const changeYear = () => {
        setYear(2000);
        setCompany("MM Apps")
    }

    return (
        <div>
            <h1>Our Company {company} Offers The Services {services} Since From {year}</h1>
            <button type="button" onClick={changeYear}>Change Year</button>
        </div>
    )

}
export default FunctionHooks