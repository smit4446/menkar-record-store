class Record{
    constructor(artist, year, albumName, genre){
        this.artist = artist;
        this.year = year;
        this.albumName = albumName;
        this.genre = genre;
    }
    addGenre(string) {
        if(this.genre == null){
            this.genre = [];
        }
    this.genre.push(string);
    }
}

module.exports = Record;