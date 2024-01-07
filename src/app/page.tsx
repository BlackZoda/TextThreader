import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { ReactNode } from 'react';

const Home = () => {
    return (
        <>
            <HeroSection />

            <SplashImage
                url='/dashboard-preview.jpg'
                alt='product preview'
                height={1364}
                width={866}
                quality={100} />

            <FeatureSection />

            <SplashImage
                url='/file-upload-preview.jpg'
                alt='uploading preview'
                height={1419}
                width={732}
                quality={100} />

        </>
    )
}

const HeroSection = () => {
    return (
        <MaxWidthWrapper className='mb-12 mt-20 sm:mt-40 flex flex-col
            items-center justify-center text-center'>

            <div className='mx-auto mb-4 flex max-w-fit items-center
                justify-center space-x-2 overflow-hidden rounded-full
                border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur
                transition-all hover:border-gray-300 hover:bg-white/50'>
                <p className='text-sm font-semibold text-gray-700'>
                    TextThreader is now publid!
                </p>
            </div>

            <h1 className='max-w-4xl mx-8 text-5xl font-bold md:text-6xl lg:text-7xl'>
                Chat with your <span className='text-violet-600'>documents</span> in seconds!
            </h1>

            <p className='mt-5 mx-8 max-w-prose text-gray-700 tracking-wider sm:text-lg'>
                TextThreader let you chat with any PDF document.
                Simply upload it and ask questions right away.
            </p>

            <Link className={buttonVariants({
                size: 'lg',
                className: 'mt-5'
            })} href='/dashboard' target='_blank'>
                Get Started <ArrowRight className='ml-2 h-5 w-5' />
            </Link>

        </MaxWidthWrapper>
    )
}

const SplashImage = ({
    url,
    alt,
    height,
    width,
    quality
} : {
        url: string,
        alt: string,
        height: number,
        width: number,
        quality: number
    }) => {
    return (
        <div>
            <div className='relative isolate'>
                <div className='mx-auto mb-28 max-w-6xl px-6 lg:px-8'>
                    <div className='-m-2 rounded-xl bg-gray-900/5 p-2 lg:rounded-2xl lg:p-4'>
                        <Image
                            src={url} 
                            alt={alt}
                            width={height}
                            height={width}
                            quality={quality}
                            className='rounded-md bg-white p-2 sm:p-8 md:p-20
                            shadow-2xl ring-1 ring-gray-900/10'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeatureSection = () => {
    return (
        <div className='mx-8 my-24 max-w-5xl sm:mt-36'>
            <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text.5xl'>
                    Start chatting in minutes
                </h2>
                <p className='mt-4 text-lg text-gray-600'>
                    Chatting with your documents has never been easier than with TextThreader.
                </p>
            </div>

            {/* steps */}
            <ol className='m-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                <Step
                    number='1'
                    title='Sign up for an account'>
                    Get started for free or take advantage of our <Link
                        href='/pricing'
                        className='text-violet-700 underline underline-offset-2'>
                        pro plan</Link>.
                </Step>
                <Step
                    number='2'
                    title='Upload a PDF file'>
                    We&apos;ll process our file and prepare if for you to chat with.
                </Step>
                <Step
                    number='3'
                    title='Ask questions'>
                    That&apos;s it! Try out TextThreader today – you&apos;ll be up and running in minutes!
                </Step>
            </ol>
        </div>
    )
}

const Step = ({
    number,
    title,
    children
} : {
        number: string,
        title: string,
        children: ReactNode
    }) => {
    return (
        <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-gray-300
                py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-2 md:pt-4'>
                <span className='text-sm font-medium text-violet-600'>
                    Step {number}
                </span>
                <span className='text-xl font-semibold'>
                    {title}
                </span>
                <span className='mt-2 text-gray-700'>
                    {children}
                </span>
            </div>
        </li> 
    )
}

export default Home;
