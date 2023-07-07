'use client'
import { useForm } from "react-hook-form";

type Props = {}

const Contact = (props: Props) => {


    const axios = require('axios');

    async function sendEmail(email : string, subject : string, message : string) {
    const data = JSON.stringify({
        "Messages": [{
        "From": {"Email": email},
        "To": [{"Email": 'richardlcmoreira@gmail.com'}],
        "assunto": subject,
        "message": message
        }]
    });

    const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: {'Content-Type': 'application/json'},
        auth: {username: '<API Key>', password: '<Secret Key>'},
    };

    return axios(config)
        .then(function (response : any) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error : any) {
        console.log(error);
        });

    }
    
    // form handler
    const {register, handleSubmit} = useForm();
    const onSubmit = (event: any) => {
        sendEmail(event["email"], event["assunto"], event["message"]);
    }

    return (
        <div className={'flex justify-center w-screen'} id="pog">
            <div className={'flex flex-col gap-10 justify-center items-center max-w-screen-xl w-full glassMorphDiv px-10 py-16 rounded-3xl'}>
                <h1 className={'text-4xl m-5 border-b-2 border-spacing-x-0.5 border-orange-500'}>
                    CONTACT
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} method="post" className={'flex flex-col gap-5'}>
                    
                    <div className={'flex content-center justify-center'}>
                        <div className={'flex flex-col text-right gap-5'}>
                            <label className={'text-base p-1 pr-3'}>Email:</label>
                            <label className={'text-base p-1 pr-3'}>Assunto:</label>
                            <label className={'text-base p-1 pr-3'}>Mensagem:</label>
                        </div>

                        <div className={'flex flex-col text-left gap-5 text-black'}>
                            <input className={'text-base pl-4 rounded-md w-full min-w-[20rem] p-1 max-h-96 border border-white'} type="text" id="email"   {...register("email")} placeholder="...@email.com" />
                            <input className={'text-base pl-4 rounded-md w-full min-w-[20rem] p-1 max-h-96 border border-white'} type="text" id="assunto" {...register("assunto")} placeholder="Olá! Estou te contatando para..." />
                            <textarea className={'text-base pl-4 rounded-md w-full min-w-[20rem] p-1 max-h-96 border border-white min-h-[8rem]'} id="message" {...register("message")} placeholder="Escreva sua mensagem aqui..."/>
                            <input className={'bg-slate-500 hover:scale-110'} value="submit" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact;