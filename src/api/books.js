import axios from "axios";

export default{

  loadBooks: async () => {
    const response = await axios.get("/books.json")

    return response.data.data;
  },

  checkUnique: async (books, book) => {
    const found = books.find((item) => (
      item.title === book.title && item.id !== book.id
    ));

    if (found !== undefined) {
      throw new Error("This book title is already exist!")
    }

    return true;

  }

}

