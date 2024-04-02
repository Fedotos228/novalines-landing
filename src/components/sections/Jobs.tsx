import JobsList from '../elements/JobsList'
import SectionTitle from '../elements/SectionTitle'

export default function Jobs() {
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle
                    href="https://cariere.novalines.md/"
                    linkLabel="See all jobs"
                    target="_blank">
                    Jobs openings
                </SectionTitle>

                <JobsList />
            </div>
        </section>
    )
}
