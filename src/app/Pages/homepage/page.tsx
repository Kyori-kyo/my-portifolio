import Link from "next/link"
import Image from 'next/image'

// import Doggo from "@/app/figures/doggo";

type Props = {}

const homepage = (props: Props) => {
    return (
		<div id="homePage" className={'alinhamentoFlex'}>
			<Image 
				src={'/images/profilePic.png'} 
				className={'rounded-full shadow-2xl shadow-gray-950'}
				width={200}
				height={200} 
				alt={"richard's profile picture"}
			/>
			<h1 className={'text-4xl font-semibold typewriter'}>
				Hi<span className={'text-orange-400'}>!</span> I<span className={'text-orange-400'}>&#39;</span>m Ríchard Lucas
			</h1>

			<div className={'flex flex-col gap-5'}>
				<p>
					I&#39;m a software engineer
				</p>
				<p>
					You can contact me on my <a className={'hover:text-white text-orange-400 underline'} href="mailto:richardlcmoreira@gmail.com">E-mail</a>
				</p>
			</div>

			<span className={'w-32 border border-orange-500'}></span>
		</div>
    )
}

export default homepage;