const musicalAlbums = [
  {
    title: "The Party Album!",
    artist: "Vengaboys",
    year: 1999,
  },
  {
    title: "Fiesta Macarena",
    artist: "Los del Rio",
    year: 1996,
  },
  {
    title: "Egyptian",
    artist: "Piknik",
    year: 2001,
  },
];
const musicCollection = {
  musicalAlbums,
  [Symbol.iterator]() {
    return {
      currentIndex: 0,
      lastIndex: musicalAlbums.length - 1,
      next() {
        return this.currentIndex <= this.lastIndex
          ? { done: false, value: musicalAlbums[this.currentIndex++] }
          : { done: true };
      },
    };
  },
};
for (let album of musicalAlbums) {
  console.log(`${album.title} - ${album.artist}(${album.year})`);
}
