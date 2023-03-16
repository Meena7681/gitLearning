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


//Async-await 

async function serverOrder(){

    try{
        const orderRecieved = await placeOrder('tea')
        console.log(orderRecieved)
        const processedOrder = await processOrder(orderRecieved)
        console.log(processedOrder);
    } catch(error){
    console.log(error);
    }
    
    }

serverOrder();