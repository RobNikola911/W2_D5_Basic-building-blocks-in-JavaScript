let numbers = 10;

for (let i = 1; i <= numbers; i++) {
console.log (i)
}

let even = 20;

for(i=0; i<=even; i++){
    if(i % 2 == 0){
      console.log(i);
    }
  }

let getGreetingTo = name => {
    console.log(`Hello, ${name}`);
}
getGreetingTo("Mark");


let printValues = [0, 3, 6, 7, 9]; 
  for (i = 0; i < printValues.length; i++) {
      console.log(printValues[i])
  };

let myNumbers = [0, 3, 6, 7, 9];
    myNumbers.forEach(myNumbers => {
    console.log(myNumbers);
});