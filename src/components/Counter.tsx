'use client';

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCountUp = () => {
        setCount(count + 1);
    };
    return (
        <>
            <p>{count}</p>
            <button onClick={handleCountUp}>숫자 증가 버튼</button>
        </>
    );
};

export default Counter;
