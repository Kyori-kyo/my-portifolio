import Image from 'next/image';

//todo adicionar props:
// prof pic
// data do post
// nome do autor

type Props = {
    post_title: string,
    post_content: string,
    post_image: string,
}

export const BlogPost = (props: Props) => {
    return (
        <div className={'flex flex-col p-5 gap-3 text-black bg-slate-100 rounded-md md:rounded-xl'}>
            <div>
                <h2 className={'font-bold text-clip'}>
                    {props.post_title}
                </h2>
                <p>
                    {props.post_content}
                </p>
            </div>

            {/* imagem do post.. remover? */}
            {/* <div className={'flex justify-center md:justify-normal'}>
                <Image src={props.post_image} alt="" className={''} width={350} height={350} />
            </div> */}

            {/* info user + data */}
            <div className={'flex gap-3'}>
                <Image src={"/assets/images/profilePic.png"} alt="" className={'rounded-full'} width={50} height={50} />
                <div>
                    <p>Meu nome</p>
                    <p className={'text-xs'}>17 feb</p>
                </div>
            </div>
        </div>
    )
}
