import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectDemo() {
    const numbs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Select>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Quant</SelectLabel>
                {
                        numbs.map(num => 
                            <SelectItem value={num} key={num}>{num}</SelectItem>
                        )        
                }
                </SelectGroup>
            </SelectContent>
            </Select>
    )
}
