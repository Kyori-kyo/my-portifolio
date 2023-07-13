import AboutMe from './Pages/aboutme/page'
import HomePage from './Pages/homepage/page'
import Contact from './Pages/contact/page'
import SocialMedias from './components/SocialMedias'
import Carousel from './components/Carousel'
import MyWork from './Pages/mywork/page'

// todo:
// highlight the current page on the navbar

export default function Home() {

	return (
		<main>
			<div className="flex flex-col w-full md:px-36 justify-center items-center md:text-2xl gap-5 relative container">

				<div className={'flex justify-center items-center gap-5 fixed top-0 h-16 w-full bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-10'}>
					<a href="#homePage"  className={'hover:scale-110 hover:text-orange-500'}>.Home</a>
					<a href="#aboutMe"   className={'hover:scale-110 hover:text-orange-500'}>.Readme</a>
					<a href="#myWork"    className={'hover:scale-110 hover:text-orange-500 hidden md:block'}>.Projects</a>
					<a href="#myWorkMob" className={'hover:scale-110 hover:text-orange-500 block md:hidden'}>.Projects</a>
					<a href="#contact"   className={'hover:scale-110 hover:text-orange-500'}>.Contact</a>
				</div>

				<HomePage />

				<AboutMe />
		
				<Carousel />

				<div className={'hidden md:block'}>
					<MyWork />
				</div>
						
				<Contact />
			
				<div className={'flex justify-center items-center gap-5 fixed bottom-0 h-16 rounded-full px-5 mb-5 bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-10'}>
					<SocialMedias />
				</div>
			</div>

		</main>
	)
}

// intersection observer