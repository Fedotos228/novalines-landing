'use client'

import { IJob } from '@/constants/data.types'
import { useJobs } from '@/hooks/queries/useJobs'
import Job from './Job'

export default function JobsList() {
    const { data: jobs, isFetched } = useJobs()

    if (!isFetched) return null
    return (
        <div
            className="grid gap-7 jobs"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(495px, 1fr))' }}>
            {jobs.map((job: IJob) => (
                <Job key={job.attributes.slug} item={job} />
            ))}
        </div>
    )
}
