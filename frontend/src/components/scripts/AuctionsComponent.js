import CurrentAuctionComponent from '@/components/CurrentAuctionComponent.vue';

export default {
    name: 'AuctionsComponent',
    components: {
        CurrentAuctionComponent,
    },
    data() {
        return {
            auctions: [], // Начинаем с пустого массива
        };
    },
    created() {
        this.loadAuctions(); // Загружаем аукционы при создании компонента
    },
    methods: {
        loadAuctions() {
            // Мокаем данные о аукционах, можно добавить API-запрос
            this.auctions = [
                {
                    id: 1,
                    image: require('@/assets/images/main-page/160x160Sticker.png'),
                    authorImage: require('@/assets/images/main-page/24x24AuthorGrey.png'),
                    authorName: 'Frank.Navgal',
                    name: 'Alien (green) e_e',
                    currentBid: 0.02,
                    timeLeft: { hours: 3, minutes: 29, seconds: 44 },
                },
                {
                    id: 2,
                    image: require('@/assets/images/main-page/160x160Sticker.png'),
                    authorImage: require('@/assets/images/main-page/24x24AuthorGrey.png'),
                    authorName: 'John_Doe',
                    name: 'Sticker 2',
                    currentBid: 0.05,
                    timeLeft: { hours: 1, minutes: 15, seconds: 20 },
                },
                {
                    id: 3,
                    image: require('@/assets/images/main-page/160x160Sticker.png'),
                    authorImage: require('@/assets/images/main-page/24x24AuthorGrey.png'),
                    authorName: 'Alice_Smith',
                    name: 'Sticker 3',
                    currentBid: 0.03,
                    timeLeft: { hours: 2, minutes: 45, seconds: 10 },
                },
                
                // Добавьте больше аукционов здесь
            ];
        },
    },
};