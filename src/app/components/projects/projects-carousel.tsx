"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import WorkCard from './work-card';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import useWindowDimensions from "@/app/hooks/use-window-dimentions";

type Props = {}

const ProjectsCarousel = (props: Props) => {

    const { width } = useWindowDimensions();
    const [slidesPerView, setSlidesPerView] = useState<number>(1);

    useEffect(() => {
        if (width && width > 700 && width < 1150) {
            setSlidesPerView(2);
        } else if (width && width > 1150) {
            setSlidesPerView(3);
        } else if (width && width < 700) {
            setSlidesPerView(1);
        }
    }, [width]);

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