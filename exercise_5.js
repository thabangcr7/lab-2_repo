'use strict'

let course = {
    courseCode: 'ELEN4010',
}
let course_1 = {
    courseCode: 'ELEN3010',
}
let course_2 = {
    courseCode: 'ELEN4014',
}
const AddYear = function(Course)
{
    let yearOffered = Course.courseCode[4]
    Course.yearOffered = yearOffered
}

let courseInfo = function(Course){
    return Course.courseCode + " is offered in year " + Course.yearOffered;
}

AddYear(course)
AddYear(course_1)
AddYear(course_2)
console.log(courseInfo(course))
console.log(courseInfo(course_1))
console.log(courseInfo(course_2))