//обращение к head через js
//console.log(document.head);

//получение всех элементов html
//console.log(document.documentElement);

//получение всех элементов, которые явл. детьми для body
//console.log(document.body.childNodes);

//получение первого ребенка для body
//console.log(document.body.firstChild);

//
//console.log(document.body.firstElementChild);

//получение последнего ребенка для body
//console.log(document.body.lastChild);

//получение родителя по id
//console.log(document.querySelector('#current').parentNode);


//console.log(document.querySelector('#current').parentElement);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);


for (let node of document.body.childNodes) {
   if (node.nodeName == '#text') {
      continue;
   }

   console.log(node)
}