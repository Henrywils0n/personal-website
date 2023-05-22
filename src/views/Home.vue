<template>
<div class="home">
    <div class="header">
      <h1>Welcome to my website, I'm glad you're here!</h1>
    </div>

    <div class="wrapper">
      {{ this.intro }}
    </div>

</div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      intro: 'My name is Henry Wilson, and I am a fourth year student at Queens University, where I am majoring in Applied Mathematics an Engineering with a specialization in Computations and Communications. As I have to explain to everyone I tell that too, this program consists of a mixture of a mixture of CS classes such as Algorithms and Software Development, computer design, and applied mathematics. Being a student in mathematics has given me a distinctive way of looking at and solving problems in other fields. By combining a solid mathematical base with computer science knowledge, my program has given me a step-up in understanding many fields of computing such as Machine Learning and Data Analytics.',
      blog: 'I was a likely engineering major at Dartmouth College, following closely in the footsteps of my father, who had gone through college to become an industrial engineer. However, in my first year as an engineer, nothing really excited me. I definitely don\'t remember the first thing that I learned in introductory physics, but I very clearly remember my first programming class. Print and if/else statements. As clear as day, I remember that first time feeling of watching my terminal print out the numbers one through ten, followed by the odd numbers in the same range. Something that I now know is so simple absolutely electrified me with excitement.',
      blogTwo: 'Long story short, I decided that even if I had to be the only sophomore computer science major who didn\'t really know how to code yet, I would be alright. What I lacked in previous knowledge, I quickly made up for with my newly discovered passion for programming. Turns out I made the right decision; I\'ve had (in my completely biased opinion) some of the coolest internships in the world, and had the chance to work on a bunch of other awesome projects. So here, scattered throughout this site, are some of the projects I\'ve worked on, more about me, my resumé, and how to reach out to me.',
      blogThree: 'When I\'m not coding, I love to make art, listen to music, live sustainably, and play with my dog. I ran the 400m at a division 1 NCAA school, and love to sail and rollerblade. I\'m passionate about astrology, snd to an extent that some may consider embarrassing, am a die hard Star Wars fan. I have recently developed a (mild) chess addiction. Most of all, I love to make things happen, create things that excite me, and watch my passions and dreams become reality in my local development environment. I hope you find something here that sparks your interest!',
    }
}
}
</script>

<style scoped>
  .profile-pic {
    max-height: 250px;
    border-radius: 100%;
    padding: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 10%;
    padding-right: 10%;
  }

  .spacer {
    font-size: 10px;
  }

  .home {
    padding-bottom: 32px;
  }

  .wrapper {
    background-color: lightblue;
    padding: 25px;
    margin: 10px;
    border-radius: 25px;
    border: 2px solid #181818;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/sunset.png');
    background-size: cover;
    height: 300px;
  }

  h1 {
    position: relative;
    top: -45px;
  }
  h3 {
    padding-top: 2.5%;
  }
</style>