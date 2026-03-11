
import React, { useState } from 'react'

const HideToggleButton = () => {

    const [isVisble, setIsVisible] = useState(true)
  return (
    <>

    {
        isVisble ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti iusto accusamus eaque totam, animi veniam corrupti veritatis saepe aspernatur fugiat fuga vitae quia, laboriosam eum unde vel debitis ducimus?</p> : null
    }
    <br />

    <button onClick={() => setIsVisible(!isVisble)}>
        {isVisble ? 'Hide' : 'Show'} Content
    </button>
    </>
  )
}

export default HideToggleButton