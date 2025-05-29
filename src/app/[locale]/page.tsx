import { Fireplace } from "@/components/homepage/fireplace";
import { Navbar } from "@/components/navbar/navbar";
import { Other } from "@/components/other/other";
import { Projects } from "@/components/projects/projects";
import { ReadMe } from "@/components/readme/readme";
import { SocialMedias } from "@/components/socialMedias/SocialMedias";

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
	);
}
