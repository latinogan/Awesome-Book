const book =[
 { title: "lorem ipsum" ,
 author: "hector"
},
{ title: "lorem ipsum" ,
author: "hector"
},
];











var givenName = document.querySelector('#name')
var givenauthor = document.querySelector('#author')
var btnClass = document.querySelector('#Button')
var listOfName = document.querySelector('#listOfName')

btnClass.addEventListener('click', () => {
   book[0].author = givenauthor.value
   book[0].title = givenName.value
   if (book[0].author.length != 0 && book[0].title.length != 0) {
      var createAnHTMLList = `<li class=""><div>${book[0].author}</div><div>${book[0].title}</div><button
      onclick="removeNameFromTheList(this)">Remove</button>`
      listOfName.innerHTML += createAnHTMLList
      givenName.value = ''
      givenauthor.value=""
      givenName.classList.remove('red')
   } else{
      givenName.classList.add('red')
      givenauthor.classList.add('red')
   }
})
function removeNameFromTheList(e) {
   e.parentElement.remove()
}
function removeNameFromTheList(e) {
   e.parentElement.remove()
}