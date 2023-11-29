import Link from 'next/link';
import React from 'react';

const todoList = ['Sep', 'Oct', 'Nov', 'Dec'];

const TodosPage = () => {
    return (
        <div>
            <h1>📖 Space to create a todo list</h1>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        🔖<Link href={`todos/${todo}`}>{todo}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosPage;
