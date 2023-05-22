<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-body">
            <div class="modal-left">
                <img class="company-logo" :src="this.item.logo" />
                <h3 class="company-name">{{ this.item.company }}</h3>
                <a :href="item.website" target=”_blank” class="company-link">Company site</a>
            </div>
            <div class="modal-right">
                <button
                type="button"
                class="btn-close"
                @click="close"
                >
                X
                </button>
                <div class="job-block">
                    <h2 class="title"> {{ this.item.jobTitle }} </h2>
                    <h5 class="duration">{{ this.item.duration }}</h5>
                    <p class="description">{{ this.item.jobDescription }}</p>
                </div>
                <div class="additional-block">
                    <div class="block-section">
                        <h4>Skills</h4>
                        <ul v-for="skill in item.skills" :key="skill">
                            <li>{{ skill }}</li>
                        </ul>
                    </div>
                    <div class="block-section">
                        <h4>Accomplishments</h4>
                        <ul v-for="accomp in item.accomplishments" :key="accomp">
                            <li>{{ accomp }}</li>
                        </ul>
                    </div>
                    <div class="block-section">
                        <h4>Languages</h4>
                        <ul v-for="lang in item.languages" :key="lang">
                            <li>{{ lang }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CoursePopup',
  props:
  {
    item: Object,
  },
  methods: {
    close() {
        this.$emit('close');
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 45px 1px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        overflow-x: auto;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 70%;
        width: 70%;
        justify-self: center;
        align-self: center;
        position: relative;

        .modal-body {
            padding: 15px 10px;
            display: flex;
            flex-direction: row;

            .modal-left {
                display: flex;
                flex-direction: column;
                padding: 12px;
                background-color: rgb(228, 228, 228);
            }

            .modal-right {
                display: flex;
                flex-direction: column;
                padding: 0 12px 12px 12px;
            }
        }
    }

  .company-logo {
      height: 300px;
      width: 300px;
  }

  .company-name {
      margin-top: 1.75rem;
  }

  .btn-close {
    border: none;
    font-size: 50px;
    padding: 0 20px 0 20px;
    margin-right: 0;
    margin-left: auto;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
  }

  .additional-block {
      display: flex;
      flex-direction: row;
  }

.block-section {
    width: 33%;
    flex-direction: row;

    li {
        text-align: center;
        margin-bottom: 4px;
    }

    ul {
        overflow: auto;
        max-height: 200px;
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0 12px 0 12px;
        margin: 0 12px 0 12px;
    }
}

   .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.4s ease;
  }
</style>