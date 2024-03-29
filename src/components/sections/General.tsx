import { statistics } from '@/constants/data';
import React from 'react';
import Statistic from '../elements/Statistic';

export default function General() {
    return (
        // from-[#F27D35] to-[#F93F25]
        <section className="py-10 md:py-20 bg-gradient-to-r from-[#F27D35] to-[#F93F25] text-white">
            <div className="container flex-wrap  flex-col gap-12 sm:gap-6 sm:flex-row mx-auto flex items-center justify-evenly">
                {statistics.map((statistic, index) => (
                    <Statistic key={index} data={statistic} />
                ))}
            </div>
        </section>
    );
}
