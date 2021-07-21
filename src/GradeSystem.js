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
        // return {grade,percentage};
        return grade;
        }
}

module.exports={
    GradeSystem
  }
