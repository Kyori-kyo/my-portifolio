import ProjectsCarousel from './projects-carousel';

type Props = {}

const mywork = (props: Props) => {
    return (
        <div id='projects' className={'generalPageAlign h-screen'}>
            <h1 className={'text-4xl m-5 border-b-2 border-orange-500 mb-10'}>
                .PROJECTS
            </h1>
            <div className='w-full md:w-11/12'>
                <ProjectsCarousel />
            </div>
        </div>
    )
}

export default mywork;