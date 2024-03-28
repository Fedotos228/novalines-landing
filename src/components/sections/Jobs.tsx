import React from 'react';
import SectionTitle from '../elements/SectionTitle';
import Job from '../elements/Job';

export default function Jobs() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <SectionTitle
                    href="https://carriers.novalines.md/"
                    linkLabel="See all jobs"
                    target="_blank">
                    Jobs openings
                </SectionTitle>

                <div
                    className="grid mt-6 gap-7"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(510px, 1fr))' }}>
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                </div>
            </div>
        </section>
    );
}
