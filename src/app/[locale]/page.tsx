import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Expertise } from "@/components/expertise/expertise";
import { HomePage } from "@/components/homepage/homePage";
import { Navbar } from "@/components/navbar/navbar";
import { SocialMedias } from "@/components/socialMedias/SocialMedias";

export default function Home() {
	return (
		<main>
			<Navbar />
			<SocialMedias />
			<HomePage />
			<About />
			<Expertise />
			<Experience />
			<Contact />
		</main>
	);
}
