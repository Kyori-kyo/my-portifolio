type Props = {}

const contact = (props: Props) => {

    return (
        <div className={'flex justify-center w-screen'} id="pog">
            <div className={'flex flex-col gap-10 justify-center items-center max-w-screen-xl w-full glassMorphDiv px-10 py-16 rounded-3xl'}>
                <h1>contact</h1>
                <form action="/send-data-here" method="post" className={'flex flex-col gap-5'}>
                    
                    <div className="flex">
                        <div className={'flex flex-col text-right gap-5'}>
                            <label className={'pr-5 text-base'}>Email:</label>
                            <label className={'pr-5 text-base'}>Assunto:</label>
                            <label className={'pr-5 text-base'}>Mensagem:</label>
                        </div>

                        <div className={'flex flex-col text-left gap-5 text-black'}>
                            <input className={'text-base pl-4 rounded-md w-full'} type="text" id="email"   name="email" placeholder="...@email.com" />
                            <input className={'text-base pl-4 rounded-md w-full'} type="text" id="assunto" name="assunto" placeholder="Olá! Estou te contatando para..." />
                            <input className={'text-base pl-4 rounded-md w-full'} type="text" id="message" name="message" placeholder="Escreva sua mensagem aqui..."/>
                        </div>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default contact;