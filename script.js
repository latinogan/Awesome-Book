const givenName = document.querySelector('#name');
const givenAuthor = document.querySelector('#author');
const btnClass = document.querySelector('#Button');
const listOfName = document.querySelector('#listOfName');

function updateStorage() {
  localStorage.setItem('books', JSON.stringify(booklist.book));
}

class BookList {
  constructor (book) {
    this.book = book;
  }
  
  removeBook(id, c = true) {
    if (c === false) {
      return;
    }
    for (let i = 0; i < this.book.length; i += 1) {
      const bookid = i;
      if (this.book[bookid].id === Number(id)) {
        this.book.splice(bookid, 1);
        listOfName.removeChild(listOfName.querySelector(`[id='${id.toString()}']`));
        updateStorage();
        return;
      }
    }
  }
  
  addBook(obj, old = false) {
    let author;
    let name;
    let id;
    if (old === true) {
      author = obj.author;
      name = obj.title;
      id = obj.id;
    } else {
      author = givenAuthor.value;
      name = givenName.value;
      id = obj;
    }
    const createAnHTMLList = `<li id="${id}"><span>${author}</span><br><span>${name}</span><br><button class="btn2"
        onclick="booklist.removeBook('${id}')">Remove</button><hr>`;
    listOfName.innerHTML += createAnHTMLList;
    updateStorage();
  }
}

btnClass.addEventListener('click', () => {
  const bookid = new Date().getTime();
  booklist.book.push({ title: givenName.value, author: givenAuthor.value, id: bookid });
  if (givenAuthor.length !== 0 && givenName.length !== 0) {
    booklist.addBook(bookid);
    givenName.value = '';
    givenAuthor.value = '';
  } else {
    givenName.classList.add('red');
    givenAuthor.classList.add('red');
  }
});
function getStorage() {
  if (localStorage.length === 0) {
    updateStorage();
  } else {
    booklist.book = JSON.parse(localStorage.getItem('books'));
    booklist.book.forEach((obj) => {
      booklist.addBook(obj, true);
    });
  }
}
let booklist = new BookList([]);;
// removeBook('As', false);
window.addEventListener('load', getStorage());

