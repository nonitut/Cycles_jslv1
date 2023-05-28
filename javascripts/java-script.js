document.addEventListener("DOMContentLoaded", function() {
    let output = '';
    for (let i = 0; i < 5; i++) {
    output += i + ' ';
    }
    
    document.getElementById('output').innerHTML = output;
    // Цикл "for"   // Мы выведем от 1 до 5 в наш див с id output

    
    let chislo = 1;
    let istinniy = '';
    
    while (chislo <= 10) {
    istinniy += chislo + ' ';
    chislo++;
    }
    
    document.getElementById('istinniy').innerHTML = istinniy;
    // Цикл "while"  // Выражение истинно, по этому выводиться числовой ряд от 1 до 10
    //Цикл for чаще используется, когда известно заранее количество итераций, 
    // а цикл while подходит, когда количество итераций зависит от условия.

    let unt = 0;
    let outputDiv = document.getElementById("result");

    do {
    outputDiv.innerHTML += unt + "<br>";
    unt++;
    } while (unt < 5); 
    //do...while


    let numbers = [1, 2, 3, 4, 5];
    let lol = document.getElementById("agemb");

    for (let i = 0; i < numbers.length; i++) {
        lol.innerHTML += numbers[i] + "<br>";
    }
    //метод forEach с применением массива


    let names = ["Alice", "Bob", "Charlie"];
    let namesContainer = document.getElementById("namesContainer");

    names.forEach(function(name) {
    namesContainer.innerHTML += "Hello, " + name + "!";
    });
     //метод forEach на конкретном примере с применением массива имен


    let wowContDiv = document.getElementById("wowCont");

    for (let i = 0; i < 5; i++) {
    if (i === 3) { // мы останавливаемся на 3 из списка,хоть и указали до 5
    break;
    }
    wowContDiv.innerHTML += i + "<br>";
    }
    //Прерывание цикла с помощью оператора "break"

    
    let users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        // ...
    ];
    
    let targetUserId = 2;
    let targetUser = null;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === targetUserId) {
        targetUser = users[i];
        break;
        }
    }
    
    let resultDiv = document.getElementById("lures");
    resultDiv.innerHTML = "Найденный пользователь: " + JSON.stringify(targetUser);
    // Прерывание цикла с помощью оператора "break" как только мы находим нужного пользователя
    

    

    let miyaContDiv = document.getElementById("miyaCont");

    for (let i = 0; i <= 5; i++) { 
    if (i === 3) {
        continue;
    }
    miyaContDiv.innerHTML += i + "<br>";
    }
    //Пропуск итерации цикла с помощью оператора "continue":

    let somelet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let conttinDiv = document.getElementById("conttin");

    for (let i = 0; i < somelet.length; i++) {
    if (somelet[i] % 2 === 0) {
        continue;
    }
    conttinDiv.innerHTML += somelet[i] + "<br>";
    }






});