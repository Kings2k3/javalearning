let sum = 0;
 let i = 0;

 while (i <= 5) {
    sum = sum + i;
    i++;
     
 }

 console.log(sum);


 let countdown = []
 let j = 5;

 while (j > 0) {
    countdown.push(j);
    j--;
 }

 console.log(countdown);



 let teacollection = []
 let tea 

 do {
   tea = prompt("Please enter a type of tea:");
   
   if (tea !== "stop") {
       teacollection.push(tea);
   }

 } while (tea !== "stop");


 let total = 0;
 let k = 1;

 do {
     total += k;
     k++;
 } while (k <= 5);

 console.log(total);


 let multiplicationTable = [];
 let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
   takeNumbers = numbers[l] * 2;
   multiplicationTable.push(takeNumbers);
}
