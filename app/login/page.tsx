'use client' 
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase-config'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginCard } from '@/components/login-card'

export default function Login() {
    const router = useRouter();

    return (
        <div className='w-full h-full flex flex-col mt-10 justify-center items-center'>
            <LoginCard/>
        </div>
    )
}
