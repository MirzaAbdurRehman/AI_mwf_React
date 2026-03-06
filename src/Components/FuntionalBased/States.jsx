import React, {useState} from 'react'

const States = () => {

    const [name, setName] = useState('Ali');  

    function updateName() {
        setName('Hamza');
    }

  return (
    <div>
        <h2>Hey, {name}</h2>
        <button onClick={updateName}>Update Name</button>
    </div>
  )
}

export default States