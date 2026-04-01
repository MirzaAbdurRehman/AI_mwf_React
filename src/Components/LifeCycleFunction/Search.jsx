import React, { useEffect, useState } from 'react'

function Search(){

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (query === "") return;

        const controller = new AbortController;

        const fetchData = async () => {
            try{
                const res  = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?q=${query}`,
                    {signal: controller.signal}
                );

                const result = await res.json();
                setData(result);
            } catch (e){
                console.log('Request Cancel');
            }
        };

        fetchData();
        
        return () => {
            controller.abort();
            console.log('Clean Previous Request');
        };
    }, [query]);



    return (
        <>
        <h2> Search Posts</h2>
        <input type="text" placeholder='Serach post...'  value={query} onChange={(e) => setQuery(e.target.value)}/>

        <ul>
            {data.map((item) => {
                <li key={item.id}>{item.title}</li>
            })}
        </ul>
        </>
    )
}

export default Search