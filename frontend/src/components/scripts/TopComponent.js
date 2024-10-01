export default {
    name: 'TopComponent',
    data() {
        return {
            topItems: [], // Инициализация массива для хранения топовых элементов
        };
    },
    computed: {
        groupedTopItems() {
            // Группируем topItems по два элемента
            const groups = [];
            for (let i = 0; i < this.topItems.length; i += 2) {
                groups.push(this.topItems.slice(i, i + 2));
            }
            return groups;
        },
    },
    methods: {
        loadTopItems() {
            // Мокаем данные о топ-продажах
            this.topItems = [
                {
                    image: require('@/assets/images/main-page/300x300StickerGreen.png'),
                    authorImage: require('@/assets/images/main-page/48x48Author.png'),
                    authorName: 'Автор 1',
                    name: 'Стикер 1',
                    cryptoValue: '0.10',
                    cryptoType: 'ETH',
                    dollarValue: '351.24',
                },
                {
                    image: require('@/assets/images/main-page/300x300StickerGreen.png'),
                    authorImage: require('@/assets/images/main-page/48x48Author.png'),
                    authorName: 'Автор 2',
                    name: 'Стикер 2',
                    cryptoValue: '0.15',
                    cryptoType: 'ETH',
                    dollarValue: '525.36',
                },
                {
                    image: require('@/assets/images/main-page/300x300StickerGreen.png'),
                    authorImage: require('@/assets/images/main-page/48x48Author.png'),
                    authorName: 'Автор 3',
                    name: 'Стикер 3',
                    cryptoValue: '0.05',
                    cryptoType: 'ETH',
                    dollarValue: '175.12',
                },
                {
                    image: require('@/assets/images/main-page/300x300StickerGreen.png'),
                    authorImage: require('@/assets/images/main-page/48x48Author.png'),
                    authorName: 'Автор 4',
                    name: 'Стикер 4',
                    cryptoValue: '0.20',
                    cryptoType: 'ETH',
                    dollarValue: '702.48',
                },
                // Добавьте другие элементы по мере необходимости
            ];
        },
    },
    mounted() {
        this.loadTopItems(); // Загрузка данных о топ-продажах при монтировании компонента
    },
};
