import Apply from '@/components/sections/Apply';
import Blog from '@/components/sections/Blog';
import Gallery from '@/components/sections/Gallery';
import General from '@/components/sections/General';
import Hero from '@/components/sections/Hero';
import Jobs from '@/components/sections/Jobs';
import Reviews from '@/components/sections/Reviews';
import Stuff from '@/components/sections/Stuff';

export default function Home() {
    return (
        <main>
            <Hero />
            <Jobs />
            <Stuff />
            <General />
            <Reviews />
            <Apply />
            <Blog />
            <Gallery />
        </main>
    );
}
