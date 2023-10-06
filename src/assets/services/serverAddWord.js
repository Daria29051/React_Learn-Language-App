class Add {
  static async addWord(word) {
    try {
      await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });
    } catch (error) {
      console.error(error);
    }
  }
}
export default Add;
