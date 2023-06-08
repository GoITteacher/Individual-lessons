# Individual-lessons

Завдання: Зміна тексту елемента
Напишіть скрипт, який знайде елемент із id "testBlock" та змінить його текст на "Привіт, світ!".

Завдання: Зміна кольору тла
Напишіть скрипт, який знайде елемент із класом "js-box-2" і змінить його колір фону на червоний.

Завдання: Додавання елемента
Напишіть скрипт, який створить новий елемент <p> з текстом "Новий абзац" і додасть його всередину елемента з id "testBlock".

Завдання: Видалення елемента
Напишіть скрипт, який знайде елемент із id "delete-element" і видалить його з DOM-дерева.

Завдання: Зміна атрибуту
Напишіть скрипт, який знайде елемент з класом "js-image" і змінить значення його атрибута src на нове значення яке потрібно взяти з data-src.

Завдання: Зміна стилю елемента
Напишіть скрипт, який знайде елемент із класом "js-new-style" і змінить його стиль, встановивши колір тексту на синій та шрифт на курсив.

Завдання: Додавання класу
Напишіть скрипт, який знайде елемент з id "green-element" і додасть йому клас "green" для виділення.

Завдання: Перебір дочірніх елементів
Напишіть скрипт, який знайде елемент із класом "js-box-1" і перебере всі його дочірні елементи <li>, виводячи текст кожного елемента в консоль.

Завдання: Зміна вмісту HTML
Напишіть скрипт, який знайде елемент з id "myElement" і замінить його на наступний HTML-код: "<strong>Привіт, мир!</strong>".

Завдання: Приховування елемента
Напишіть скрипт, який знайде елемент із класом "myClass" і приховає його, встановивши його стиль display на "none".

Завдання: Зміна тексту посилання
Напишіть скрипт, який знайде елемент з id "myLink" і змінить текст посилання на "Натисніть мене!".

Завдання: Отримання значення вибраного елемента списку
Напишіть скрипт, який знайде елемент з id "mySelect" (список, що випадає) і отримає значення вибраного елемента.

---

# Users

```JS

const users = [
  {
    name: 'John Smith',
    age: 25,
    email: 'johnsmith@example.com',
    phoneNumber: '123-456-7890',
    isStudent: true,
    isTeacher: false
  },
  {
    name: 'Jane Doe',
    age: 30,
    email: 'janedoe@example.com',
    phoneNumber: '987-654-3210',
    isStudent: false,
    isTeacher: true
  },
  {
    name: 'Alice Johnson',
    age: 35,
    email: 'alicejohnson@example.com',
    phoneNumber: '555-123-4567',
    isStudent: false,
    isTeacher: false
  },
  {
    name: 'Michael Brown',
    age: 28,
    email: 'michaelbrown@example.com',
    phoneNumber: '111-222-3333',
    isStudent: true,
    isTeacher: false
  },
  {
    name: 'Emily Davis',
    age: 31,
    email: 'emilydavis@example.com',
    phoneNumber: '444-555-6666',
    isStudent: false,
    isTeacher: true
  },
  {
    name: 'Robert Wilson',
    age: 40,
    email: 'robertwilson@example.com',
    phoneNumber: '777-888-9999',
    isStudent: false,
    isTeacher: false
  },
  {
    name: 'Olivia Thompson',
    age: 22,
    email: 'oliviathompson@example.com',
    phoneNumber: '000-111-2222',
    isStudent: true,
    isTeacher: false
  },
  {
    name: 'David Martinez',
    age: 27,
    email: 'davidmartinez@example.com',
    phoneNumber: '333-444-5555',
    isStudent: false,
    isTeacher: true
  },
  {
    name: 'Sophia Rodriguez',
    age: 33,
    email: 'sophiarodriguez@example.com',
    phoneNumber: '666-777-8888',
    isStudent: false,
    isTeacher: false
  },
  {
    name: 'Daniel Harris',
    age: 29,
    email: 'danielharris@example.com',
    phoneNumber: '999-000-1111',
    isStudent: true,
    isTeacher: false
  },
  {
    name: 'Mia Clark',
    age: 26,
    email: 'miaclark@example.com',
    phoneNumber: '222-333-4444',
    isStudent: false,
    isTeacher: true
  },
  {
    name: 'Christopher Walker',
    age: 32,
    email: 'christopherwalker@example.com',
    phoneNumber: '555-666-7777',
    isStudent: false,
    isTeacher: false
  },
  {
    name: 'Ava Hall',
    age: 24,
    email: 'avahall@example.com',
    phoneNumber: '888-999-0000',
    isStudent: true,
    isTeacher: false
  },
  {
    name: 'Matthew Young',
    age: 37,
    email: 'matthewyoung@example.com',
    phoneNumber: '111-222-3333',
    isStudent: false,
    isTeacher: true
  },
  {
    name: 'Emma Baker',
    age: 28,
    email: 'emmabaker@example.com',
    phoneNumber: '444-555-6666',
    isStudent: false,
    isTeacher: false
  },
  {
    name: 'Andrew Green',
    age: 36,
    email: 'andrewgreen@example.com',
    phoneNumber: '777-888-9999',
    isStudent: false,
    isTeacher: true
  }
];

console.log(users);

```

Завдання: Висновок привітання
Напишіть функцію sayHello, яка приймає ім'я як аргумент і виводить привітання до консолі. Наприклад, sayHello('John') має вивести "Привіт, John!".

Завдання: Розрахунок суми чисел
Напишіть функцію sumNumbers, яка приймає два числа як аргументи та повертає їх суму.

Завдання: Перевірка на парність
Напишіть функцію isEven, яка приймає число як аргумент і повертає true, якщо число парне, і false, якщо число непарне.

Завдання: Розрахунок факторіалу
Напишіть функцію factorial, яка приймає число як аргумент і повертає його факторіал. Наприклад, factorial(5) має повернути 120.

Завдання: Пошук максимальної кількості
Напишіть функцію maxNumber, яка приймає масив чисел як аргумент і повертає найбільше з масиву.

Завдання: Перевірка на паліндром
Напишіть функцію isPalindrome, яка приймає рядок як аргумент і повертає true, якщо рядок є паліндромом (читається однаково зліва направо і праворуч наліво), і false, якщо рядок не є паліндромом.

Завдання: Генерація випадкового числа
Напишіть функцію getRandomNumber, яка приймає два числа (мінімальне та максимальне значення) як аргументи і повертає випадкове число у вказаному діапазоні.

Завдання: Підрахунок кількості елементів у масиві
Напишіть функцію countElements, яка приймає масив як аргумент і повертає кількість елементів у масиві.

Завдання: Об'єднання двох масивів
Напишіть функцію mergeArrays, яка приймає два масиви як аргументи і повертає новий масив, що містить всі елементи з обох масивів.

Завдання: Перевірка на просте число
Напишіть функцію isPrime, яка приймає число як аргумент і повертає true, якщо число є простим, і false, якщо число не є простим.
