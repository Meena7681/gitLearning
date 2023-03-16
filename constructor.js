// let car1 = {
// 	     brand : "BMW",
// 	     model: "X5",
// 	     color : "white"
// }

// let car2 = {
// 	     brand : "Mercedes",
// 	     model: "s Class",
// 	     color : "Red"
// }

function car(brand,model,color){
       this.Brand = brand;
       this.Model = model;
       this.Color = color;
     
     this.drive = function (){
     	console.log("I am dirving" + this.Model);
     }

}


let car1 = new car('BMW','X5','White'); // this -> {}
let car2 = new car('RR','Top','Black'); // this -> {}
// car1.Brand = "Jaguar" 
// console.log(car1.Model);
// console.log(car2.Color);
car1.drive();
car2.drive();