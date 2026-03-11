
import React, {useState} from 'react'

const GetInputData = () => {

    const [inputValue, setInputValue] = useState("");
    const [isNotSubmit, isSubmit] = useState(false);

    function getValue(data) {
        setInputValue(data.target.value)
        isSubmit(false)
    }
  return (
    <>
     {
        isNotSubmit ? <h4>{inputValue}</h4> : null
     }
     <br />
     <input type="text" onChange={getValue} />
     <button onClick={() => isSubmit(true)}>Display Value</button>
    </>
  )
}

export default GetInputData