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
				<a href="#myWork"   className={'hover:scale-110 hover:text-orange-500'}>Projects</a>
				<a href="#contact"  className={'hover:scale-110 hover:text-orange-500'}>Contact</a>
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

			{/* <div className={'absolute top-20 right-full pr-10'}>
				<a href='#homePage'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" preserveAspectRatio="xMidYMid meet" className={'slide-top'}>
						<g clip-path="url(#__lottie_element_2)">
							
							<g transform="matrix(1,0,0,1,36,36)" opacity="1" className='block'>
								<path stroke-linecap="butt" stroke-linejoin="miter"  fill-opacity="0" stroke-miterlimit="4" stroke="rgb(207,207,207)" stroke-opacity="1" stroke-width="2" d=" M18.323999404907227,4.427999973297119 C18.323999404907227,4.427999973297119 18.28700065612793,14.213000297546387 18.28700065612793,14.213000297546387 C18.28700065612793,24.312999725341797 10.100000381469727,32.5 0,32.5 C0,32.5 0,32.5 0,32.5 C-10.100000381469727,32.5 -18.28700065612793,24.312999725341797 -18.28700065612793,14.213000297546387 C-18.28700065612793,14.213000297546387 -18.28700065612793,-14.213000297546387 -18.28700065612793,-14.213000297546387 C-18.28700065612793,-24.312999725341797 -10.100000381469727,-32.5 0,-32.5 C0,-32.5 0,-32.5 0,-32.5 C10.100000381469727,-32.5 18.28700065612793,-24.312999725341797 18.28700065612793,-14.213000297546387 C18.28700065612793,-14.213000297546387 18.28700065612793,7.375999927520752 18.28700065612793,7.375999927520752"></path></g><g className='none' transform="matrix(1,0,0,1,36,36)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(207,207,207)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g transform="matrix(1,0,0,1,36,36)" opacity="1" className='block'><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(155,55,255)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g className='none' transform="matrix(1,0,0,1,36,36)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(155,55,255)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g className='block' transform="matrix(1,0,0,1,36,43.97333526611328)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(155,55,255)" stroke-opacity="1" stroke-width="2" d=" M-0.10599999874830246,2.9800000190734863 C0.003000000026077032,4.315000057220459 0.06499999761581421,5.785999774932861 0.06499999761581421,7.4120001792907715 C0.06499999761581421,7.4120001792907715 0.006000000052154064,16.625999450683594 0.006000000052154064,16.625999450683594"></path></g><g className='block' transform="matrix(1,0,0,1,54,52.22333526611328)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(155,55,255)" stroke-opacity="1" stroke-width="2" d=" M-24.45199966430664,3.003000020980835 C-24.45199966430664,3.003000020980835 -18.042999267578125,9.496999740600586 -18.042999267578125,9.496999740600586 C-18.042999267578125,9.496999740600586 -11.54800033569336,3.003000020980835 -11.54800033569336,3.003000020980835">
								</path>
							</g>
						</g>
					</svg>
				</a>
			</div> */}
		</main>
	)
}

// intersection observer