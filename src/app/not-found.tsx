"use client"

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

const NotFound = () => {
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    const redirectUrl = origin ? `/${origin}` : "/";

    return (
        <main className="flex flex-col justify-center items-center
                h-[calc(100vh-3.5rem)] w-auto">
            <h2 className="text-xl font-bold text-gray-900">Not Found</h2>
            <p>Sorry, the resource could not be found...</p>
            <Link href={redirectUrl} className={buttonVariants({
                    size: 'sm',
                    className: 'mt-3',
                })}>
                <ArrowLeft  />
            </Link>
        </main>
    )
}

export default NotFound;
