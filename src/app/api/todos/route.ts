import { getTodos } from '@/service/todos';
import { NextResponse } from 'next/server';

// API Routing
export async function GET(request: Request) {
    const todos = await getTodos();
    return NextResponse.json({ todos });
}
