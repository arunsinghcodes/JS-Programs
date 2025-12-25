const data = {
  users: [
    {
      id: 1,
      name: "Arun",
      orders: [
        {
          id: 101,
          amount: 200,
        },
        {
          id: 102,
          amount: 300,
        },
      ],
    },
    {
      id: 2,
      name: "Rahul",
      orders: [
        {
          id: 103,
          amount: 150,
        },
        {
          id: 104,
          amount: 250,
        },
        {
          id: 105,
          amount: 100,
        },
      ],
    },
  ],
};

/*

Output: 

{
    Arun: 300,
    Rahul: 500
}

*/

// How interviewer Expects you to Think
/*

- Can you naviagate nested objects and Arrays
- Can you use loops/reduce
- Can you avoid mutation
- Do you understand data transformation

Key Thinking steps:

1. Loop over user
2. For each user -> calculate total order amoutn
3. Store result in a new object

*/

function calculateTotalOrders(data) {
  return data.users.reduce((result, user) => {
    totalAmount = user.orders.reduce((sum, order) => sum + order.amount, 0);
    result[user.name] = totalAmount;

    return result;
  }, {});
}

console.log(calculateTotalOrders(data));
