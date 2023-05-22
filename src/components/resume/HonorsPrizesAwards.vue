<template>
    <div class="honors-card">
        <h4>Honors, Prizes, Awards</h4>
        <ul>
             <li v-for="item in honors" :key="item.title">
            {{ item.jobTitle }}
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Honors',
    data() {
        return {
            honors: [
                {
                id: 0,
                jobTitle: 'Recipient of the Neukom Scholars Grant to pursue research in novel computing methods in the digital humanities for $1000',
                year: 2020,
                },
                {
                id: 1,
                jobTitle: 'Three time recipient of the Dartmouth Junior Scholars Grant for $1000',
                year: 2020,
                },
                {
                id: 2,
                jobTitle: 'Recipient of the John Abyss Family Business Association Scholarship for $3000',
                year: 2020
                },
                {
                id: 3,
                jobTitle: 'Two time recipient of the Dartmouth Sophomore Scholars Grant for $1000',
                year: 2020,
                },
                {
                id: 4,
                jobTitle: 'CANASA Scholarship Recipient',
                year: 2019,
                },
                {
                id: 5,
                jobTitle: 'Top of Graduating Class medal recipient (high school)',
                year: 2018,
                },
                {
                id: 6,
                jobTitle: 'Awards for excellence in History, Math, and Physics (high school)',
                year: 2018,
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
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