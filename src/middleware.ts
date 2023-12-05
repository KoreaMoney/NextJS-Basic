import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('미들웨어 실행중');
    if (request.nextUrl.pathname.startsWith('/todos/1004')) {
        console.log('미들웨어 1004일 경우 페이지 이동 실행중');
        return NextResponse.redirect(new URL('/todos', request.url));
    }
}

// 만약 특정한 페이지만 필요할 경우에는 아래와 같이 진행하면 다른 페이지에서는 미들웨어가 발생하지 않고 해당 todos의 페이지에서만 진행된다.
export const config = {
    matcher: ['/todos/:path*'],
};
