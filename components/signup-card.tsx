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
import { useForm, SubmitHandler } from 'react-hook-form'
import { FirebaseUser } from '@/lib/userFirebaseInterface'


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
   
    const [err, setErr] = useState<string>('');
    const [alertBanner, setAlertBanner] = useState<Boolean>(false);
    const { register, handleSubmit } = useForm<InputUser>();
    const mutation = useMutation(
        (data: InputUser) => {
          const token = JSON.parse(localStorage.getItem('token') || ''); // Retrieve the token from local storage
          return fetch(`/api/user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              name: data.name,
              phone: data.phone,
              address: data.address,
              email: data.email
            })
          });
        },
        {
            onMutate: async (data: InputUser) => {
                // show loading spinner here
                return data; // This value will be passed to onError and onSuccess callbacks
            },
            onError: () => {
                setErr('there is an error, please try again');
            },
            onSuccess: () => {
                setAlertBanner(true);
                setTimeout(() => {
                    setState(true);
                }, 2000)
                
               
            }
        }
    );
    
    const onSubmit: SubmitHandler<InputUser> = async (data) => {
        const { user, error } = await signUp(data.email, data.password);

        if (error) {
            const err: { code?: string } = error;
            console.log(err);
            return;
        } else {
            if (user && 'accessToken' in user) {
            const token = user.accessToken as FirebaseUser;
            console.log('signup token:', token);
            localStorage.setItem('token', JSON.stringify(token));
            mutation.mutateAsync(data); // Trigger the mutation
            }
        }
    };
    

   
return (
    <Card className='w-1/3' >
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader className='space-y-1 flex justify-center items-center'>
                {
                    err && <span> {err}</span>
                }
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
                        {...register('name', {required: true, minLength: 2, maxLength: 255})}      
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                          id='email'
                          type='email'
                          placeholder='m@example.com'
                          {...register('email', { required: true })}
                      />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        type='password'
                        placeholder='password'
                        autoComplete='on'
                        {...register('password', {required: true, minLength: 6, maxLength: 20})}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input
                        id='phone'
                        type='phone'
                        placeholder='xxxxxxxxx'
                        {...register('phone', {required: true, minLength: 10, maxLength: 255})}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='address'>Address</Label>
                    <Input
                        id='address'
                        type='address'
                        placeholder='123 St, City, State'
                        {...register('address', {required: true, minLength: 10, maxLength: 255})}
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
        {
            alertBanner && 
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Sign up successfully</AlertTitle>
                <AlertDescription>
                    You can now login using your email and password.
                </AlertDescription>
                </Alert>
        }
    </Card>
  )
}
