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


// static async loadWords() {
//     try {
//       this.loading = true;
//       const response = await fetch(
//         "http://itgirlschool.justmakeit.ru/api/words"
//       );
//       if (response.ok) {
//       this.loading = false;
//       const data = await response.json();
//       checkResponse(data);
//       console.log(data);
//     } else {
//         this.loading = false;
//         throw new Error("Ошибка загрузки данных");
//     }
//     } catch (error) {
//       console.error(error);
//     }
//   }