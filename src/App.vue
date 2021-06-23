<template>
  <div v-show="false" class="practice">
    <h1>Friends:</h1>
    <ul>
      <friend-list
        name="swapnil"
        age="29"
        phoneNumber="12345679"
        email="swapnil@gmail.com"
      ></friend-list>
      <friend-list
        name="Raj"
        age="30"
        phoneNumber="65456446"
        email="raj@gmail.com"
      ></friend-list>
    </ul>
  </div>

  <div v-show="true" class="login">
    <sign-in></sign-in>
  </div>

  <div v-show="false" class="userdashboard">
    <user-dash></user-dash>
  </div>

</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Swapnil",
          age: 29,
          phoneNumber: "08080808080",
          email: "swapnil@gmail.com",
        },
        {
          id: 2,
          name: "Raj",
          age: 39,
          phoneNumber: "08080808080",
          email: "raj@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.login {
    margin: 0 auto;
    max-width: 50%;
    border: 1px solid #3f51b5;
    padding: 41px;
    background: #e4dede;
  }
</style>