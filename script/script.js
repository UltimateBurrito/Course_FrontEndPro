var operator,
    operandQuantity,
    operandValue,
    expression;
  
do {
    operator = prompt('Добро пожаловать в странный калькулятор! Укажите математический оператор', '');
    switch (operator) {
        case ('+'):
        case ('-'):
        case ('*'):
        case ('/'):
            break;
        default:
            operator = true;
            alert('Некоректное значение! Только + - * /');
    }
}
while (operator == true);

do {
    operandQuantity = prompt('Сколько операндов хотите использовать?', '');
}
while (operandQuantity <= 1);

for (i = 0; i < operandQuantity; i++) {
    if (i <= 0) {
        operandValue = prompt('Введите значение операнда', '');
        expression = operandValue;
    } else {
        operandValue = prompt('Введите значение операнда', '');
        expression = expression + operator + operandValue;
    }
}

alert(eval(expression));