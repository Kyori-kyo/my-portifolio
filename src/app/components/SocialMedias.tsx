import SvgGithub 	from '../svgs/SvgGithub'
import SvgTwitter 	from '../svgs/SvgTwitter'
import SvgLinkedIn 	from '../svgs/SvgLinkedIn'
import SvgInstagram from '../svgs/SvgInstagram'

type Props = {}

const SocialMedias = (props: Props) => {
    return (
        <div id='footer' className={'flex justify-center gap-5'}>
			<a href="https://twitter.com/kyoridev" 	
				aria-label="Twitter" 
				role="link" 
				target='blank' 
				className={'flex rounded-full w-fit hover:scale-110'}>
				<SvgTwitter />
			</a>

			<a href="https://www.instagram.com/kyori.dev/" 
				aria-label="Instagram" 
				role="link" 
				target='blank' 
				className={'flex rounded-full w-fit hover:scale-110'}>
				<SvgInstagram />
			</a>

			<a href="https://www.linkedin.com/in/richardlucascm/" 
				aria-label="LinkedIn" 
				role="link" 
				target='blank' 
				className={'flex rounded-full w-fit hover:scale-110'}>
				<SvgLinkedIn />
			</a>

			<a href="https://github.com/Kyori-kyo" 
				aria-label="GitHub" 
				role="link" 
				target='blank' 
				className={'flex rounded-full w-fit hover:scale-110'}>
				<SvgGithub />
			</a>
		</div>
    )
}

export default SocialMedias;