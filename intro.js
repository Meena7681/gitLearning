const puppeteer = require("puppeteer");
let page;

console.log("Before");
const browserOpenpromise = puppeteer.launch({
	headleess: false,
	slowMo: true,
	defaultViewport: null,
	args: ["--start-maximixed"]
});
browserOpenpromise  
	.then(function(browser){
             // currently opened tabs
             const pageArrpromise = browser.pages();
             return pageArrpromise;

	// console.log("Browser apened");
	}).then(function(browserPages){
       page = browserPages[0];
       let gotoPromise =  page.goto("https://www.google.com/");
       return gotoPromise;
	}).then(function (){
		// waiting for the element to appear on the page
	  let elementWaitPromise = page.waitForSelector("intput[type='text']",{visible: true});
		return  elementWaitPromise;
	})
	.then(function(){
	    // console.log("Reached google home page");
	    // type anyelement on that page  -> Selector
	  let kesyWillBeSendPromise = page.type("intput[type='text']","pepcoding");
	   return kesyWillBeSendPromise;
	}).then(function(){
		 // page.Keyboard to type special characters 
		let enterWillBePressed = page.keyboard.press("Enter");
	    return kesyWillBeSendPromise;
	}).then(function (){
		let elementWaitpromise = page.waitForSelector("h3.LC201b.DKV0Md", {visible : true});
        return elementWaitpromise;
	}).then(function (){
		// mouse
		let kesyWillBeSendPromise = page.click("h3.LC201b.DKV0Md");
		return kesyWillBeSendPromise;
	})
	.catch(function(){
		console.log(err);
	})

console.log("After");

