import Navbar from '@/components/navbar/navbar'
import Fireplace from '@/components/homepage/fireplace'
import ReadMe from '@/components/readme/readme'
import Projects from '@/components/projects/projects'
import SocialMedias from '@/components/socialMedias/SocialMedias'
import Other from '@/components/other/other'

export default function Home() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <SocialMedias />
            <Fireplace />
            <ReadMe />
            <Projects />
            <Other />
        </main>
    )
}