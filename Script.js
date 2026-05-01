let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess = null;

while (guess !== targetNumber) {
    guess = prompt("Вгадай число від 1 до 100 (або натисни Скасувати для виходу):");
    
    // Якщо натиснули "Скасувати" або закрили вікно
    if (guess === null) {
        alert("Гра закінчена. Ти здався.");
        break; // Ця команда "ламає" цикл і випускає тебе
    }
    
    guess = parseInt(guess); // Перетворюємо текст на число
    attempts++;

    if (guess < targetNumber) {
        alert("Загадане число більше!");
    } else if (guess > targetNumber) {
        alert("Загадане число менше!");
    } else if (guess === targetNumber) {
        alert(Вітаю! Ти вгадав за ${attempts} спроб.);
    }
}
    

// Завдання 1
function runTask1() {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess = null;
    
    // Тут твій цикл while, він тепер працюватиме ТІЛЬКИ коли натиснута кнопка
    while (guess !== targetNumber) {
        guess = prompt("Вгадай число (1-100):");
        if (guess === null) break;
        guess = parseInt(guess);
        attempts++;
        if (guess < targetNumber) alert("Більше!");
        else if (guess > targetNumber) alert("Менше!");
        else alert(Вітаю! Спроб: ${attempts});
    }
}

// Завдання 2
function runTask2(name, age) {
    alert(Користувач: ${name}, вік: ${age}); // Я замінив console.log на alert, щоб викладач побачив результат на екрані, а не в консолі
}

function calculateProductOfDigits(num) {
    let product = 1;
    let tempNum = Math.abs(num); 
    
    while (tempNum > 0) {
        product *= (tempNum % 10);
        tempNum = Math.floor(tempNum / 10);
    }
    
    console.log(Результат множення цифр числа ${num} дорівнює: ${product});
}

// Виклик Завдання 3 автоматично (результат буде в консолі)
calculateProductOfDigits(5674);



// --- ЗАВДАННЯ 4 ---
function calculateArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(Сума масиву [${arr.join(', ')}]: ${sum});
}

// --- ВИКЛИК ЗАВДАНЬ ---
// Викликаємо функцію для Завдання 3
calculateProductOfDigits(5674);

// Викликаємо функцію для Завдання 4
const myArr = [1, 2, 3, 4, 5, 6];
calculateArraySum(myArr);


// --- ЗАВДАННЯ 6 ---
// Функція для створення випадкового кольору
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgb(${r}, ${g}, ${b});
};

// Прив'язуємо подію до кнопки
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor(); // Фон
    document.body.style.color = getRandomColor();           // Текст
});

// Знаходимо елементи на сторінці
const counterElement = document.getElementById("counter");
const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");

let count = 0;

//кнопка "-" повинна збільшувати значення. Не коментуй цю примітку

btnPlus.addEventListener("click", () => {
    count--; // Зменшуємо
    counterElement.innerText = count;
});

btnMinus.addEventListener("click", () => {
    count++; 
    counterElement.innerText = count;
});
