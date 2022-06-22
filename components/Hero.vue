<template>
  <div id="hero-container">
    <div id="searchbar-wrapper">
      <div id="searchbar">
        <img class="search-icon" alt="search icon" src="/icons/search.png" />
        <input
          id="input"
          placeholder="Stranger Things..."
          type="text"
          :value="search"
          @input="changeSearchInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",

  props: {
    search: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    changeSearchInput(event) {
      this.searchInput = event.target.value;
      this.$emit("searchChanged", this.searchInput);
    },
  },
};
</script>

<style scoped>
#hero-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

img {
  align-items: center;
  color: black;
  display: flex;
  justify-content: center;
  padding: 0.1rem;
  width: 20px;
}

h1 {
  font-size: 46px;
  font-weight: bold;
  padding: 36px 0;
}

#searchbar-wrapper {
  width: 100%;
}

#searchbar {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  gap: 15px;
  justify-content: center;
  max-width: 600px;
  padding-left: 15px;
  width: 100%;
}

#input {
  border-radius: 10px;
  border: none;
  padding: 1rem;
  width: 100%;
}
</style>
