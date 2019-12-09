let namen1 = document.getElementById("namen");
let and1 = document.getElementById("and");

let and =
[
	"en"
];

let namen = 
[
 "Selcukhan" , "Kamil"
];


console.log(namen.length);

for (let count = 0; count < namen.length; count++) {
    console.log(namen[count]);
}

namen1.innerHTML = namen[0] + " en " + namen[1];