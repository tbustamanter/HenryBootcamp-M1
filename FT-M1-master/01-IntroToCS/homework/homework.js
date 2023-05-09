"use strict";

function BinarioADecimal(num) {
  let array = num.split('').reverse();
  let decimal = 0;
  for(let x=0; x <= array.length; x++){
    if(array[x] == 1){
    decimal = decimal + Math.pow(2, x);
    }
  }
  return decimal;

}

function DecimalABinario(num) {
  let binario = [];
  while(num > 0){
   
    if(num%2 > 0){
      binario.push(1);
    }else{
      binario.push(0);
    }
    num = Math.floor(num/2); 
  }
    return binario.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
