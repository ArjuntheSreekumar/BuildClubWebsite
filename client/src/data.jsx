import img1 from './assets/events/orientation.jpg'
import comingSoon from './assets/events/comingSoon.jpg'
import projects from './assets/events/projects.jpg'
import project1PDF from './assets/projects/Build_-Manual_Dancing_LED.pdf'
import project2PDF from './assets/projects/Build_-Manual_Energy_meter.pdf'
import project3PDF from './assets/projects/fun_win_image_processing_manual-1.pdf'

const eventData=[
    {
        img:comingSoon,
        title:'BuildClub Orientation',
        date:'Coming Soon',
    },
    {
        img:comingSoon,
        title:'BuildClub Workshops',
        date:'Coming Soon',
    },
    {
        img: projects,
        title: 'BuildClub Projects',
        link: '/projects'
    },
];
export const projectData = [
    { name: "Dancing LED", pdf: project1PDF },
    { name: "Energy Meter", pdf: project2PDF },
    { name: "Fun with image processing", pdf: project3PDF },
];


export default eventData;

