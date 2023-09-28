'use client' 
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { LoginCard } from '@/components/login-card'
import { SignUpCard } from '@/components/signup-card'


export default function Login() {
    const [selectedLogin, setSelectedLogin] = useState(true);

    return (
        <div className='w-full min-h-screen flex flex-col items-center'>
            <div className='h-[400px]'></div>
            {
                selectedLogin && <LoginCard setSelectedLogin={setSelectedLogin} />
            }
            {
                !selectedLogin && <SignUpCard setSelectedLogin={setSelectedLogin}/>
            }
        </div>
    )
}
