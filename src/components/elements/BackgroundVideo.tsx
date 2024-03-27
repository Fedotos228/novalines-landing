import React from 'react';

export default function BackgroundVideo({
    source,
    type = 'video/mp4',
    showOverlay = true,
}: {
    source: string;
    type?: string;
    showOverlay?: boolean;
}) {
    return (
        <>
            {showOverlay && (
                <div className="absolute inset-0 w-full -z-[1] h-full bg-black/60"></div>
            )}
            <video
                className="w-full h-full object-cover -z-[2] object-center absolute left-0 right-0"
                autoPlay
                playsInline
                muted
                loop
                preload="none">
                <source src={source} type={type} />
                Your browser does not support the video tag.
            </video>
        </>
    );
}
