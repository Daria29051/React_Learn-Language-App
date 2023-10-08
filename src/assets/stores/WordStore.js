import { action, observable } from "mobx";
import { makeObservable } from "mobx";
import Delete from "../services/serverDeleteWord";
import Load from "../services/serverLoadWords";
import Add from "../services/serverAddWord";
class WordStore {
  constructor() {
    makeObservable(this);
  }

  @observable words = [];
  @observable loading = false;

  @action checkResponse(resp) {
    if (resp.length === 0) {
      console.log("Object is empty");
      throw new Error("Нет слов для изучения.");
    } else {
      return resp;
    }
  }



  @action loadWords = async () => {
    this.loading = true;
    const data = await Load.loadWords();
    this.loading = false;
    this.checkResponse(data);
    this.words = data;

  };

  @action deleteWord = async (id) => {
    await Delete.deleteWord(id)
    this.words = this.words.filter(word => word.id !== id)
};


@action addWord = async (word) => {
   await Add.addWord(word);
   this.words.push(word);
}

}

export default WordStore;
