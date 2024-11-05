// console.log('Привет мир!');
// console.log('Привет' + 'мир!');
// let hello = 'Привет ';
// let world = 'мир!';
// let concat = hello + world;


// let teslaStockPrice = 758; 
// let newPrice = false;

// if ((teslaStockPrice === 756 + 2) && newPrice) { 
// 	console.log('Акцию пора продавать'); 
// } else if (!newPrice) { 
// 	console.log('Пока держим, пусть ещё подрастёт'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Как дёшево, надо ещё докупить'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Неплохо, подожду еще'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Ладно, все еще жду'); 
// } else { 
// 	console.log('Беру на все'); 
// } 



// if ((teslaStockPrice === 756 + 50) && !newPrice) { 
// 	console.log('Акцию пора продавать'); 
// } else if (newPrice) { 
// 	console.log('Пока держим, пусть ещё подрастёт'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Как дёшево, надо ещё докупить'); 
// } else if ((teslaStockPrice === 756 + 50) || !newPrice) { 
// 	console.log('Неплохо, подожду еще'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Ладно, все еще жду'); 
// } else { 
// 	console.log('Беру на все'); 
// } 

// let teslaStockPrice = 758; 
// let newPrice = false;


// if ((teslaStockPrice === 756 + 50) && newPrice) { 
// 	console.log('Акцию пора продавать'); 
// } else if (newPrice) { 
// 	console.log('Пока держим, пусть ещё подрастёт'); 
// } else if ((teslaStockPrice * 2) < 500) { 
// 	console.log('Как дёшево, надо ещё докупить'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Неплохо, подожду еще'); 
// } else if (teslaStockPrice < 500) { 
// 	console.log('Ладно, все еще жду'); 
// } else { 
// 	console.log('Беру на все'); 
// } 



// console.log(`Приветствую тебя, ${user[0]} ${user[1] } ${user[2] }! 
//     Из какого ты города? Ответ: ${user[3]}`);
// console.log('Длина массива:', user.length);

// let number = 20;
// while (number < 20) {
//     console.log('while', number);
//     number = number + 2;
// }

// do {
//     console.log('do while', number);
//     number = number + 2;
// } while (number < 20);

// let user = ['Прохоров', 'Андрей', 29, 'Москва', true, 
//     'Раменское', 10, 'Челябинск', false, 'Новосиб', 10];

// let i = 0;

// let type = 'number';

// while (user[i] !== undefined) {
//     if (typeof user[i] === type) {
//         console.log(user[i]);
//     }
//     i = i + 1;
// } 



// let myObject = { 
//     stringKey: 'значение', 
//     numberKey: 4, 
//     booleanKey: true,
//     function: function consoleKitten() {
//         console.log('kitten!'); 
//     }
//  }
 
//  let user = ['Прохоров', 'Андрей', 29, 'Москва', true];

//  let userObject = {
//     surname: 'Прохоров',
//     name: 'Андрей',
//     age: 29,
//     city: 'Москва',
//     isMale: true
//  }

//  console.log(user[1]);
//  console.log(userObject.name);




//  function keepScore(ours, theirs, them) { 
//         if (ours > theirs) { 
//         console.log('Выиграли! 😃 Счёт ' + ours + ':' + theirs); 
//         } else if (ours === theirs) { 
//             console.log('Ничья. 😐 Счёт ' + ours + ':' + theirs); 
//         } else { 
//             console.log('Продули... 😢 Счёт ' + ours + ':' + theirs); 
//         } 
//     } 

// keepScore(10, 8);
// keepScore(1);
// keepScore(5, 2, 4);
    


// let buttonLearn = document.querySelector('.buttons-info__btn');
// let modalWindow = document.querySelector('.modal-window');

// buttonLearn.addEventListener('click', function() {
//     modalWindow.classList.toggle('display-none')
// })


// const appleWatch = document.querySelector('.apple-watch');
// console.log(appleWatch);
// appleWatch.insertAdjacentHTML('beforebegin', '<div class="buttons-info"><button class="buttons-info__btn buttons-info__btn_solid">Learn more</button><button class="buttons-info__btn buttons-info__btn_trans">Buy</button></div>');

//TASK MANAGER
const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-text');
const buttonAdd = document.querySelector('.button-add');
const buttonDelete = document.querySelector('.button-delete');

function addItem() {
    const listItem = document.createElement('li'); 
    listItem.textContent = input.value;
    listItem.className = 'li-item';
    if (input.value === '') {
        alert('Поле пустое')
    } else {
        list.append(listItem);
        input.value = ''
    }
}

function deleteItem() {
    const listContainer = list.querySelector('.li-item')
    const newItem = listContainer.closest('.li-item');
    newItem.remove();
}

buttonAdd.addEventListener('click', addItem);
buttonDelete.addEventListener('click', deleteItem);


// Отрисовка списка пункта вместе с кнопкой и дальнешйее удаление всего списка, опять же вместе с кнопкой

const deleteNewButton = document.querySelector('.todo-item-button');
deleteNewButton.addEventListener('click', function() {
    const listNew = deleteNewButton.closest('.todo-item');
    listNew.remove();
})


// ----------------------- Добавление с помощью тега template
// const userTemplate = document.querySelector('#user').content;
// const userOnline = document.querySelector('.user-online');

// const userElem = userTemplate.querySelector('.user').cloneNode(true);
// userElem.querySelector('.user__name').textContent = 'Новый метод';

// userOnline.append(userElem);

// -------------------------------- Переделываем task manager под template

const managerTemplate = document.querySelector('#template-list').content;
const divContainer = document.querySelector('.task-manager');

const elementManager = managerTemplate.querySelector('.template-container').cloneNode(true);

const buttonAddTemplate = elementManager.querySelector('.template-button-add');
// const listItemTemplate = elementManager.querySelector('.template-li-item');
const inputTemplate = elementManager.querySelector('.template-input-text');

function addItemTemplate() {
    const listItemTemplate = elementManager.querySelector('.template-li-item');
    listItemTemplate.textContent = inputTemplate.value;
}


buttonAddTemplate.textContent = 'Добавить';
buttonAddTemplate.addEventListener('click', addItemTemplate);


divContainer.append(elementManager);


// ---------------------------------- Пример работы forEach

// const array = ['Январь', 'Февраль', 'Март', 'Апрель'];
// for(let i = 0; i < array.length; i++) {
//     console.log('for', array[i]);
// }

// array.forEach((value, index) => {
//     console.log(value)
// });

// array.map((value, index) => {
//     console.log('map', value)
//     return value
// });


// ------------------ REST параметры

function consoleDogs(firstDog, ...otherDogs) { 
	console.log(`Первый: ${firstDog}`); 
    otherDogs.forEach((value) => console.log(value))
}

consoleDogs('Спаниель', 'Овчарка');


// ---------------------------------------------
const user = {
    name: 'Дмитрий',
    age: 30,
    city: 'Москва'
}

// console.log(user.name, user.age, user.city);

Object.keys(user).forEach((value) => console.log(user[value]));

