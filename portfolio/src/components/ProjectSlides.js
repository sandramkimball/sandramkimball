
//images
import homepage from '../images/tinyHomepage.png';
import icnst from '../images/icnst.jpg';
import sautidb3 from '../images/sautidb3.png';
import stylist from '../images/stylist-find.png';
import mars from '../images/mars-explor.png';
import toDo from '../images/reducer-todo.png'

const projects = [
    {
        id: 1,
        index: 0,
        href: 'https://foodie-fun-app.netlify.com/?_ga=2.228749211.602302675.1567105491-253791327.1567105491',
        img: homepage,
        title: 'FOODIE FUN',
        text: 'Marketing site for a food blogger app. 1 week sprint working with a frontend and UX developer',
        stack: 'Html | Css',
        b_url: '',
        f_url: ''
    },
    {
        id: 2, 
        index: 1,
        href: 'https://icnst-development.netlify.com/',
        img: icnst,
        title: 'CHILD NUTRITION TRACKER',
        text: 'Collaborated with a senior React developer for an application to help doctors in foreign nations log and chart health information for patients. 1 week sprint. Worked with a FE developer and UX designer',
        stack: 'Redux | Html | Css'
    },
    {
        id: 3,
        index: 2,
        href: 'https://sauti.now.sh/',
        img: sautidb3,
        title: 'SAUTI TRADERS',
        text: 'Build-on project for a non-profit consensus organisation for informal cross-border traders in Africa. 2 month sprint with a team of 5. Worked on data parser, csv downloader, filter form and functionality.',
        stack: 'ReactJs | Nivo | CsvDownloader | GraphQL | Html | Css',
        f_url: 'https://github.com/dylanmestyanek/sauti-databank-fe',
        b_url: 'https://github.com/dylanmestyanek/sauti-databank-be'
    },
    {
        id: 4,
        index: 3,
        href: 'https://stylistfind.now.sh/',
        img: stylist,
        title: 'STYLIST FIND',
        text: 'Professional platform for hair stylists and clients to connect through reviews, portfolios and search options. Personal side project.',
        stack: 'ReactJs | NodeJs | JsonWebToken | Html | Css',
        f_url: 'https://github.com/sandramkimball/stylistfind',
        b_url: 'https://github.com/sandramkimball/StylistFind---BE',
    },
    {
        id: 5,
        index: 4,
        href: 'https://reducer-todo.sandramkimball.now.sh/',
        img: toDo,
        title: 'TO DO LIST',
        text: 'A simple to do list where you can add and delete items using Redux. 1 day sprint, solo.',
        stack: 'Redux | Html | Css',
        f_url: 'https://github.com/sandramkimball/reducer-todo'
    },
    {
        id: 6,
        index: 5,
        href: null,
        img: mars,
        title: 'COMING SOON',
        text: 'Online Python/Django adventure game. Personal side project.',
        stack: 'Python3 | Django | Html | Css',
        f_url: 'https://github.com/sandramkimball/marsexplorer'
    },
]

export default projects