'use client'

import { useJobs } from '@/hooks/queries/useJobs'
import Job from '../elements/Job'
import SectionTitle from '../elements/SectionTitle'

export default function Jobs() {
    const { data: jobs, isFetched } = useJobs()

    if (!isFetched) return null
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle
                    href="https://cariere.novalines.md/"
                    linkLabel="See all jobs"
                    target="_blank">
                    Jobs openings
                </SectionTitle>

                <div
                    className="grid mt-6 gap-7 jobs"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(495px, 1fr))' }}>
                    {jobs.map((job: any) => (
                        <Job key={job.attributes.slug} item={job.attributes} />
                    ))}
                </div>
            </div>
        </section>
    )
}
