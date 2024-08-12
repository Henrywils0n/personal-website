// TODO Add a couple lines about each project
const data = [
  {
    title: 'PokeNet Quiz',
    subtitle: 'Compete in a pokemon quiz game against custom AI models',
    link: 'https://pokenetquiz.surge.sh',
    image: '/images/projects/pokenet.png',
    date: '2024-07-01',
    desc:
      'Trained custom CNN on limited data to recognize 493 different pokemon.'
      + ' Performs with about 80% accuracy making it a pretty hard game.'
      + ' Models are launched through a flask backend. Had to battle with ways to host this for free so it can take a little to wake up',
  },
  {
    title: 'Quant GAN',
    subtitle: 'Queens University Capstone Project',
    link: 'https://github.com/Henrywils0n/QuantGAN',
    image: '/images/projects/quantgan.png',
    date: '2024-04-01',
    desc:
      'Generative Adversarial Network to generate statistically accurate financial data.'
      + ' Outperforms classical methods of timeseries prediction including GARCH and ARIMA models.'
      + ' Still need to try and make money with it :(',
  },
  {
    title: 'This website :)',
    subtitle: 'Just a fun little project',
    link: 'https://github.com/Henrywils0n/personal-website',
    image: '/images/projects/react.png',
    date: '2024-07-03',
    desc:
      'Nothing cool. Just a website. But hey, click the title to see the code behind it',
  },
  {
    title: 'TPa on Twitter',
    subtitle: 'Some work I did for the HCOAL lab while with QMIND',
    link: 'https://www.h-coal.com/',
    image: '/images/projects/tpa.png',
    date: '2023-07-01',
    desc:
      'Webscraping Twitter in search for tweets to analyze with a RNN for sentiment analysis. Pulled thousands of tweets relating to TPa (a divisive stroke treatment) to generalize public sentiment and study its effect on usage in the ER. ',
  },
  {
    title: 'YUL Security Placement',
    subtitle: 'Lloyd\'s Algorithm to dynamically place security officers in YUL departures terminal',
    link: 'https://github.com/Henrywils0n/Airport-Security-Placement-with-Lloyds-Algorithm',
    image: '/images/projects/lloyds.png',
    date: '2022-08-01',
    desc:
      'Programmed a simulation of Lloyd\'s algorithm where the density map would dynamically update based on the arrival and departure of planes from the terminal',
  },
];

export default data;
