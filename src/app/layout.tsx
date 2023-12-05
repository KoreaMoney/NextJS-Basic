import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Anek_Odia } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';

const sans = Noto_Sans({ weight: '500', subsets: ['latin'] });
const odia = Anek_Odia({ weight: '600', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The record | Home',
    description: 'Records create a path to success.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={sans.className}>
                <header className={styles.header}>
                    <h1 className={odia.className}>
                        <Link href="/">Demo Note</Link>
                    </h1>
                    <nav className={styles.nav}>
                        <Link href="/todos" className={styles.link}>
                            ToDoList
                        </Link>
                        <Link href="/about" className={styles.link}>
                            About
                        </Link>
                        <Link href="/contact" className={styles.link}>
                            Contact
                        </Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
