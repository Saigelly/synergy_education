
// придумать грамотное округление, наверное надо задать длину символа и если он будет очень длинный после нуля тогда уже и округлять
// Сделать блок истории
//подумать как сделать чтобы при дабл клике по МРС не работал слушатель от одного клика опционально


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
    if (displayInput.value != 0) {
        displayInput.value += value;
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
//Выводит значение из памяти на экран
const readMemory = () => {
    if ('+-÷×%'.indexOf(displayInput.value.slice(-1), 0) !== -1)
        printToDisplay(MEMORY);
}
//отнимает от значения в памяти результат выражения на экран
const subtractFromMemory = () => {
    MEMORY -= calculateAnswer(displayInput.value);
}
//добавляет результат выражения на экране к значению в памяти
const addToMemory = () => {
    MEMORY += calculateAnswer(displayInput.value);
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
    lastExpress.textContent = `√(${displayInput.value})`;
    let resultInput = calculateAnswer(displayInput.value);
    clearDisplay();
    resultInput >= 0
        ? printToDisplay(formatAnswer(Math.sqrt(resultInput)))
        : printToDisplay('Неверный ввод')
}
//Выводит ответ на экран
const displayAnswer = () => {
    lastExpress.textContent = displayInput.value;
    // console.log(formatInput(displayInput.value));
    let result = calculateAnswer(displayInput.value);
    clearDisplay();
    printToDisplay(formatAnswer(result));
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
    if(isFloat(answer)){
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
//Слушатели
const keyMrc = document.querySelector('#key_mrc');
const keyC = document.querySelector('#key_c-ce');
keyMrc.addEventListener('dblclick', () => MEMORY = 0);
keyC.addEventListener('dblclick', () => {
    MEMORY = 0;
    lastExpress.textContent = '';
    displayInput.value = '0';
});
//Считывание с клавиатуры
window.addEventListener('keydown', (e) => {
    //  console.log(e.key);
    if ('1234567890.'.indexOf(e.key) !== -1){
        printToDisplay(e.key);
        return;
    } 
    if (('+-/*%').indexOf(e.key) !== -1){
        printToDisplayOperations(e.key);
        return;
    }
    if (e.key == 'Backspace'){
        delTheLastChar();
        return;
    }
    if (e.key === 'Enter'){
        displayAnswer();
        return;
    }
    if (e.key === 'Delete'){
        clearDisplay();
        return;
    }

});
