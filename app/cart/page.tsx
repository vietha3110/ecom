'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import Layout from '@/components/Layout'
import { useAuth } from '../auth-provider'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product-cart'
export default function Cart() {
    const { isAuth } = useAuth();

    return (
        <Layout>
            <div className='flex mx-8 min-h-screen flex-col'>
                <div className='h-[100px]'></div>
                <Card>
                    <CardHeader>
                        {
                            !isAuth && <CardTitle>Your cart is empty</CardTitle>
                        }
                        {
                            isAuth && <CardTitle>Shopping cart</CardTitle>
                        }
                    </CardHeader>
                    <CardContent>
                        {
                            isAuth && <span> Hello, User</span>
                        }
                        {
                            !isAuth && <Link href={`/login`}> <Button>Login</Button></Link>
                        }
                        <ProductCard/>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}
