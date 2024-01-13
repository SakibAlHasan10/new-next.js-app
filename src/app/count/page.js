"use client";
import React, { useState } from 'react';

const CountPage = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count page</h1>
            <h2>Counter: {count}</h2>

            <button 
            className='btn btn-primary' 
            onClick={()=>setCount(count+1)}
            >Increase</button>

            <button className='btn btn-primary'
             onClick={()=>setCount(count-1)}
             >decrease</button>
        </div>
    );
};

export default CountPage;