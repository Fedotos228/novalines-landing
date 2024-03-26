'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <div className="w-full h-[660px]" id="hero">
            <Image
                src="/assets/videos/video.jpg"
                width={0}
                height={0}
                className="w-full h-full object-cover"
                alt="hero"
            />
        </div>
    );
}
