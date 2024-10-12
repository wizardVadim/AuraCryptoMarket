export default {
    name: 'AccountSettingsComponent',
    data() {
        return {
            username: '',
            lastname: '',
            email: '',
            currentPassword: '',
            newPassword: '',
            emailNotifications: false,
            twoFactorAuth: false,
        };
    },
    methods: {
        saveSettings() {
            // Логика сохранения настроек
        },
        uploadAvatar() {
            // Логика загрузки аватара
        },
        deleteAccount() {
            // Логика удаления аккаунта
        }
    }
    };