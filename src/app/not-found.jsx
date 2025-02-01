import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col w-full h-[80vh] justify-center items-center gap-6">
            <p className="text-accent text-7xl font-bold">404</p>
            <p className="text-sm font-semibold">Page not Found</p>
            <Link href="/">
                <Button>Back to Home</Button>
            </Link>
        </div>
    );
}

export default NotFound;
