const express = require('express')
const app = express()
const port = 3000


const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 300 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 500 },
      },
    }
  ]


  const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //

    //Few Cases which need to be consider
    /**
     * 1. what if there is only one month Entry
     * 2. What if there is only two month Entry
     * 3. What if Amount is Zero from start (No Increment/decrement)
     * 
     */

    
    let result;

    const diffArray = new Set();

    const len = accountBalanceHistory.length;

    
    for(let i = 0; i < len; i++){
    
        if(accountBalanceHistory[i] && accountBalanceHistory[i+1]){
        const Diff = Math.abs(accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i+1].account.balance.amount); 
        diffArray.add(Diff);
        }

    }

    diffArray.size == 1 ? result = false : result = true;

    return result ? "A" : "B";
  };

  console.log(accountTypeChecker(accountBalanceHistory));
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})