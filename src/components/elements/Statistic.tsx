'use client';

import { IStatistics } from '@/constants/data.types';
import React from 'react';
import Counter from '../ui/Counter';

export default function Statistic({ data }: { data: IStatistics }) {
    return (
        <div className="text-center">
            <Counter count={data.value} />
            <hr className="w-8 mx-auto my-3 h-[1.5px] bg-white" />
            <p className="-base lg:text-xl">{data.label}</p>
        </div>
    );
}
