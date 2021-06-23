<template>
  <!-- Default form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control" v-model="defaultFormLoginEmailEx"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control" v-model="defaultFormLoginPasswordEx"/>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="button" @click="checkDetails">Login</button>
    </div>
  </form>
  <!-- Default form login -->
</template>


<script>
export default {
  data() {
    return {
      defaultFormLoginEmailEx: "",
      defaultFormLoginPasswordEx: "",
      isLogin: true
    };
  },
  methods: {
    checkDetails() {
      this.isLogin = !this.isLogin;
      this.isAreAvailable = true;
      this.email = this.defaultFormLoginEmailEx;
      console.log("Email:", this.defaultFormLoginEmailEx);
      console.log("Password:", this.defaultFormLoginPasswordEx);
    },
  },
};
</script>

<style>
.btn-indigo {
    color: #fff;
    background-color: #3f51b5 !important;
}
</style>
