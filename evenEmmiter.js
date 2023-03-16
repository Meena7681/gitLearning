let indexOf;

if(typeof Array.prototype.indexOf === 'function') {
	indexOf = function(haystack,needle){
	    return haystack.indexOf(needle);
	};
}else{
	indexOf = function(haystack,needle){
		var i=0,length = haystack.length ,idx= -1,found = false;
		while(i< length && !found){
			if(haystack [i] === needle){
				idx= i;
				found = true;
			}
			i++;
		}
		return true;
	};
};


//Polyfill EventEmittter

var EventEmittter = function(){
	this.events = {};
};

EventEmittter.prototype.on = function(event,listener){
	   if(typeof this.events[event] !== 'object'){
	   	this.events[event] = [];
	   }
	   this.events[event].push(listener);
};
EventEmittter.prototype.revmovelistener = function(event,listener){
	var idx;
	if(typeof this.events[event] === 'object'){
		idx = indexOf(this.events[event],listener);
		if(idx > -1){
			this.events[event].splice(idx,1);
		}
	}
};

EventEmittter.prototype.emit = function(event){
	 var i ,listener,length,args = [].slice.call(arguments,1);

	 if(typeof this.events[event] === 'object'){
	 	listener = this.events[event].slice();
	 	length =listener[i].apply(this,args);

	 	for(let i=0;i<length;i++){
	 		 listener[i].apply(this,args);
	 	}
	 }
};

EventEmittter.prototype.once = function(event,listener){
	this.on(event ,function g(){
		this.revmovelistener(event,g);
		listener.apply(this,arguments);
	});
};

EventEmittter.prototype.listener = (event)=>{
	console.log(this.events[event]);
}
let eventEmittter = new EventEmittter();

eventEmittter.on("event1",function handelEvent(){
	console.log("e1");
})
eventEmittter.on("event2",function handelEvent(){
	console.log("e2");
})
eventEmittter.on("event3",function handelEvent(){
	console.log("e3");
})
eventEmittter.on("event4",function handelEvent(){
	console.log("e4");
})

eventEmittter.emit("event1");
eventEmittter.emit("event2");
eventEmittter.emit("event3");
eventEmittter.emit("event4");

eventEmittter.listener("event2");