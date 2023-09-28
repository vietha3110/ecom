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
import signUp from "@/app/firebase/auth/signUp"

interface LoginCardProps {
    setSelectedLogin: Dispatch<SetStateAction<boolean>>
}

export const SignUpCard:FC<LoginCardProps> = (props: LoginCardProps) => {
    let setState = props.setSelectedLogin;
    const handleClick = () => {
        setState(true);
    }
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('')
    const router = useRouter();
    const handleForm = async () => {
        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        
        console.log(result)
        return router.push('/')
    }
  return (
    <Card className='w-1/3' >
        <CardHeader className='space-y-1 flex justify-center items-center'>
            <CardTitle className='text-2xl'>Create new account</CardTitle>
            <CardDescription>
                It’s quick and easy.
            </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
            <div className='grid gap-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' type='name' placeholder='Jane Doe' />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='m@example.com' onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' placeholder='password' onChange={e=>setPassWord(e.target.value)}/>
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='phone'>Phone</Label>
                <Input id='phone' type='phone' placeholder='xxxxxxxxx' />
            </div> 
            <div className='grid gap-2'>
                <Label htmlFor='address'>Address</Label>
                <Input id='address' type='address' placeholder='123 St, City, State' />
            </div>   
        </CardContent>
        <CardFooter className='flex flex-col'>
            <Button className='w-full' onClick={handleForm}>Create new account</Button>
            <span className='pt-2 cursor-pointer' onClick={handleClick}>
                Login
            </span>
        </CardFooter>
    </Card>
  )
}
