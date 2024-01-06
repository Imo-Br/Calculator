let v1;
let v2;
let v3;

document.getElementById("btn").onclick = function(){
  v1 = document.getElementById("Variable1").value;
  v2 = document.getElementById("Variable2").value;
  v1 = Number(v1);
  v2 = Number(v2);
  
  const add = document.getElementById("addition");
   const multi = document.getElementById("multiplication");
   const sub = document.getElementById("subtraction");
   const div = document.getElementById("division");
  
if (v1 === null || v2 === null || isNaN(v1) || isNaN(v2)) {
  document.getElementById("p").innerHTML = "Please enter valid variables"
  }
  
  switch(true){
    case add.checked:
  
      v3 = v1 + v2
      document.getElementById("p").innerHTML = "The result is " + v3
      break;
    case multi.checked:
        v3 = v1 * v2
        document.getElementById("p").innerHTML = "The result is " + v3
        break;
  
     case sub.checked:
        v3 = v1 - v2
        document.getElementById("p").innerHTML = "The result is " + v3
        break;
      case div.checked:
        v3 = v1 / v2
        remainder = v1 % v2
        document.getElementById("p").innerHTML = "The quotient is " + v3 + " and the remainder is " + remainder
  }
        
    }
  
let numerator1;
let denominator1;
let numerator2;
let denominator2;
let adjustednum1;
let adjustednum2;
let numerator3;
let denominator3;
let simplifiednum3;
let simplifiedden3;
let greatestcd;
let invertednum1;
let invertedden1;
let invertednum2;
let invertedden2;

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
document.getElementById("btn2").onclick = function(){
  console.log("button is clicked")
  numerator1 = document.getElementById("numerator1").value;
  numerator1 = Number(numerator1);
  denominator1 = document.getElementById("denominator1").value;
  denominator1 = Number(denominator1);
  
  numerator2 = document.getElementById("numerator2").value;
  numerator2 = Number(numerator2);
  denominator2 = document.getElementById("denominator2").value;
  denominator2 = Number(denominator2);

  const addition = document.getElementById("add");
  const multiplication = document.getElementById("multi");
  const subtraction = document.getElementById("sub");
  const division = document.getElementById("div");
  
  if(numerator1 === null || numerator2 === null || denominator1 === null || denominator2 === null || isNaN(numerator1) || isNaN(numerator2) || isNaN(denominator1) || isNaN(denominator2)) {
    document.getElementById("p2").innerHTML = "Please enter valid values"
  }
  
  
  switch(true){
    case addition.checked:
      denominator3 = denominator1 * denominator2 ;
      adjustednum1 = numerator1 * (denominator3 / denominator1);
      adjustednum2 = numerator2 * (denominator3 / denominator2);
      numerator3 = adjustednum1 + adjustednum2;
      greatestcd = gcd(numerator3, denominator3);
      simplifiednum3 = numerator3 / greatestcd ;
      simplifiedden3 = denominator3 / greatestcd ;
      document.getElementById("p2").innerHTML = "The result fraction is " + simplifiednum3 + "/" +simplifiedden3;
      break;
    case multiplication.checked:
      numerator3 = numerator1 * numerator2; 
      denominator3 = denominator1 * denominator2;
      greatestcd = gcd(numerator3, denominator3);
      simplifiednum3 = numerator3 / greatestcd;
      simplifiedden3 = denominator3 / greatestcd;
      document.getElementById("p2").innerHTML = "The result is " + simplifiednum3 + "/" + simplifiedden3;
      break;
    case division.checked:
      invertednum2 = denominator2;
      invertedden2 = numerator2;
      numerator3 = numerator1 * invertednum2;
      denominator3 = denominator1 * invertedden2;
      greatestcd = gcd(numerator3, denominator3);
      simplifiednum3 = numerator3 / greatestcd;
      simplifiedden3 = denominator3 / greatestcd;
      document.getElementById("p2").innerHTML = "The result is " + simplifiednum3 + "/" + simplifiedden3;
      break;
    case subtraction.checked:
      denominator3 = denominator1 * denominator2;
      adjustednum1 = numerator1 * (denominator3 / denominator1);
      adjustednum2 = numerator2 * (denominator3 / denominator2);
      numerator3 = adjustednum1 - adjustednum2;
      greatestcd = gcd(numerator3, denominator3);
      simplifiednum3 = numerator3 / greatestcd;
      simplifiedden3 = denominator3 / greatestcd;
      document.getElementById("p2").innerHTML = "The result fraction is " + simplifiednum3 + "/" + simplifiedden3;
  }
}