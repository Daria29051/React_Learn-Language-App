import { makeAutoObservable } from "mobx";

class WordStore {

words = [];

  constructor() {
    makeAutoObservable(this);
  }


  loadWords = async () => {
    const response = await fetch("/api/words");
    const data = await response.json();
    this.words = data;
  };
}



export default WordStore;


