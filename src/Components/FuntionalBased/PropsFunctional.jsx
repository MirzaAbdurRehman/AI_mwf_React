import React, { useState } from 'react'

export const PropsFunctional = (props) => {

    const [firstName, setName] = useState(props.name);

  return (
    // Jsx Fragments
    <>  
        <h2>Hello, {firstName}</h2>
        <h2>Email: {props.email}</h2>
        <h2>Pno: {props.pno}</h2>
        <button onClick={() => setName('Ahmed')}> Change Name</button>
    </>
  )
}
