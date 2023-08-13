"use client"
import Image from 'next/image'
// import './page.css'

type Props = {}

const ReadMe = (props: Props) => {

    const anos = new Date().getFullYear() - 2021;
    const idade = new Date().getFullYear() - 2000;

    return (
        <div id="readMe" className={`test flex flex-col justify-center content-center items-center gap-10 h-screen md:px-32`}>
            <section className={'flex flex-col justify-center items-center gap-10'}>
                <div className={'flex flex-col md:flex-row md:gap-10 justify-center items-center glassMorphDiv md:rounded-3xl py-8 md:py-12 md:px-10 mt-14 md:mt-0'}>
                    <Image
                        className={'rounded-full shadow-2xl shadow-gray-950 w-48'}
                        src="/images/fireplace.jpg"
                        alt="a cup filled with capuccino in a table"
                        width={'500'}
                        height={'300'}
                    />

                    <div>
                        <h1 className="text-xl md:text-4xl border-b-2 border-orange-500 w-fit">
                            .README
                        </h1>
                        <br />
                        <div className={'flex flex-col text-left text-sm md:text-lg px-10 md:px-0'}>
                            Tenho {idade} anos e trabalho como engenheiro de software há {anos} anos. Tenho experiência atuando com o desenvolvimento web, tendo entregado diversos projetos em salesforce, e mobile, tendo feito aplicativos para falicitar a vida dos meus usuários. <br />
                            Porém, me aventuro no mobile, IAs, cyber security e até mesmo no desenvolvimento de games.<br />
                            Sou completamente apaixonado pelo que faço e é justamente isso o que me faz levantar todos os dias, buscar por novas tecnologias e ideias para sempre poder entregar o melhor possível.
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default ReadMe;