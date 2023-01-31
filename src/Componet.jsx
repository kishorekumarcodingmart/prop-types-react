import React from 'react'
import PropTypes from 'prop-types'


function Componet({name, age, renderable, element, stringOrNumber, state, arr, arrofString, person}) {
    return (
        <>
            <div>In 5 Years {name} will be {age + 5}</div>
            <h1>{renderable}</h1>
            {element}
            <p>{stringOrNumber}</p>
            <h1>{state}</h1>
            <p>{JSON.stringify(arr)}</p>
            <p>{JSON.stringify(arrofString)}</p>
        </>
        )
    }
    
Componet.propTypes = {
    name : PropTypes.any.isRequired,
    age : PropTypes.number,
    renderable : PropTypes.node,
    element : PropTypes.element.isRequired,
    stringOrNumber : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    state : PropTypes.oneOf([
        "Loading",
        "Ready"
    ]),
    arr : PropTypes.array,
    arrofString : PropTypes.arrayOf(PropTypes.string),
    person : PropTypes.shape({ //exact -> only name and age are allowed
        name : PropTypes.string,
        age : PropTypes.number
    }).isRequired
}

export default Componet