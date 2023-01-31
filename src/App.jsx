import React from 'react'
import Componet from './Componet'


function Element(){
  return <h1>Element</h1>
}

function App() {
  return (
    <Componet 
      name="Kishore" 
      age={21} 
      renderable="any" 
      element={<Element />} 
      stringOrNumber={12}
      state="Loading"
      arr = {[1,2,3,4]}
      arrofString = {["1","2","3"]}
      person = {{
        name : "Kishore",
        age : 21
      }}
      />
  )
}

export default App