import Head from 'next/head';
import Link  from 'next/link';
console.log('homepage')
function HomePage() {
    return (
        
        <>
        <Head>
            <title>Blog: ericpolley</title>
           

        </Head> 
      
            <h1>blog</h1>
            <ul>
                <li> <Link href="/posts/Blog001">Blog Post 001</Link></li>
                <li>two</li>
                <li>three</li>
            </ul>
            <style jsx>{`
            h1 { color: blue;}
            
            `}</style>
     
        </>
    );
}

export default HomePage;