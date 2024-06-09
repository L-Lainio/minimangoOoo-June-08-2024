import variables from '../styles/variables.module.scss'
// import Image from 'next/image'
// import profilePic from '../public/me.png'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout color={variables.primaryColor}>
            <Component {...pageProps} />
        </Layout>
    )
}


// image optimization
// import Image from 'next/image'

// export default function Page() {
//     return (
//         <Image
//             src="https://s3.amazonaws.com/my-bucket/profile.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}
//         />
//     )
// }
