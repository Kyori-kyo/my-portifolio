import Link from "next/link"
import Image from 'next/image'

type Props = {}

const Fireplace = (props: Props) => {
    return (
        <div className={'flex flex-col relative'} id="homePage">
            <div className={'generalPageAlign gap-5 z-10 bg-black/40'}>
                <Image
                    src={'/images/profilePic.png'}
                    className={'rounded-full shadow-2xl shadow-gray-950 w-48 mb-5'}
                    width={200}
                    height={200}
                    alt={"richard's profile picture"}
                />

                <h1 className={'md:text-4xl text-xl font-semibold typewriter'}>
                    Hi<span className={'text-orange-400'}>!</span> I<span className={'text-orange-400'}>&#39;</span>m Ríchard Lucas
                </h1>

                <div className={'flex flex-col gap-5'}>
                    <p>
                        A software engineer who loves to work with games, AIs, websites and applications.
                    </p>
                    <div>
                        You can contact me on my <a className={'hover:text-white text-orange-400 underline'} href="mailto:richardlcmoreira@gmail.com">E-mail</a>
                    </div>
                </div>
                <br />
                <br />
            </div>

            <div id="Fireplace" className={'w-full h-screen overflow-hidden absolute'}>
                <video className="w-full h-full object-cover" disableRemotePlayback disablePictureInPicture autoPlay loop muted plays-inline>
                    <source className="" src="videos/fireplaceOverSea.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Fireplace;