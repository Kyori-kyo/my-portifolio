import Image from 'next/image';

type Props = {
    urlLink: string;
    langs: string[];
    titulo: string;
    imagem: string;
    descricao: string;
};

const WorkCard = ({ langs, titulo, imagem, descricao, urlLink }: Props) => {
    return (
        <a href={urlLink} target='_blank' className="relative bg-cover text-gray-200 max-w-[350px] min-w-[350px] max-h-[350px] min-h-[350px] tracking-wide group overflow-hidden rounded-2xl">
            
            <div className="max-w-[350px] min-w-[350px] h-full flex items-end bg-gradient-to-t from-black/90 duration-500 translate-y-full group-hover:translate-y-0 bg-transparent absolute inset-0 z-10">
                <div className="pb-2 px-6 rounded-[0px] text-left max-w-[350px] min-w-[350px]">
                    <h1 className="inline text-lg font-semibold border-b-2 border-orange-500">{titulo}</h1>
                    <p className="text-base pb-2 pt-2">{descricao}</p>

                    <div className="flex gap-2">
                        {langs.map((lang, index) => {
                            return (
                                <div key={lang} className="bg-slate-600 rounded-full text-center text-[0.6rem] font-semibold inline px-3 tracking-wider">
                                    {lang}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Image
                src={imagem}
                alt=""
                height={350}
                width={350}
                className="pointer-events-none"
            />
        </a>
    );
};

export default WorkCard;