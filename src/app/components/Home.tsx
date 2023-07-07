import Image from 'next/image'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className={'flex flex-col gap-5 text-center items-center'}>
            <Image 
                src={'/images/profilePic.png'} 
                className={'rounded-full'}
                width={200}
                height={200} 
                alt={''}
            />
            <h1 className={'text-4xl font-semibold'}>
                Hi! I&apos;m Ríchard Lucas
            </h1>

            <div className={'flex flex-col gap-5'}>
                <p>
                    I&apos;m a software engineer
                </p>
                <p>
                    You can contact me on my <a className={'hover:text-white text-blue-500 underline'} href="mailto:richardlcmoreira@gmail.com">E-mail</a>
                </p>
            </div>

        </div>
    )
}
export default Home;
