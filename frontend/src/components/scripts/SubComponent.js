export default {
    name: 'SubComponent',
    data() {
        return {
            name: '',
            email: '',
            consent: false,
            message: '',
        };
    },
    methods: {
        handleSubmit() {
            // Проверка валидности данных
            if (!this.name || !this.email || !this.consent) {
                this.message = 'Пожалуйста, заполните все поля и согласитесь на обработку данных.';
                return;
            }

            // Здесь добавьте логику для отправки данных на сервер
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Consent:', this.consent);

            // Отправка данных на сервер (например, через API)
            // После успешной отправки можно очистить поля
            this.message = 'Спасибо за подписку! Вы будете получать новости на ваш e-mail.';
            this.name = '';
            this.email = '';
            this.consent = false;
        },
    },
};