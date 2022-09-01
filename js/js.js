var item = document.querySelectorAll('.item');

item.forEach(element => {
console.log(`Сategory: ${element.firstElementChild.textContent}
Amount of elements: ${element.lastElementChild.children.length}`)
});

