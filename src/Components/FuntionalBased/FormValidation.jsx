
import React, { useState } from 'react'

const FormValidation = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState();
    const [err, setErr] = useState(false);
    const [errPass, setErrPass] = useState(false);

    function Login(e) {
        if(email.length < 3 || pass.length < 6){
            alert('Please fill the form in proper way!')
            return
        } else {
            alert('Form Submitted Successfully');
        }

        e.preventDefault();
        console.log(email,pass);
    }

    function emailVaidation(e) {
        let element = e.target.value;
        if(!element.includes('@')){
            setErr(true);
        }else {
            setErr(false)
        }
        setEmail(element);
    }

    function validPassword(e) {
        let element = e.target.value;
        if(element.length < 6){
            setErrPass(true);
        }else {
            setErrPass(false)
        }
        setPass(element);
    }

  return (
   <>
    <h2>Form Vaidations</h2>
    <form onSubmit={Login}>
        <input type="text"
         placeholder='Enter Email'
        onChange={emailVaidation}
        style={err ? {border: '1px solid red'}: null}
        />
        
        <br />

        { err && (
            <small style={{color: 'red'}}>
                Plese enter a valid email
            </small>
        )}

        <br /><br /> 

        <input type="text"
         placeholder='Enter Password'
        onChange={validPassword}
        style={errPass ? {border: '1px solid red'}: null}
        />
        
        <br />

        { errPass && (
            <small style={{color: 'red'}}>
               Password must be at least 6 letters
            </small>
        )}

        <br /> <br />

        <button type='submit'>Submit</button>

    </form>
   </>
  )
}


export default FormValidation