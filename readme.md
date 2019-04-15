# JavaDeveloperProgrammingBasics_Lesson-02
Conditional operators, logical operators, transformation of primitives types

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_1/task2_1.js)<br>
Чи виведеться в консоль привітання?

        if ("0") {
          alert("Hello!");
        }

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_2/task2_2.js)<br>
Використовуючи конструкцію `if...else` напишіть код, який виводить в консоль:
  - 1, якщо значення змінної більше нуля,
  - -1, якщо значення змінної менше нуля,
  - 0, якщо значення змінної дорівнює нулю.

* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_3/task2_3.js)<br>
Перепишіть `if` з використанням оператора `?`:

        if (a + b < 4) {
          result = "Мало";
        } else {
          result = "Багато";
        }

* [Завдання 4](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_4/task2_4.js)<br>
Подумайте, що виведе цей код?

        console.log(null || 2 || undefined);
        console.log(console.log(1) || 2 || console.log(3));
        console.log(1 && null && 2);
        console.log(console.log(1) && console.log(2));
        console.log(null || 2 && 3 || 4);

* [Завдання 5](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_5/task2_5.js)<br>
Напишіть умову `if` для перевірки того факту, що змінна `age` знаходиться між `14` і `90` включно. Потім напишіть умову `if` для
перевірки того факту, що змінна `age` НЕ знаходиться між `14` і `90` включно.

* [Завдання 6](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-02/blob/master/JavaDeveloperProgrammingBasics_Lesson-02/task2_6/task2_6.js)<br>
Подумайте, який буде результат у цих виразів?

        "" + 1 + 0
        "" - 1 + 0
        true + false
        6 / "3"
        "2" * "3"
        4 + 5 + "px"
        "$" + 4 + 5
        "4" - 2
        "4px" - 2
        7 / 0
        " -9\n" + 5
        " -9\n" - 5
        
        5 && 2
        2 && 5
        5 || 0
        0 || 5
        
        null + 1
        undefined + 1
        null == "\n0\n"
        +null == +"\n0\n"
