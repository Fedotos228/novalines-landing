'use client';

import { IStatistics } from '@/constants/data.types';
import React from 'react';
import Counter from '../ui/Counter';

export default function Statistic({
    data,
    withSeparator = true,
}: {
    data: IStatistics;
    withSeparator?: boolean;
}) {
    return (
        <div className="text-center">
            {typeof data.value === 'number' ? (
                <Counter count={data.value} />
            ) : (
                <h2 className="text-5xl lg:text-6xl counter font-bold text-white">{data.value}</h2>
            )}
            {withSeparator && <hr className="w-8 mx-auto my-3 h-[1.5px] bg-white" />}
            <p className="-base lg:text-xl text-white">{data.label}</p>
        </div>
    );
}
