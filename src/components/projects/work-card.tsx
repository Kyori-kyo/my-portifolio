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
        <a
            href={urlLink}
            target="_blank"
            rel="noreferrer"
            className="relative block overflow-hidden rounded-2xl group"
        >
            {/* Image container with responsive height */}
            <div className="relative w-full h-64 md:h-[26rem]">
                <Image
                    src={imagem}
                    alt={titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white border-b-2 border-orange-500">
                        {titulo}
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">{descricao}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {langs.map((lang, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-700 text-xs text-white px-2 py-1 rounded-full"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export { WorkCard };
