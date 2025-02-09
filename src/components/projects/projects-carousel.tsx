"use client";
import { WorkCard } from './work-card';
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const ProjectsCarousel = () => {

    const workCardData = [
        {
            urlLink: "http://kyori.tech",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "My personal portfolio",
            imagem: "/assets/images/portfolio.jpeg",
            descricao: "My first experience with next.js and tailwindcss. I'm really proud of it.",
        },

        {
            urlLink: "https://www.kyori.tech.com/",
            langs: ["TypeScript", "NextJS", "Node.js"],
            titulo: "Kyori Tech",
            imagem: "/assets/images/kyori.jpeg",
            descricao: "My little startup. Created so me and my friends could develop some big projects together but the outcome was so good that we kept it till today.",
        },

        {
            urlLink: "https://www.slate.kyori.tech.com/",
            langs: ["TypeScript", "NextJS", "Node.js"],
            titulo: "Slate",
            imagem: "/assets/images/slate.jpeg",
            descricao: "One of Kyori's projects. The idea is to help people to learn programming, get better at it and prepare for interviews.",
        },

        {
            urlLink: "https://www.nexus.kyori.tech.com/",
            langs: ["TypeScript", "NextJS", "Node.js"],
            titulo: "Nexus",
            imagem: "/assets/images/nexus.jpeg",
            descricao: "Another one of Kyori's projects. This one was our first SAAS and is going to be used to build our first CRM.",
        },

        {
            urlLink: "https://kyori-kyo.github.io/meu-portfolio/",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "My first web project",
            imagem: "/assets/images/primeiro_projeto.jpeg",
            descricao: "It was SO much fun that I'm working with web development untill today. It's not the most beautiful thing you have seen out there but it was my start point and I'm really proud of it.",
        },
    ];

    return (
        <div>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {workCardData.map((card) => (
                        <CarouselItem key={card.urlLink} className="pl-2 md:pl-4">
                            <WorkCard
                                urlLink={card.urlLink}
                                langs={card.langs}
                                titulo={card.titulo}
                                imagem={card.imagem}
                                descricao={card.descricao}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export { ProjectsCarousel };