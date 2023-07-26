var XO = "x";

// Получаем все кнопки на странице
var buttons = document.getElementsByTagName("div");

// Добавляем обработчик события "click" на каждую кнопку
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Проверяем, содержит ли кнопка текст
        if (this.innerText === "") {
            // Если значение переменной XO равно "x"
            if (XO === "x") {
                // Меняем значение переменной XO на "o"
                XO = "o";
            } else {
                // Если значение переменной XO не равно "x", то меняем его на "x"
                XO = "x";
            }
        }

    });
}




var buttona1 = document.getElementById("a1");
var buttona2 = document.getElementById("a2");
var buttona3 = document.getElementById("a3");
var buttonb1 = document.getElementById("b1");
var buttonb2 = document.getElementById("b2");
var buttonb3 = document.getElementById("b3");
var buttonc1 = document.getElementById("c1");
var buttonc2 = document.getElementById("c2");
var buttonc3 = document.getElementById("c3");

buttona1.addEventListener("click", function () {
    if (buttona1.textContent === "") {
        buttona1.textContent = XO;
    }
});

buttona2.addEventListener("click", function () {
    if (buttona2.textContent === "") {
        buttona2.textContent = XO;
    }
});
buttona3.addEventListener("click", function () {
    if (buttona3.textContent === "") {
        buttona3.textContent = XO;
    }
});

buttonb1.addEventListener("click", function () {
    if (buttonb1.textContent === "") {
        buttonb1.textContent = XO;
    }
});

buttonb2.addEventListener("click", function () {
    if (buttonb2.textContent === "") {
        buttonb2.textContent = XO;
    }
});
buttonb3.addEventListener("click", function () {
    if (buttonb3.textContent === "") {
        buttonb3.textContent = XO;
    }
});

buttonc1.addEventListener("click", function () {
    if (buttonc1.textContent === "") {
        buttonc1.textContent = XO;
    }
});

buttonc2.addEventListener("click", function () {
    if (buttonc2.textContent === "") {
        buttonc2.textContent = XO;
    }
});
buttonc3.addEventListener("click", function () {
    if (buttonc3.textContent === "") {
        buttonc3.textContent = XO;
    }
});

// Получаем элемент кнопки по id
var button = document.getElementById("myButton");

// Добавляем обработчик события "click" на кнопку
button.addEventListener("click", function () {
    // Если текст кнопки равен "Нажми меня"
    if (button.textContent === "Нажми меня") {
        // Изменяем текст кнопки на "Привет, мир!"
        button.textContent = "Привет, мир!";
    } else {
        // Если текст кнопки не равен "Нажми меня", то меняем его обратно на "Нажми меня"
        button.textContent = "Нажми меня";
    }
});

if (buttona1.innerText.includes("o")) {
    console.log("Нолик")
}


