const facebookImage = require('./images/facebook-clone-mock-shadow.png');
const billyImage = require('./images/billy-the-jumper-mock-shadow.png');
const lolImage = require('./images/lol-champion-db-mock-shadow.png');

const projects = [
  {
    name: 'Facebook Clone',
    description: 'A Facebook-like Social network built in Ruby on Rails',
    repository: 'https://github.com/kazumaki/facebook-clone',
    live: 'https://face-clone-book.herokuapp.com/',
    repoIcon: 'fa-github-square',
    liveIcon: 'fa-satellite-dish',
    img: facebookImage,
    background: '#A30000',
  },
  {
    name: 'Billy The Jumper',
    description: 'A simple game made with JavaScript',
    repository: 'https://www.github.com/kazumaki/billy-the-jumper',
    live: 'https://billy-the-jumper.herokuapp.com/',
    repoIcon: 'fa-github-square',
    liveIcon: 'fa-satellite-dish',
    img: billyImage,
    background: '#03616D',
  },
  {
    name: 'League of Legends Champion Databse',
    description: 'A SPA made with async React & Redux that fetches Riot Games public API',
    repository: 'https://www.github.com/kazumaki/lol-champion-db',
    live: 'http://lol-champion-db.herokuapp.com/',
    repoIcon: 'fa-github-square',
    liveIcon: 'fa-satellite-dish',
    img: lolImage,
    background: '#705400',
  },
];

export default projects;
