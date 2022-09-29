// For loop using JSON array

const stud = [{
    stud_id : 1,
    stu_name: "Johnson David",
    stu_age: 25,
    marks : 85,
},
{stud_id : 2,
stu_name: "Kavin",
stu_age : 22,
marks : 98
},
{stud_id : 3,
stu_name: "Murugan",
stu_age : 20,
marks : 80
}
]


// For Loop codes
for (i = 0; i< stud.length; i++){
    console.log(stud[i]);
}

// For of Loop codes

for (i of stud){
    console.log(i);
}


// For in Loop codes

for (i in stud){
    console.log(i);
}



// For Loop in an Array
const arr = [1,2,3,4,5];

// for Loop gives the elements of an array

for (i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// for of codes gives the elements of an array

for (i of arr) {
    console.log(i);
}

// for in
// for in code gives the indices of the elments in an array

for (i in arr){
    console.log(i);
}


