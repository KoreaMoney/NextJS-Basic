import path from 'path';
import { promises as fs } from 'fs';

export type Todo = {
    id: string;
    name: string;
    date: string;
};

export async function getTodos(): Promise<Todo[]> {
    const filePath = path.join(process.cwd(), 'data', 'todos.json'); // nodeJS에서 제공하는 path를 사용, cwd는 현재 경로를 말한다.
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

export async function getTodo(id: string): Promise<Todo | undefined> {
    const todos = await getTodos();
    return todos.find((item) => item.id === id);
}
