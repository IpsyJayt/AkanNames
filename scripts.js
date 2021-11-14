function generateAkanName(){

var dayOfBIrth = parseInt(document.getElementById("day").value);
var monthOfBirth = parseInt(document.getElementById("month").value);
var yearOfBirth =document.getElementById("year").value;
var gender = document.getElementById("gender").value;

var cc = parseInt(yearOfBirth.slice(0,2));
var yy = parseInt(yearOfBirth.slice(2,4));

if(dayOfBIrth<1 || dayOfBIrth>31){
    alert("Please enter a day between 1 and 31");
}
if(monthOfBirth<1 || monthOfBirth>12){
    alert("Please choose a month between 1 and 12");
};
if(yearOfBirth<"1700" || yearOfBirth>="2100"){
    alert("Please enter a year between 1700 and 2099");
};
var months = [1,2,3,4,5,6,7,8,9,10,11,12]

if(monthOfBirth === 1 || monthOfBirth===10){
    monthCode=0;
} else if (monthOfBirth===5){
    monthCode=1;
} else if(monthOfBirth===2){
    monthCode=2;
}else if (monthOfBirth===2|| monthOfBirth===3|| monthOfBirth===11){
    monthCode=3;
}else if(monthOfBirth===6){
    monthCode= 4;
}else if(monthOfBirth===9|| monthOfBirth===12){
    monthCode=5;
}else if (monthOfBirth===4 ||monthOfBirth===7){
    monthCode=6
}

if(cc===19){
    centurycode=0;
}else if (cc===18){
    centurycode=2;
} else if(cc===17){
    centurycode=4;
} else if (cc===20){
    centurycode=6;
}
}