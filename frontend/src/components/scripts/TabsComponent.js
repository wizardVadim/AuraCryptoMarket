export default {
    name: 'TabsComponent',
    data() {
        return {
        tabs: ['Мои Аукционы', 'Моя Коллекция', 'Настройки Аккаунта'],
        currentTab: 0,
        };
    },
    methods: {
        selectTab(index) {
        this.currentTab = index;
        },
    },
    };