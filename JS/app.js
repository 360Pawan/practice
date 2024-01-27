// function pattern(n, count) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";

//     for (let j = n; j >= i; j--) {
//       output += count-- + " ";
//     }

//     console.log(output);
//   }
// }

// pattern(5, 19);

const mySym = Symbol("Key");

const obj = {
  age: 10,
  isLoggedIn: false,
  "user email": "email@email.com",
  [mySym]: "Symbol",
  fullName: {
    firstName: "Pawan",
    lastName: "Kumar",
  },
  address: {
    mailAddress: {
      city: "Solan",
      pin: 123,
    },
    secondAddress: { city: "Kasauli", data: { pin: 567 } },
  },
};

// function flattenObject(obj) {
//   let result = {};

//   for (let i in obj) {
//     if (typeof obj[i] === "object") {
//       const temp = flattenObject(obj[i]);

//       for (let j in temp) {
//         result[`${i}.${j}`] = temp[j];
//       }
//     } else {
//       result[i] = obj[i];
//     }
//   }

//   return result;
// }

// const result = flattenObject(obj);
// console.log(result);

// function currying(a) {
//   return function (b) {
//     if (b) {
//       return currying(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(currying(1)(2)(5)(55)());

// function reverseString(str) {
//   let revered = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     revered += str[i];
//   }

//   console.log(revered);
// }

// reverseString("Pawan");

// function longestSentence(sentence) {
//   let longest = "";

//   sentence.split(" ").reduce((acc, curr) => {
//     return curr.length > acc.length ? (longest = curr) : (longest = acc);
//   }, "");

//   console.log(longest);
// }

// longestSentence("We are a good citizens.");

// const deeplyNestedArrays = [
//   [1, [2, [3, 4, [5, 6]], 7]],
//   [8, [9, 10], 11],
//   [12, [13, 14]],
// ];

// function flattenArray(arr) {
// let result = [];
// function recursive(arr) {
//   for (let i = 0; i < arr?.length; i++) {
//     if (Array.isArray(arr[i])) {
//       recursive(arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
// }
// recursive(arr);
// console.log(result);

//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       acc.push(...flattenArray(curr));
//     } else {
//       acc.push(curr);
//     }

//     return acc;
//   }, []);
// }

// const result = flattenArray(deeplyNestedArrays);
// console.log(result);

// {
//   totalIncome: 280,
//   totalExpenses: 200,
//   categoryCount: {
//     groceries: 1,
//     entertainment: 1,
//     salary: 1,
//     transportation: 1,
//     freelance: 1,
//   }
// }

// const transactions = [
//   { id: 1, amount: 120, type: "expense", category: "groceries" },
//   { id: 2, amount: 50, type: "expense", category: "entertainment" },
//   { id: 3, amount: 200, type: "income", category: "salary" },
//   { id: 3, amount: 200, type: "income", category: "salary" },
//   { id: 3, amount: 200, type: "income", category: "salary" },
//   { id: 3, amount: 200, type: "income", category: "salary" },
//   { id: 4, amount: 30, type: "expense", category: "transportation" },
//   { id: 5, amount: 80, type: "income", category: "freelance" },
//   { id: 6, amount: 80, type: "income", category: "salary" },
//   { id: 7, amount: 80, type: "income", category: "freelance" },
// ];

// const result = transactions.reduce(
//   (acc, curr) => {
//     curr.type === "expense"
//       ? (acc.totalExpenses += curr.amount)
//       : curr.type === "income"
//       ? (acc.totalIncome += curr.amount)
//       : 0;

//     acc.categoryCount = {
//       ...acc.categoryCount,
//       [curr.category]: (acc.categoryCount[curr.category] || 0) + 1,
//     };

//     return acc;
//   },
//   { totalExpenses: 0, totalIncome: 0, categoryCount: {} }
// );

// console.log(result);

// const string1 = "Pawan";
// const string2 = "12345";

// function mergeString(str1, str2) {
//   let result = "";

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = i; j <= i; j++) {
//       result += `${str1[i]}${str2[j]}`;
//     }
//   }

//   return result;
// }

// const result = mergeString(string1, string2);

// console.log(result);

// function findFirstDuplicate(nums) {
//   let record = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (record.some((el) => el === nums[i])) {
//       record.push(nums[i]);

//       return nums[i];
//     } else {
//       record.push(nums[i]);
//     }
//   }

//   return null;
// }

// const arr1 = [2, 3, 4, 5, 3, 7, 8];
// console.log(findFirstDuplicate(arr1));

// const arr2 = [1, 2, 1, 3, 4, 5];
// console.log(findFirstDuplicate(arr2));

// function maxProfit(prices) {
//   let profit = {
//     day: 0,
//     amount: 0,
//   };

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i + 1] - prices[i] > profit.amount) {
//       profit.day = i + 1;
//       profit.amount = prices[i + 1] - prices[i];
//     }
//   }

//   return profit;
// }

// const stockPrices1 = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(stockPrices1));

// const stockPrices2 = [7, 6, 4, 3, 1];
// console.log(maxProfit(stockPrices2));

// const nestedArray = [1, [2, [3, 4], 5], 6];

// function flattenArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.push(...flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(flattenArray(nestedArray));

const transactions = [
  { id: 1, amount: 50, currency: "USD", date: "2024-01-01" },
  { id: 2, amount: 30, currency: "EUR", date: "2024-01-02" },
  { id: 3, amount: 70, currency: "EUR", date: "2024-01-02" },
  { id: 4, amount: 30, currency: "GBP", date: "2024-01-02" },
  { id: 5, amount: 20, currency: "USD", date: "2024-01-03" },
  { id: 6, amount: 40, currency: "GBP", date: "2024-01-04" },
  { id: 7, amount: 10, currency: "GBP", date: "2024-01-04" },
  { id: 8, amount: 50, currency: "EUR", date: "2024-01-04" },
  { id: 9, amount: 40, currency: "INR", date: "2024-01-04" },
];

function transformData(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result = {
      ...result,
      [arr[i].currency]: [arr[i], ...(result[arr[i].currency] || [])],
    };
  }

  console.log(result);
}

transformData(transactions);
