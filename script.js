let book =[];

var givenName = document.querySelector('#name')
var givenAuthor = document.querySelector('#author')
var btnClass = document.querySelector('#Button')
var listOfName = document.querySelector('#listOfName')

btnClass.addEventListener('click', () => {
    let bookid= new Date().getTime();
   book.push({title:givenName.value, author:givenAuthor.value , id:bookid})
   if (givenAuthor.length != 0 && givenName.length != 0) {
    addBook(bookid);
    givenName.value = '';
    givenAuthor.value="";
   } else{
    givenName.classList.add('red')
    givenauthor.classList.add('red')
   }
});

function removeBook(id) {
    for(let bookid in book) {
       if(book[bookid].id == id) {
           book.splice( bookid,1);
           listOfName.removeChild(listOfName.querySelector("[id=\'" + id.toString() +"\']"));
           updateStorage();
           return;
       }
   }
}

function updateStorage() {
    localStorage.setItem("books" , JSON.stringify(book));
}

function getStorage() {
    if (localStorage['books'] === null) {
        updateStorage();
    } else {
        book = JSON.parse(localStorage.getItem('books'));
        book.forEach((obj) => {
            addBook(obj, old=true);
        });
    }
}

function addBook(obj, old=false) {
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
    var createAnHTMLList = `<li id="${id}"><span>${author}</span><br><span>${name}</span><br><button class="btn2"
    onclick="removeBook('${id}')">Remove</button><hr>`;
    listOfName.innerHTML += createAnHTMLList;
    updateStorage();
}

window.addEventListener('load', getStorage());
