import Link from 'next/link';
import React from 'react';
import { getTodos } from '@/service/todos';

const TodosPage = async () => {
    // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줄 것.
    const todoList = await getTodos();
    return (
        <div>
            <h1>📖 Space to create a todo list</h1>
            <ul>
                {todoList.map(({ id, name }) => (
                    <li key={id}>
                        🔖<Link href={`todos/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosPage;
