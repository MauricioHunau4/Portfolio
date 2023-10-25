import html from '../public/images/technologies/HTML.png'
import css from '../public/images/technologies/R.png'
import js from '../public/images/technologies/Javascript.png'
import react from '../public/images/technologies/React.png'
import redux from '../public/images/technologies/redux.png'
import next from '../public/images/technologies/next-js.png'
import vue from '../public/images/technologies/Vue.png'
import chakra from '../public/images/technologies/chakraui.png'
import material from '../public/images/technologies/material-ui.png'
import node from '../public/images/technologies/Nodejs.png'
import typescript from '../public/images/technologies/typescript.png'
import python from '../public/images/technologies/Python.png'
import git from '../public/images/technologies/git.png'
import mysql from '../public/images/technologies/MySQL.png'
import postgresql from '../public/images/technologies/Postgresql.png'
import figma from '../public/images/technologies/figma.png'
import docker from '../public/images/technologies/docker.png'
import album from '../public/images/projects/thealbum.png'
import filmview from '../public/images/projects/filmview.png'
import calculator from '../public/images/projects/Captura.png'
import wheather from '../public/images/projects/Capturaweather.png'
import schoolui from '../public/images/projects/schoolui.jpg'
import chess from '../public/images/projects/the-chess-rules.png'
import apod from '../public/images/projects/Apod.jpg'

export const frontEnd = [
    {
        photo: react,
        title: 'React',
    }, {
        photo: next,
        title: 'Next.js',
    }, {
        photo: vue,
        title: 'Vue.js',
    }, {
        photo: redux,
        title: 'Redux',
    }, {
        photo: chakra,
        title: 'Chakra UI',
    }, {
        photo: material,
        title: 'Material UI',
    },
]

export const backEnd = [
    {
        photo: node,
        title: 'Node.js',
    }, {
        photo: mysql,
        title: 'MySQL',
    }, {
        photo: postgresql,
        title: 'PostgreSQL',
    }
]

export const languages = [
    {
        photo: html,
        title: 'HTML',
    }, {
        photo: css,
        title: 'CSS',
    }, {
        photo: js,
        title: 'JavaScript',
    }, {
        photo: typescript,
        title: 'TypeScript',
    }, {
        photo: python,
        title: 'Python',
    }
]

export const otherTools = [
    {
        photo: git,
        title: 'Git',
    }, {
        photo: figma,
        title: 'Figma',
    }, {
        photo: docker,
        title: 'Docker',
    }
]

export const recentProjects = [
    {
        id: 1,
        title: 'The chess rules',
        photo: chess,
        comment: 'A 3D interactive website that explains the rules of the pieces of chess, with a IA that tells you the rules of the piece you want to know',
        github: 'https://github.com/MauricioHunau4/RulesOfChess'
    }, {
        id: 2,
        title: 'School UI',
        photo: schoolui,
        comment: 'It is a prototype for a bigger project, it will be a service that provides administration and management for schools, professors and students',
        link: 'https://schoolui-d48cc.web.app/',
        github: 'https://github.com/MauricioHunau4/SchoolUI'
    }, {
        id: 3,
        title: 'APOD',
        photo: apod,
        comment: 'Astronomic Picture of the Day, every day a new photo of the universe is taken by professionals and satelites. You can search a date and a photo will be display with their respective explanation. With a minigame hidden, look if you can find it!',
        link: 'https://apodmaurih.netlify.app/',
        github: 'https://github.com/MauricioHunau4/APOD'
    }, {
        id: 4,
        title: 'The Album',
        photo: album,
        comment: 'The album is a collection of photos taken by professionals. You can search a especific collection with an excellent quality',
        link: 'https://the-albumh-e932e.web.app/',
        github: 'https://github.com/MauricioHunau4/The-album'
    }
]

export const oldestProjects = [
    {
        id: 1,
        title: 'Calculator online',
        photo: calculator,
        comment: 'My very first project, when I learn HTML, CSS and JavaScript. A simple calculator that makes the basic',
        github: 'https://github.com/MauricioHunau4/Calculator'
    }, {
        id: 2,
        title: 'Wheather app',
        photo: wheather,
        comment: 'An app that tells you the current wheather of any country, my first project with React',
        link: 'https://weatherinfomh.herokuapp.com/',
        github: 'https://github.com/MauricioHunau4/WeatherApp'
    }, {
        id: 3,
        title: 'Filmview',
        photo: filmview,
        comment: 'The project that start my career as a full stack developer, an app where you can create an account and leave your review of different movies. Done with Front end and Backend',
        github: 'https://github.com/MauricioHunau4/Filmview-UI'
    }
]

export const work = [
    {
        id: 1,
        title: 'Full Stack Developer',
        icon: 'https://yt3.googleusercontent.com/67Q_6sl2aD0mo3Unsv1UnPM3-SuF61ZwSgV9RWPA9GUEX8Fq0ieoP4udHiLr4OjNCHt3lWNr=s900-c-k-c0x00ffffff-no-rj',
        company: 'Sistemas Lenox',
        date: 'Nov 2022 - Present',
        page: 'https://www.lenoxhr.com/'
    }, {
        id: 2,
        title: 'Free lancer',
        icon: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
        company: 'Small business',
        date: '2023',
        page: ''
    }
]