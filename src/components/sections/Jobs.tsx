'use client'

import { jobs } from '@/constants/data'
import { useJobs } from '@/hooks/queries/useJobs'
import Job from '../elements/Job'
import SectionTitle from '../elements/SectionTitle'

export default function Jobs() {
    const { data } = useJobs()

    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle
                    href="https://carriers.novalines.md/"
                    linkLabel="See all jobs"
                    target="_blank">
                    Jobs openings
                </SectionTitle>

                <div
                    className="grid mt-6 gap-7 jobs"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(495px, 1fr))' }}>
                    {jobs.map((job, index) => (
                        <Job key={index} item={job} />
                    ))}
                </div>
            </div>
        </section>
    )
}
