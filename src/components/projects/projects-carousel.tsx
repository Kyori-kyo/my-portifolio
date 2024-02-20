"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { WorkCard } from './work-card';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import useWindowDimensions from "@/hooks/use-window-dimentions";

const ProjectsCarousel = () => {

    const { width } = useWindowDimensions();
    const [slidesPerView, setSlidesPerView] = useState<number>(1);

    useEffect(() => {
        if (width && width > 1300 && width < 1600) {
            setSlidesPerView(2);
        } else if (width && width > 1600) {
            setSlidesPerView(3);
        } else if (width && width < 1300) {
            setSlidesPerView(1);
        }
    }, [width]);

    const workCardData = [
        {
            urlLink: "http://kyori.tech",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "My personal portfolio",
            imagem: "/assets/images/kyoriBackground.png",
            descricao: "The second portfolio project I've made.. It was pretty fun to build it.",
        },
        {
            urlLink: "http://kyori.tech",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "My personal portfolio",
            imagem: "/assets/images/kyoriBackground.png",
            descricao: "The second portfolio project I've made.. It was pretty fun to build it.",
        },

        {
            urlLink: "https://www.ascentsoftware.com.br/",
            langs: ["TypeScript", "NextJS", "Node.js"],
            titulo: "Ascent Software",
            imagem: "/assets/images/Ascent.png",
            descricao: "A startup that I've made so I could gain a lot of experience.",
        },

        {
            urlLink: "https://kyori-kyo.github.io/meu-portfolio/",
            langs: ["TypeScript", "NextJS", "TailwindCSS"],
            titulo: "My first line of code",
            imagem: "/assets/images/firstPortfolio.png",
            descricao: "It was also my first portfolio... It was SO much fun. And it really is unfinished.",
        },
    ];

    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className={"mySwiper"}
            >
                {workCardData.map((card) => (
                    <SwiperSlide key={card.urlLink} className={'pb-8'}>
                        <WorkCard

                            urlLink={card.urlLink}
                            langs={card.langs}
                            titulo={card.titulo}
                            imagem={card.imagem}
                            descricao={card.descricao}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export { ProjectsCarousel };