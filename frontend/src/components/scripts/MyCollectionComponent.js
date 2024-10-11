export default {
    name: 'MyAuctionsComponent',
    data() {
      return {
        collections: [
          // Пример данных. Подставь свои.
          { id: 1, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 2, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 3, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 4, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 5, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 6, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 7, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 8, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 9, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 10, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
          { id: 11, name: 'e-e sticker 11', imagePath: require('@/assets/images/main-page/160x160Sticker.png'), description: 'Стикер обезьяны' },
        ],
        displayedStickers: [], // Аукционы, которые отображаются на странице
        stickersPerLoad: 8, // Количество аукционов для загрузки за раз (две строки)
      };
    },
    methods: {
      // Переход к созданию нового аукциона
      uploadSticker() {
        this.$router.push('/new-sticker');
      },
  
      // Загружаем больше аукционов при клике на кнопку "Еще"
      loadMoreStickers() {
        const nextCollections = this.collections.slice(this.displayedStickers.length, this.displayedStickers.length + this.stickersPerLoad);
        this.displayedStickers = [...this.displayedStickers, ...nextCollections];
      }
    },
    mounted() {
      // При первой загрузке отображаем первые 8 аукционов
      this.loadMoreStickers();
    }
  };