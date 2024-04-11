#! /usr/bin/env node 

import inquirer from "inquirer"


const currency: any = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AUD: 1.53,
    JPY: 151.791
};


let user_answer = await inquirer.prompt(
    [
        {
          name:'from',
          message:"Enter from currency",
          type:'list',     //base currency
          choices: ["USD", "EUR", "GBP", "INR", "PKR", "AUD", "JPY"]
        },
        {
            name:'to',
            message:"Enter to currency",
            type:'list',     //base currency
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "AUD", "JPY"]
        },
        {
            name:"amount",
            message:"Enter your amount",
            type:"number"
        }
    ]
);
// Using Dynamic approach
let fromAmount = currency[user_answer.from] // exchange rate
let toAmount = currency[user_answer.to] // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount //USD base currency   // 4
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));
//                15000 / 
