import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "dcadscasw",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: "54500",
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined, // date or amount
    endDate: undefined,
  },
};
