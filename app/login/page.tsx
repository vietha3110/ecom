'use client' 
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase-config'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginCard } from '@/components/login-card'
import { SignUpCard } from '@/components/signup-card'
import { Dispatch, SetStateAction} from 'react'



interface isLoginCard {}
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
