import React from 'react';
import SectionTitle from '../elements/SectionTitle';
import JobsList from '../elements/JobsList';

export default function Jobs() {
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle
                    href="https://carriers.novalines.md/"
                    linkLabel="See all jobs"
                    target="_blank">
                    Jobs openings
                </SectionTitle>

                <JobsList />
            </div>
        </section>
    );
}
