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

export function SignUpCard() {
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
                <Input id='email' type='email' placeholder='m@example.com' />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' placeholder='password' />
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
            <Button className='w-full'>Create new account</Button>
            <span className='pt-2'>
                Login
            </span>
        </CardFooter>
    </Card>
  )
}