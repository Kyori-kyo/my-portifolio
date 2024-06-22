import { Fireplace } from '@/components/homepage/fireplace'
import { ReadMe } from '@/components/readme/readme'
import { Projects } from '@/components/projects/projects'
import { SocialMedias } from '@/components/socialMedias/SocialMedias'
import { Other } from '@/components/other/other'
import { Navbar } from '@/components/navbar/navbar'

export default async function Home() {
    await new Promise(resolve => setTimeout(resolve, 5000));

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