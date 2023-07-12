import WorkCard from '@/app/components/WorkCard';
import Link from 'next/link'

type Props = {}

const mywork = (props: Props) => {
    return (
        <div id='myWork' className={'alinhamentoFlex'}>
            <h1 className={'text-4xl m-5 border-b-2 border-spacing-x-0.5 border-orange-500'}>
                .PROJECTS
            </h1>

            <div className={"flex mb-2 w-full text-center gap-5"}>

                <a className={"w-1/3"} href='https://github.com/Kyori-kyo/my-portifolio' target='_blank'>
                    <WorkCard 
                        urlLink={'https://github.com/Kyori-kyo/my-portifolio'}
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Meu portifólio'}
                        imagem={'/images/profilePic.png'}
                        descricao={'Meu segundo portifólio que resolvi fazer em NextJS e TailwindCSS.'}
                    />
                </a>
                
                <a className={"w-1/3"} href='https://github.com/Ascend-Software' target='_blank'>
                    <WorkCard 
                        urlLink={'https://github.com/Ascend-Software'}
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Ascent Software'}
                        imagem={'/images/Ascent.png'}
                        descricao={'Minha startup focada em ensinar e introduzir pessoas a programação, sendo uma primeira experiencia.'}
                    />
                </a>

                <a className={"w-1/3"} href='https://github.com/Kyori-kyo/meu-portfolio' target='_blank'>
                    <WorkCard 
                        urlLink={'https://github.com/Kyori-kyo/meu-portfolio'}
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Meu primeiro código'}
                        imagem={'/images/loguinho.png'}
                        descricao={'Meu primeiro portifólio, minha primeira experiência na programação.. não é nada incrível mas foi meu primeiro passo.'}
                    />
                </a>
            </div>
        </div>
    )
}

export default mywork;