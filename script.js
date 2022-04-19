let book = [];

const givenName = document.querySelector('#name');
const givenAuthor = document.querySelector('#author');
const btnClass = document.querySelector('#Button');
const listOfName = document.querySelector('#listOfName');

function updateStorage() {
  localStorage.setItem('books', JSON.stringify(book));
}
function removeBook(id, c = true) {
  if (c === false) {
    return;
  }
  for (let i = 0; i < book.length; i += 1) {
    const bookid = i;
    if (book[bookid].id === Number(id)) {
      book.splice(bookid, 1);
      listOfName.removeChild(listOfName.querySelector(`[id='${id.toString()}']`));
      updateStorage();
      return;
    }
  }
}

function addBook(obj, old = false) {
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
      onclick="removeBook('${id}')">Remove</button><hr>`;
  listOfName.innerHTML += createAnHTMLList;
  updateStorage();
}
btnClass.addEventListener('click', () => {
  const bookid = new Date().getTime();
  book.push({ title: givenName.value, author: givenAuthor.value, id: bookid });
  if (givenAuthor.length !== 0 && givenName.length !== 0) {
    addBook(bookid);
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
    book = JSON.parse(localStorage.getItem('books'));
    book.forEach((obj) => {
      addBook(obj, true);
    });
  }
}
removeBook('As', false);
window.addEventListener('load', getStorage());
