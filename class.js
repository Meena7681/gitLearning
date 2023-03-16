class Person {
	constructor(name,age){
		this.name = name;
		this.age  = age
	}

showDetails(){
	return this.name
}
}

class PersonChild extends Person{
	 constructor (){
	 	super('Adam')
	 }
}





let Person1 = new Person('Steve',25);
let Person2 = new PersonChild('Steve',25);
console.log(Person1.showDetails());
console.log(Person2.showDetails());