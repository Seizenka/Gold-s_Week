function calcul(){
let pointure = document.getElementById("pointure").value;
console.log(pointure);
let year = document.getElementById("year").value;
console.log(year);
let result = pointure * 2 + 5 * 50 - year + 1997;
alert(result);
console.log(result);
}

calcul();
