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


