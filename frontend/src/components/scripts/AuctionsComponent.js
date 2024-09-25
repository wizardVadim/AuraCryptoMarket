import CurrentAuctionComponent from './CurrentAuctionComponent.vue';

export default {
    name: 'AuctionsComponent',
    components: {
        CurrentAuctionComponent,
    },
    data() {
        return {
            auctions: [
                {
                    id: 1,
                    image: '/images/main-page/160x160Sticker.png',
                    authorImage: '/images/main-page/24x24AuthorGrey.png',
                    authorName: 'Frank.Navgal',
                    name: 'Alien (green) e_e',
                    currentBid: 0.02,
                    timeLeft: { hours: 3, minutes: 29, seconds: 44 },
                },
                // Добавь остальные аукционы здесь
            ],
        };
    },
};