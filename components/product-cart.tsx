import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'

import { SelectDemo } from './quant-select'
export default function ProductCard() {
    return (
        <Card className='flex flex-row '>
            <Image
                src={`/images/combo.jpeg`}
                width={300}
                height={300}
                alt='product photo'
            />
            <CardContent>
                <CardHeader>
                    <CardTitle>Coffee Latte</CardTitle>
                    <span className='font-bold'>$100.0</span>
                </CardHeader>
                <CardContent>
                    <p>In Stock</p>
                    <p>Eligible for FREE Shipping</p>
                    <div className='flex flex-row'>
                        <div className='px-2'>
                            <SelectDemo/>
                        </div>
                        <Button>Delete</Button>
                    </div>
                </CardContent>
            </CardContent>
        </Card>
    )
}
