const assert =require('assert');
const {expect} = require('chai');
const{GradeSystem}=require('../src/GradeSystem.js')

describe("PercentageCalculation And Grade",()=>{
    // beforeEach(function(){
    // })
    it("The percentage is between 90 and 100",() =>{
        let gradeA= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 790,
            'failed': 5,
            'skipped': 3,
            'aborted': 2
           }
        var GradeSystem1= new GradeSystem(gradeA);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result == 'A',"percentage is not A grade")
    });
    it("The percentage is between 80 and 90",() =>{
        var gradeB= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 750,
            'failed': 50,
            'skipped': 3,
            'aborted': 2
           }
        let GradeSystem1= new GradeSystem(gradeB);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result== 'B',"percentage is not B grade");
    });
    it("The percentage is between 70 and 80",() =>{
        var gradeC= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 650,
            'failed': 20,
            'skipped': 13,
            'aborted': 23
           }
        var GradeSystem1= new GradeSystem(gradeC);
        var result=GradeSystem1.CalculateBuildGrade();
        assert(result== 'C',"percentage is not C grade");
    });
    it("The percentage is between 60 and 70",() =>{
        var gradeD= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 650,
            'failed': 40,
            'skipped': 23,
            'aborted': 13
           }
        var GradeSystem1= new GradeSystem(gradeD);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result== 'D',"percentage is not D grade");
    });
    it("The percentage is between 0 and 60 ",() =>{
        var  gradeF= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
        var GradeSystem1= new GradeSystem(gradeF);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result== 'F',"percentage is not F grade");
    });
    it("Total No of testcases are less than zero ",()=>{
        var gradeInvalid1= {
            'buildNumber': '123456',
            'total': -1,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
        var GradeSystem1= new GradeSystem(gradeInvalid1);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!='total testCases are not less than 0 ',"total testCases are not less than 0");
    });
    it("When the passed test case is negative",()=>{
        var gradeInvalid2= {
            'buildNumber': '123456',
            'total': 100,
            'passed': -450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
        var GradeSystem1= new GradeSystem(gradeInvalid2);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!='passed test cases are not less than 0 ',"passed test cases are not less than 0");
    });
    it("When the failed test cases are less than 0",()=>{
        var gradeInvalid3= {
            'buildNumber': '123456',
            'total': 0,
            'passed': 450,
            'failed': -40,
            'skipped': 63,
            'aborted': 17
           }
        var GradeSystem1= new GradeSystem(gradeInvalid3);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!=="failed test cases are not less than 0 ","failed test cases are not less than 0");
    });
    it("when skipped test cases are not less than 0",()=>{
        var gradeInvalid4= {
            'buildNumber': '123456',
            'total': 150,
            'passed': 0,
            'failed': 0,
            'skipped': -75,
            'aborted': 75
        }
        var GradeSystem1= new GradeSystem(gradeInvalid4);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!=="skipped test cases are not less than 0 ","skipped test cases are not less than 0");

    });
    it("when aborted test cases are not less than 0",()=>{
        var  gradeInvalid5= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 600,
            'failed': 10,
            'skipped': 1200,
            'aborted': -4
           }
        var GradeSystem1= new GradeSystem(gradeInvalid5);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!=="aborted test cases are not less than 0 ","aborted test cases are not less than 0");
        
    });
    it("when total skipped test cases are not greater than total  test cases",()=>{
        var  gradeInvalid6= {
            'buildNumber': '123456',
            'total': 100,
            'passed': 60,
            'failed': 12,
            'skipped': 204,
            'aborted': 19
        }
        var GradeSystem1= new GradeSystem(gradeInvalid6);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!="total skipped test cases are not greater than total  test cases ","total skipped test cases are not greater than total  test cases");
    });
    it("when passed test cases are not greater than to  total test cases",()=>{
        var  gradeInvalid6= {
            'buildNumber': '123456',
            'total': 100,
            'passed': 600,
            'failed': 1200,
            'skipped': 24,
            'aborted': 19
           }
        var GradeSystem1= new GradeSystem(gradeInvalid6);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!=="passed test cases are not greater than to  total test cases ","passed test cases are not greater than to  total test cases");
    });
    it("when total failed test cases are not greater than total test cases ",()=>{
        var  gradeInvalid7= {
            'buildNumber': '123456',
            'total': 100,
            'passed': 40,
            'failed': 400,
            'skipped': 24,
            'aborted': 19
        }
        var GradeSystem1= new GradeSystem(gradeInvalid7);
        var result= GradeSystem1.CalculateBuildGrade();
        assert(result!="passed test cases are not greater than to  total test cases","passed test cases are not greater than to  total test cases");
    });
});
    