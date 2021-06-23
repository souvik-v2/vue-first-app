import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import FriendList from './components/FriendList.vue'
import SignIn from './components/SignIn.vue'
import UserDashBoard from './components/UserDashBoard.vue'

const app = createApp(App)


app.component('user-dash', UserDashBoard);
app.component('sign-in', SignIn);
app.component('friend-list', FriendList);

app.mount('#app');
