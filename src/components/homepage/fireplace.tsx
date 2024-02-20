import Image from 'next/image'
import { getScopedI18n } from '../../app/locales/server'

const Fireplace = async () => {

    const t = await getScopedI18n('home')

    return (
        <div className={'flex flex-col relative'} id="homePage">
            <div className={'generalPageAlign gap-5 z-10 bg-black/40 md:px-64'}>
                <Image
                    src={'/assets/images/profilePic.png'}
                    className={'rounded-full shadow-2xl shadow-gray-950 w-48 mb-5'}
                    width={200}
                    height={200}
                    alt={"richard's profile picture"}
                />

                <h1 className={'md:text-4xl text-xl font-semibold typewriter max-w-fit'}>
                    {t('hi')}<span className={'text-orange-400'}>! </span>{t('me', { name: 'Ríchard Lucas' })}
                </h1>

                <div className={'flex flex-col gap-5'}>
                    <p>
                        {t('description')}
                    </p>
                    <div>
                        {t('email')} <a className={'hover:text-white text-orange-400 underline'} href='mailto:richardlcmoreira@gmail.com'>E-mail</a>
                    </div>
                </div>
                <br />
                <br />
            </div>

            <div id="Fireplace" className={'w-full h-screen overflow-hidden absolute'}>
                <video className="w-full h-full object-cover" disableRemotePlayback disablePictureInPicture autoPlay loop muted plays-inline>
                    <source className="" src="assets/videos/fireplaceOverSea.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export { Fireplace };