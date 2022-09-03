const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 const list = document.querySelector('#ingredients');

const lister = ingredients.map(el=>{
    const item=document.createElement("li");
    item.textContent = el;
    return item;
});
console.log(lister)
  list.append(...lister);