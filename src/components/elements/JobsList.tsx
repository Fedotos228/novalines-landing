import { jobs } from '@/constants/data';
import React from 'react';
import Job from './Job';

export default function JobsList() {
    return (
        <div
            className="grid gap-7 jobs"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(495px, 1fr))' }}>
            {jobs.map((job, index) => (
                <Job key={index} item={job} />
            ))}
        </div>
    );
}
