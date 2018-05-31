class Record{
    constructor(artist, year, album, genre){
        this.artist = artist;
        this.year = year;
        this.album = album;
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