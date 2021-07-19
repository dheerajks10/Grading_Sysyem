const {GradeSystem} = require('../src/GradeSystem');
let Grade = {
    'buildNumber': '123456',
    'total': 800,
    'passed': 790,
    'failed': 5,
    'skipped': 3,
    'aborted': 2
   }
let Grades = new GradeSystem(Grade);
console.log(Grades.CalculateBuildGrade());