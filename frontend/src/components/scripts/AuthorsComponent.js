export default {
    name: 'AuthorsComponent',
    methods: {
        closeModal() {
          this.$emit('close'); // Отправляем событие закрытия модального окна
        },
      },
  };