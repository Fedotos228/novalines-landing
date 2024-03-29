'use client'

import { useHero } from '@/hooks/queries/useHero'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import BackgroundVideo from '../elements/BackgroundVideo'
import Button from '../ui/Button'

export default function Hero() {
    const { data, isFetched } = useHero()

    if (!isFetched) return null

    return (
        <section className="w-full h-[660px] relative" id="hero">
            <BackgroundVideo source={process.env.NEXT_PUBLIC_STRAPI_BASE + data?.video?.data.attributes.url} />
            <div className="flex items-center justify-center h-full flex-col gap-8 px-4">
                <h1 className="text-white text-center">
                    <span className="-left-20 md:block hidden -top-5 absolute font-medium">
                        {'/**'}
                    </span>
                    {data?.title}
                    <span className="-right-20 md:block hidden -bottom-5 absolute font-medium">
                        {'*/'}
                    </span>
                </h1>

                <Link href={data?.linkedButton?.href}>
                    <Button className="w-60">
                        {data?.linkedButton?.title}
                        <ArrowRightIcon size={22} />
                    </Button>
                </Link>
            </div>
        </section>
    )
}
