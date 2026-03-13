

import React, { use, useState } from 'react'

const FormHandling = () => {

    const [name, setName] = useState('');
    const [option, setOptions] = useState('');
    const [agree, setAgree] = useState(false);

    function getFormData(obj) {
        console.log(name, option, agree);
        console.log('Form Submitted');
        obj.preventDefault();

    }

    function getInputData(data) {
        setName(data.target.value)
    }

    function getOptionData(data) {
        setOptions(data.target.value)
    }

    function getCheckBoxData(data) {
        setAgree(data.target.checked)
    }



  return (
    <>
    <h2>Form Handling Component</h2>
    <form onSubmit={getFormData}>
        <label htmlFor="name">Name: </label>
        <input type="text"  id="options" onChange={getInputData}/>
        <br /> <br />
        <select name="options" id="options" onChange={getOptionData}>
            <option> Select an Option </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
        </select>

        <br />

        <input type="checkbox" onChange={getCheckBoxData} />
        <br />
        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default FormHandling