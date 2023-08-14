"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkCard from './work-card';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

type Props = {}

const ProjectsCarousel = (props: Props) => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
    ]);

    let isMobile = windowSize[0] < 768;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);

        };

        typeof window !== "undefined" && window.addEventListener('resize', handleWindowResize);

        return () => {
            typeof window !== "undefined" && window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let slidesPerView = isMobile ? 1 : 3;

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
                {workCardData.map((card, index) => (
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

export default ProjectsCarousel;