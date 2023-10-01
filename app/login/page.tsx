'use client' 
import { useState, useEffect } from 'react'
import { LoginCard } from '@/components/login-card'
import { SignUpCard } from '@/components/signup-card'
import Layout from '@/components/Layout'

export default function Login() {
    const [selectedLogin, setSelectedLogin] = useState(true);

    return (
        <Layout>
            <div className='w-full min-h-screen flex flex-col items-center'>
                <div className='h-[400px]'></div>
                {
                    selectedLogin && <LoginCard setSelectedLogin={setSelectedLogin} />
                }
                {
                    !selectedLogin && <SignUpCard setSelectedLogin={setSelectedLogin}/>
                }
            </div>
        </Layout>
    )
}
