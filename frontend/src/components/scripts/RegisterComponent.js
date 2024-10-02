export default {
    props: {
      isModal: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      submitRegister() {
        // Логика для входа
        console.log('Логин:', this.username, 'Пароль:', this.password);
      },
      closeModal() {
        this.$emit('close'); // Отправляем событие закрытия модального окна
      },
    },
  };