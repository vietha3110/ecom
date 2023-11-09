'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dispatch, SetStateAction, FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import logIn from '@/app/firebase/auth/login'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useAuth } from "@/app/auth-provider"
import { FirebaseUser } from '@/lib/userFirebaseInterface'
import firebase_app from '@/lib/firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
interface Auth {
    email: string,
    password: string
}

interface LoginCardProps {
    setSelectedLogin: Dispatch<SetStateAction<boolean>>
}



export const LoginCard:FC<LoginCardProps> = (props: LoginCardProps) => {
    let setState = props.setSelectedLogin;
    const { isAuth, setIsAuth } = useAuth();
    const handleClick = () => {
        setState(false);
    }
    const router = useRouter();
    const { register, handleSubmit } = useForm<Auth>();
    const onSubmit: SubmitHandler<Auth> = (async (data) => {
        const { user, error } = await logIn(data.email, data.password); 
        if (error) {
            const err: {code?: string} = error
            console.log(err.code);
        } else {
            if (user && 'accessToken' in user) {
                const token = user.accessToken as FirebaseUser;
                localStorage.setItem('token', JSON.stringify(token));
                setIsAuth(true);
                router.push('/');
            }
        }
    })

    const loginWithGG = () => {
        const auth = getAuth(firebase_app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    const token = credential.accessToken;
                    const user = result.user;
                    console.log(user)
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                console.log(errorMessage, errorCode)
            })
    }
    return (
        <Card className='w-1/3' >
            <CardHeader className='space-y-1 flex justify-center items-center'>
                <CardTitle className='text-2xl'>Log in</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <div className='grid grid-cols-2 gap-6'>
                    <Button variant='outline'  >
                        Log in with Facebook
                    </Button>
                    <Button variant='outline' onClick={loginWithGG}>
                        Log in with Google
                    </Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-background px-2 text-muted-foreground'>
                            Or continue with
                        </span>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            type='email'
                            placeholder='m@example.com'
                            {...register('email', {required: true})}
                        />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id='password'
                            type='password'
                            autoComplete='on'
                            {...register('password', {required: true, minLength:6, maxLength: 20})}
                    />
                    </div>
                </form>
            </CardContent>
            <CardFooter className='flex flex-col'>
                <Button className='w-full text-md' type='submit'>Login</Button>
                <span className='pt-4 cursor-pointer' onClick={handleClick}>
                    Dont have an account? Sign up now!
                </span>
            </CardFooter>
        </Card>
    )
}
