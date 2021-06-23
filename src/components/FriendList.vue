<template>
  <h2>{{ name }}</h2>
  <button type="button" @click="toggleDetails">See Details</button>
  <ul v-if="detailsAreAvailable">
    <li><strong>Phone: </strong> {{ phoneNumber }}</li>
    <li><strong>Email: </strong> {{ email }}</li>
  </ul>
</template>


<script>
export default {
  props: ["name", "age", "phoneNumber", "email"],
  data() {
    return {
      detailsAreAvailable: false,
      friend: {
        id: 1,
        name: "Swapnil",
        age: 29,
        phoneNumber: "08080808080",
        email: "swapnil@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreAvailable = !this.detailsAreAvailable;
    },
  },
};
</script>
