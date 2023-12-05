'use client';

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // 더하기
    const handleCountUp = () => {
        setCount(count + 1);
    };
    // 빼기
    const handleCountDown = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px' }}>
            <p style={{ fontSize: '2rem' }}>{count}</p>
            <button
                onClick={handleCountUp}
                style={{
                    backgroundColor: 'lightgray',
                    color: 'black',
                    borderRadius: '12px',
                    width: '10rem',
                    height: '2rem',
                    fontWeight: 'bold',
                }}
            >
                숫자 증가 ➕
            </button>
            <button
                onClick={handleCountDown}
                style={{
                    backgroundColor: 'lightgray',
                    color: 'black',
                    borderRadius: '12px',
                    width: '10rem',
                    height: '2rem',
                    fontWeight: 'bold',
                }}
            >
                숫자 감소 ➖
            </button>
        </div>
    );
};

export default Counter;
