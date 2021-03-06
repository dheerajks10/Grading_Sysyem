class GradeSystem{
    constructor(JsonObj){
        this.buildNumber=JsonObj.buildNumber;
        this.total=JsonObj.total;
        this.passed=JsonObj.passed;
        this.failed=JsonObj.failed;
        this.skipped=JsonObj.skipped;
        this.aborted=JsonObj.aborted;
    }
    CalculateBuildGrade(){
        let grade="";
        try{
            if(this.total<=0 || this.passed<=0 || this.failed<=0 || this.skipped<=0 || this.aborted<=0) throw "Invaild ..? check grades.";
            if(this.passed>this.total) throw "passed test cases are not greater than to total test cases";
            if(this.skipped>this.total) throw "total skipped test cases are not greater than total test cases";
        }
        catch(err)
        {
        return err;
        }

        let percentage= this.passed/(this.total- (this.skipped+this.aborted));
        percentage=parseInt(percentage*100);
        var grades = {
            'A': {
                'upper': 100,
                'lower': 90
            },
            'B': {
                'upper': 90,
                'lower': 80
            },
            'C': {
                'upper': 80,
                'lower': 70
            },
            'D': { 
                'upper': 70,
                'lower': 60
            },
            'F':{
                'upper': 60,
                'lower': 0
            }
        }
        Object.keys(grades).forEach(function(key){
            var value = grades[key];
            if(percentage < value['upper'] && percentage > value['lower'])
            grade = key;
        });
        return grade;
        }
}

module.exports={
    GradeSystem
  }
