// Создание калькулятора при помощи конструктора
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += Number(prompt("Введите значение:"))
    }
};

// Случайное целое число от min до max
function randomInteger(min, max) {
    let num = min + Math.floor(Math.random() * max);
    return num;
}

// Случайное число от min до max
function random(min, max) {
    let num = min + Math.floor(Math.random() * max) + Math.random();
    return num;
}

/* 
Ввод числового значения
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/
function readNumber() {
    let num = +prompt("Введите число:", "");
    if (typeof num !== 'number') {
        readNumber();
    }
};

// Сделать первый символ заглавным
function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

/*
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'mail' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
*/
function checkSpam(str) {
    str = str.toLowerCase()
    if (str.includes('mail') || str.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

/*
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
*/  
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, 19) + "…";
        return str;
    } else {
        return str;
    }
}

/*
Сумма введённых чисел
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
function sumInput() {
    let array = [];
    let chr = prompt("Введите число:", "");
    if (isNaN(chr) === false && chr !== null && chr !== ''){
        array.push(Number(chr))
        while (true) {
            chr = prompt("Введите число:", "");
            if (isNaN(chr) === false && chr !== null && chr !== ''){
                array.push(Number(chr))
            } else {
                break;
            }
    }
        return array.reduce((sum, current) => sum + current, 0);
    }
}

/*  
Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
*/
function getMaxSubSum(arr) {
    let array = [];
    let summ_array = 0;
    for (i=0; i<arr.length; i++) {
        if (Number(arr[i]) >= 0) {
            array.push(Number(arr[i]));
            let now_summ = array.reduce((sum, current) => sum + current, 0);
            if (now_summ > summ_array) {
                summ_array = now_summ;
            }
        } else {
            array.length = 0;
        }
    }
    return summ_array;
}

/*
Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/
function camelize(str) {
    let array = str.split('-');
    for (index in array) {
        if (array[index] !== '' && array[index] !== array[0]) {
            array[index] = array[index][0].toUpperCase() +  array[index].slice(1);
        }
    }
    return array.join('');
}

/*
Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/
function compare(first, second) {
    if (first > second) return 1;
    if (first == second) return 0;
    if (first < second) return -1;
}
function sorting(arr) {
    return arr.sort(compare);
}
/*
Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

/*
Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

function filterRange(arr, a, b) {
    return arr.slice(a, b);
}

/*
Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
function aclean(arr) {
    let set = new Set();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        set.add(sorted);
    }
    return Array.from(set).join();
}
/*
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
Например:
function unique(arr) {

}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
*/
function unique(arr) {
    let set = new Set();
    for (let word of arr) {
        set.add(word);
    }
    return Array.from(set).join();
}