import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = (props) => (
  <>
    <h2>Add Expense</h2>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </>
);

export default connect()(AddExpensePage);
