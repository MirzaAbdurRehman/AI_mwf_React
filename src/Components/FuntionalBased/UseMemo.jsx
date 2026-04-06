import { useMemo, useState } from "react";


function UseMemos() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const expensiveFunction = (n) => {
        console.log('Calculating!...');
        for (let i = 0; i < 100000000; i++){
            // simulate expensive calculation
        }
        return n + 5;
    }

    const result = useMemo(() => expensiveFunction(num), [num]);

    return (
        <>
        <h2>Result: {result}</h2>
        <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
        <br /> <br />
        <button onClick={() => setNum(num + 1)}>Number: {num}</button>
        </>
    );


}

export default UseMemos;