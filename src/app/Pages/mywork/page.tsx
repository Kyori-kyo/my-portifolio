import WorkCard from '@/app/components/WorkCard';
import Link from 'next/link'

type Props = {}

const mywork = (props: Props) => {
    return (
        <div id='myWork' className={'alinhamentoFlex'}>
            <h1 className="text-4xl m-5 border-b-2 border-spacing-x-0.5 border-orange-500">
                PROJECTS
            </h1>

            <div className={"flex mb-2 w-full text-center gap-5"}>

                <div className={"w-1/3"}>
                    <WorkCard 
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Meu portifólio'}
                        imagem={'/images/profilePic.png'}
                        descricao={'Meu segundo portifólio que resolvi fazer em NextJS e TailwindCSS.'}
                    />
                </div>
                
                <div className={"w-1/3"}>
                    <WorkCard 
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Ascent Software'}
                        imagem={'/images/Ascent.png'}
                        descricao={'Minha startup focada em ensinar e introduzir pessoas a programação, sendo uma primeira experiencia.'}
                    />
                </div>

                <div className={"w-1/3"}>
                    <WorkCard 
                        langs={['TypeScript', 'NextJS', 'TailwindCSS']}
                        titulo={'Meu primeiro código'}
                        imagem={'/images/loguinho.png'}
                        descricao={'Meu primeiro portifólio, minha primeira experiência na programação.. não é nada incrível mas foi meu primeiro passo.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default mywork;