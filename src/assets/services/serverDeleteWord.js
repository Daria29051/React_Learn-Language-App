class Delete {
    static async deleteWord(id) {
        try {
            await fetch (`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, 
            {method: 'POST'});
        }
        catch(error) {
            console.error(error)
        }
    }
}

export default Delete;