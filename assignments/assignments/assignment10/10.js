const section = document.querySelector('section');

//problem 1
let employees = [
    {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true,
        "wfh": "N/A"
    },
    {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true,
        "wfh": "N/A"
    },
    {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false,
        "wfh": "N/A"
    }
  ]

console.log(employees);
//problem 2

let business = [
    {
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employees": employees
    }
]
console.log(business);
// //problem 3

employees.push({
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false,
    "wfh": "N/A"
})

console.log(employees);

// //problem 4

let total = 0;
for (let i = 0; i < employees.length; i++) {
    total += employees[i]['salary'];
}

console.log(total);

// //problem 5

for (let i=0; i < employees.length; i++){
    if (employees[i]['raiseEligible'] == true) {
        employees[i]['salary'] *= 1.1;
    }
}

console.log(employees);
// //problem 6

for (let i=0; i < employees.length; i++){
    if (employees[i]['firstName'] === 'Anna' ||  employees[i]['firstName'] =='Sam'){
        employees[i]['wfh'] = true;
    }
    else {
        employees[i]['wfh'] = false;
    }
}

console.log(employees)