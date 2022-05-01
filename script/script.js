//===Task 1===
// В бесконечном цикле делается запрос на ввод двух чисел(два отдельных вызова функции prompt()).
// Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше»,
// «второе число меньше». Если пользователь ввёл не число, выводится фраза «первый ввод – не число»
// (или «второй ввод – не число»), и выполнение скрипта прекращается.

function compare(a, b) {
    if (a < b) {
        alert(`первое число меньше`)
    } else if (b < a) {
        alert(`второе число меньше`)
    } else {
        alert(`числа равны`)
    }
}

for (i = 0; ;) {
    var num1 = +prompt(`Введите первое число`, ``)
    if (isNaN(num1)) {
        alert(`первый ввод – не число`)
        break
    }
    var num2 = +prompt(`Введите второе число`, ``)
    if (isNaN(num2)) {
        alert(`второй ввод – не число`)
        break
    }
    compare(num1,num2)
}

// ===Task 2===
// Многоквартирный дом характеризуется следующими тремя показателями: этажность(1 - 25), число подъездов(1 - 10),
// количество квартир на лестничной площадке(1 - 20).Скрипт запрашивает эти показатели и номер квартиры.
// Выводится номер подъезда, в котором находится указанная квартира.При вводе некорректных данных предусмотреть
// генерацию исключительных ситуаций.


function getValue(valueDescription) {
    do {
        var value = +prompt(valueDescription, '')
        if (isNaN(value) || value <= 0) {
            alert("Некоректное значение")
        } else {
            return value
        }
    } while (isNaN(value))
}
    
function showEntrance(floors = getValue("Укажите этажность"),
    entrances = getValue("Укажите количество подъездов"),
    apartments = getValue("Укажите количество квартир на этаже"),
    apartmentNumber = getValue("Укажите номер квартиры")) {
    
    if (apartmentNumber > floors * apartments * entrances) {
        alert("Такой квартиры в этом доме нет")
        return
    }
    
    for (i = 1; i <= entrances; i++) {
        if (i == 1) {
            var amountApartments = floors * apartments
            if (apartmentNumber <= amountApartments) {
                alert(`Подъезд № ` + i)
                break
            }
        } else {
            amountApartments = amountApartments + floors * apartments
            if (apartmentNumber <= amountApartments) {
                alert(`Подъезд № ` + i)
                break
            }
        }
    }
}

showEntrance()

// ===Task 3===
// Написать функцию, получающую на вход два числа.Если оба числа чётные - функция возвращает их произведение.
// Если оба числа нечётные - функция возвращает их сумму.Если одно из чисел чётное,
// а второе нечётное - функция возвращает это нечётное число.


function calc(num1, num2) {
    if ((num1 % 2 == 0) && (num2 % 2 == 0)) {
        return num1*num2
    } else if ((num1 % 2 !== 0) && (num2 % 2 !== 0)) {
        return num1+num2
    } else if (num1 % 2 !== 0) {
        return num1
    } else {
        return num2
    }
}

alert(calc(30,3))

// ===Task 4===
//На декартовой плоскости прямоугольник задаётся четырьмя точками – своими вершинами
//(у каждой точки две числовые координаты). Вершины перечисляются последовательно,
//в порядке обхода по часовой стрелке, начиная с левой верхней вершины.
//Написать функцию, проверяющую, образуют ли заданные восемь чисел вершины некоего прямоугольника.

function checkRectangle(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (((x1 == x4) && (x2 == x3)) && ((y1 == y2) && (y3 == y4))) {
        return true
    } else {
        return false
    }
}

alert(checkRectangle(-3,3,2,3,2,1,-3,1))

//===Task 5===
// Функция getSequence(start, step) при вызове возвращает функцию - генератор. 
// Каждый вызов генератора возвращает новое число в числовой последовательности.
//start – стартовое число(по умолчанию 0).step – шаг приращения(по умолчанию 1).

function getSequence(a, b) {
    var start = a,
        step = b;
    return function() {
        return start=start+step
    }
}

var generator = getSequence(0,1)
alert(generator())
alert(generator())
alert(generator())
