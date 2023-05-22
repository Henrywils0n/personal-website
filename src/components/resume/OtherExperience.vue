<template>
    <div>
        <h4>Other Experiences</h4>
        <ul>
             <li class="experience-card" v-for="item in otherExperiences" :key="item.id">
                {{ item.jobTitle }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OtherExperience',
    data() {
        return {
            otherExperiences: [
                {
                id: 0,
                jobTitle: 'Director of Chapter Events at Alpha Phi Sorority (Iota Kappa Chapter)',
                jobDescription: 'hi'
                },
                {
                id: 1,
                jobTitle: 'Sports columnist for The Dartmouth',
                jobDescription: 'hi'
                },
                {
                id: 2,
                jobTitle: 'Division 1 track athlete',
                jobDescription: 'hi'
                },
                {
                id: 3,
                jobTitle: 'Graduate of the Management and Leadership Development Program at Dartmouth College',
                jobDescription: 'hi'
                },
                {
                id: 4,
                jobTitle: 'Former member of the Dartmouth Entrepreneurship LLC',
                jobDescription: 'hi'
                },
                    {
                id: 7,
                jobTitle: 'Freshmen Trips Program Orientation Leader',
                jobDescription: 'Worked for Dartmouth College and completed first aid and wilderness safety training to lead a group of 8 incoming freshmen on a 5 day hike in the White Mountains. I led team bonding programs to facilitate the group in their transition to college.',
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  list-style-type: none;
  padding: 0 12px 0 12px;
  margin: 0 12px 0 12px;
}
li {
  margin-bottom: 6px;
}
</style>