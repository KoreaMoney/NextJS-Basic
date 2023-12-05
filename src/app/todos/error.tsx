'use client';

import React, { useEffect } from 'react';

interface Ierror {
    error: Error;
    reset: () => void;
}

const TodoError = ({ error, reset }: Ierror) => {
    useEffect(() => {
        console.error('error', error);
    }, [error]);
    return (
        <>
            <h1>Something went Error! ⚠️</h1>
            <button onClick={() => reset()}>Try again</button>
        </>
    );
};

export default TodoError;
