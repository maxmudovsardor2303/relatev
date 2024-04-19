
// 1-masala


// function item(arr) {
//     let result = {};
//     arr.forEach((element) => {
//       result[element] = element.length;
//     });
//     return result;
//   }
  
//   const input = ["text", "world", "laptop"];
//   const output = item(input);
//   console.log(output);
  

// 2-masala 

// function minMaxWord(sentence) {
//     const words = sentence.split(' ');
//     let minWord = words[0];
//     let maxWord = words[0];
//     words.forEach((word) => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });
//     return { minWord: minWord, maxWord: maxWord };
//   }
//   const input = "Men dasturlash kursida o’qiyman";
//   const output = minMaxWord(input);
//   console.log(output);


// 3-masala 

// function getLevel(n) {
//     const result = [];
//     let item = 2;
  
//     for (let i = 0; i < n; i++) {
//       result.push(Math.pow(item, i));
//     }
  
//     return result;
//   }
  
//   console.log(getLevel(4)); // Output: [2, 4, 8, 16]
//   console.log(getLevel(5)); // Output: [2, 4, 8, 16, 32]
  

// 4-masala 

// function item(sentence) {
//     const words = sentence.split(' ');
//     let shortest = words[0];
  
//     words.forEach((word) => {
//       if (word.length < shortest.length) {
//         shortest = word;
//       }
//     });
  
//     return shortest;
//   }
  
//   console.log(item("Men dasturlash kursida o'qiyman")); 
  

// 5-masala 

// function multiplyValues(obj, n) {
//     const item = {};
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         item[key] = obj[key] * n;
//       }
//     }
//     return item;
//   }
//   const obj = { a: 2, b: 3, c: 4 };
//   const n = 3;
//   const result = multiplyValues(obj, n);
//   console.log(result); 
  

// 6-masala 


// function countNumbers(str) {
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(parseInt(str[i]))) {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   const input = "Bu 2024 yil. 2025-da yangi boshlanish!";
//   const numberOfNumbers = countNumbers(input);
//   console.log("Sonlar soni: ", numberOfNumbers);
  


// 7-masala 


// const item = (...numbers) => {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const box = Array.from(String(sum), Number);
//     return box;
// };
// const numbers = [1, 22, 3];
// const result = item(...numbers);
// console.log(result);




// 8-masala 


// const item = (text) => {
//     const words = text.split(' ');
//     let count = 0;
//     words.forEach(word => {
//         if (word.includes('a') || word.includes('A')) {
//             count++;
//         }
//     });
//     return count;
// };
// const text = "salom dunyo";
// const result = item(text);
// console.log(result); 




// 9-masala 

// const item = (n, k) => {
//     let result = 1;
//     for (let i = 0; i < k; i++) {
//         result *= n;
//     }
//     return result;
// };
// const n = 8;
// const k = 3;
// const result = item(n, k);
// console.log(result); 
