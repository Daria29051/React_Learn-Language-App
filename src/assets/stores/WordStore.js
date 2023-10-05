import { action, observable } from "mobx";
import { makeObservable } from "mobx";
import Delete from "../services/serverDeleteWord";
import Load from "../services/serverLoadWords";

class WordStore {
  constructor() {
    makeObservable(this);
  }

  @observable words = [];

  @action loadWords = async () => {
    const data = await Load.loadWords();
    this.words = data;

  };

  @action deleteWord = async (id) => {
    await Delete.deleteWord(id)
    this.words = this.words.filter(word => word.id !== id)
}
}

export default WordStore;
