'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WorkCard from './WorkCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {};

const Carousel = (props: Props) => {

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
    <div id='myWorkMob' className={'px-10 h-screen w-full'}>
        <Swiper
            className={'mt-36'}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {workCardData.map((card, index) => (
                <SwiperSlide key={card.urlLink + index}>
                    <WorkCard
                        key={card.urlLink}
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
  );
};

export default Carousel;




// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import WorkCard from "./WorkCard";
// import "swiper/css";
// import "swiper/css/pagination";

// type Props = {};

// const Carousel = (props: Props) => {
//   

//   return (
//     <div className={""}>
//       <Swiper
//         slidesPerView={1}
//         pagination={{
//           clickable: true,
//         }}
//       >
//         {/* {workCardData.map((card, index) => (
//               <SwiperSlide key={card.urlLink + index}>
//                 <WorkCard
//                     key={card.urlLink}
//                     urlLink={card.urlLink}
//                     langs={card.langs}
//                     titulo={card.titulo}
//                     imagem={card.imagem}
//                     descricao={card.descricao}
//                 />
//               </SwiperSlide>
//             ))} */}

//         <SwiperSlide>pog0</SwiperSlide>
//         <SwiperSlide>pog1</SwiperSlide>
//         <SwiperSlide>pog2</SwiperSlide>
//         <SwiperSlide>pog3</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
