import Counter from '@/components/Counter';
import os from 'os'; // NodeJS API

export default function Home() {
    console.log('서버컴포넌트 확인');
    console.log('os', os.hostname());
    return (
        <>
            <h1>Space to record a day, a week, a month, and a year</h1>
            <Counter />
        </>
    );
}
