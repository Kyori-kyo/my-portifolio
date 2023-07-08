type Props = {}

const Contact = (props: Props) => {

    return (
        <div className={'flex justify-center w-screen'} id="pog">
            <div className={'flex flex-col gap-10 justify-center items-center max-w-screen-xl w-full glassMorphDiv px-10 py-16 rounded-3xl'}>
                <h1 className={'text-4xl border-b-2 border-spacing-x-0.5 border-orange-500'}>
                    CONTACT
                </h1>
                <p>
                    If you have a question 
                    <br/> 
                    or just want to get in touch
                    <br/> 
                    <br/> 
                    feel free to send me an <a className={'text-orange-500 underline hover:scale-50'} href="mailto:richardlcmoreira@gmail.com">e-mail</a>
                    <br/> 
                    or contact me on my social media
                </p>
                <div className={'absolute -bottom-36'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" preserveAspectRatio="xMidYMid meet" className={'slide-top'}>
                        <g clip-path="url(#__lottie_element_2)">
                            
                            <g transform="matrix(1,0,0,1,36,36)" opacity="1" className='block'>
                                <path stroke-linecap="butt" stroke-linejoin="miter"  fill-opacity="0" stroke-miterlimit="4" stroke="rgb(207,207,207)" stroke-opacity="1" stroke-width="2" d=" M18.323999404907227,4.427999973297119 C18.323999404907227,4.427999973297119 18.28700065612793,14.213000297546387 18.28700065612793,14.213000297546387 C18.28700065612793,24.312999725341797 10.100000381469727,32.5 0,32.5 C0,32.5 0,32.5 0,32.5 C-10.100000381469727,32.5 -18.28700065612793,24.312999725341797 -18.28700065612793,14.213000297546387 C-18.28700065612793,14.213000297546387 -18.28700065612793,-14.213000297546387 -18.28700065612793,-14.213000297546387 C-18.28700065612793,-24.312999725341797 -10.100000381469727,-32.5 0,-32.5 C0,-32.5 0,-32.5 0,-32.5 C10.100000381469727,-32.5 18.28700065612793,-24.312999725341797 18.28700065612793,-14.213000297546387 C18.28700065612793,-14.213000297546387 18.28700065612793,7.375999927520752 18.28700065612793,7.375999927520752"></path></g><g className='none' transform="matrix(1,0,0,1,36,36)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(207,207,207)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g transform="matrix(1,0,0,1,36,36)" opacity="1" className='block'><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(249,115,22)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g className='none' transform="matrix(1,0,0,1,36,36)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(249,115,22)" stroke-opacity="1" stroke-width="2" d="M0 0"></path></g><g className='block' transform="matrix(1,0,0,1,36,43.97333526611328)" opacity="1"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(249,115,22)" stroke-opacity="1" stroke-width="2" d=" M-0.10599999874830246,2.9800000190734863 C0.003000000026077032,4.315000057220459 0.06499999761581421,5.785999774932861 0.06499999761581421,7.4120001792907715 C0.06499999761581421,7.4120001792907715 0.006000000052154064,16.625999450683594 0.006000000052154064,16.625999450683594">
                                </path>
                            </g>

                            <g className='block' transform="matrix(1,0,0,1,54,52.22333526611328)" opacity="1">
                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(249,115,22)" stroke-opacity="1" stroke-width="2" d=" M-24.45199966430664,3.003000020980835 C-24.45199966430664,3.003000020980835 -18.042999267578125,9.496999740600586 -18.042999267578125,9.496999740600586 C-18.042999267578125,9.496999740600586 -11.54800033569336,3.003000020980835 -11.54800033569336,3.003000020980835">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;