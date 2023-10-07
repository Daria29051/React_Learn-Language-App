class Load {  
  // static async loadWords() {
  //   try {
  //     const response = await fetch(
  //       "http://itgirlschool.justmakeit.ru/api/words"
  //     );
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  static async loadWords() {
    try {
      // this.loading = true;
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (response.ok) {
      // this.loading = false;
      const data = await response.json();
      // console.log(data);
      return data;
    } else {
        // this.loading = false;
        throw new Error("Ошибка загрузки данных");
    }
    } catch (error) {
      console.error(error);
    }
  }


}

export default Load;
