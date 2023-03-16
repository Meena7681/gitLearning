const fs = require("fs");
//async code
console.log("Before");
// fs.readFile("f1.txt",function (err,data){
//          console.log(data);
// });
let promise = fs.promises.readFile("f1.txt");
console.log(promise);
// Fullfilled
promise.then(function (data){
  console.log("  "+data)
})
//rejected;
promise.catch(function(err){
	console.log(err);
})


//promise
console.log("After")