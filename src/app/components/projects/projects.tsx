import WorkCard from './work-card';

type Props = {}

const mywork = (props: Props) => {

    const workCardData = [
        {
            urlLink: "https://github.com/Kyori-kyo/my-portifolio",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "Meu portifólio",
            imagem: "/images/profilePic.png",
            descricao: "Meu segundo portifólio que resolvi fazer em NextJS e TailwindCSS.",
        },

        {
            urlLink: "https://github.com/Ascend-Software",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "Ascent Software",
            imagem: "/images/Ascent.png",
            descricao: "Minha startup focada em ensinar e introduzir pessoas a programação, sendo uma primeira experiencia.",
        },

        {
            urlLink: "https://github.com/Kyori-kyo/meu-portfolio",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "Meu primeiro código",
            imagem: "/images/loguinho.png",
            descricao: "Meu primeiro portifólio, minha primeira experiência na programação.. não é nada incrível mas foi meu primeiro passo.",
        },
    ];

    return (
        <div id='projects' className={'generalPageAlign'}>
            <h1 className={'text-4xl m-5 border-b-2 border-orange-500 '}>
                .PROJECTS
            </h1>

            <div className={"flex gap-20 pt-10"}>

                {workCardData.map((card, index) => (
                    <WorkCard
                        key={card.urlLink}
                        urlLink={card.urlLink}
                        langs={card.langs}
                        titulo={card.titulo}
                        imagem={card.imagem}
                        descricao={card.descricao}
                    />
                ))}
            </div>
        </div>
    )
}

export default mywork;