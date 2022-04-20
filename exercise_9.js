'use strict'

let students = [
    {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
    },
    {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
    },
    {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
    },
    {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
    }
    ]

    const deleteStudent = function ({name, studentNumber, yearOfStudy}, students)
        {
           let index = students.findIndex(function (element) { // prints 1
               return element.name === name &&
                element.studentNumber === studentNumber  &&
                element.yearOfStudy === yearOfStudy
                })

            if (index != -1)
            {
                students.splice(index, 1) 
            } 
            return students
        }

        const modifiedArray = deleteStudent({
         name: 'Kiren',
         studentNumber: 567893,
         yearOfStudy: 4
         }, students)

         console.log(modifiedArray)
         