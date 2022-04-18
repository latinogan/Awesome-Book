const book =[
 { title: "lorem ipsum" ,
 author: "hector"
},
{ title: "lorem ipsum" ,
author: "hector"
},
];
var givenName = document.querySelector('#name');
var givenauthor = document.querySelector('#author');
var btnClass = document.querySelector('#Button');
var listOfName = document.querySelector('#listOfName');
// Preserve data
//Storage availability
function storageAvailable(type) {
   let storage;
   try {
     storage = window[type];
     const x = '__storage_test__';
     storage.setItem(x, x);
     storage.removeItem(x);
     return true;
   } catch (e) {
     return e instanceof DOMException && (
     // everything except Firefox
       e.code === 22
           // Firefox
           || e.code === 1014
           // test name field too, because code might not be present
           // everything except Firefox
           || e.name === 'QuotaExceededError'
           // Firefox
           || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
           // acknowledge QuotaExceededError only if there's something already stored
           && (storage && storage.length !== 0);
   }
 }
btnClass.addEventListener('click', () => {
   // book[0].author = givenauthor.value;
   // book[0].title = givenName.value;
   if (givenName.value.length != 0 && givenauthor.value.length != 0) {
      if (storageAvailable('localStorage')) { // Check if storage is available
         localStorage.setItem('title', givenName.value);
         localStorage.setItem('author', givenauthor.value);
      }
      var createAnHTMLList = `<li class=""><div>${localStorage.getItem('title')}</div><div>${localStorage.getItem('author')}</div><button
      onclick="removeNameFromTheList(this)">Remove</button>`;
      listOfName.innerHTML += createAnHTMLList;
      givenName.value = '';
      givenauthor.value="";
   } 
})
function removeNameFromTheList(e) {
   e.parentElement.remove();
}
function removeNameFromTheList(e) {
   e.parentElement.remove();
}

if (storageAvailable('localStorage')) { // Check if storage is abailable
  if (!(localStorage.length === 0)) {
  	var createAnHTMLList = `<li class=""><div>${localStorage.getItem('title')}</div><div>${localStorage.getItem('author')}</div><button
    onclick="removeNameFromTheList(this)">Remove</button>`;
    listOfName.innerHTML += createAnHTMLList;
  }
}
 
