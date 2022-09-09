import React, { useState, useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';


function Blog() {
    const [blogs, setBlogs] = useState([]);
useEffect(() => {
    console.log("useeffect is running");
    fetch('http://localhost:3000/api/blogs').then((a) => {
        return a.json();
    })
        .then((parsed) => {
            console.log(parsed)
            setBlogs(parsed)
        })
}, [])
    return (
        <div className=' container'>
            <div className={styles.mainnav}>
                <div className="blogs ">
                    <h2 className=' text-center mb-5'>Popular Blogs</h2>

{blogs.map((blogitem) => {
    return <div key={blogitem.slug} className={styles.blogItem}>
        <Link href={`/blogpost/${blogitem.slug}`}>
            <h5 style={{ cursor: 'pointer' }} className={styles.blogItemh3}><span>{blogitem.id}</span> {blogitem.title}</h5></Link>
        <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
        {/* <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link> */}
    <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
    </div>
})}

                </div>
            </div>
        </div>
    )
}

// step 1:
export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}


export default Blog



// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import styles from '../styles/blog.module.css'



// //* Step 1: collect all the files from blogdata directory
// //* Step 2: Iterate through the and Display them 
// function Blog(props) {
//     console.log(props)
//     const [blogs, setBlogs] = useState(props.allBlogs)

//     useEffect(() => {
//         console.log("useeffect is running");
//         fetch('http://localhost:3000/api/blogs').then((a) => {
//             return a.json();
//         })
//             .then((parsed) => {
//                 console.log(parsed)
//                 setBlogs(parsed)
//             })
//     }, [])

//     return (
//         <div className=' container'>
//             <div className={styles.mainnav}>
//                 <div className="blogs ">
//                     <h2 className=' text-center mb-5'>Popular Blogs</h2>

//                     {blogs.map((blogitem) => {
//                         return <div key={blogitem.slug} className={styles.blogItem}>
//                             <Link href={`/blogpost/${blogitem.slug}`}>
//                                 <h5 style={{ cursor: 'pointer' }} className={styles.blogItemh3}><span>{blogitem.id}</span> {blogitem.title}</h5></Link>
//                             <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
//                             {/* <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link> */}
//                             <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
//                         </div>
//                     })}

//                 </div>
//             </div>
//         </div>
//     )
// }


// // step 1:
// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs')
//     let allBlogs = await data.json()

//     return {
//         props: { allBlogs }, // will be passed to the page component as props
//     }
// }

// export default Blog