const facebookImage = require('./images/facebook-clone-mock-shadow.png');
const billyImage = require('./images/billy-the-jumper-mock-shadow.png');
const lolImage = require('./images/lol-champion-db-mock-shadow.png');

const projects = [
  {
    name: 'Facebook Clone',
    description: 'A Facebook-like Social network built in Ruby on Rails',
    link: 'https://github.com/kazumaki/facebook-clone',
    icon: 'fa-github-square',
    img: facebookImage,
    background: '#fe4a49',
  },
  {
    name: 'Billy The Jumper',
    description: 'A simple game made with JavaScript',
    link: 'https://www.github.com/kazumaki/billy-the-jumper',
    icon: 'fa-github-square',
    img: billyImage,
    background: '#2ab7ca',
  },
  {
    name: 'LoL Champion Databse',
    description: 'A SPA made with async React & Redux that fetches Riot Games public API',
    link: 'https://www.github.com/kazumaki',
    icon: 'fa-github-square',
    img: lolImage,
    background: '#fed766',
  },
];

export default projects;
