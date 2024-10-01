export default {
    name: 'NewStickersComponent',
    data() {
        return {
          stickers: [], // Здесь будут храниться все стикеры
          currentPage: 1,
          stickersPerPage: 4, // Количество стикеров на одной странице
        };
      },
      computed: {
        // Вычисляем количество страниц
        totalPages() {
          return Math.ceil(this.stickers.length / this.stickersPerPage);
        },
        // Получаем стикеры для текущей страницы
        paginatedStickers() {
          const start = (this.currentPage - 1) * this.stickersPerPage;
          const end = start + this.stickersPerPage;
          return this.stickers.slice(start, end);
        },
      },
      mounted() {
        // Подгружаем стикеры при монтировании компонента
        this.loadStickers();
      },
      methods: {
        loadStickers() {
          // Импортируем изображения
          const stickerImage = require('@/assets/images/main-page/300x300StickerGreen.png');

          // Мокаем данные о стикерах, но можно сюда добавить API-запрос
          this.stickers = [
            {
              image: stickerImage,
              altText: 'Стикер 1',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 2',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 3',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 4',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 5',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 6',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 7',
              href: '#',
            },
            {
              image: stickerImage,
              altText: 'Стикер 8',
              href: '#',
            },
          ];
        },
      },
    };