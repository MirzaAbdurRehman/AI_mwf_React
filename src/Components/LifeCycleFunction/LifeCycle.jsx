import React, { useEffect, useState } from 'react'

function LifeCycle() {


    // 1st Phase:

    // useEffect(() => {   
    //     console.log('Component Has Mounted');

    //     // Api Call 
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }, []);  // only one time api call 


    // 2nd Phase:

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count has Updated', count); 
    }, [count]) // when count uodated so this life cycle call 
    return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
    )
}

export default LifeCycle;