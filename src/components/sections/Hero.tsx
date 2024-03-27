'use client';

import Button from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
import BackgroundVideo from '../elements/BackgroundVideo';

export default function Hero() {
    return (
        <div className="w-full h-[660px] relative" id="hero">
            <BackgroundVideo source="/assets/videos/nova.mp4" />
            <div className="flex items-center justify-center h-full flex-col gap-8 px-4">
                <h1 className="text-white relative text-3xl sm:text-5xl font-bold leading-[130%] sm:leading-[120%] max-w-[600px] mx-auto text-center">
                    <span className="-left-20 md:block hidden -top-5 absolute font-medium">
                        {'/**'}
                    </span>
                    We keep your business moving, so you can focus on what you do best.
                    <span className="-right-20 md:block hidden -bottom-5 absolute font-medium">
                        {'*/'}
                    </span>
                </h1>

                <Button className="w-60">
                    APPLY NOW
                    <ArrowRightIcon size={22} />
                </Button>
            </div>
        </div>
    );
}
