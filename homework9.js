// Homework #9

// Problem 1: Array of numbers [5, 10, 15, 20, 25]
const numbers = [5, 10, 15, 20, 25];

const squaredNumbers = numbers.map(num => num * num);
console.log('a) Squared numbers:', squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('b) Even numbers:', evenNumbers);

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log('c) Sum of all numbers:', sum);


const students = [
    { id: 1, name: 'Alice', grade: 85 },
    { id: 2, name: 'Bob', grade: 75 },
    { id: 3, name: 'Charlie', grade: 95 },
    { id: 4, name: 'David', grade: 60 }
];

const studentNames = students.map(student => student.name);
console.log('a) Student names:', studentNames);

const passedStudents = students.filter(student => student.grade >= 70);
console.log('b) Passed students:', passedStudents);

const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log('c) Average grade:', averageGrade);
