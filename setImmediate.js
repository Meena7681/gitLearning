//setImmediate     //process.nextTick    //setTimeout

//> 

function add(a,b){
	console.log(a+b);
}

setImmediate(()=>{
	add(2,3);  //callback Register
	console.log('This is set Immediate');
})


setTimeout(()=>{
	add(3,4);
	console.log('This is set setTimeout');
})

process.nextTick(()=>{
	add(5,8);
	console.log('This is Process nextTick');
})



console.log('program has ended');




