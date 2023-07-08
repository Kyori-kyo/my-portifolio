/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import AboutMe from './Pages/aboutme/page'
import HomePage from './Pages/homepage/page'
import MyWork from './Pages/mywork/page'
import Contact from './Pages/contact/page'
import SocialMedias from './components/SocialMedias'
import WorkCard from './components/WorkCard'
// import MatrixEffect from './components/MatrixEffect'

// todo:
// a links on projects
// finish contact section
// responsivity
 
// 
// window.document.addEventListener("scroll", (event) => {
// 	console.log(event)
// });

export default function Home() {

	return (
		<main className="flex min-h-screen flex-col items-center text-2xl gap-5 relative container">
			
			<div className={'flex justify-center items-center gap-5 fixed top-0 h-16 w-full bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-10'}>
				<a href="#homePage" className={'hover:scale-110 hover:text-orange-500'}>.Home</a>
				<a href="#aboutMe"  className={'hover:scale-110 hover:text-orange-500'}>.Readme</a>
				<a href="#myWork"   className={'hover:scale-110 hover:text-orange-500'}>.Projects</a>
				<a href="#contact"  className={'hover:scale-110 hover:text-orange-500'}>.Contact</a>
			</div>

			<div className={''}>
				<HomePage />
			</div>

			<div className={''}>
				<AboutMe />
			</div>
			
			<div className={''}>
				<MyWork />
			</div>
				
			<div id='contact' className={'alinhamentoFlex'}>
				<Contact />
			</div>

			<div className={'flex justify-center items-center gap-5 fixed bottom-0 h-16 rounded-full px-5 mb-5 bg-[rgb(22, 22, 22)] backdrop-blur dark:bg-black/[0.3] z-10'}>
				<SocialMedias />
			</div>
		</main>
	)
}

// intersection observer