import html from '../public/images/technologies/HTML.png'
import css from '../public/images/technologies/R.png'
import js from '../public/images/technologies/Javascript.png'
import react from '../public/images/technologies/React.png'
import redux from '../public/images/technologies/redux.png'
import next from '../public/images/technologies/next-js.png'
import chakra from '../public/images/technologies/chakraui.png'
import material from '../public/images/technologies/material-ui.png'
import node from '../public/images/technologies/Nodejs.png'
import typescript from '../public/images/technologies/typescript.png'
import python from '../public/images/technologies/Python.png'
import go from '../public/images/technologies/Go.png'
import git from '../public/images/technologies/git.png'
import album from '../public/images/projects/thealbum.png'
import filmview from '../public/images/projects/filmview.png'
import calculator from '../public/images/projects/Captura.png'
import wheather from '../public/images/projects/Capturaweather.png'
import schoolui from '../public/images/projects/schoolui.jpg'
import apod from '../public/images/projects/Apod.jpg'

export const technologiesForMap = [
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
        photo: react,
        title: 'React',
    }, {
        photo: redux,
        title: 'Redux',
    }, {
        photo: next,
        title: 'Next.js',
    }, {
        photo: chakra,
        title: 'Chakra UI',
    }, {
        photo: material,
        title: 'Material UI',
    }, {
        photo: node,
        title: 'Node.js',
    }, {
        photo: typescript,
        title: 'TypeScript',
    }, {
        photo: python,
        title: 'Python',
    }, {
        photo: go,
        title: 'Go',
    }, {
        photo: git,
        title: 'Git',
    }
]

export const recentProjects = [{
    id: 1,
    title: 'School UI',
    photo: schoolui,
    comment: 'It is a prototype for a bigger project, it will be a service that provides administration and management for schools, professors and students',
    link: 'https://schoolui-d48cc.web.app/',
    github: 'https://github.com/MauricioHunau4/SchoolUI'
}, {
    id: 2,
    title: 'APOD',
    photo: apod,
    comment: 'Astronomic Picture of the Day, every day a new photo of the universe is taken by professionals and satelites. You can search a date and a photo will be display with their respective explanation. With a minigame hidden, look if you can find it!',
    link: 'https://apodmaurih.netlify.app/',
    github: 'https://github.com/MauricioHunau4/APOD'
}, {
    id: 3,
    title: 'The Album',
    photo: album,
    comment: 'The album is a collection of photos taken by professionals. You can search a especific collection with an excellent quality',
    link: 'https://the-albumh-e932e.web.app/',
    github: 'https://github.com/MauricioHunau4/The-album'
}
]

export const oldestProjects = [{
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