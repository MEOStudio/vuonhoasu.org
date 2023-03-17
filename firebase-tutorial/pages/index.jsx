import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Firebase Tutorial</title>
      </Head>
      <main >
        <div>
          <Link href={'/register'}><h1>Register</h1></Link>
        </div>
        <div>
          <Link href={'/login'}><h1>Login</h1></Link>
        </div>
        <div>
          <Link href={'/login-2'}><h1>Login with other methods</h1></Link>
        </div>
        <div>
          <Link href={'/addData'}><h1>Add Data</h1></Link>
        </div>
        <div>
          <Link href={'/realtime'}><h1>Get Update Real Time</h1></Link>
        </div>
        <div>
          <Link href={'/query'}><h1>Query</h1></Link>
        </div>
        <div>
          <Link href={'/storage'}><h1>Firebase Storage</h1></Link>
        </div>
      </main>
    </>
  );
}
