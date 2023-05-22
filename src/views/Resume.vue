<template>
  <div class="resume">
    <h1>Resume</h1>
    <Contact></Contact>
    <Experiences></Experiences>
    <div class="bottom-section">
      <Honors></Honors>
      <OtherExperience></OtherExperience>
    </div>
  </div>
</template>

<script>
import Contact from '@/components/resume/Contact.vue'
import Experiences from '@/components/resume/Experiences.vue'
import Honors from '@/components/resume/HonorsPrizesAwards.vue'
import OtherExperience from '@/components/resume/OtherExperience.vue'
import Skills from '@/components/resume/Skills.vue'




export default {
  name: 'Resume',

  components: {
      'Experiences': Experiences,
      'Contact': Contact,
      'Honors': Honors,
      'OtherExperience': OtherExperience,
      'Skills': Skills,
    },
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 12px;
}

.bottom-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 12px 12px 12px;
  padding-top: 8px;
  background-color: rgb(245, 245, 245);

}
</style>