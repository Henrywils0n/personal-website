<template>
    <div class="experiences">
        <h2>My Experiences...</h2>
        <ul> 
            <li v-for="item in experiences" :key="item.id">
                <CourseCard
                    class="experience-card"
                    :item="item"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import CourseCard from './CourseCard.vue';

export default {
    name: 'Courses',
    data() {
        return {
            experiences: [
                {
                id: 0,
                jobTitle: 'Intro to Object Oriented Programming',
                company: 'COSC 10',
                duration: 'Professor Tim Pierson',
                jobDescription: '',
                logo: require('../../assets/img/dh.png'),
                website: 'https://dashhudson.com/',
                skills: ['Front end design', 'SCSS', 'Fullstack development'],
                languages: ['Vue', 'Flask', 'Javascript', 'SQL'],
                accomplishments: ['Implemented a timeout on the admin site', 'Wrote full coverage tests for components'],
                },
                {
                id: 1,
                jobTitle: 'Intro to Software Development',
                company: 'COSC 50',
                duration: 'Professor ... ',
                jobDescription: 'Worked on the home automation abases, and working with legacy code.',
                logo: require('../../assets/img/adc.png'),
                website: 'https://www.alarm.com/',
                skills: ['End to end testing with hardware', 'Unit testing'],
                languages: ['C#', 'SQL', 'ASPX'],
                accomplishments: ['Wrote a smart thermostat feature', 'Modified permissions for smart thermostat feauture', 'Added compatibility for smart thermostat feature on website and email/text notifications'],
                },
                {
                id: 2,
                jobTitle: 'Web Development',
                company: 'COSC 52',
                duration: 'Professor Tim Treu ... ',
                jobDescription: 'Responsible for the maintenanand improving SEO.',
                logo: require('../../assets/img/panmag.png'),
                website: 'https://pan-mag.com/',
                skills: ['Project management', 'Managing a team', 'Wordpress', 'Website management'],
                languages: ['Javascript'],
                accomplishments: ['Obtained an SSL Certificate for the site and set it up', 'Significantly reduced bounce rate of the site', 'Changed wordpress themes'],
                },
                {
                id: 3,
                jobTitle: 'Networks',
                company: 'COSC 60',
                duration: 'Professor Sebestian Joosten',
                jobDescription: 's helping studentshas improved my snce.',
                logo: require('../../assets/img/dartmouth.png'),
                website: 'https://web.cs.dartmouth.edu/',
                skills: ['Managing a group', 'Debugging and code reviewing'],
                languages: ['Python'],
                accomplishments: ['The section that I lead all got 4.0s in the class!'],
                },
                {
                id: 4,
                jobTitle: 'Cognative Computing with Watson',
                company: 'COSC 89',
                duration: 'Professor Charles Palmer',
                jobDescription: 'Worrviews for the Dmouth Junior Schoarch for the following year.',
                logo: require('../../assets/img/ddhi.png'),
                website: 'https://ddhi.dartmouth.edu/',
                skills: ['Group work', 'TEI', 'Named Entity Linking', 'Using Wikidata', 'Working with oral histories'],
                languages: ['Flask', 'Python', 'TEI/HTML tagging'],
                accomplishments: ['Worked with a team to help develop a new way of analyzing and visualizing oral histories'],
                },
                {
                id: 5,
                jobTitle: 'Math for algs ? ',
                company: 'COSC 30',
                duration: 'Professor Sebestian Joosten',
                jobDescription: 'Werm in multivariable  programming (COSC 010).',
                logo: require('../../assets/img/dartmouth.png'),
                website: 'https://students.dartmouth.edu/academic-skills/',
                skills: ['Tutoring', 'Code / work reviews'],
                languages: ['Python', 'Java'],
                accomplishments: ['Helped multiple students improve their standing in a class'],
                },
                {
                id: 6,
                jobTitle: 'Algorithm Design',
                company: 'COSC 31',
                duration: 'Professor Amit Chakrabarti',
                jobDescription: 'Worked on transitioninmy acquisitions.',
                logo: require('../../assets/img/wilsons.png'),
                website: 'https://www.wilsonssecurity.ca/',
                skills: ['Excel', 'Sedona Office', 'Customer service'],
                languages: ['SQL'],
                accomplishments: ['Migrated two company  into our  from physical customer files', 'Organized paper customer filing system'],
                },
            ]
        }
    },
    components: {
        'CourseCard': CourseCard,
    }
}
</script>
<style lang="scss" scoped>
.experiences {
    margin-top: 20px;
}

ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: 5%;
    margin-left: 5%;

    justify-content: center;
    align-content: center;
    list-style-type: none;
    padding: 0 12px 0 12px;
    margin: 0 12px 0 12px;
}
</style>