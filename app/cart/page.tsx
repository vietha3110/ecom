import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import Layout from '@/components/Layout'


export default function Cart() {
    return (
        <Layout>
            <div className='flex mx-8 min-h-screen flex-col'>
                <div className='h-[100px]'></div>
                <Card>
                    <CardHeader>
                        Your Cart is empty
                    </CardHeader>
                    <CardContent>
                        Sign in or Sign up
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}
