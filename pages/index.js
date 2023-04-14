import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter()

  useEffect(() =>{
    router.replace("/auth/login")
  },[router])

  return (
    <>
      <Head>
        <title>15CACB</title>
        <meta name="description" content="15CACB Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <main>
        
      </main>
    </>
  )
}
