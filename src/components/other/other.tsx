import { json } from "./json";
import FeaturedProject from "./featured-project";
import SvgMapPin from "../svgs-components/SvgMapPin";
import Image from 'next/image'
import { getScopedI18n } from "@/app/locales/server";

type Props = {}

let anoAtual = new Date().getFullYear();

// const response: GitHubRepository[] = await GithubApiService('https://api.github.com/users/kyori-kyo/repos')

const Other = async (props: Props) => {

    const scopedT = await getScopedI18n('others')
    const repo = json;
    const email = <a className={'text-orange-400 hover:underline'} href="mailto:richardlcmoreira@gmail.com">richardlcmoreira@gmail.com</a>;

    return (
        <section id="contact" className={'generalPageAlign md:px-32'}>
            <div className={'glassMorphDiv flex flex-col justify-center items-center rounded-3xl md:py-8 md:px-16 px-4'}>
                <h1 className="text-xl md:text-4xl border-b-2 border-orange-500 w-fit m-5 md:m-8 md:mt-0">
                    .OTHERS
                </h1>
                <div className={'flex md:gap-5'}>
                    <div className={'flex flex-col content-between justify-between gap-3'}>
                        <div>
                            <p className={'text-xl text-[#D0D0D0] mb-3'}>
                                {scopedT('thanks')}
                            </p>
                            <p>
                                {scopedT('description1')}
                            </p>
                            <p>
                                {scopedT('description2', { email: email })}
                            </p>

                            <div className={'flex justify-center gap-2 items-center ml-3 mt-5'}>
                                <SvgMapPin />
                                <p>
                                    Espírito Santo, Brasil
                                </p>
                            </div>
                        </div>
                        <div className={'flex justify-center text-center'}>
                            <Image
                                src={'/assets/gifs/social_dino_with_hat.gif'}
                                className={'rounded-md shadow-2xl shadow-gray-950'}
                                width={300}
                                height={300}
                                alt={"richard's profile picture"}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={'hidden md:flex flex-col gap-3'}>
                        <p className={'border-b-2 border-orange-500 w-fit ml-3'}>
                            Featured project
                        </p>
                        <FeaturedProject
                            key={repo.id}
                            urlLink={'https://www.ascentsoftware.com.br'}
                            langs={repo.topics}
                            titulo={repo.name}
                            imagem={'/assets/images/Ascent.png'}
                            descricao={repo.description}
                        />
                    </div>
                </div>

                <p className={'text-sm text-gray-500 my-5 md:mt-10'}>
                    {anoAtual} - made with 🧡 by Kyori
                </p>
            </div>
        </section>
    )
}

export default Other;