//Объекты из потока
const calcKeypad = document.querySelector('.calc__keypad')

// Переменные
const MEMORY = 0;
const buttons = [
    {class: 'calc__key calc__key_color-red', id: 'key_mrc', text: 'MRC', onclick: 'readMemory()'},
    {class: 'calc__key calc__key_color-red', id: 'key_m-subtract', text: 'M-', onclick: 'subtractFromMemory()'},
    {class: 'calc__key calc__key_color-red', id: 'key_m-add', text: 'M+', onclick: 'addToMemory()'},
    {class: 'calc__key calc__key_color-red', id: 'key_del', text: 'del', onclick: 'delTheLastChar()'},

    {class: 'calc__key calc__key_color-orange', id: 'key_c-ce', text: 'C/CE', onclick: 'clearDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_sqrt', text: '√', onclick: 'sqrtOfNumber()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_modulus', text: '%', onclick: 'printToDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_divided', text: '÷', onclick: 'printToDisplay()'},

    {class: 'calc__key', id: 'key_1', text: '1', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_2', text: '2', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_3', text: '3', onclick: 'printToDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_mult', text: '×', onclick: 'printToDisplay()'},

    {class: 'calc__key', id: 'key_4', text: '4', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_5', text: '5', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_6', text: '6', onclick: 'printToDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_subtract', text: '-', onclick: 'printToDisplay()'},

    {class: 'calc__key', id: 'key_7', text: '7', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_8', text: '8', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_9', text: '9', onclick: 'printToDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_add', text: '+', onclick: 'printToDisplay()'},

    {class: 'calc__key', id: 'key_plus-minus', text: '+/-', onclick: ''},
    {class: 'calc__key', id: 'key_zero', text: '0', onclick: 'printToDisplay()'},
    {class: 'calc__key', id: 'key_point', text: '.', onclick: 'printToDisplay()'},
    {class: 'calc__key calc__key_color-orange', id: 'key_equals', text: '=', onclick: 'calculateAnswer()'},
] ;

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
const printToDisplay = () =>{
    
}

const readMemory = () => {

}
const subtractFromMemory = () => {

}
const addToMemory = () => {

}
const delTheLastChar = () => {

}
const clearDisplay = () => {

}
const sqrtOfNumber = () => {

}
const calculateAnswer = () => {

}
//Утлиты для обработчиков
const determinationTypeOfKey = (event) =>{
    //определяем что за клавиша
    //если цифра или базовые математические операторы, то пишем их на экране
}

