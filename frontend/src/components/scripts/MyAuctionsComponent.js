export default {
    name: 'MyAuctionsComponent',
    data() {
      return {
        auctions: [
          // Пример данных. Подставь свои.
          { id: 1, name: 'Аукцион 1', currentBid: 1.5, status: 'Активен', endTime: '2024-10-05 18:00' },
          { id: 2, name: 'Аукцион 2', currentBid: 0.8, status: 'Завершен', endTime: '2024-10-01 15:00' },
          { id: 3, name: 'Аукцион 3', currentBid: 2.1, status: 'Активен', endTime: '2024-10-10 12:00' },
          { id: 4, name: 'Аукцион 4', currentBid: 0.5, status: 'Завершен', endTime: '2024-09-30 10:00' },
          { id: 5, name: 'Аукцион 5', currentBid: 1.2, status: 'Активен', endTime: '2024-10-07 14:00' },
          { id: 6, name: 'Аукцион 6', currentBid: 0.9, status: 'Завершен', endTime: '2024-09-29 20:00' },
          { id: 7, name: 'Аукцион 7', currentBid: 2.0, status: 'Активен', endTime: '2024-10-08 08:00' },
          { id: 8, name: 'Аукцион 8', currentBid: 3.4, status: 'Завершен', endTime: '2024-10-02 22:00' },
          { id: 9, name: 'Аукцион 9', currentBid: 0.7, status: 'Активен', endTime: '2024-10-06 18:00' },
          { id: 10, name: 'Аукцион 10', currentBid: 1.5, status: 'Активен', endTime: '2024-10-05 18:00' },
          { id: 11, name: 'Аукцион 11', currentBid: 0.8, status: 'Завершен', endTime: '2024-10-01 15:00' },
          { id: 12, name: 'Аукцион 12', currentBid: 2.1, status: 'Активен', endTime: '2024-10-10 12:00' },
          { id: 13, name: 'Аукцион 13', currentBid: 0.5, status: 'Завершен', endTime: '2024-09-30 10:00' },
          { id: 14, name: 'Аукцион 14', currentBid: 1.2, status: 'Активен', endTime: '2024-10-07 14:00' },
          { id: 15, name: 'Аукцион 15', currentBid: 0.9, status: 'Завершен', endTime: '2024-09-29 20:00' },
          { id: 16, name: 'Аукцион 16', currentBid: 2.0, status: 'Активен', endTime: '2024-10-08 08:00' },
          { id: 17, name: 'Аукцион 17', currentBid: 3.4, status: 'Завершен', endTime: '2024-10-02 22:00' },
          { id: 18, name: 'Аукцион 18', currentBid: 0.7, status: 'Активен', endTime: '2024-10-06 18:00' },
        ],
        displayedAuctions: [], // Аукционы, которые отображаются на странице
        auctionsPerLoad: 8, // Количество аукционов для загрузки за раз (две строки)
      };
    },
    methods: {
      // Переход к созданию нового аукциона
      createAuction() {
        this.$router.push('/new-auction');
      },
  
      // Загружаем больше аукционов при клике на кнопку "Еще"
      loadMoreAuctions() {
        const nextAuctions = this.auctions.slice(this.displayedAuctions.length, this.displayedAuctions.length + this.auctionsPerLoad);
        this.displayedAuctions = [...this.displayedAuctions, ...nextAuctions];
      }
    },
    mounted() {
      // При первой загрузке отображаем первые 8 аукционов
      this.loadMoreAuctions();
    }
  };