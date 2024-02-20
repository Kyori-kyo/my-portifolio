'use client'
import SvgGithub from '../svgs-components/SvgGithub'
import SvgTwitter from '../svgs-components/SvgTwitter'
import SvgLinkedIn from '../svgs-components/SvgLinkedIn'
import { useState } from 'react'
import { clsx } from 'clsx';
import SvgMail from '../svgs-components/SvgMail'

const SocialMedias = () => {
	const [submenuVisible, setSubmenuVisible] = useState(true);

	const handleClick = () => {
		setSubmenuVisible(!submenuVisible)
	}

	return (
		<div id='footer' className={"flex flex-col items-center justify-center gap-5 z-20 fixed bottom-5 left-5 md:bottom-10 md:left-10 "}>

			<div className={"flex flex-col items-center justify-center relative"}>

				<a
					href="https://twitter.com/kyoridev"
					aria-label="Twitter"
					target='blank'
					className={clsx('rounded-full hover:scale-110 absolute transition-transform duration-300', submenuVisible ? 'translate-y-[2.63rem]' : '-translate-y-[108px] ease-in-out')}>
					<SvgTwitter />
				</a>

				<a
					href="https://www.linkedin.com/in/richardlucascm/"
					aria-label="LinkedIn"
					target='blank'
					className={clsx('rounded-full hover:scale-110 absolute transition-transform duration-300', submenuVisible ? 'translate-y-[2.63rem]' : '-translate-y-[60px] ease-in-out')}>
					<SvgLinkedIn />
				</a>

				<a
					href="https://github.com/Kyori-kyo"
					aria-label="GitHub"
					target='blank'
					className={clsx('rounded-full hover:scale-110 absolute transition-transform duration-300', submenuVisible ? 'translate-y-[2.63rem]' : '-translate-y-[13px] ease-in-out')}>
					<SvgGithub />
				</a>
			</div>

			<button
				onClick={handleClick}
				type='button'
				aria-label="Twitter"
				className={'flex rounded-full w-fit hover:scale-110 z-30'}>
				<SvgMail />
			</button>


		</div>
	)
}

export { SocialMedias };