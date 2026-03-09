import React from 'react'

const ClickEvents = () => {

    let firtName = 'Fuzail';

    const handleClick = () => {
        let firtName = 'Abdullah'; 
        alert(`Hey! ${firtName}`);
    }

    console.log('Rendering')

  return (
    <div>
        <h2>Hey, {firtName}</h2>
        <button onClick={handleClick}>Click Me</button> <br />
        <button onClick={() => alert(`Hey! ${firtName}`)}>Click Me</button>

    </div>
    
  )
}

export default ClickEvents