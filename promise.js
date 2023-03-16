function placeOrder(drink){
    return new Promise(function(resolve, reject){
    	if(drink ==='coffee'){
    		resolve('Order Placed')
    	}
    	else{
    		reject('Sorry , we only Serve coffee')
    	}
    })
}

function processOrder(order){
	return new Promise(function(resolve){
		console.log('Order is being processed');
		resolve(`coffee Served for the ${order}`)
	})
}


// Promisess

placeOrder('Tea').then(function(orderFromcustomer){
	console.log('request Recieved')
	let orderIsProcessed = processOrder(orderFromcustomer);
	return orderIsProcessed;
}).then(function(orderIsProcessed){
	console.log(orderIsProcessed)
}).catch(function(err){
	console.log(err);
})
