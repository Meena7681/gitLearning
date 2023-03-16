const puppeteer = require("puppeteer");
const loginLink = 'https://hackerrank.com/auth/login';
const codeObj   = require('./codes');
const email     = 'xamot46817@stvbz.com';
const password  ='222525';



(async  function(){
    try{
        let browserOpenInstance =await  puppeteer.launch({
	     headless : false,
	     args : ['--start--maximized'],
	     defaultViewport: null
       })
    

    let newTab = await  browserOpenInstance.newPage()
    let newTab = await newTab.goto(loginLink)
    await newTab.type("input[id='input-1']",email , {delay: 50})
    await newTab.type("input[type='password']",password , {delay: 50})
    await newTab.click('button[data-analytics="LoginPassword"]')
    await waitAndClick('.topic-card a[data-attri="algorithms"]',newTab)
    await waitAndClick('input[value="warmup"]',newTab)
    let allChallengesPromise =  await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay : 50})
    // console.log('total question',allChallengesPromise.length);
    } catch(error){
        console.log(error);
    }
})()

async function waitAndClick(selector , cPage){
      await cPage.waitForSelector(selector)
      let selectorClicked = cPage.click(selector)
      return selectorClicked
}








 // let page;


// browserOpen.then(function(browserObj){
// 	let browserOpenPromise = browserObj.newPage();
// 	return browserOpenPromise;
// }).then(function(newTab){
// 	page = newTab;
// 	let hackerRankOpenPromise = newTab.goto(loginLink);
// 	return hackerRankOpenPromise;
// }).then(function(){
// 	let  emailIsEntered = page.type("input[id='input-1']",email , {delay: 50});
// 	return emailIsEntered;
// }).then(function(){
// 	let  passwordIsEntered = page.type("input[type='password']",password , {delay: 50});
// 	return passwordIsEntered;
// }).then(function(){
// 	 let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]');
//      return loginButtonClicked;
// }).then(function(){
// 	let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attri="algorithms"]',page)
// 	return clickOnAlgoPromise;
// }).then(function(){
// 	let getTowarmUp = waitAndClick('input[value="warmup"]',page)
// 	return getTowarmUp;
// }).then(function(){
// 	let waitFor3seconds = page.waitFor(3000)
// 	return waitFor3seconds;
// }).then(function(){
// 	let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay : 50})
// 	return allChallengesPromise;
// }).then(function(questionArr){
//     console.log("number of question",questionArr.length);
//     let questionWillBeSolved = questionSolver(psge,questionArr[0],codeObj.answers[0])
//     return questionWillBeSolved;
// })


 
// function waitAndClick(selector , cPage){
//       return new Promise(function(resolve,reject){
//       	let waitforModelPromise = cPage.waitForSelector(selector)
//       	    waitforModelPromise.then(function(){
//       		let clickModal = cPage.click(selector)
//       		return clickModal;
//       	}).then(function(){
//       		 resolve()
//       	}).catch(function(err){
//       		reject();
//       	})
//       })
// }

// function questionSolver(page , question , answer){
// 	 return new Promise(function(resolve,reject){
// 	 	let questionWillBeClicked = question.click()
// 	    questionWillBeClicked.then(function(){
//               let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page)
//    	          return EditorInFocusPromise;
//         }).then(function(){
//         	return waitAndClick('.checkbox-input',page)
//         }).then(function{
//         	 return page.waitForSelector('textarea.custominput',page);
//         }).then(function(){
//            return page.type('textarea.custominput',answer,{delay : 10})
//         }).then(function(){
//         	let ctrlIsPressed = page.keyboard.down('Control')
//         	return ctrlIsPressed
//         }).then(function(){
//         	let AisPressed = page.keyboard.press('A',{delay: 100})
//         	return AisPressed
//         }).then(function(){
//         	let XisPressed = page.keyboard.press('X',{delay: 100})
//         	return XisPressed
//         }).then(function(){
//         	let ctrlIsUnPressed = page.keyboard.down('Control')
//         	return ctrlIsUnPressed
//         }).then(function(){
//         	let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page)
//         	return mainEditorInFocus
//         }).then(function(){
//         	let ctrlIsPressed = page.keyboard.down('Control')
//         	return ctrlIsPressed
//         }).then(function(){
//         	let AisPressed = page.keyboard.press('A',{delay: 100})
//         	return AisPressed
//         }).then(function(){
//         	let VisPressed = page.keyboard.press('V',{delay: 100})
//         	return VisPressed
//         }).then(function(){
//         	let ctrlIsPressed = page.keyboard.up('Control')
//         	return ctrlIsPressed
//         }).then(function(){
//         	return page.click('.hr-monaco__run-code',{delay:50})
//         }).then(function(){
//         	resolve()
//         }).catch(function(err){
//         	reject();
//         })
//      })
// }