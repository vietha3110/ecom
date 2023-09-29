'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction, FC, useState} from 'react'
import { useRouter } from 'next/navigation'
import { checkEmail } from '@/utils/check/formCheck'
import { AlertCircle, FileWarning, Terminal } from 'lucide-react'
import { useQueries, useMutation } from "@tanstack/react-query"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'

import signUp from '@/app/firebase/auth/signUp'
import {useForm, SubmitHandler} from 'react-hook-form'


interface LoginCardProps {
    setSelectedLogin: Dispatch<SetStateAction<boolean>>
}

interface InputUser {
    name: string,
    phone: number, 
    address: string, 
    email: string,
    password: string
}


export const SignUpCard:FC<LoginCardProps> =  (props: LoginCardProps) => {
    let setState = props.setSelectedLogin;
    const handleClick = () => {
        setState(true);
    }
    const router = useRouter();
    //set error
   
    //set err

    const { register, handleSubmit } = useForm<InputUser>();
    const onSubmit: SubmitHandler<InputUser> =  (async(data) => {
        const { result, error } = await signUp(data.email, data.password);

        if (error) {
            const err: { code?: string } = error;
            console.log(err)
            return;
        } else {
            router.push('/')
        }

    });
    

   
  return (
    <Card className='w-1/3' >
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader className='space-y-1 flex justify-center items-center'>
                <CardTitle className='text-2xl'>Create new account</CardTitle>
                <CardDescription>
                    Its quick and easy.
                </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <div className='grid gap-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        type='name'
                        placeholder='Jane Doe'
                        {...register('name')}      
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                          id='email'
                          type='email'
                          placeholder='m@example.com'
                          {...register('email')}
                      />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        type='password'
                        placeholder='password'
                        autoComplete='on'
                        {...register('password')}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input
                        id='phone'
                        type='phone'
                        placeholder='xxxxxxxxx'
                        {...register('phone')}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='address'>Address</Label>
                    <Input
                        id='address'
                        type='address'
                        placeholder='123 St, City, State'
                        {...register('address')}
                    />
                </div>
            </CardContent>
        
            <CardFooter className='flex flex-col'>
                <Button className='w-full' type='submit'>Create new account</Button>
                <span className='pt-2 cursor-pointer' onClick={handleClick}>
                    Login
                </span>
            </CardFooter>
        </form>
    </Card>
  )
}
