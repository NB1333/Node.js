# Documentation for the third lab work

## Function runSequent
Напишіть функцію, яка приймає будь-який тип масиву та асинхронний колбек, який викликається для кожного елемента масиву послідовно. Результатом виклику має бути масив результатів колбеку. Усі типи мають застосовуватися автоматично (функція шаблону).

## Function arrayChangeDelete
Напишіть функцію, яка приймає будь-який тип масиву та правило для видалення елементів масиву. Функція змінює переданий масив, а усі видалені елементи функція повертає окремим масивом такого ж типу. Усі типи мають застосовуватися автоматично (функція шаблону)

## Script 1
Напишіть скрипт, який отримує з командного рядка рядковий параметр - шлях до JSON-файла із масивом рядків - посилань, читає та аналізує його вміст. Скрипт має створити папку «<JSON_filename>_pages» і для кожного посилання із <JSON-файла отримати його HTML-вміст і зберегти цей вміст у окремому файлі в новоствореній папці

## Script 2
Напишіть скрипт, який отримує з командного рядка числовий параметр – частоту в секундах. Скрипт має виводити на кожному тику (визначеному частотою) наступну системну інформацію:

- operating system;
- architecture;
- current user name;
- cpu cores models;
- cpu temperature;
- graphic controllers vendors and models;
- total memory, used memory, free memory в GB;
- дані про батарею (charging, percent, remaining time). 

## Class EventEmitter
Напишіть власну реалізацію класу EventEmitter (Publisher/Subscriber), який поводитиметься так:

const emitter = new MyEventEmitter();
emitter.registerHandler('userUpdated', () => console.log('Обліковий запис користувача оновлено'));
emitter.emitEvent('userUpdated'); // Обліковий запис користувача оновлено

## Result
![result_1](/lab_3/images/Pasted%20Graphic.png)
![result_2](/lab_3/images/Pasted%20Graphic%201.png)
![result_3](/lab_3/images/Pasted%20Graphic%202.png)