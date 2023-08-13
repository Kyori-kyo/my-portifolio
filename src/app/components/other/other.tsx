import { json } from "./json";
import FeaturedProject from "./featured-project";
import SvgMapPin from "../svgs-components/SvgMapPin";
import Image from 'next/image'

type Props = {}

// const response: GitHubRepository[] = await GithubApiService('https://api.github.com/users/kyori-kyo/repos')

const Other = (props: Props) => {

    const repo = json;

    return (
        <section id="contact" className={'generalPageAlign px-32'}>
            <div className={'glassMorphDiv flex flex-col justify-center items-center rounded-3xl py-8 px-16'}>
                <h1 className="text-xl md:text-4xl border-b-2 border-orange-500 w-fit">
                    .OTHERS
                </h1>

                <br />
                <br />

                <div className={'flex gap-5'}>
                    <div className={'flex flex-col content-between justify-between'}>
                        <div>
                            <p className={'text-xl text-[#D0D0D0]'}>
                                Thank you for stopping by!
                            </p>
                            <br />
                            <p className={''}>
                                I had much fun building this portfolio.<br />
                                If you have a question or just wanna get in touch.. feel free to send me an email at <a className={'text-orange-400 hover:underline'} href="mailto:richardlcmoreira@gmail.com">richardlcmoreira@gmail.com</a> or contact me at any of my social medias!
                            </p>
                        </div>
                        <br />
                        <div className={'flex justify-center text-center'}>
                            <Image
                                src={'/gifs/social_dino_with_hat.gif'}
                                className={'rounded-md shadow-2xl shadow-gray-950 mb-10'}
                                width={300}
                                height={300}
                                alt={"richard's profile picture"}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={'flex flex-col gap-3'}>
                        <p className={'border-b-2 border-orange-500 w-fit ml-3'}>
                            Featured project
                        </p>
                        <FeaturedProject
                            key={repo.id}
                            urlLink={repo.url}
                            langs={repo.topics}
                            titulo={repo.name}
                            imagem={'/images/capuccinoBg.jpg'}
                            descricao={repo.description}
                        />

                        <div className={'flex gap-2 items-center ml-3'}>
                            <SvgMapPin />
                            <p>
                                Espírito Santo, Brasil
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <p className={'text-sm text-gray-500'}>
                    2023 - Richard Lucas
                </p>
            </div>
        </section>
    )
}

export default Other;