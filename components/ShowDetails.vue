<template>
  <div class="page-container">
    <button class="previous-button" @click="goBack">
      <img class="back-icon" alt="search icon" src="/icons/back.png" /> Back
    </button>
    <p></p>
    <div class="detail-wrapper">
      <img :src="image" alt="" />
      <div class="information-wrapper">
        <h1>{{ name }}</h1>
        <div class="show-details">
          <p>Rating: {{ rating }}</p>
          <p>{{ year }}</p>
          <p>{{ runtime }} min</p>
        </div>
        <p class="summary">{{ summary.replace(/<[^>]*>?/gm, "") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDetails",
  props: {
    image: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    runtime: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
  },
  methods: {
    goBack() {
      return this.$router.push(`/`);
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  min-height: 100vh;
  padding: 30px 20px 50px 20px;
}

.previous-button {
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  gap: 10px;
  padding: 0.4rem;
  width: fit-content;
}

.previous-button:hover {
  text-decoration: underline;
}

.back-icon {
  width: 20px;
}

img {
  width: 350px;
}

.detail-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  text-align: center;
}

.information-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 550px;
}

.show-details {
  color: #808080;
  display: flex;
  gap: 30px;
  margin: 10px 0;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 18px;
  line-height: 1.3;
}

@media (min-width: 750px) {
  .detail-wrapper {
    align-items: center;
    flex-direction: row;
    text-align: left;
  }

  .information-wrapper {
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
