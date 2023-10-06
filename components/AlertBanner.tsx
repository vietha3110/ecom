import { Alert, AlertDescription, AlertTitle,  } from '@/components/ui/alert'
import { Terminal, Waves } from 'lucide-react'

export default function AlertBanner() {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle></AlertTitle>
            <AlertDescription>
            </AlertDescription>
        </Alert>

    )
}
