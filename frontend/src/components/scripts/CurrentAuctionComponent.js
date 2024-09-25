export default {
    name: 'CurrentAuctionComponent',
    props: {
      auctionName: {
        type: String,
        required: true,
      },
      authorName: {
        type: String,
        required: true,
      },
      authorImageSrc: {
        type: String,
        default: '/images/main-page/48x48Author.png',
      },
      imageSrc: {
        type: String,
        default: '/images/main-page/460x460Sticker.png',
      },
      currentBet: {
        type: Number,
        default: 0.1,
      },
      currency: {
        type: String,
        default: 'ETH',
      },
      dollarsEquivalent: {
        type: Number,
        default: 351.24,
      },
      endTime: {
        type: Date,
        required: true,
      },
    },
    data() {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: null,
      };
    },
    methods: {
      updateTimer() {
        const now = new Date();
        const timeLeft = this.endTime - now;
  
        if (timeLeft > 0) {
          this.hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          this.minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          this.seconds = Math.floor((timeLeft / 1000) % 60);
        } else {
          clearInterval(this.intervalId);
          this.hours = this.minutes = this.seconds = 0;
        }
      },
      placeBid() {
        // Действие для ставки
        alert('Ставка сделана!');
      },
    },
    mounted() {
      this.updateTimer();
      this.intervalId = setInterval(this.updateTimer, 1000); // Обновляем таймер каждую секунду
    },
    beforeDestroy() {
      clearInterval(this.intervalId); // Очищаем интервал перед удалением компонента
    },
  };