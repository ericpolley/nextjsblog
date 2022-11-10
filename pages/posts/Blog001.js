import Head from "next/head"

export async function getStaticProps() {
   
    
    
    return {
        props: {
            post: {
                title: 'blog001',
                body: 'blog001, as static props'
            }
        }
    }

}


export default function Blog001({post}) {
    console.log('[Blog001] dat render:', post);

  return (
    <div>
    <Head>
       <title>{post.title}: ericpolley</title>
   </Head>
  <h3> {post.title} </h3>
  <p> {post.body} </p>

  </div>
  )
}
