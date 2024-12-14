const { nanoid } = require('nanoid');
const { books } = require('./bookshelf');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku, Mohon isi nama buku' 
        });
        response.code(400);
        return response;
    }
    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku, readPage tidak boleh lebih besar dari pageCount' 
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = readPage === pageCount;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
    };

    books.push(newBook);

      const response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        }
      });
      response.code(201);
      return response;
    };
  
  
const getAllBooksHandler = (request, h) => {
    const { name, finished, reading } = request.query;

    let filteredBooks = books

    if (name) {
        filteredBooks = filteredBooks.filter(book => book.name.toLowerCase().include(name.toLowerCase()));
    };
    if (reading !== undefined) {
        filteredBooks = filteredBooks.filter(book => book.reading === (reading === '1'))
    };
    if (finished !== undefined) {
        filteredBooks = filteredBooks.filter(book => book.finished === (finished === '1'))
    };

    const listBook = filteredBooks.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher 
    }))

    const response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
            books: listBook,
        },
    });
    response.code(201);
    return response;
}

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const book = books.find(b => b.id === bookId);

    if (book) {
        const response = h.response({
            status: 'success',
            data: {
                book,
            },
        });
        response.code(200);
        return response;
    };

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan'
    });
    response.code(404);
    return response;
}

const updateBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
    const updateAt = new Date().toISOString();

    const index = books.findIndex((book) => book.id === bookId);

    if(index === -1){
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku, Id tidak ditemukan'
        });
        response.code(400);
        return response
    }

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku, Mohon isi nama buku' 
        });
        response.code(400);
        return response;
    }
    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku, readpage tidak boleh lebih besar dari pageCount' 
        });
        response.code(400);
        return response;
    }

    books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        updateAt
    };

    const response = h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui'
    });
    response.code(200);
    return response;
}

const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookByIdHandler,
    deleteBookByIdHandler,
}