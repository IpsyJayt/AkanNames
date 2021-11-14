function generateAkanName(){

var dayOfBIrth = parseInt(document.getElementById("day").value);
var monthOfBirth = parseInt(document.getElementById("month").value);
var yearOfBirth =document.getElementById("year").value;
var gender = document.getElementById("gender").value;

var cc = parseInt(yearOfBirth.slice(0,2));
var yy = parseInt(yearOfBirth.slice(2,4));

if(dayOfBIrth<1 || dayOfBIrth>31){
    alert("Please enter a day between 1 and 31")
}
if(monthOfBirth<1 || monthOfBirth>12){
    alert("Please choose a month between 1 and 12")
}


}