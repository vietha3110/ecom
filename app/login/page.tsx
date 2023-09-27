'use client' 
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase-config'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginCard } from '@/components/login-card'
import { SignUpCard } from '@/components/signup-card'

export default function Login() {
    const [selectedLogin, setSelectedLogin] = useState<Boolean>(true);
    return (
        <div className='w-full min-h-screen flex flex-col items-center'>
            <div className='h-[400px]'></div>
            {/* {
                selectedLogin && <LoginCard />
            }
            {
                !selectedLogin && <div>here</div>
            } */}
            <SignUpCard/>
        </div>
    )
}
