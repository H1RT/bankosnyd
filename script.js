const puppeteer = require('puppeteer');


async function scrapeValuesOneRow() {
    const browser = await puppeteer.launch( {headless : false});
    const page = await browser.newPage();
    await page.goto('https://magsapi.com/banko/');

    
    
    for(let id = 0; id<2; id++) {
        await page.waitForSelector('input[name=tekstboks]');
        await page.type('input[name=tekstboks]', `${id}`);
        await page.click('button[name="button"]');
        
        const data = await page.evaluate(/*ignore coverage */() => {
            const events = document.querySelectorAll('td');
            const array = [];
            
            for(i=0; i<9; i++) {
                array.push({
                    rowOne: events[i].innerText,
                    rowTwo: events[i+9].innerText,
                    rowThree: events[i+18].innerText
                })
            }
            return array
        })
    
    
    
    console.log(data);
    
}};

async function scrapeValuesTwoRows() {
    const browser = await puppeteer.launch( {headless : false});
    const page = await browser.newPage();
    await page.goto('https://magsapi.com/banko/');

    
    
    for(let id = 0; id<2; id++) {

        await page.waitForSelector('input[name=tekstboks]');
        await page.type('input[name=tekstboks]', `${id}`);
        await page.click('button[name="button"]');
    
        const data = await page.evaluate(/*ignore coverage */() => {
            const events = document.querySelectorAll('td');
            const array = [];

            for(i=0; i<9; i++) {
                array.push({
                    rowOne: events[i].innerText,
                    rowTwo: events[i+9].innerText,
                    rowThree: events[i+18].innerText
                })
            }
            return array
        })

    console.log(data);
    
}};

async function scrapeValuesFullPlate() {
    const browser = await puppeteer.launch( {headless : false});
    const page = await browser.newPage();
    await page.goto('https://magsapi.com/banko/');
    
    for(let id = 0; id<2; id++) {
        await page.waitForSelector('input[name=tekstboks]');
        await page.type('input[name=tekstboks]', `${id}`);
        await page.click('button[name="button"]');
        
        const data = await page.evaluate(/*ignore coverage */() => {
            const events = document.querySelectorAll('td');
            const array = [];
            
            for(i=0; i<27; i++) {
                if(events[i].innerText != '') {
                    array.push(events[i].innerText)
                }
            }
            array.sort(function(a,b) {return a-b});
            return array
        })
        
    console.log(data);
    
}};
scrapeValuesFullPlate();

let inArray = [];
function addPulledValues() {
    let inputNumber = document.getElementById("called-number").value;
    inArray.push(inputNumber)
    console.log(inArray);
}

/*const button = document.getElementById("generate");
button.addEventListener("click", addPulledValues);*/
