'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';

export default function Hero() {
    return (
        <div className="w-full h-[660px]  relative" id="hero">
            <Image
                src="/assets/videos/video.jpg"
                width={0}
                height={0}
                className="w-full h-full absolute -z-10 inset-0 object-cover"
                alt="hero"
            />
            <div className="flex items-center justify-center h-full flex-col gap-8">
                <h1 className="text-white text-3xl sm:text-5xl font-bold leading-[120%] max-w-[600px] mx-auto text-center">
                    We keep your business moving, so you can focus on what you do best.
                </h1>

                <Button className="w-60">
                    APPLY NOW
                    <ArrowRightIcon size={22} />
                </Button>
            </div>
        </div>
    );
}
