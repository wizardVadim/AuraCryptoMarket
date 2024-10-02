import LoginComponent from "../LoginComponent.vue";
import RegisterComponent from "../RegisterComponent.vue";

export default {
    name: 'HeaderComponent',
    components: {
      LoginComponent,
      RegisterComponent,
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
        showRegisterModal: false, // Управление показом модального окна
      };
    },
  };