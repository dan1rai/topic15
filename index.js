class BaseGame {
    constructor(title) {
      this.Title = title;
      this.minMaxPlayers = [];
      this.age = 0;
      this.rating = [];
      this.genre = [];
    }
  
    getFullInfo() {
      return `Title: ${this.Title}\nPlayers: ${this.minMaxPlayers.join('-')}\nAge: ${this.age}+\nRating: ${this.countRaiting()}\nGenres: ${this.genre.join(', ')}`;
    }
  
    setMyRaiting(rating) {
      this.rating.push(rating);
    }
  
    fillDate() {
      const min = parseInt(prompt('Min players:'));
      const max = parseInt(prompt('Max players:'));
      this.minMaxPlayers = [min, max];
      this.age = parseInt(prompt('Min age:'));
    }
  
    addGenre(genre) {
      this.genre.push(genre);
    }
  
    countRaiting() {
      return this.rating.length ? 
        (this.rating.reduce((a, b) => a + b, 0) / this.rating.length).toFixed(2) : 0;
    }
  }
  
  class Expansions extends BaseGame {
    constructor(title, baseGameTitle) {
      super(title);
      this.content = '';
      this.baseGameTitle = baseGameTitle;
    }
  
    getBaseGameName() {
      return this.baseGameTitle;
    }
  }
  
  class Collection {
    constructor(name) {
      this.collectionName = name;
      this.gameList = [];
    }
  
    addItem(item) {
      this.gameList.push(item);
    }
  
    isInCollection(item) {
      return this.gameList.includes(item);
    }
  
    countList() {
      return this.gameList.length;
    }
  
    countBaseGames() {
      return this.gameList.filter(game => game instanceof BaseGame && !(game instanceof Expansions)).length;
    }
  
    countExpansions() {
      return this.gameList.filter(game => game instanceof Expansions).length;
    }
  }