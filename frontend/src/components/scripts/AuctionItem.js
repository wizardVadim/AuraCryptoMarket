export default {
    name: 'AuctionItem',
    props: {
      stickerImage: String,
      authorImage: String,
      authorName: String,
      stickerName: String,
      price: Number,
      timeLeft: Object, // { hours: Number, minutes: Number, seconds: Number }
    },
  };