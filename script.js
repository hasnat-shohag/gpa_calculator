let f_condition = 0;

function gpaCalculate(){

    let bangla = document.querySelector("#bangla").value;
    let english = document.querySelector("#english").value;
    let math = document.querySelector("#math").value;
    let science = document.querySelector("#science").value;
    let bgs = document.querySelector("#bgs").value;
    let religious = document.querySelector("#religious").value;
    let gradePointAverage;

    if(bangla == "" || english == "" || math == "" || science == "" || bgs == "" || religious == ""){
        alert("Plz Give All Subject Marks")
    }
    else{
        let banglaGrade = calGrade(bangla);
        let englishGrade = calGrade(english);
        let mathGrade = calGrade(math);
        let scienceGrade = calGrade(science);
        let bgsGrade = calGrade(bgs);
        let religiousGrade = calGrade(religious);

        let banglaPoint = calPoint(bangla);
        let englishPoint = calPoint(english);
        let mathPoint = calPoint(math);
        let sciencePoint = calPoint(science);
        let bgsPoint = calPoint(bgs);
        let religiousPoint = calPoint(religious);

        if(f_condition == -1){
            alert("Plz give all the valid marks..!")
        }
        else{
            if(banglaPoint != 0 && englishPoint != 0 && mathPoint != 0 && sciencePoint != 0 && bgsPoint != 0 && religiousPoint != 0){

                gradePointAverage = (banglaPoint + englishPoint + mathPoint + sciencePoint + bgsPoint + religiousPoint)/6.00;
                // document.querySelector("#result_h1").innerHTML = "";
                document.querySelector("#result_h1").innerHTML = "Result";
                document.querySelector("#gpa").innerHTML = gradePointAverage.toPrecision(3);

                document.querySelector("#grade_sheet_h1").innerHTML = "Grade Sheet";
   
                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Bangla      ${banglaGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`English     ${englishGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`MatheMatics     ${mathGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Science     ${scienceGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`BGS     ${bgsGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Religious     ${religiousGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

            }
            else{

                // document.querySelector("#result_h1").innerHTML = "";
                document.querySelector("#result_h1").innerHTML = "Result";
                document.querySelector("#gpa").innerHTML = "You're Failed";
                document.querySelector("#grade_sheet_h1").innerHTML = "Grade Sheet";
                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Bangla      ${banglaGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`English     ${englishGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`MatheMatics     ${mathGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Science     ${scienceGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`BGS     ${bgsGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

                var node = document.createElement("LI"); // Create a <li> node
                var textnode = document.createTextNode(`Religious     ${religiousGrade}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("grade_sheet_ul").appendChild(node);

            }
        }

    } 

}
    

function calGrade(number){
    if(number > 100 || number < 0){
        f_condition = -1;
        // return false;
    }
    else{
        if(number > 79){         
            return "A+";
        }
        else if(number < 80 && number > 69)
        {
            return "A";
        }
        else if(number < 70 && number > 59)
        {
            return "A-";
        }
        else if(number < 60 && number > 49)
        {
            return "B";
        }
        else if(number < 50 && number > 39)
        {
            return "C";
        }
        else if(number < 40 && number > 32)
        {
            return "D";
        }
        else{
            return "F";
        }
    }
        
}

function calPoint(number){
    if(number > 100 || number < 0){
        f_condition = -1;
        // return false;
    }
    else{
        if(number > 79){         
            return 5.00;
        }
        else if(number < 80 && number > 69)
        {
            return 4.00;
        }
        else if(number < 70 && number > 59)
        {
            return 3.50;
        }
        else if(number < 60 && number > 49)
        {
            return 3.00;
        }
        else if(number < 50 && number > 39)
        {
            return 2.50;
        }
        else if(number < 40 && number > 32)
        {
            return 2.00;
        }
        else{
            return 0;
        }
    }
}

function myFunction() {
    document.getElementById("myForm").reset();
  }