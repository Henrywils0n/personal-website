<template>
    <div class="experiences">
        <h2>My Experiences...</h2>
        <ul> 
            <li v-for="item in experiences" :key="item.id">
                <ExperienceCard
                    class="experience-card"
                    :item="item"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue';

export default {
    name: 'Experiences',
    data() {
        return {
            experiences: [
                {
                id: 9,
                jobTitle: 'Software Engineer',
                company: 'Pinterest',
                duration: 'August 2022 - Present',
                jobDescription: 'Ideating and implementing fullstack projects for a revenue growth team.',
                logo: require('@/assets/img/pinterest.png'),
                website: 'https://pinterest.com/',
                skills: ['Growth engineering', 'Fullstack development', 'Data analysis'],
                languages: ['React', 'Python', 'SQL'],
                accomplishments: ['Have implemented projects with estimated revenue impact over $5M',],
                },
                {
                id: 0,
                jobTitle: 'Software Development Intern',
                company: 'Volansi',
                duration: 'June 2021 - October 2021',
                jobDescription: '.',
                logo: require('@/assets/img/volansi.png'),
                website: 'https://volansi.com/',
                skills: ['Front end design', 'Fullstack development', 'MAVLINK protocols', 'Working with simulator machines', 'Agile development'],
                languages: ['Svelte', 'Electron', 'Javascript / Typescript', 'Flask'],
                accomplishments: ['Part of team responsible for initial aircraft management platform release', 'Used mavlink to implement flight duration timers', 'Added air map layers (airport distance, satellite layer) and inclement weather trackers to flight maps', 'Resolved bugs in platform'],
                },
                {
                id: 1,
                jobTitle: 'Web Development Intern',
                company: 'Dash Hudson',
                duration: 'October 2020 - December 2020',
                jobDescription: 'Worked on front and back end projects, which included working with database, adding permissions for features, front end design, and adding activity timeouts. At Dash Hudson, I had lots of responsibility in learning to work without QEs and write detailed, effective, full coverage tests. Also gained experience doing code reviews.',
                logo: require('@/assets/img/dh.png'),
                website: 'https://dashhudson.com/',
                skills: ['Front end design', 'SCSS', 'Fullstack development', 'Databases', 'Component testing', 'Agile development', 'Scrums / Being a scrum master'],
                languages: ['Vue', 'Flask', 'Javascript', 'SQL'],
                accomplishments: ['Implemented a timeout on the admin site', 'Created a new calendar component for web application', 'Resolved dev support tickets', 'Worked on creating facebook analytics dashboard in front end and back end', 'Wrote full coverage tests for components'],
                },
                {
                id: 2,
                jobTitle: 'Software Engineering Intern',
                company: 'Alarm.com',
                duration: 'June 2020 - September 2020',
                jobDescription: 'Worked on the home automation team where I was singlehandedly responsible for the design and launch of frontend and backend components for a smart air conditioning feature. Worked in C# and SQL to create functionality and testing for the feature, as well as ASPX to create webpage compatibility. Gained experience in object oriented programming, databases, and working with legacy code.',
                logo: require('@/assets/img/adc.png'),
                website: 'https://www.alarm.com/',
                skills: ['End to end testing with hardware', 'Unit testing'],
                languages: ['C#', 'SQL', 'ASPX'],
                accomplishments: ['Wrote a smart thermostat feature', 'Modified permissions for smart thermostat feauture', 'Added compatibility for smart thermostat feature on website and email/text notifications'],
                },
                {
                id: 3,
                jobTitle: 'Web Development Assistant',
                company: 'PAN Magazine',
                duration: 'September 2020 - March 2021',
                jobDescription: 'Responsible for the maintenance and improvement of pan-mag.com. Worked on adding website analytics, implementing a new website theme, and getting an SSL certificate for the website, as of updating this CV. Future tasks include making the site even more user friendly and improving SEO.',
                logo: require('@/assets/img/panmag.png'),
                website: 'https://pan-mag.com/',
                skills: ['Project management', 'Managing a team', 'Wordpress', 'Website management'],
                languages: ['Javascript'],
                accomplishments: ['Obtained an SSL Certificate for the site and set it up', 'Significantly reduced bounce rate of the site', 'Changed wordpress themes'],
                },
                {
                id: 4,
                jobTitle: 'Teaching Assistant for Introductory Computer Science',
                company: 'Dartmouth College',
                duration: 'March 2020 - June 2021',
                jobDescription: 'As a TA for introductory programming, I lead a group of students through weekly programming exercises, as well as helping students put together larger coding assignments for the first time. I led 3 hours of office hours per week and was responsible for grading the assignments of 6 students. This has improved my skills in Python as well as my general knowledge and understanding of computer science.',
                logo: require('@/assets/img/dartmouth.png'),
                website: 'https://web.cs.dartmouth.edu/',
                skills: ['Managing a group', 'Debugging and code reviewing'],
                languages: ['Python'],
                accomplishments: ['The section that I lead all got 4.0s in the class!'],
                },
                {
                id: 5,
                jobTitle: 'Student Researcher',
                company: 'Dartmouth Digital History Initiative',
                duration: 'December 2019 - June 2022',
                jobDescription: 'Working to develop a Text Encoding Initiative schema and encoding transcripts of oral interviews for the DDHI, and working on developing software to analyze oral histories. Built a website in Flask and created a python script and database to facilitate coordinate reconciliation in our collected data. Received the Dartmouth Sophomore Scholars Grant for $1000 in two consecutive terms and the Dartmouth Junior Scholars Grant to pursue this research for the following year.',
                logo: require('@/assets/img/ddhi.png'),
                website: 'https://ddhi.dartmouth.edu/',
                skills: ['Group work', 'TEI', 'Named Entity Linking', 'Using Wikidata', 'Working with oral histories'],
                languages: ['Flask', 'Python', 'TEI/HTML tagging'],
                accomplishments: ['Worked with a team to help develop a new way of analyzing and visualizing oral histories'],
                },
                {
                id: 6,
                jobTitle: 'Peer Tutor',
                company: 'Dartmouth College',
                duration: '2018 - 2022',
                jobDescription: 'Working with the Academic Skills Center at Dartmouth College to provide tutoring to 1-5 students per term in multivariable calculus (MATH 008), introductory computer science (COSC 001), and introduction to object oriented programming (COSC 010).',
                logo: require('@/assets/img/dartmouth.png'),
                website: 'https://students.dartmouth.edu/academic-skills/',
                skills: ['Tutoring', 'Code / assignment reviews'],
                languages: ['Python', 'Java'],
                accomplishments: ['Helped multiple students improve their standing in a class'],
                },
                {
                id: 7,
                jobTitle: 'Customer Data Analyst',
                company: 'Wilsons Security',
                duration: '2015 - 2019',
                jobDescription: 'Worked on transitioning the company’s paper contracts and customer files to a computer based system. Also worked with customer queries on Sedona to correct previous mistakes and to update customer information throughout the entire company database. Worked with the customer service team to schedule technician appointments as well as constructing spreadsheets to facilitate with new company acquisitions.',
                logo: require('@/assets/img/wilsons.png'),
                website: 'https://www.wilsonssecurity.ca/',
                skills: ['Excel', 'Sedona Office', 'Customer service'],
                languages: ['SQL'],
                accomplishments: ['Migrated two company aquisitions into our database from physical customer files', 'Organized paper customer filing system'],
                },
                {
                id: 8,
                jobTitle: 'Barista',
                company: 'The Nest Kitchen',
                duration: 'September 2021 - June 2022',
                jobDescription: 'As a barista at The Nest, I am the first point of contact for customers as they come into the cafe. Working as a barista has greatly improved my communication skills, helped me practice a high level of attention to detail which is highly applicable in my work as a developer, and has made me a better team player. I also make great espresso drinks (shameless plug, I would be a great coworker!). Although this job isn\t necessarily SWE related, it has helped me learn how to be positive in any situation, improve my communication and other soft skills, and showed me that I can tackle any challenge I put my mind to.',
                logo: require('@/assets/img/nest.png'),
                website: 'https://thenestkitchen.com/',
                skills: ['Customer service skills and knowledge', 'Managing multiple tasks', 'High level of attention-to-detail', 'Learning the constantly changing food and beverage menu', 'Communication and teamwork'],
                accomplishments: ['Debugged Toast point of service system'],
                },
            ]
        }
    },
    components: {
        'ExperienceCard': ExperienceCard,
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