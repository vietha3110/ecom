import { LogOut } from 'lucide-react'
import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui/dropdown-menu' 
import logOut from '@/app/firebase/auth/logout'
import Link from 'next/link'
import { useAuth } from '@/app/auth-provider'
export default function LogoutBtn() {
    const props = useAuth();
    const handleLogout = async () => {
        console.log('here')
        // const { result, error } = await logOut();
        // if (error) {
        //     const err: {code?: string} = error
        //     console.log(err.code);
        // } else {
        //     if (result) {
        //         localStorage.removeItem('token');
        //         console.log(result);
        //     }
        // }
        const res = await fetch(`/api/auth/logout`)
        props.setIsAuth(false)
        
       localStorage.removeItem('token');
    }
    return (
        <Link href='/login'>
            <DropdownMenuItem onClick={handleLogout} className='cursor-pointer'>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </Link>
    )
}
