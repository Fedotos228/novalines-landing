'use client';

import { useEffect, useState } from 'react';
import Article from './Article';
import { articles } from '@/constants/data';
import useScreenSize from '@/hooks/useScreenSize';

export default function BlogList() {
    const screenWidth = useScreenSize().width;
    const [slicedArticles, setSlicedArticles] = useState(articles.slice(0, 3));

    useEffect(() => {
        if (screenWidth < 1024 && screenWidth >= 480) {
            setSlicedArticles(articles.slice(0, 4));
        } else if (screenWidth < 480) {
            setSlicedArticles(articles.slice(0, 2));
        } else {
            setSlicedArticles(articles.slice(0, 3));
        }
    }, [screenWidth]);

    return (
        <div className="grid grid-cols-3 gap-4 md:gap-7 max-[1023px]:grid-cols-2 max-xs:grid-cols-1">
            {slicedArticles.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </div>
    );
}
