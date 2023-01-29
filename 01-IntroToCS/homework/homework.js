'use strict';

function BinarioADecimal(num) {
   if(typeof num != 'string') return "Num tiene que ser un string";
   let result = 0;
   num = num.split('').reverse();
   for(var i = 0; i < num.length; i++){
      result = result + Math.pow(2, i) * num[i];
   }
   return result;
}

function DecimalABinario(num) {
   if(typeof num != 'number') return "num tiene que ser un number";
   let bin = [];
   while(num > 1){
      bin.unshift(num%2);
      num = Math.floor(num/2);
   }
   bin.push(num);
   return bin.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
