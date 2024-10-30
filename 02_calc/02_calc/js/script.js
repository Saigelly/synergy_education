
// придумать грамотное округление, наверное надо задать длину символа и если он будет очень длинный после нуля тогда уже и округлять
// Сделать блок истории
//подумать как сделать чтобы при дабл клике по МРС не работал слушатель от одного клика опционально
//проверку на последнйи символ переделать в функцию isOperation

//Починить баг при котором вылетает ошибка при расчете если в конце знак действия
//Починить баг при котором вылетает ошибка при записи в память если в инпуте "невернный ввод"

// Переменные
let MEMORY = 0;
const buttons = [
    { class: 'calc__key calc__key_blank', id: 'key_blank1', text: '', onclick: '' },
    { class: 'calc__key calc__key_blank', id: 'key_blank2', text: '', onclick: '' },
    { class: 'calc__key calc__key_blank', id: 'key_blank3', text: '', onclick: '' },
    { class: 'calc__key calc__key_color-red', id: 'key_del', text: 'del', onclick: 'delTheLastChar()' },

    { class: 'calc__key calc__key_color-red', id: 'key_mrc', text: 'MRC', onclick: 'readMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_m-subtract', text: 'M-', onclick: 'subtractFromLastMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_m-add', text: 'M+', onclick: 'addToLastMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_msave', text: 'MS', onclick: 'createMemoryItem()' },

    { class: 'calc__key calc__key_color-orange', id: 'key_c-ce', text: 'C/CE', onclick: 'clearDisplay()' },
    { class: 'calc__key calc__key_color-orange', id: 'key_sqrt', text: '√', onclick: 'sqrtOfNumber()' },
    { class: 'calc__key calc__key_color-orange', id: 'key_modulus', text: '%', onclick: 'printToDisplayOperations("%")' },
    { class: 'calc__key calc__key_color-orange', id: 'key_divided', text: '÷', onclick: 'printToDisplayOperations("÷")' },

    { class: 'calc__key', id: 'key_1', text: '1', onclick: 'printToDisplay("1")' },
    { class: 'calc__key', id: 'key_2', text: '2', onclick: 'printToDisplay("2")' },
    { class: 'calc__key', id: 'key_3', text: '3', onclick: 'printToDisplay("3")' },
    { class: 'calc__key calc__key_color-orange', id: 'key_mult', text: '×', onclick: 'printToDisplayOperations("×")' },

    { class: 'calc__key', id: 'key_4', text: '4', onclick: 'printToDisplay("4")' },
    { class: 'calc__key', id: 'key_5', text: '5', onclick: 'printToDisplay("5")' },
    { class: 'calc__key', id: 'key_6', text: '6', onclick: 'printToDisplay("6")' },
    { class: 'calc__key calc__key_color-orange', id: 'key_subtract', text: '-', onclick: 'printToDisplayOperations("-")' },

    { class: 'calc__key', id: 'key_7', text: '7', onclick: 'printToDisplay("7")' },
    { class: 'calc__key', id: 'key_8', text: '8', onclick: 'printToDisplay("8")' },
    { class: 'calc__key', id: 'key_9', text: '9', onclick: 'printToDisplay("9")' },
    { class: 'calc__key calc__key_color-orange', id: 'key_add', text: '+', onclick: 'printToDisplayOperations("+")' },

    { class: 'calc__key', id: 'key_plus-minus', text: '+/-', onclick: 'switchSign()' },
    { class: 'calc__key', id: 'key_zero', text: '0', onclick: 'printToDisplay("0")' },
    { class: 'calc__key', id: 'key_point', text: '.', onclick: 'printToDisplay(".")' },
    { class: 'calc__key calc__key_color-orange', id: 'key_equals', text: '=', onclick: 'displayAnswer()' },
];
let prevResult = '0'; //помагает сбросить экран, если после получения ответа нажимаем цифру
//Объекты из потока
const calcKeypad = document.querySelector('.calc__keypad');
const displayInput = document.querySelector('.calc__result');
const lastExpress = document.querySelector('.calc__term');

//Отрисовка клавиатуры
const createKeypad = () => {
    buttons.map((el) => {
        let newButton = document.createElement('button');
        newButton.className = el.class;
        newButton.setAttribute('id', el.id);
        newButton.setAttribute('onclick', el.onclick);

        newButton.textContent = el.text;
        // newButton.addEventListener('click', determinationTypeOfKey(event))
        calcKeypad.append(newButton);

    })
}
createKeypad();

//Функции
//выводит символ на экран
const printToDisplay = (value) => {
    //console.log(event.target.textContent);

    if (displayInput.value == prevResult) {
        lastExpress.textContent = ''
        displayInput.value = value;
        prevResult = '0'
        return;
    }
    if (displayInput.value != 0) {
        displayInput.value += value;
        prevResult = '0'
        return;
    }
    displayInput.value = value;

}
//выводит знак операции на экран
const printToDisplayOperations = (operation) => {
    //если последний символ допустимый, то выводим операцию
    if ('+-÷×%'.indexOf(displayInput.value.slice(-1), 0) === -1) {
        displayInput.value += operation;
        return;
    }
    //Если последний символ операция, то заменяем его на новую операцию
    delTheLastChar();
    printToDisplay(operation);
}
//Удаление последнего символа
const delTheLastChar = () => {
    if (displayInput.value === '0') return;
    if (displayInput.value.length === 1) return displayInput.value = '0';
    displayInput.value = displayInput.value.slice(0, -1);
}
// Очищение экрана
const clearDisplay = () => {
    displayInput.value = '0';
}
//Считает квадратный корень
const sqrtOfNumber = () => {
    // debugger;
    let exp = `√(${displayInput.value})`

    let resultInput = calculateAnswer(displayInput.value);
    clearDisplay();

    resultInput >= 0
        ? printToDisplay(formatAnswer(Math.sqrt(resultInput)))
        : printToDisplay('Неверный ввод')

    lastExpress.textContent = exp;
    createHistoryItem(exp, String(resultInput));
    prevResult = displayInput.value;
}
//Выводит ответ на экран
const displayAnswer = () => {
    // debugger;
    let exp = displayInput.value;

    // console.log(formatInput(displayInput.value));
    let result = calculateAnswer(displayInput.value);
    clearDisplay();

    prevResult = result; // потом prevResult надобудет поменять на ссылку в блоке истории с предыдщем выражением
    printToDisplay(formatAnswer(result));
    lastExpress.textContent = exp;
    createHistoryItem(exp, String(result));
}
//Клавиша +/- меняет знак выражения в инпуте
const switchSign = () => {
    lastExpress.textContent = `negate(${displayInput.value})`;
    let numOfDisplay = calculateAnswer(displayInput.value);
    clearDisplay();
    numOfDisplay > 0
        ? printToDisplay(`-${numOfDisplay}`)
        : printToDisplay(String(numOfDisplay).slice(1))
}

//Утилиты
//Считает выражение
const calculateAnswer = (exp) => {
    return eval(formatInput(exp))
}
//Меняет красивые знаки умножить и делить на нужные для расчета
const formatInput = (inputValue) => {
    return inputValue.split('').map((el) => {
        if (el === '×') return '*'
        if (el === '÷') return '/'
        return el
    }).join('');
}
// округляет не целые числа и делает чтобы большие числа не вылазили за экран
const formatAnswer = (answer) => {
    if (isFloat(answer)) {
        return answer.toFixed(2);
    }

    // И надо подумать что делать с длинной инпута
    // Чтобы числа не вылазили за экран
    return answer;
}
//Проверка на целое число
const isFloat = (num) => {
    return Number(num) === num && num % 1 !== 0;
}

//Считывание с клавиатуры
window.addEventListener('keydown', (e) => {
    //  console.log(e.key);
    if ('1234567890.'.indexOf(e.key) !== -1) {
        printToDisplay(e.key);
        return;
    }
    if (('+-/*%').indexOf(e.key) !== -1) {
        printToDisplayOperations(e.key);
        return;
    }
    if (e.key == 'Backspace') {
        delTheLastChar();
        return;
    }
    if (e.key === 'Enter') {
        displayAnswer();
        return;
    }
    if (e.key === 'Delete') {
        clearDisplay();
        return;
    }

});



// блок дополнительных инструментов`
//Переменные
let historyItems = [];
let memoryItems = [];

//Блоки из потока
const historyList = document.querySelector('#history-list');
const btnClearHistory = document.querySelector('#clear-history');
const labelHistory = document.querySelector('[for="history"]');
const tabHistory = document.querySelector('.history');

const memoryList = document.querySelector('#memory-list');
const btnClearMemory = document.querySelector('#clear-memory');
const labelMemory = document.querySelector('[for="memory"]');
const tabMemory = document.querySelector('.memory');
const keyMrc = document.querySelector('#key_mrc');
const keyC = document.querySelector('#key_c-ce');

//Функции
// Смена дополнительного инструмента
const switchTab = () => {
    labelHistory.classList.toggle('sub-tools__label_active');
    labelMemory.classList.toggle('sub-tools__label_active');
    tabHistory.classList.toggle('_show');
    tabMemory.classList.toggle('_show');
}
//Создать элемент в блок истории
const createHistoryItem = (exp, result) => {
    let objItem = {
        id: historyItems.length,
        exp,
        result
    }
    historyItems.push(objItem);

    console.log('exp ', objItem.exp);
    console.log('result ', objItem.result);

    elLi = document.createElement('li');
    elTitle = document.createElement('h3');
    elP = document.createElement('p');

    elLi.className = 'history__item item';
    elTitle.className = 'item__express';
    elP.className = 'item__result';

    elLi.setAttribute('id', objItem.id);
    // if (exp === '') exp = result;
    elTitle.textContent = `${exp} =`

    elP.textContent = result;

    historyList.prepend(elLi);
    elLi.append(elTitle);
    elLi.append(elP);

}
//Вывод элемента истории на дисплей
const displayHistoryItem = (e) => {
    let clickItem = e.target.closest('.item');
    // console.log(clickItem)
    data = historyItems.find((item) => item.id == clickItem.id);
    // console.log (data);
    displayInput.value = data.result;
    lastExpress.textContent = data.exp;
    prevResult = data.result;
}
//Очистка истории
const clearHistory = () => {
    historyList.innerHTML = '';
    historyItems = [];
}
//Создание новой ячейки памяти
const createMemoryItem = () => {
    // <h3 class="item__title">25</h3>
    // <div class="item__buttons">
    //     <button class="item__btn" onclick = "clearCurrentMemory()">MC</button>
    //     <button class="item__btn onclick = "addToCurrentMemory()">M+</button>
    //     <button class="item__btn onclick = "subtractFromCurrentMemory">M-</button>
    // </div>
    let objItem = {
        id: `memory-${memoryItems.length}`,
        num: calculateAnswer(displayInput.value)
    }
    memoryItems.push(objItem);

    // console.log('id ', objItem.id);
    // console.log('num ', objItem.num);

    const elLi = document.createElement('li');
    const elTitle = document.createElement('h3');
    const elDiv = document.createElement('div');
    const elButton = document.createElement('button')

    elLi.className = 'memory__item item';
    elTitle.className = 'item__title';
    elDiv.className = 'item__buttons';
    elButton.className = 'item__btn';

    const btnClearMemory = elButton.cloneNode();
    const btnAddMemory = elButton.cloneNode();
    const btnSubtractMemory = elButton.cloneNode();
   

    elLi.setAttribute('id', objItem.id);
    elTitle.setAttribute('id', `${objItem.id}-num`);

    // if (exp === '') exp = result;
    elTitle.textContent = objItem.num;
    btnClearMemory.textContent = 'MC';
    btnAddMemory.textContent = 'M+';
    btnSubtractMemory.textContent = 'M-';

    memoryList.prepend(elLi);
    elLi.append(elTitle);
    elLi.append(elDiv);
    elDiv.append(btnClearMemory);
    elDiv.append(btnAddMemory);
    elDiv.append(btnSubtractMemory);

    btnClearMemory.onclick = deleteCurrentMemory;
    btnAddMemory.onclick = addToCurrentMemory;
    btnSubtractMemory.onclick = subtractFromCurrentMemory;
}
//Прочитать число с выбранной памяти
const readCurrentMemory = (e) => {
    let clickItem = e.target.closest('.item');
    // console.log(clickItem)
    data = memoryItems.find((item) => item.id == clickItem.id);
    // console.log (data);
    if('+-÷×%'.indexOf(displayInput.value.slice(-1), 0) === -1){
        displayInput.value = data.num;
        prevResult = data.num;
        return; 
    }
    printToDisplay(data.num);
}
//Прибавить к выбранной памяти результат выражения с дисплея
const addToCurrentMemory = (e) => {
    e.stopPropagation();
    const memoryItemEL = e.target.closest('.item');
    const memoryItemObj = memoryItems.find((item) => item.id === memoryItemEL.id);
    memoryItemObj.num = Number(memoryItemObj.num) + calculateAnswer(displayInput.value);
    memoryItemEL.firstElementChild.textContent = memoryItemObj.num;
}
//отнять от выбранной памяти результат выражения с дисплея
const subtractFromCurrentMemory = (e) => {
    e.stopPropagation();
    const memoryItemEL = e.target.closest('.item');
    const memoryItemObj = memoryItems.find((item) => item.id === memoryItemEL.id);
    memoryItemObj.num = Number(memoryItemObj.num) - calculateAnswer(displayInput.value);
    memoryItemEL.firstElementChild.textContent = memoryItemObj.num;
}
//Удалить выбранную память
const deleteCurrentMemory = (e) => {
    e.stopPropagation();
    const memoryItem = e.target.closest('.item');
    memoryItems.splice(memoryItems.findIndex((item => item.id === memoryItem.id)), 1);
    memoryItem.remove();
}
//Вывести значение последней добавленной памяти на экран
const readMemory = () => {
    if ('+-÷×%'.indexOf(displayInput.value.slice(-1), 0) !== -1) {
        printToDisplay(memoryItems[memoryItems.length - 1].num);
        return
    }
    clearDisplay();
    printToDisplay(memoryItems[memoryItems.length - 1].num);

}
//отнять от значения последней добавленной памяти результат выражения на экране
const subtractFromLastMemory = () => {
    if(memoryItems.length){
        const lastMemory = getLastMemoryObj();
        lastMemory.num = Number(lastMemory.num) - calculateAnswer(displayInput.value);
        memoryList.querySelector(`#${lastMemory.id}-num`).textContent = lastMemory.num;
    }
    return;
}
//тнять к значению последней добавленной памяти результат выражения на экране
const addToLastMemory = () => {
    if(memoryItems.length){
        const lastMemory = getLastMemoryObj();
        lastMemory.num = Number(lastMemory.num) + calculateAnswer(displayInput.value);
        memoryList.querySelector(`#${lastMemory.id}-num`).textContent = lastMemory.num;
    }
    return;
}
//Очистить всю память
const clearMemoryList = () => {
    memoryList.innerHTML = '';
    memoryItems = [];
}

//Утилиты
//возвращает объект последней добавленной памяти из массива
const getLastMemoryObj = () =>{
    return memoryItems[memoryItems.length - 1];
}

//Слушатели
memoryList.addEventListener('click', readCurrentMemory);
historyList.addEventListener('click', displayHistoryItem);
btnClearHistory.addEventListener('click', clearHistory);
keyMrc.addEventListener('dblclick', clearMemoryList);
btnClearMemory.addEventListener('click', clearMemoryList);
keyC.addEventListener('dblclick', () => {
    clearMemoryList();
    lastExpress.textContent = '';
    displayInput.value = '0';
});
document.querySelectorAll('input[type="radio"][name="sub-tools"]').forEach(radio => {
    radio.addEventListener('change', switchTab);
});