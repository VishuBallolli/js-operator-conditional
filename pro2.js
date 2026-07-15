function checkGrade() {

    let studentName = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    let grade = "";

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 35) {
        grade = "Pass";
    }
    else if (marks >= 0) {
        grade = "Fail";
    }
    else {
        grade = "Invalid Marks";
    }

    document.getElementById("result").innerHTML =
        `<h4>Hello ${studentName}</h4>
         <p>Your Marks : <b>${marks}</b></p>
         <p>Your Grade : <b>${grade}</b></p>`;
}