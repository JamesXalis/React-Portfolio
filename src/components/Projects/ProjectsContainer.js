import { Spacer } from '@nextui-org/react';
import MainProjects from './MainProjects/MainProjects';
import SideProjects from './SideProjects/SideProjects';


function ProjectsContainer() {
    return (
        <>
            <Spacer y={2}/>
            <MainProjects/>
            <Spacer y={2}/>
            <SideProjects/>
            <Spacer y={2}/>
        </>
    );
}


export default ProjectsContainer;