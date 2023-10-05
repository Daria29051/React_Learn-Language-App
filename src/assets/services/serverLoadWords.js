class Load {
  static async loadWords() {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Load;
