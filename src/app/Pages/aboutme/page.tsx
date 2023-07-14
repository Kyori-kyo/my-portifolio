import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {}

const AboutMe = (props: Props) => {

    const workCardData = [
        '<img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"                  alt="" />',
        '<img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"                   alt="" />',
        '<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"                     alt="" />',
        '<img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"                         alt="" />',
        '<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"                   alt="" />',
        '<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"                     alt="" />',
        '<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"     alt="" />',
        '<img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"           alt="" />',
        '<img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"                    alt="" />',
        '<img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"                       alt="" />',
        '<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"                      alt="" />',
        '<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"               alt="" />',
        '<img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"                      alt="" />',
        '<img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"                 alt="" />',
        '<img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"               alt="" />',
        '<img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"                       alt="" />',
        '<img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"                 alt="" />',
        '<img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"                 alt="" />',
        '<img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"                     alt="" />',
    ]



    return (
        <div id="aboutMe" className={'flex flex-col justify-center items-center gap-10 h-screen'}>
            <section className={'flex flex-col justify-center items-center gap-10'}>
                <div className={'flex flex-col md:flex-row md:gap-10 justify-center items-center glassMorphDiv md:rounded-3xl py-8 md:py-12 md:px-10'}>
                    <Image
                        className={'rounded-full shadow-2xl shadow-gray-950 w-48'}
                        src="/images/fireplace.jpg" 
                        alt="a cup filled with capuccino in a table"
                        width={'500'}
                        height={'300'}
                    />
                    
                    <div>
                        <h1 className="text-xl md:text-4xl my-5 border-b-2 border-orange-500 w-[81px] md:w-[145px] ml-10 md:ml-0">
                            .README
                        </h1>

                        <div className={'flex flex-col text-left text-sm md:text-lg px-10 md:px-0'}>
                        Engenheiro de software há 2 anos com experiência atuando em desenvolvimento web e mobile. Porém, me aventuro no mobile, IAs e info sec.<br/>
                        Sou completamente apaixonado pelo que faço e é justamente isso o que me faz constantemente buscar por novas tecnologias e metodologias para sempre poder entregar o melhor possível.
                        </div>

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
                                    
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default AboutMe;