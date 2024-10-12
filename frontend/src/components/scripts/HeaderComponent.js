import LoginComponent from "../LoginComponent.vue";
import RegisterComponent from "../RegisterComponent.vue";
import AuthorsComponent from "../AuthorsComponent.vue";

export default {
    name: 'HeaderComponent',
    components: {
      LoginComponent,
      RegisterComponent,
      AuthorsComponent,
    },
    props: {
      isModalAuth: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showLoginModal: false,
        showRegisterModal: false,
        showAuthorsModal: false,
        isAuthorized: !!localStorage.getItem('token'),
        userId: localStorage.getItem('userId') // Управление показом модального окна
      };
    },
  };