import SectionTitle from '../elements/SectionTitle';
import BlogList from '../elements/BlogList';

export default function Blog() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <SectionTitle linkLabel="See all articles" href="https://blog.novalines.md/">
                    Articles
                </SectionTitle>

                <BlogList />
            </div>
        </section>
    );
}
