<template>
  <div>
    <ShowDetails
      :image="show.image ? show.image.original : ''"
      :name="show.name"
      :rating="show.rating ? show.rating.average : 0"
      :runtime="show.runtime"
      :summary="show.summary"
      :year="show.premiered ? show.premiered.substring(0, 4) : ''"
    />
  </div>
</template>

<script>
import ShowDetails from "~/components/ShowDetails.vue";

export default {
  components: { ShowDetails },
  data() {
    return {
      show: {},
    };
  },
  async fetch() {
    await this.getShow();
  },
  fetchOnServer: true,
  methods: {
    async getShow() {
      const currentId = this.$router.currentRoute.params.showid;
      const data = await fetch(
        `https://api.tvmaze.com/shows/${currentId}`
      ).then((response) => response.json());
      this.show = data;
    },
  },
};
</script>
