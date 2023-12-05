'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const GoTodosBtn = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push('/todos');
            }}
        >
            전체 list
        </button>
    );
};

export default GoTodosBtn;
