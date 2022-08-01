<template>
  <b-container class="py-5">
    <b-card-group deck>
      <b-card v-for="event in events" :key="event.ID">
        <b-card-title>{{ event.Title }}</b-card-title>
        <b-card-text>{{ event.Description }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  async fetch({ store }) {
    let filters = null;
    await store.dispatch("events/get", filters);
  },

  computed: {
    ...mapGetters({
      events: "events/items",
    }),
  },
};
</script>
