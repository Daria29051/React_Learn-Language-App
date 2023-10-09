class Edit {
  static async editWord( id, word) {
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(word),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Edit;
