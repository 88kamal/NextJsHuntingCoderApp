import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css';
import Image from 'next/image'

function Slug () {
    function createMarkup(c) {
        return { __html: c };
    }
    const [blog, setBlog] = useState();

    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])

    return <div className={styles.container}>
    <main className={styles.main}>
        
        <Image className={styles.myImg} src="/logo.avif" width={150} height={150} alt='hunting coder' />
        <h1>{blog && blog.title}</h1>

        <hr />
        <div className='container'>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} ></div>}
        </div>
    </main>
</div>;
};

// Step 2
export async function getServerSideProps(context) {
    // console.log(context.query)
    // const router = useRouter();
    const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}

 
export default Slug;
