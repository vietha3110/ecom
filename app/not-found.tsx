import Link from 'next/link'
import Layout from '@/components/Layout'
export default function NotFound() {
    return (
        <Layout>
            <div className='flex mx-8 min-h-screen flex-col'>
                <div className='h-[100px]'></div>
                <div className='w-full h-[500px] flex flex-col justify-center items-center'>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </div>
            </div>
        </Layout>
    )
}
