'use client';

import { IArticle } from '@/constants/data.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Article({ article }: { article: IArticle }) {
    const placeholder = 'https://placehold.co/512x620?text=Novalines&font=roboto';

    return (
        <article className="w-full">
            <Image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=="
                src={article.thumbnail || placeholder}
                className="mb-3 md:mb-6 aspect-[41/50]"
                alt={article.title}
                placeholder="blur"
                loading="lazy"
                width={512}
                height={620}
            />

            <Link
                href={article.link}
                target="_blank"
                className="text-foregroun text-base md:text-lg lg:text-xl xl:text-2xl font-bold transition-colors duration-300 hover:text-blaze-500">
                {article.title}
            </Link>

            <p className="mt-1 text-muted font-normal text-sm md:text-base">
                {article.description}
            </p>
        </article>
    );
}
