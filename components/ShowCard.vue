<template>
  <div class="card">
    <img :src="image" alt="movie poster" />
    <p class="title">{{ title }}</p>
    <p class="year">{{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  width: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

img {
  height: 100%;
  border-radius: 10px;
  margin-bottom: 6px;
}

.title {
  font-size: 16px;
}

.year {
  font-size: 14px;
  color: gray;
  font-style: italic;
}
</style>
