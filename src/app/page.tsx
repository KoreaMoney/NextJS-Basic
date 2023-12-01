import Image from 'next/image';
import os from 'os';

export default function Home() {
    console.log('os', os.hostname());
    return (
        <>
            <h1>Space to record a day, a week, a month, and a year</h1>
        </>
    );
}
