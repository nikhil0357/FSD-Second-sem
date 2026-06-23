function getGradePoint(marks) {
    if (marks >= 90) return 10;
    else if (marks >= 80) return 9;
    else if (marks >= 70) return 8;
    else if (marks >= 60) return 7;
    else if (marks >= 50) return 6;
    else if (marks >= 45) return 5;
    else if (marks >= 40) return 4;
    else return 0;
}

function calculateSGPA() {

    const credits = [3,2,2,3,2,2,1,1,1,1,2,1];

    let totalCreditPoints = 0;
    let totalCredits = 0;

    for(let i=1; i<=12; i++){

        let marks = Number(document.getElementById("sub"+i).value);

        if(isNaN(marks) || marks < 0 || marks > 100){
            alert("Please enter valid marks (0-100) for all subjects.");
            return;
        }

        let gradePoint = getGradePoint(marks);

        totalCreditPoints += gradePoint * credits[i-1];
        totalCredits += credits[i-1];
    }

    let sgpa = totalCreditPoints / totalCredits;

    document.getElementById("result").innerHTML =
        "Expected SGPA : <b>" + sgpa.toFixed(2) + "</b>";
}