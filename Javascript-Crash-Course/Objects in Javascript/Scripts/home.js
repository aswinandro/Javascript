// Objects in Javascript

let student = {first: 'Aswin', 
               last: 'Andro', 
               age:25, 
               height: 170,
               studentInfo: function() {
                   return this.first + '\n' + this.last + '\n' + this.age;
               }
            };

console.log(student.first);
console.log(student.last);

student.first = 'No Aswin'; // Change Value
console.log(student.first);

console.log(student.age++);

console.log(student.studentInfo()); // calling defined function inside the object



// Conditional Statements --- Control Flows


alert('Control Flows- --- Conditional Statements');

var age = prompt('Whats your Age')

if ((age >= 18 ) && (age <= 35)){   //&& AND 
    status='Demo them | Teach Them';
}else {
    status = 'not my audience';
}

console.log(status);
alert(status);

// Switch Statements --- Differentiate between Weekday vs Weekend


var day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday - Weekend';
        break;
    case 6:
            day = 'Saturday - Weekend';
            break;
    default: 
        days = 'Lets wait for weekend';
}

console.log(day);


// Loop 

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text;

for (let i = 0; i < cars.length; i++) {
  console.log(text += cars[i]);
  }

