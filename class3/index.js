console.log("Hello I am conditional statements.")

let age = 1;
// let grace = 2;

// age += grace   //Increment operator
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if (age == 18){
    console.log("You Can drive");
}
else if (age == 0){
    console.log("Are you Kidding?");
}
else if (age == 1){
    console.log("Are you again Kidding?");
}
else{
    console.log("You cannot drive");
}

// ternary operator
a = 6;
b = 8;
let c = a>b ? (a-b):(b-a);
console.log(c)