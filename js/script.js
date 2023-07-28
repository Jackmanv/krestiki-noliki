// Функция вызывается всякий раз, когда пользователь нажимает на любоё поле
function myfunc() {

    // Установка DOM для всех полей и полей ввода
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("a1").value;
    b2 = document.getElementById("a2").value;
    b3 = document.getElementById("a3").value;
    b4 = document.getElementById("b1").value;
    b5 = document.getElementById("b2").value;
    b6 = document.getElementById("b3").value;
    b7 = document.getElementById("c1").value;
    b8 = document.getElementById("c2").value;
    b9 = document.getElementById("c3").value;

    var b1btn, b2btn, b3btn, b4btn, b5btn,
        b6btn, b7btn, b8btn, b9btn;

    b1btn = document.getElementById("a1");
    b2btn = document.getElementById("a2");
    b3btn = document.getElementById("a3");
    b4btn = document.getElementById("b1");
    b5btn = document.getElementById("b2");
    b6btn = document.getElementById("b3");
    b7btn = document.getElementById("c1");
    b8btn = document.getElementById("c2");
    b9btn = document.getElementById("c3");

    // Проверка, выиграл игрок X или нет, и после этого отключение всех остальные полей
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b2btn.style.color = "rgb(55, 149, 236)";
        b3btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b4btn.style.color = "rgb(55, 149, 236)";
        b7btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "rgb(55, 149, 236)";
        b8btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "rgb(55, 149, 236)";
        b6btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b7btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b8btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Игрок X выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b6btn.style.color = "rgb(55, 149, 236)";
    }

    // Проверка финиша игрока X
    // Начинается проверка для игрока 0, выиграл игрок 0 или нет, и после этого отключаются все остальные поля
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b2btn.style.color = "rgb(55, 149, 236)";
        b3btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b4btn.style.color = "rgb(55, 149, 236)";
        b7btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "rgb(55, 149, 236)";
        b8btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b3btn.style.color = "rgb(55, 149, 236)";
        b6btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b9btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b7btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b8btn.style.color = "rgb(55, 149, 236)";
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Игрок 0 выйграл";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "rgb(55, 149, 236)";
        b5btn.style.color = "rgb(55, 149, 236)";
        b6btn.style.color = "rgb(55, 149, 236)";
    }

    // Проверка финиша Игрока O
    // Проверка ничьи
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Ничья";
    }
    else {

        // Выводится результат
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

// Функция перезапуска игры
function myfunc_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}


flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("a1").value = "X";
        document.getElementById("a1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("a1").value = "0";
        document.getElementById("a1").disabled = true;
        flag = 1;
    }
}


function myfunc_4() {
    if (flag == 1) {
        document.getElementById("a2").value = "X";
        document.getElementById("a2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("a2").value = "0";
        document.getElementById("a2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("a3").value = "X";
        document.getElementById("a3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("a3").value = "0";
        document.getElementById("a3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("c1").value = "X";
        document.getElementById("c1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("c1").value = "0";
        document.getElementById("c1").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("c2").value = "X";
        document.getElementById("c2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("c2").value = "0";
        document.getElementById("c2").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("c3").value = "X";
        document.getElementById("c3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("c3").value = "0";
        document.getElementById("c3").disabled = true;
        flag = 1;
    }
}
