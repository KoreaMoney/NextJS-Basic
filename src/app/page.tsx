import Counter from '@/components/Counter';
import Image from 'next/image';
import os from 'os'; // NodeJS API

export default function Home() {
    // console.log('서버컴포넌트 확인');
    // console.log('os', os.hostname());
    return (
        <>
            <h1>Space to record a day, a week, a month, and a year</h1>
            <Counter />
            <Image
                src="https://static.wanted.co.kr/images/events/1633/f85834e9.jpg"
                alt="메인 이미지"
                width={800}
                height={300}
                style={{ opacity: 0.7 }}
            />
        </>
    );
}
