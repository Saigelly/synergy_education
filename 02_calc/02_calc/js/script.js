
// Добавить слушатель клавиатуры
// придумать граматное округление, наверное надо задать длину символа и если он будет очень длинный после нуля тогда уже и округлять
// Сделать блок истории
//подумать как сделать чтобы при дабл клике по МРС не работал слушатель от одного клика опционально
//пофиксить баг прикотором при удаление с помощью delTheLastChar последнего одного символа не появляется 0

// Переменные
let MEMORY = 0;
const buttons = [
    { class: 'calc__key calc__key_color-red', id: 'key_mrc', text: 'MRC', onclick: 'readMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_m-subtract', text: 'M-', onclick: 'subtractFromMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_m-add', text: 'M+', onclick: 'addToMemory()' },
    { class: 'calc__key calc__key_color-red', id: 'key_del', text: 'del', onclick: 'delTheLastChar()' },

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
//Объекты из потока
const calcKeypad = document.querySelector('.calc__keypad');
const displayInput = document.querySelector('.calc__result');
const lastExpress = document.querySelector('.calc__term');


//Функции
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
const printToDisplay = (value) => {
    //console.log(event.target.textContent);
    if (displayInput.value != 0) {
        displayInput.value += value;
        return;
    }
    displayInput.value = value;
}
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
const readMemory = () => {
    if ('+-÷×%'.indexOf(displayInput.value.slice(-1), 0) !== -1)
        printToDisplay(MEMORY);
}
const subtractFromMemory = () => {
    MEMORY -= calculateAnswer(displayInput.value);
}
const addToMemory = () => {
    MEMORY += calculateAnswer(displayInput.value);
}
const delTheLastChar = () => {
    if (displayInput.value === '0') return;
    displayInput.value = displayInput.value.slice(0, -1);
}
const clearDisplay = () => {
    displayInput.value = '0';
}
const sqrtOfNumber = () => {
    lastExpress.textContent = `√(${displayInput.value})`;
    let resultInput = calculateAnswer(displayInput.value);
    clearDisplay();
    resultInput >= 0
        ? printToDisplay(Math.sqrt(resultInput).toFixed(4))
        : printToDisplay('Неверный ввод')
}
const displayAnswer = () => {
    lastExpress.textContent = displayInput.value;
    // console.log(formatInput(displayInput.value));
    let result = calculateAnswer(displayInput.value);
    clearDisplay();
    printToDisplay(result);
}
const switchSign = () => {
    lastExpress.textContent = `negate(${displayInput.value})`;
    let numOfDisplay = calculateAnswer(displayInput.value);
    clearDisplay();
    numOfDisplay > 0
        ? printToDisplay(`-${numOfDisplay}`)
        : printToDisplay(String(numOfDisplay).slice(1))
}
//Утилиты
const calculateAnswer = (exp) => {
    return eval(formatInput(exp))
}
const formatInput = (str) => {
    return str.split('').map((el) => {
        if (el === '×') return '*'
        if (el === '÷') return '/'
        return el
    }).join('');
}

//Слушатели
const keyMrc = document.querySelector('#key_mrc');
const keyC = document.querySelector('#key_c-ce');
keyMrc.addEventListener('dblclick', () => MEMORY = 0);
keyC.addEventListener('dblclick', () => {
    MEMORY = 0;
    lastExpress.textContent = '';
    displayInput.value = '0';
});
// window.addEventListener('keydown', (e) => {
//     // console.log(e.key);
//     if (' 1234567890'.indexOf(e.key)){
//         printToDisplay(e.key);
//     } 
// })