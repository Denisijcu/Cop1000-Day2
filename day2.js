console.log('Running');
/*
var answer;

do {
  answer = prompt("Please enter a number:");
  document.write(answer);

}
while (answer != 'x');





var numbers = [5, 2, 8, 6];
var i = 0;
var size = numbers.length;

//document.write(size);

numbers.forEach(element => {
  console.log(element);
  document.write(element);
  document.write("<br />");
});

for (var i = 0; i < size; i++) {
  document.write(numbers[i]);
  document.write("<br />");
}


function printNum(n) {
}

//printNum(4);
numbers.forEach(num => {
  document.write("The number xxxis " + num + "<br />");
});

numbers.forEach(printNum);

*/

numbers = [4, 9, 16, 25];

numbers.map((m) => {
  console.log(Math.sqrt(m));
  document.write(`<h1> ${Math.sqrt(m)} </h1>`);
});

document.write(numbers.map(Math.sqrt));



