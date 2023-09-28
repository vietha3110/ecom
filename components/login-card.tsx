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

interface LoginCardProps {
    setSelectedLogin: Dispatch<SetStateAction<boolean>>
}
export const LoginCard:FC<LoginCardProps> = (props: LoginCardProps) => {
    let setState = props.setSelectedLogin;
    const handleClick = () => {
        setState(false);
    }
    
    return (
        <Card className='w-1/3' >
            <CardHeader className='space-y-1 flex justify-center items-center'>
                <CardTitle className='text-2xl'>Log in</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <div className='grid grid-cols-2 gap-6'>
                    <Button variant='outline'> 
                        Log in with Facebook
                    </Button>
                    <Button variant='outline'>    
                        Log in with Google
                    </Button>
                </div>
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
                    <Input id='email' type='email' placeholder='m@example.com' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' type='password' />
                </div>
            </CardContent>
            <CardFooter className='flex flex-col'>
                <Button className='w-full text-md'>Login</Button>
                <span className='pt-4 cursor-pointer' onClick={handleClick}>
                    Dont have an account? Sign up now!
                </span>
            </CardFooter>
        </Card>
    )
}
