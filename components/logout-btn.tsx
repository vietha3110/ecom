import { LogOut } from 'lucide-react'
import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui/dropdown-menu' 

export default function LogoutBtn() {
    return (
        <DropdownMenuItem>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}
