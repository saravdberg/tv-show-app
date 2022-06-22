<template>
  <div class="home">
    <div class="hero-wrapper">
      <div id="selector-menu">
        <select id="genre-select" v-model="selectedGenre" name="genres">
          <option value="All genres">All genres</option>
          <option
            v-for="(genre, index) of genres"
            :key="index"
            class="genre-option"
            :value="genre"
          >
            {{ genre }}
          </option>
        </select>
      </div>
      <Hero :search="searchInput" @searchChanged="searchInput = $event" />
    </div>

    <!-- Cards -->
    <h1 v-if="selectedGenre === 'All genres'" id="genre-title">All genres</h1>
    <h1 v-else id="genre-title">{{ selectedGenre }}</h1>
    <div class="container">
      <div v-for="(show, index) in filteredShows" :key="index">
        <ShowCard
          :image="show.image.medium"
          :title="show.name"
          :year="show.premiered.substring(0, 4)"
          @click.native="getShowId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ShowCard from "~/components/ShowCard.vue";

export default {
  components: { ShowCard },
  data() {
    return {
      shows: [],
      genres: [],
      selectedGenre: "All genres",
      searchInput: "",
      searchTerm: "",
    };
  },
  async fetch() {
    await this.getShows();
    this.collectAllGenres();
  },
  computed: {
    filteredShows() {
      const filteredShows =
        this.selectedGenre === "All genres"
          ? this.shows
          : this.shows.filter((show) =>
              show.genres.includes(this.selectedGenre)
            );

      if (this.searchInput !== "") {
        return filteredShows.filter((show) =>
          show.name.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      }
      return filteredShows;
    },
  },
  fetchOnServer: true,
  methods: {
    async getShows() {
      const data = fetch("https://api.tvmaze.com/shows").then((response) =>
        response.json()
      );
      this.shows = await data;
    },
    collectAllGenres() {
      this.genres = [...this.shows].reduce(
        (acc, show) => [
          ...acc,
          ...show.genres.filter((genre) => !acc.includes(genre)),
        ],
        []
      );
    },
    getSearchInput(input) {
      return (this.searchInput = input);
    },
    getShowId(event) {
      const showTitle = event.target
        .closest(".card")
        .querySelector(".title").innerText;
      const showId = this.shows.filter((show) =>
        show.name.includes(showTitle)
      )[0].id;
      this.$router.push(`/shows/${showId}`);
    },
  },
};
</script>

<style>
.home {
  padding: 0 30px;
}

.hero-wrapper {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
}

#selector-menu {
  display: flex;
  gap: 25px;
}

#genre-select {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.8rem 0;
}

.container {
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding-bottom: 30px;
}

.genres {
  color: white;
}

#genre-title {
  margin-top: 30px;
}

@media (min-width: 750px) {
  .hero-wrapper {
    align-items: center;
    flex-direction: row;
    gap: 30px;
    padding: 20px 0;
  }
}
</style>
