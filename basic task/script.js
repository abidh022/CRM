//Maximun Number
function findMax(){
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    const max = Math.max(...array);
    document.getElementById('result').innerText='Maximum Number :' +max;
}

//Check Even or Odd

function checkNumber(){
    const number = Number(document.getElementById('checkNumber').value);
    const result = (number %2==0) ? 'Even' : 'Odd' ;
    document.getElementById('checkNumberResult').innerText='number is :'+ result;
}

//Area of circle 

function findArea(){
    const number = Number(document.getElementById('findarea').value);
    const area = Math.PI * Math.pow(number, 2);
    document.getElementById('areaResult').innerText= 'Area of circle is : '+area;
}

//Multiplication table

function mulTable(){
    const number = Number(document.getElementById('table').value);
    let tableResult =  `<h2> Multi table for ${number}</h2>`;
    for (let i=1;i<=10;i++){
        tableResult += `<p>${number} x ${i} = ${number*i}</p>`
    }
    document.getElementById('tableResult').innerHTML=tableResult;
}

//simple interest 

function simpleInterest(){
    const principal = Number(document.getElementById('principal').value);
    const rate = Number(document.getElementById('rate').value);
    const time = Number(document.getElementById('time').value);
    const result = (principal * rate * time) / 100;
    document.getElementById('simResult').innerText='result is : '+result;
}

//check leap year

function checkLeap(){
    const year = Number(document.getElementById('checkleap').value);
    let result;
    if((year % 4 === 0 && year %100 !==0) || (year %400===0)){
        result = `${year} is a leap year.`;
    }
        else{
            result = `${year} is not a leap year.`;
    }
    document.getElementById('leapResult').innerText=result;
}

// factorial 

function checkFactorial(){
    const number = Number(document.getElementById('factorial').value);
    let result = 1;

    for (let i=1;i<=number;i++){
        result*=i;
    }
    document.getElementById('factorialResult').innerText=`Factorial of ${number} is: ${result}`;
}

// Palindrome 

function checkPalindrome(){
    const string = document.getElementById('palindrome').value;
    const rev = string.split('').reverse().join('');

    if (string === rev){
        document.getElementById('palindromeResult').innerText = `"${string}" is a palindrome.`;
    }else{
        document.getElementById('palindromeResult').innerText = `"${string}" is a palindrome.`;
    }
}

//convert temprature

function convertTemp(){
    const temperature = Number(document.getElementById('temp').value);
    const unit = document.getElementById('unit').value;
    let celsius,fahrenheit,kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === "kelvin") {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }
    document.getElementById('tempResult').innerHTML = `
        <p>${temperature} ${unit === "celsius" ? "°C" : unit === "fahrenheit" ? "°F" : "K"} is:</p>
        <ul>
            <li>${celsius.toFixed(2)} °C</li>
            <li>${fahrenheit.toFixed(2)} °F</li>
            <li>${kelvin.toFixed(2)} K</li>
        </ul>
    `;
}

//fiizzbuzz

function fizzBuzz() {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += 'FizzBuzz<br>';
        } else if (i % 3 == 0) {
            result += 'Fizz<br>';
        } else if (i % 5 == 0) {
            result += 'Buzz<br>';
        } else {
            result += i + '<br>';
        }
    }
    document.getElementById('fizzresult').innerHTML = result;
}

//prime 
function checkPrime() {
    const number = parseInt(document.getElementById('numberInput').value);
    let isPrime = true;
    const resultElement = document.getElementById('primeResult');

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    resultElement.innerText = isPrime ? 
        `${number} is a prime number.` : 
        `${number} is not a prime number.`;
}

// calulate rectangle

function calculateRectangle(){
    const length = parseInt(document.getElementById('len').value);
    const width = parseInt(document.getElementById('wid').value);
    const area = length*width;
    const perimeter = 2 *(length+width);

    document.getElementById('areaResult').innerHTML= area;
    document.getElementById('perimeterResult').innerHTML=perimeter;
}

//anagram

function anagram(){
    const str1 = document.getElementById('str1').value.replace(/\s+/g, '').toLowerCase();
    const str2 = document.getElementById('str2').value.replace(/\s+/g, '').toLowerCase();
    const s1 = str1.split('').sort().join('');
    const s2 = str2.split('').sort().join('');
    if ( s1 === s2){
        document.getElementById('anagramResult').innerHTML=`<p>this is anagram text</p>`;
    }else{
        document.getElementById('anagramResult').innerHTML=`<p>this is not anagram</p>`;
    }
}

//fibonacci 

function fibonacci(){
     const n = parseInt(document.getElementById('fiboo').value);
     let fib=[]
     let a = 0, b = 1;
            for (let i = 0; i < n; i++) {
                fib.push(a);
                const next = a + b;
                a = b;
                b = next;
            }

            document.getElementById('fiboRes').innerText = `Fibonacci sequence: ${fib.join(', ')}`;
        
}       

//Reverse a String

function reversee(){
    const strn= document.getElementById('revInput').value;
    const rev= strn.split('').reverse().join('');
    document.getElementById('revRes').innerText='Reversed String :'+rev;
}

//Count Characters in a String

function charCount(){
    const char= document.getElementById('count').value;
    const charCount = char.length ;
    document.getElementById('charRes').innerText='Counted char are :'+charCount;

}

//binary search 

function binarySearch(){
    const number= document.getElementById('binaryarr').value;
    const searchkey = Number(document.getElementById('searchkey').value);
    const array = number.split(',').map(Number).sort((a, b) => a - b); 


    let left = 0;
    let right = array.length-1;
    let found=-1;

    while(left <= right)
    {
        const mid  = Math.floor((left+right)/2);

        if (array[mid]===searchkey)
            {
                found=mid;
                break;
            }else if(array[mid] < searchkey){
                left = mid + 1;
            }else{
                right = mid -1;
            }
    }
    if (found !== -1){
        document.getElementById('binaryRes').innerText=`Binary search element is :${found}`;
    }else{
        document.getElementById('binaryRes').innerText=`Binary search element is not found:${found}`;
    }
}

//Student 