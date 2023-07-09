// import Link from "next/link"
import Image from 'next/image'
// import Doggo from "@/app/figures/doggo";

type Props = {}

const AboutMe = (props: Props) => {
    return (
        <div id="aboutMe" className={'flex flex-col justify-center items-center gap-10 h-screen'}>

            <section className={'flex flex-col justify-center items-center gap-10'}>
                

                <div className={'flex md:flex-row flex-col md:gap-10 justify-center items-center max-w-screen-xl glassMorphDiv md:px-10 py-10 md:py-16  rounded-3xl'}>
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
                            Sou engenheiro de software há 2 anos e tenho experiência atuando em ambas das stacks web (frontend e backend). Especializado em criar soluções eficientes e escaláveis.
                            Possuo habilidades sólidas em linguagens como JavaScript e um pouco de TypeScript, Python, Java, Apex e Go.
                            Minha experiência inclui o desenvolvimento de aplicativos utilizando frameworks como o LWC da Salesforce, React e tenho conhecimento básico em VueJS.
                            Sou apaixonado por resolver problemas complexos e estou sempre em busca de aprendizado contínuo para me manter atualizado com as últimas tendências tecnológicas.
                            Com uma abordagem orientada a resultados, estou pronto para enfrentar desafios e colaborar em projetos inovadores.
                        </div>

                        {/* <div class="slider">
                            <div class="slide-track">
                                <div class="slide"></div> */}
                        <div className={'flex overflow-auto gap-5 p-5 overflow: hidden;'}>
                            <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"                  alt="" />
                            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"                   alt="" />
                            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"                     alt="" />
                            <img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"                         alt="" />
                            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"                   alt="" />
                            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"                     alt="" />
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"     alt="" />
                            <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"           alt="" />
                            <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"                    alt="" />
                            <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"                       alt="" />
                            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"                      alt="" />
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"               alt="" />
                            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"                      alt="" />
                            <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"                 alt="" />
                            <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"               alt="" />
                            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"                       alt="" />
                            <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"                 alt="" />
                            <img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"                 alt="" />
                            <img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"                     alt="" />
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* <section className={'flex flex-col justify-center items-center gap-10 w-full'}>
                <h1 className={'text-4xl p-5'}>
                    My Expertise
                </h1>
                
                
                <div className={"flex mb-4 w-full text-center"}>
                    <div className={"flex flex-col w-2/4 bg-gray-500 p-5 gap-5"}>
                        <p>Software Devlopment</p>
                        <p>Functional and OOP programming</p>
                        <p>Design patterns</p>

                    </div>

                    <div className={"w-2/4 bg-gray-400"}>
                        <h1 className={'p-5'}>Misc</h1>
                        <p>Terminal</p>
                        <p>Git</p>
                        <p>Jest</p>
                        <p>Cypress</p>
                        <p>eXtreme Programming</p>
                        <p>Netlify</p>
                        <p>Wakatime</p>
                        <p>Discord, Slack</p>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

export default AboutMe;