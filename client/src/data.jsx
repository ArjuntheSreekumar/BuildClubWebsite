import img1 from './assets/events/orientation.jpg'
import comingSoon from './assets/events/comingSoon.jpg'
import projects from './assets/events/projects.jpg'
import project1PDF from './assets/projects/Build_-Manual_Dancing_LED.pdf'
import project2PDF from './assets/projects/Build_-Manual_Energy_meter.pdf'
import project3PDF from './assets/projects/fun_win_image_processing_manual-1.pdf'
import project4PDF from './assets/projects/Build_-Manual_Gesture_controlled-_devices.pdf'
import project5PDF from './assets/projects/Build_-Manual_RFID.pdf'
import project6PDF from './assets/projects/Build_-Manual_Rolling_LED.pdf'
import project7PDF from './assets/projects/Build-Manual-Backend.pdf'
import project8PDF from './assets/projects/Build-Manual-Frontend.pdf'
import project9PDF from './assets/projects/Initial Set Up for BuildClub Workshop.pdf'
import project10PDF from './assets/projects/Setting Up VSCode.pdf'
import project11PDF from './assets/projects/Build_-Manual_Water_meter.pdf'

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
     { name: "Setting up VSCode", pdf: project10PDF },
    { name: "Initial Set Up", pdf: project9PDF },
    { name: "Dancing LED", pdf: project1PDF },
    { name: "Energy Meter", pdf: project2PDF },
    { name: "Fun with Image Processing", pdf: project3PDF },
    { name: "IOT Water Meter", pdf: project11PDF },
    { name: "Gesture Controlled Devices", pdf: project4PDF },
    { name: "RFID Fast Tag Reader", pdf: project5PDF },
    { name: "Rolling LED Display", pdf: project6PDF },
    { name: "E-Market Web Application-Backend", pdf: project7PDF },
    { name: "E-Market Web Application-Frontend", pdf: project8PDF },


];


export default eventData;

