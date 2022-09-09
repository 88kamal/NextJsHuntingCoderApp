import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image className={styles.myImg} src="/logo.avif" width={150} height={150} alt='hunting coder' />
        </div>
        <h1 className={styles.title}>
          <p  className= {styles.name}>&lt;Kamal Nayan Upadhyay/&gt;</p>
          <span className='dummy'>&lt;HuntingCoder/&gt;</span>
        </h1>

        <div className=' container my-3'>
          <hr />
          <h1 className=' text-center fw-bolder'>Popular Blogs</h1>
          <hr />
          <div className=' my-5'>
          <h5>How To Learn HTML</h5>
          <p className=' fw-light' style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
          <h5>How To Learn JavaScript</h5>
          <p className=' fw-light' style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
          <h5>How To Learn NextJs</h5>
          <p className=' fw-light' style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
          <h5>How To Learn ReactJs</h5>
          <p className=' fw-light' style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Image from 'next/image'


// export default function Home() {

//   // console.log(styles)
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Hunting Coder</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}

//       <main className={styles.main}>
//         <div className={styles.imagewrap}>
//           <Image className={styles.myImg} src="/logo.avif" width={150} height={150}/>
//           {/* <img className={styles.myImg} src="/1.avif" width={237} height={158} alt="hunting coder" /> */}
//         </div>
//         <h1 className={styles.title}>
//           <h6 className='dummy'>&lt;Kamal Nayan Upadhyay/&gt;</h6>
//           <span className='dummy'>&lt;HuntingCoder/&gt;</span>
//         </h1>


//         {/* <div className={`${styles1.con} ${styles2.con}`}> */}
//         <div className=' container my-3'>
//           <h5>How To Learn HTML</h5>
//           <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
//           <h5>How To Learn JavaScript</h5>
//           <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
//           <h5>How To Learn NextJs</h5>
//           <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
//           <h5>How To Learn ReactJs</h5>
//           <p style={{ textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam sint, voluptates, mollitia soluta quaerat assumenda obcaecati ducimus, impedit sed dolor exercitationem voluptas iusto quia quae placeat similique dignissimos labore cumque eveniet aliquid itaque ab! Ad iure in fuga recusandae magnam voluptas esse ullam? Deleniti cupiditate tempore quas nemo! Suscipit error saepe iste sequi architecto ipsa assumenda, sit amet numquam dignissimos nesciunt quis eum fugit, consequatur officia rem ex non sunt! Deleniti in provident id blanditiis dolorem doloremque quae accusamus porro enim autem voluptatum natus quia totam error non nihil inventore, quas voluptatem dignissimos deserunt! Et, enim hic. Alias, dolores.</p>
//         </div>
//       </main>

//       <footer className={styles.footer}>

//       </footer>
//     </div>
//   )
// }