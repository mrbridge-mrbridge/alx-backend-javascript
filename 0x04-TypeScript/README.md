### 0x04. Typescript

# Task..0

* Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

* Write your code in the main.ts file:

    * Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
    * Create two students, and create an array named studentsList containing the two variables
    * Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
    * Each row should contain the first name of the student and the location
* Requirements:

    * When running, Webpack should return No type errors found.
    * Every variable should use TypeScript when possible.

# Task..1

* Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
* A Teacher interface with:
  * firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
  * fullTimeEmployee(boolean) this attribute should always be defined
  * yearsOfExperience(number) this attribute is optional
  * location(string) this attribute should always be defined
  * Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute.

# Task..2

* Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)


# Task..3

* Write a function printTeacher:

* It accepts two arguments firstName and lastName
* It returns the first letter of the firstName and the full lastName
* Example: printTeacher("John", "Doe") -> J. Doe
* Write an interface for the function named printTeacherFunction.

# Task..4

* Write a Class named StudentClass:

* The constructor accepts firstName(string) and lastName(string) arguments
* The class has a method named workOnHomework that return the string Currently working
* The class has a method named displayName. It returns the firstName of the student
* The constructor of the class should be described through an Interface
* The class should be described through an Interface
* Requirements:

    * You can reuse the Webpack configuration from the previous exercise to compile the code.
    * When running npm run build, no TypeScript error should be displayed.
    * Every variable should use TypeScript when possible.


# Task..5
* folder task_2
* Create the DirectorInterface interface with the 3 expected methods:

    * workFromHome() returning a string
    * getCoffeeBreak() returning a string
    * workDirectorTasks() returning a string
* Create the TeacherInterface interface with the 3 expected methods:

    * workFromHome() returning a string
    * getCoffeeBreak() returning a string
    * workTeacherTasks() returning a string
* Create a class Director that will implement DirectorInterface

    * workFromHome should return the string Working from home
    * getToWork should return the string Getting a coffee break
    * workDirectorTasks should return the string Getting to director tasks
* Create a class Teacher that will implement TeacherInterface

    * workFromHome should return the string Cannot work from home
    * getCoffeeBreak should return the string Cannot have a break
    * workTeacherTasks should return the string Getting to work
* Create a function createEmployee with the following requirements:

    * It can return either a Director or a Teacher instance
    * It accepts 1 arguments:
    * salary(either number or string)
    * if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
* Expected result:
  
```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```

# Task..6

* Write a function isDirector:

    * it accepts employee as an argument
    * it will be used as a type predicate and if the employee is a director
* Write a function executeWork:

    * it accepts employee as an argument
    * if the employee is a Director, it will call workDirectorTasks
    * if the employee is a Teacher, it will call workTeacherTasks
* Expected result:

```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```
