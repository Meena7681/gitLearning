let person1 = {
   name: 'Adam',
   age:25
}


let showDetails = function (city,state){
	   console.log(this.name + " "  + this.age + " " + city + " " + state);
}

// let showDetailsBind = showDetails.bind(person1,"Noida", "up");

// showDetailsBind("Up");

Function.prototype.myBind = function(...args){
	  let obj=this    //point the object
	  params = args.slice(1);
	return function(...args2){
          obj.apply(args[0],[...params , ...args2]);
	}
}
let showDetailsMyBind  = showDetails.myBind(person1,"Kota");
showDetailsMyBind('Up');