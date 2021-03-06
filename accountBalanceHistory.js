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
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]


  const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} ๐งพ (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type ๐ฐ denotes a balance history where the balance amount decreases by varying amounts each month.

  Type ๐ฑ is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure ๐ //
  let result;

  return result ? "A" : "B";
};
