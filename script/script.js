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
            operator = null;
            alert('Некоректное значение! Только + - * /');
    }
}
while (operator == null);

do {
    operandQuantity = prompt('Сколько операндов хотите использовать?', '');
}
while (operandQuantity <= 1);

for (i = 0; i < operandQuantity; i++) {
    operandValue = +prompt('Введите значение операнда', '');
    if (i <= 0) {
        expression = operandValue;
    } else {
        if (operator == '+') {
            expression = expression + operandValue;
        } else if (operator == '-') {
            expression = expression - operandValue;
        } else if (operator == '*') {
            expression = expression * operandValue;
        } else if (operator == '/') {
            expression = expression / operandValue;
        }
    }
}

alert(expression)