import { SvgNordicLoading } from '../svgs-components/SvgNordicLoading';
import { ProjectsCarousel } from './projects-carousel';
import { Suspense } from 'react';

const Projects = () => {
    return (
        <div id='projects' className={'generalPageAlign h-screen md:px-64 padding-left: 0rem; padding-right: 0rem;'}>
            <h1 className={'text-4xl m-5 border-b-2 border-orange-500 mb-10'}>
                .PROJECTS
            </h1>
            <div className='w-full'>
                <Suspense fallback={<SvgNordicLoading />}>
                    <ProjectsCarousel />
                </Suspense>
            </div>
        </div>
    )
}

export { Projects };